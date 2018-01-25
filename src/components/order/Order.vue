<template lang="html">
    <div class="page">
        <header-ctr>
            <h4 slot="headerctr">收获地址</h4>
        </header-ctr>
        <div class="main order-main">
            <div class="order-wrap">
                <div class="address-block" v-on:click="isCheckAddress = !isCheckAddress">
                    <div class="adricon"></div>
                    <div class="adr">{{address.text}}</div>
                    <div class="info">
                        <span>{{address.user_name}}</span>
                        <span class="fr">{{address.phone}}</span>
                    </div>
                </div>
                <div class="goods-container">
                    <div class="orderGoods-block" v-for="item in cartlist" v-if="item.isCheck">
                        <div class="pic"><img :src="item.img" alt="" /></div>
                        <div class="info">
                            <div class="pname">{{item.name}}</div>
                            <div class="price"><sub>￥</sub>{{item.price}}</div>
                            <div class="spec">{{item.spec}} x{{item.num}}</div>
                        </div>
                    </div>
                </div>
                <div class="total-block">
                    <div class="item tr">
                        <span class="txt">共计<span class="c-fc1">{{product_num}}</span>件商品</span>
                    </div>
                    <div class="item">
                        <span>商品总价格</span>
                        <span class="fr c-fc1 pr"><sub>￥</sub>{{productPrice}}</span>
                    </div>
                    <div class="item">
                        <span>运费</span>
                        <span class="fr c-fc1 pr">+<sub>￥</sub>{{freight}}</span>
                    </div>
                    <div class="item">
                        <span>合计</span>
                        <span class="fr c-fc1 pr"><sub>￥</sub>{{totalPrice}}</span>
                    </div>
                </div>
            </div>
            <div class="order-footer">
                <div class="fr">
                    <span class="fl">实付款：
                    <span class="c-fc1 fsp"><i class="minfs">￥</i>{{totalPrice}}</span>
                    </span>
                    <span class="shop-btn red fr">提交订单</span>
                </div>
            </div>
            <transition name="fade">
                <div class="shade" v-if="isCheckAddress"></div>
            </transition>
            <transition name="slideUp">
                <div class="choose-address-wrap" v-if="isCheckAddress">
                    <div class="choose-top">
                        <span>请选择地址</span>
                        <span class="close" v-on:click="isCheckAddress = !isCheckAddress">X</span>
                    </div>
                    <div class="choose-container">
                        <div class="choose-item active" v-on:click="checkAddress(item.id,index)" v-for="(item,index) in addressList" v-if="item.isDefault">
                            <div class="adr">{{item.text}}</div>
                            <div class="info">
                                <span>{{item.user_name}}</span>
                                <span>{{item.phone}}</span>
                            </div>
                            <div class="check"></div>
                        </div>
                        <div class="choose-item" v-on:click="checkAddress(item.id,index)" v-else>
                            <div class="adr">{{item.text}}</div>
                            <div class="info">
                                <span>{{item.user_name}}</span>
                                <span>{{item.phone}}</span>
                            </div>
                            <div class="check"></div>
                        </div>
                    </div>
                    <div class="addAddress-block" v-on:click="addAddress()">添加地址</div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import HeaderCtr from '../base/HeaderCtr.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'order',
    data() {
        return {
            product_num: 0,
            cartlist: this.$store.state.checkedProduct,
            address: '',
            addressList: this.$store.state.address,
            productPrice: 0,
            totalPrice: 0,
            freight: 10,
            isCheckAddress: false
        }
    },
    components: {
        HeaderCtr,
    },
    computed: {
        // ...mapMutations([
        //     'this.$store.state.cartlist'
        // ])
    },
    mounted() {
        var me = this;
        console.log(this.cartlist)
        // 收货地址
        console.log(this.addressList)
        this.addressList.forEach(function(value) {
            if(value.isDefault) {
                me.address = value;
            }
        })
        console.log(me.address)
        var productlist = this.$store.state.checkedProduct;
        // 商品价格
        productlist.forEach(function(value) {
            if(value.isCheck) {
                me.product_num++;
                me.productPrice += parseFloat(value.price)*parseFloat(value.num);
            }
        })
        // 价格小数点处理
        let price = me.productPrice.toString().split('.');
        let integer = price[0];
        // 是否有小数点
        if(price.length == 2) {
            let decimal = price[1];
            me.productPrice = parseFloat(integer + '.' + decimal.slice(0,2))
        } else {
            me.productPrice = parseFloat(integer)
        }
        // 总价格
        me.totalPrice = me.freight + me.productPrice;
    },
    methods: {
        // 选择地址
        checkAddress(id,idx) {
            this.setAddress(id);
            console.log(this.$store.state.address)
            this.address = this.$store.state.address[idx];
        },
        // 添加地址
        addAddress() {
            this.$router.push({
                path: '/address'
            })
        },
        ...mapMutations({
            setAddress: 'SET_ADDRESS'
        })
    },

}
</script>

