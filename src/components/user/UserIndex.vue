<template lang="html">
    <div class="page">
        <header-ctr>
            <h4 slot="headerctr">个人中心</h4>
        </header-ctr>
        <div class="main hasfixbar">
            <div class="user-wrap">
                <div class="usertool">
                    <div class="userimg">
                        <img src="../../../static/images/github.png" alt="" />
                    </div>
                    <div class="username">Github</div>
                </div>
                <div class="block-wrap mt10">
                    <router-link to="/user/order" tag="div" class="list-block hasarrow">
                        <div class="left">我的订单</div>
                        <div class="right"></div>
                    </router-link>
                    <router-link to="/user/address" tag="div" class="list-block hasarrow">
                        <div class="left">我的地址</div>
                        <div class="right"></div>
                    </router-link>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
import HeaderCtr from '../base/HeaderCtr.vue';
import Footers from '../base/Footer.vue';
export default {
    name: 'user',
    components: {
        Footers,
        HeaderCtr
    }
}
</script>

<style lang="css">
.usertool {
    background: #6495ED;
    padding: .5rem 0;
}
.userimg {
    text-align: center;
}
.username {
    text-align: center;
    color: #fff;
    font-size: .4rem;
}
.list-block {
    display: block;
    width: 100%;
    background: #fff;
    padding: 3%;
    font-size: .4rem;
    position: relative;
}
.list-block:after {
    content: '';
    display: block;
    clear: both;
}
.list-block .left {
    display: inline-block;
    vertical-align: top;
    line-height: 30px;
}
.list-block .right {
    line-height: 30px;
    float: right;
    color: #999;
}
.list-block.hasarrow .right {
    padding-right: .4rem;
}
.list-block.hasarrow:before {
    content: '';
    display: inline-block;
    width: .3rem;
    height: 100%;
    position: absolute;
    right: 3%;
    top: 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center center;
    background-image: url(../../../static/images/right.png);
}
.block-wrap .list-block {
    border-top: 1px solid #ddd;
}
.block-wrap .list-block:first-child { border-top: 0px; }
</style>
