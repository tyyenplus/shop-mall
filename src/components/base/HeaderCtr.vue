<template lang="html">
    <header class="header-ctr">
        <div class="back" v-on:click="goBack()">返回</div>
        <div class="tit">
            <slot name="headerctr">基于Vue开发的简单商城</slot>
        </div>
        <div class="rgt"></div>
    </header>
</template>

<script>
export default {
    name: 'HeaderCtr',
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="css">
    .header-ctr {
        height: 1.2rem;
        background: #3180E5;
        color: #fff;
        text-align: center;
        line-height: 1.2rem;
        font-size: .45rem;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .header-ctr .tit {
        text-align: center;
        line-height: 1.2rem;
        color: #fff;
        font-size: .5rem;
    }
    .header-ctr .tit * {
        font-size: .5rem;
    }
    .header-ctr .back {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        text-align: center;
        line-height: 1.2rem;
        background-repeat: no-repeat;
        background-position: 10px center;
        text-indent: -99999em;
        background-image: url(../../../static/images/icon/back.png);
        background-size: .35rem;
    }
    .header-ctr .rgt {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
    }
</style>