<style lang="css">
.order-main {
    padding-bottom: 1.4rem;
}
.address-block {
    background: #fff;
    /* border-top: 1px solid #ddd; */
    border-top: 5px solid #FF0036;
    padding: 3%;
    font-size: .35rem;
    color: #000;
    position: relative;
    padding-left: 0.9rem;
}
.address-block .adricon {
    display: block;
    width: 0.8rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../../../static/images/icon/address.png);
    background-size: .5rem;
    background-repeat: no-repeat;
    background-position: center center;
}
.address-block .info {
    margin-top: 5px;
}
.goods-container {
    background: #fff;
    padding: 0 3%;
    margin-top: 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
.orderGoods-block {
    width: 100%;
    background: #fff;
    position: relative;
    padding: 3% 0;
    border-top: 1px solid #eee;
}
.orderGoods-block:first-child {border-top: 0px;}
.orderGoods-block:after {
    content: '';
    display: block;
    clear: both;
}
.orderGoods-block .pic {
    float: left;
    width: 2rem;
    height: 2rem;
}
.orderGoods-block .pic img {
    width: 100%;
    height: 100%;
}
.orderGoods-block .info {
    color: #999;
    width: 7.2rem;
    float: right;
}
.orderGoods-block .info .pname {
    font-size: .35rem;
    color: #000;
    word-break: break-all;
}
.orderGoods-block .info .spec {
    font-size: .3rem;
    font-weight: normal;
}
.orderGoods-block .info .price {
    color: #FF0036;
    font-weight: bold;
}
.total-block {
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}
.total-block .item {
    padding: 0 3%;
    line-height: .6rem;
    font-size: .35rem;
    color: #333;
}
.total-block .item .pr {
    font-size: .4rem;
}
.total-block .item .pr sub {
    bottom: 0;
    margin-right: -2px;
    font-size: .35rem;
}
.total-block .item .txt {
    /* font-size: .35rem; */
    color: #666;
}

.order-footer {
    height: 1.2rem;
    line-height: 1.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0px;
    z-index: 999;
    text-align: right;
    border-top: 1px solid #ddd;
    background: #fff;
    color: #333;
    font-size: .35rem;
}
.order-footer .minfs {
    font-size: .8em;
}
.shop-btn {
    vertical-align: top;
    width: 3.5rem;
    font-size: .4rem;
    line-height: 1.2rem;
}
.fsp {
    font-size: .45rem;
    padding-right: 10px;
}
.choose-address-wrap {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    height: 9rem;
    z-index: 999999;
    border-top: 2px solid #ff0036;
}
.choose-top {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ddd;
    padding: 0 3%;
    font-size: .37rem;
}
.choose-top .close {
    width: .8rem;
    height: .8rem;
    position: absolute;
    right: 0;
    top: .1rem;
    text-align: center;
    line-height: .8rem;
}
.choose-container {
    height: 7rem;
    overflow-y: auto;
}
.choose-item {
    border-top: 1px solid #eee;
    padding: 3%;
    font-size: .35rem;
    position: relative;
    padding-right: 30px;
}
.choose-item .info {
    margin-top: 5px;
}
.choose-item.active {
    color: #f72e2e;
}
.choose-item .check {
    width: 30px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.choose-item.active .check {
    background-image: url(../../../static/images/icon/adr-check.png);
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: center center;
}
.choose-container .choose-item:first-child {border-top: 0px;}

.addAddress-block {
    height: 1rem;
    background: #ff0036;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: .37rem;
}
</style>
