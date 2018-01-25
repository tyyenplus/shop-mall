<template lang="html">
    <div class="page">
        <div class="main list-main hasfixbar">
            <div class="list-wrap">
                <div class="list-tooltop">
                    <div class="list_m">
                        <span class="m_item active" v-for="(item,index) in list" v-if="index == curr_num" v-on:click="goList(index)"><img :src="item.img" /></span>
                        <span class="m_item" v-else v-on:click="goList(index)"><img :src="item.img" /></span>
                    </div>
                </div>
                <div class="list-content">
                    <transition name="fade">
                        <div v-if="list_transition">
                            <div class="pdt-list" v-for="item in curr_list" v-on:click="listLink(item.id)">
                                <div class="pic"><img :src="item.img" alt=""></div>
                                <div class="info">
                                    <div class="title">{{item.title}}</div>
                                    <div class="price"><sub>￥</sub>{{item.price}}</div>
                                    <div class="other">
                                        <span>库存：{{item.stock}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
import Footers from '../base/Footer.vue'
export default {
    name: 'list',
    components: {
        Footers
    },
    data() {
        return {
            list: [],
            curr_num: 0,
            curr_list: [],
            list_transition: false
        }
    },
    mounted() {
        let me = this;
        this.$http.get('/api/list').then(function(resp) {
            me.list = resp.body.listdata;
            me.curr_list = me.list[0].children
            me.list_transition = true;
        })
    },
    methods: {
        goList(id) {
            var me = this;
            me.list_transition = false;
            console.log(id)
            me.curr_num = id;
            me.curr_list = me.list[id].children;
            setTimeout(function() {
                me.list_transition = true;
            },300)
        },
        listLink(id) {
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
.list-main {
    padding-top: 1.4rem;
}
.list-tooltop {
    background: #fff;
    border-bottom: 1px solid #ddd;
    width: 100%;
    left: 0;
    position: fixed;
    top: 0px;
    z-index: 999;
}
.list_m {
    overflow-x: auto;
    white-space: nowrap;
    padding: .2rem 3%;
}
.list_m .m_item {
    display: inline-block;
    vertical-align: top;
    width: 2rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: 1px solid #eee;
    margin-left: 10px;
}
.list_m .m_item.active { border-color: #ff0036; }
.list_m .m_item:first-child {margin-left: 0px;}
.list_m .m_item img {
    width: 100%;
    height: 100%;
}
.pdt-list {
    background: #fff;
    /* border-top: 1px solid #ddd; */
    border-bottom: 1px solid #ddd;
    padding: 3%;
}
.pdt-list .pic {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
}
.pdt-list .pic img {
    width: 100%;
    height: 100%;
}
.pdt-list .info {
    width: 6.8rem;
    float: right;
    display: inline-block;
    vertical-align: top;
    color: #999;
    padding-left: 10px;
}
.pdt-list .title {
    font-size: .4rem;
    line-height: .6rem;
    max-height: 1.2rem;
    overflow: hidden;
    color: #000;
}
.pdt-list .price {
    font-size: .5rem;
    color: #ff0036;
    margin-top: 10px;
}
.pdt-list .other {
    margin-top: 10px;
}
</style>
