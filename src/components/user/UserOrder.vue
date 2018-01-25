<template lang="html">
    <div class="page">
        <header-ctr>
            <h4 slot="headerctr">我的订单</h4>
        </header-ctr>
        <div class="main">
            <div class="userOrder-tooltop">
                <span class="item active" v-for="(item,index) in orderlist" v-if="index == default_show" v-on:click="getCategory(index)">{{item.value}}</span>
                <span class="item" v-else v-on:click="getCategory(index)">{{item.value}}</span>
            </div>
            <div class="userOrder-content">
                <div class="order-block" v-for="order in current_list.data">
                    <div class="otop"><span>订单号：319280174013</span><span class="fr fs12 state">{{order.state}}</span></div>
                    <div class="ocontent">
                        <div class="order-item" v-for="(product, idx) in order.goods">
                            <div class="pic">
                                <img :src="product.goodsImage" alt="" />
                            </div>
                            <div class="info">
                                <div class="name">{{product.goodsName}}</div>
                                <div class="price c-fc1"><sub>￥</sub>{{product.goodsPrice}}</div>
                                <div class="spec">{{product.spec}}{{idx+1}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="obottom">合计：<span class="c-fc1 fs16"><sub>￥</sub>{{order.totalPrice}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCtr from '../base/HeaderCtr.vue';
export default {
    name: 'userOrder',
    data() {
        return {
            default_show: 0,
            orderlist: this.$store.state.orderList,
            current_list: {}
        }
    },
    components: {
        HeaderCtr,
    },
    mounted() {
        this.current_list = this.orderlist[this.default_show];
        // console.log(this.orderlist[this.default_show])
        console.log(this.current_list)
    },
    methods: {
        getCategory(idx) {
            this.current_list = this.orderlist[idx];
            this.default_show = idx;
        }
    }
}
</script>

<style lang="css">
    .userOrder-tooltop {
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
    .userOrder-tooltop .item {
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid transparent;
        float: left;
        width: 20%;
        text-align: center;
    }
    .userOrder-tooltop .item.active {
        color: #3180E5;
        border-bottom-color: #3180E5;
    }
    /* order-block为每一个订单 */
    .order-block {
        display: block;
        width: 100%;
        background: #fff;
        margin-top: 10px;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }
    .order-block .otop {
        /* border-bottom: 1px solid #ddd; */
        line-height: 1rem;
        padding: 0 3%;
        font-size: .4rem;
    }
    .order-block .state {
        color: #666;
    }
    .order-block .ocontent {
        /* padding: 2% 0; */
        background: #f4f4f4;
    }
    .order-block .obottom {
        /* border-top: 1px solid #ddd; */
        line-height: 1.2rem;
        padding: 0 3%;
        text-align: right;
    }
    /* order-item为每个订单的商品 */
    .order-item {
        background: #f4f4f4;
        border-top: 5px solid #fff;
        font-size: .3rem;
        color: #999;
        padding: 2%;
    }
    .order-block .order-item:first-child {
        border-top: 0px;
    }
    .order-item .pic {
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        vertical-align: top;
    }
    .order-item .pic img {
        width: 100%;
        height: 100%;
    }
    .order-item .info {
        display: inline-block;
        width: 6.8rem;
        float: right;
    }
    .order-item .info .name {
        font-size: .4rem;
        line-height: .6rem;
        max-height: 1.2rem;
        color: #000;
    }
    .order-item .info .price {
        color: #ff0036;
        font-size: .5rem;
    }
</style>
