<template lang="html">
    <div class="detail-footer footer">
        <div class="flexbox detail-buttons">
            <div class="flex-1">
                <span class="shop-btn orange w50">加入购物车</span>
                <span class="shop-btn red w50">立即购买</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailFooter'
}
</script>

<style lang="css">
.footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 999;
    height: 1.2rem;
    border-top: 1px solid #ddd;
    background: #fff;
}
.shop-btn {
    float: left;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .4rem;
}
</style>
