<template lang="html">
    <div class="page">
        <headers textname="首页"></headers>
        <div class="main hasUpDown">
            <div class="wrap pb10">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-list swiper-slide" v-for="item in bannerlist">
                            <img :src="item.img" alt="" />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="product-wrap">
                    <div class="product-block" v-for="item in indexshop">
                        <div class="top">{{item.category.msg}}</div>
                        <div class="content clear bgwhite">
                            <div class="p-list" v-for="message in item.category.product">
                                <div class="pic" @click="goDetail(message.CategoryId)">
                                    <img :src="message.GoodsImage" alt="" />
                                </div>
                                <div class="info">
                                    <div class="name">{{message.GoodsName}}</div>
                                    <div class="msg">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
import Headers from '../base/Header.vue';
import Footers from '../base/Footer.vue';
import Swiper from '../../../static/js/swiper.min'
export default {
    name: 'index',
    data() {
        return {
            bannerlist: [],
            indexshop: []
        }
    },
    components: {
        Headers,
        Footers
    },
    mounted() {
        this.getBannerList();
        this.getIndexShop();
        setTimeout(() => {
            const swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                paginationClickable: true,
                autoplay: 1500
            });
        },300)
    },
    methods: {
        // 获取轮播图列表
        getBannerList() {
            const that = this;
            this.$http.get('/api/bannerdata').then(function(resp) {
                // console.log(resp.body.data)
                this.bannerlist = resp.body.data;
            })
        },
        getIndexShop() {
            const that = this;
            this.$http.get('/api/indexshop').then(function(resp) {
                this.indexshop = resp.body.data;
                console.log(this.indexshop);
            })
        },
        goDetail(id) {
            console.log(id)
            console.log(this.$router.push)
            this.$router.push({
                path: '/detail',
                query: {
                    id: id
                }
            })
        }
    }
}
</script>

<style lang="css">
    @import '../../../static/css/swiper.min.css';
    .swiper-container {
        background: #ddd;
    }
    .main {
    }
    .swiper-list img {
        width: 100%;
    }
    .bgwhite { background: #fff; }
    .product-block {
        width: 100%;
        margin-top: 10px;
    }
    .product-block .top {
        height: 1rem;
        line-height: 1.2rem;
        text-align: left;
        padding: 0 3%;
        position: relative;
        font-size: .4rem;
    }
    .product-block .top:before {
        content: '';
        display: inline-block;
        position: absolute;
        height: .4rem;
        width: 3px;
        left: 0;
        top: .4rem;
        color: #2c3e50;
        background: #2c3e50;
    }
    .p-list {
        width: 50%;
        float: left;
        padding: 3%;
        border-left: 1px solid #eee;
    }
    .product-block .p-list:nth-child(odd) { border-left: 0px; }
    .p-list .info {
        text-align: center;
        padding-top: 10px;
    }
    .p-list .pic, .p-list .pic img {
        width: 100%;
    }
    .p-list .info .name {
        font-size: .4rem;
        line-height: .7rem;
        color: #000;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>
