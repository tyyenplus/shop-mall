<template lang="html">
    <footer class="footer">
        <ul class="toolbar flexbox">
            <router-link :to="{ name: 'Index' }" class="flist flex-1" :class="{barActive:$route.path == '/'}" tag="li">
                <i class="icon index"></i>
                <p class="txt">首页</p>
            </router-link>
            <router-link :to="{ name: 'List' }" class="flist flex-1" :class="{barActive:$route.path == '/list'}" tag="li">
                <i class="icon list"></i>
                <p class="txt">列表</p>
            </router-link>
            <router-link :to="{ name: 'Cart' }" class="flist flex-1" :class="{barActive:$route.path == '/cart'}" tag="li">
                <i class="icon cart"></i>
                <p class="txt">购物车</p>
                <i class="corner">{{cartLen}}</i>
            </router-link>
            <router-link to="/user/index" class="flist flex-1" :class="{barActive:$route.path == '/user/index'}" tag="li">
                <i class="icon user"></i>
                <p class="txt">我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'footer',
    data() {
        return {
          cartLen: 0,
        }
    },
    mounted() {
        this.cartLen = this.$store.state.CartList.length;
    }
    // beforeCreate() {
    //     var me = this;
    //     this.$http.get('/api/cartlist').then(function(resp) {
    //         resp.body.cartlist.forEach(function(value) {
    //             value.isCheck = true;
    //         })
    //         me.updataCartList(resp.body.cartlist);
    //         me.cartLen = resp.body.cartlist.length;
    //         // me.$store.state.checkedProduct = me.cartdata;
    //     })
    // },
    // methods: {
    //     ...mapMutations({
    //         updataCartList: 'UPDATE_CARTS'
    //     })
    // }
}
</script>

<style lang="css">
    .footer {
        height: 1.2rem;
        border-top: 1px solid #eee;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        font-size: .35rem;
        z-index: 999;
    }
    .toolbar {
        width: 100%;
    }
    .flist {
        text-align: center;
        font-size: .35rem;
        line-height: 1;
        padding-top: .15rem;
        position: relative;
    }
    .flist .icon {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        margin: 0;
        background-repeat: no-repeat;
        background-image: url(../../../static/images/icon/bar.png);
        background-size: auto 1rem;
    }
    .flist.router-link-exact-active .icon.index { background-position: 0 -0.5rem; }
    .flist .icon.list { background-position: -0.5rem 0; }
    .flist.router-link-exact-active .icon.list { background-position: -0.5rem -.5rem; }
    .flist .icon.cart { background-position: -1rem 0.05rem; }
    .flist.router-link-exact-active .icon.cart { background-position: -1rem -0.45rem; }
    .flist .icon.user { background-position: -1.5rem 0; }
    .flist.router-link-exact-active .icon.user { background-position: -1.5rem -0.5rem; }
    .flist .txt {
        margin-top: 2px;
    }
    .corner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        background: #ff0036;
        color: #fff;
        position: absolute;
        right: 30%;
        top: 2px;
    }
</style>
