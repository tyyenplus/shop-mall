<template lang="html">
    <div class="page">
        <header-ctr>
            <h4 slot="headerctr">购物车</h4>
        </header-ctr>
        <div class="main cart-main">
            <div class="cart-wrap">
                <div class="cart-block" ref="cartbox">
                    <div class="cart-list" v-for="(item,idx) in cartdata">
                        <cart-list
                            v-bind:cart-message="item"
                            v-bind:totalCheckLength="totalCheckLength"
                            v-on:increment="checkTotal" ref="cartlist"
                            v-bind:index-num="idx">
                        </cart-list>
                    </div>
                </div>
            </div>
        </div>
        <div class="cartFooterInfo">
            <div class="left">
                <div class="c-check">
                    <input type="checkbox" ref="allCheckBtn" v-if="AllCheck" checked id="allcheck-cart" v-on:change="allCheckState" />
                    <input type="checkbox" ref="allCheckBtn" v-else id="allcheck-cart" v-on:change="allCheckState" />
                    <label for="allcheck-cart"></label>
                </div>
                已选<span class="c-fc1">{{totalCheckLength}}</span>件商品
                <span class="fr">合计：<span class="c-fc1 totalprice"><sub>￥</sub>{{totalPrice}}</span></span>
            </div>
            <div class="right">
                <span class="shop-btn red" v-on:click="onOrder">结算</span>
            </div>
        </div>
        <footers></footers>
        <!-- 调用弹框组件 -->
        <layer ref="layer"></layer>
    </div>
</template>

<script>
import HeaderCtr from '../base/HeaderCtr.vue'
import Footers from '../base/Footer.vue'
import CartList from './CartList.vue'
import Layer from '../base/Layer.vue'
import { mapGetters, mapMutations } from 'vuex';
// import store from '@/store/store'
export default {
    name: 'cart',
    data() {
        return {
            AllCheck: true,                                 // 是否是全选
            cartdata: this.$store.state.CartList,           // ajax获取到的购物车列表
            totalCheckLength: 0,                            // 总共选择了多少个商品
            counter: 0,                                     // 默认购物车列表总数
            totalPrice: 0,                                  // 总价格
        }
    },
    components: {
        Footers,
        CartList,
        HeaderCtr,
        Layer
    },
    mounted() {
        // console.log(this.$store.state)
        var me = this;
        // 计算购物车总数
        me.counter = me.totalCheckLength = me.cartdata.length;
        me.updataPirce();
    },
    beforeUpdate() {
        // console.log('./beforeUpdate')
        console.log("update")
        // console.log(this.cartdata)
    },
    methods: {
        ...mapMutations({
            updataCartList: 'UPDATE_CARTS',
            updataCheckProduct: 'UPDATE_CHECK_PRODUCT'
        }),
        checkTotal(tem) {
            if(tem == '0') {
                // 不选中一个商品
                this.totalCheckLength--;
                this.AllCheck = false;
            } else if(tem == '1') {
                // 选中一个商品
                this.totalCheckLength++;
            }
            // 判断是否全部选中
            if(this.counter == this.totalCheckLength) {
                this.AllCheck = true;
            } else {
                this.AllCheck = false;
            }
            // 重新赋值给cartdata，解决bug
            this.cartdata = this.$store.state.CartList;
            this.updataPirce();
        },
        // 全选状态
        allCheckState() {
            var cl = this.$refs.cartlist;
            console.log(this.AllCheck)
            if(this.AllCheck) {
                this.AllCheck = false;
                this.totalCheckLength = 0;
                for(var i = 0, len = cl.length; i < len; i++) {
                    // 通过$refs调用子组件方法cancelAllCheck()
                    cl[i].cancelAllCheck();
                }
                // 把购物车列表的isCheck属性设置为false，表示没有选择该商品
                this.$store.state.CartList.forEach(function(value) {
                    console.log(value)
                    value.isCheck = false;
                })
            } else {
                this.AllCheck = true;
                this.totalCheckLength = this.counter;
                for(var i = 0, len = cl.length; i < len; i++) {
                    // 通过$refs调用子组件方法inAllCheck()
                    cl[i].inAllCheck();
                }
                // 把购物车列表的isCheck属性设置为true，表示选择该商品
                this.$store.state.CartList.forEach(function(value) {
                    value.isCheck = true;
                })
            }
            // 调用更新价格方法
            this.updataPirce();
        },
        // 提交订单
        onOrder() {
            let me = this;
            let new_arr = [];
            this.$refs.layer.openLayer({html:'成功提交订单',time: 500,callback: function() {
                me.$store.state.CartList.forEach(function(value) {
                    // 把选中的商品赋值给checkedProduct这个状态
                    if(value.isCheck) {
                        new_arr.push(value)
                    }
                })
                me.updataCheckProduct(new_arr);
                me.$router.push({
                    path: '/order'
                })
            }});
        },
        // 更新总价格
        updataPirce() {
            var me = this;
            me.totalPrice = 0;
            let allCartList = this.$store.state.CartList;
            // 计算价格总数
            allCartList.forEach(function(value) {
                if(value.isCheck) {
                    me.totalPrice += parseFloat(value.price)*parseFloat(value.num)
                }
            })
            // 价格小数点处理
            let price = me.totalPrice.toString().split('.');
            let integer = price[0];
            // 是否有小数点
            if(price.length == 2) {
                let decimal = price[1];
                me.totalPrice = parseFloat(integer + '.' + decimal.slice(0,2))
            } else {
                me.totalPrice = parseFloat(integer) + '.00'
            }
        }
    }
}
</script>

<style lang="css">
.cart-main {
    padding-bottom: 2.5rem;
}
.cartFooterInfo {
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    width: 100%;
    left: 0;
    background: #48BCE9;
    background: #fff;
    /* color: #fff; */
    font-size: .35rem;
    padding: 0;
}
.cartFooterInfo .shop-btn {
    width: 3rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .4rem;
}
.cartFooterInfo .left {
    display: inline-block;
    padding-left: 3%;
    width: 6.9rem;
}
.cartFooterInfo .right {
    float: right;
}
.totalprice {
    font-size: .45rem;
}
</style>
