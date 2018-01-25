<template lang="html">
    <header class="header">
        {{textname}}
    </header>
</template>

<script>
export default {
    name: 'header',
    props: ['textname'],
    data() {
        return {}
    }
}
</script>

<style lang="css">
    .header {
        height: 1.2rem;
        background: #3180E5;
        color: #fff;
        text-align: center;
        line-height: 1.2rem;
        font-size: .5rem;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>
