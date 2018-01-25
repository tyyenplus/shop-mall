<template lang="html">
    <div class="layer-wrap">
        <div class="layer-mask" v-if="isShow"></div>
        <transition name="layerFade">
            <div class="layer-container" v-if="isShow">
                <slot name="layer">{{layerHtml}}</slot>
            </div>
        </transition>
    </div>
</template>

<script>
import Base from '../../../static/js/method.js';
export default {
    name: 'Layer',
    data() {
        return {
            isShow: false,
            isOpen: undefined,
            layerHtml: 'vue组件弹框'
        }
    },
    methods: {
        openLayer(options) {
            let defaults = {
                time: 2000,
                html: 'vue组件弹框',
                callback: function() {}
            }
            let opt = Base.extend(defaults, options);
            console.log(opt)
            let me = this;
            clearTimeout(me.isOpen);
            me.layerHtml = opt.html;
            me.isShow = true;
            me.isOpen = setTimeout(function() {
                me.isShow = false;
                opt.callback();
            }, opt.time)
        },
        closeLayer() {
            this.isShow = false;
        }
    }
}
</script>

<style lang="css">
    .layer-wrap {}
    .layer-mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        z-index: 999999999;
        position: fixed;
        left: 0;
        top: 0;
    }
    .layer-container {
        display:block;
        /* width: 150px; */
        text-align: center;
        padding: 10px 30px;
        font-size: 16px;
        color: #fff;
        max-width: 80%;
        z-index: 9999999999;
        background: rgba(0,0,0,0.7);
        border-radius: 5px;
        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    /* 动画 */
    .layerFade-enter-active, .layerFade-leave-active {
      transition: opacity .3s;
    }
    .layerFade-enter, .layerFade-leave-to {
      opacity: 0;
    }
    .slideUp-enter-active, .slideUp-leave-active {
        transition: ease .5s;
    }
    .slideUp-enter, .slideUp-leave-to {
        transform: translateY(120%);
    }
</style>
