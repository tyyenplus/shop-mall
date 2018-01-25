<template lang="html">
    <div class="">
        <div class="ischeck">
            <div class="c-check">
                <input type="checkbox" ref="cartinput" v-on:change="checkHanld" checked :id="'cart' + cartMessage.id" />
                <label :for="'cart' + cartMessage.id"></label>
            </div>
        </div>
        <div class="pic">
            <router-link :to="{ path: '/detail', query: {id: cartMessage.id} }"><img :src="cartMessage.img" alt="" /></router-link>
        </div>
        <div class="info">
            <div class="name">{{cartMessage.name}}</div>
            <div class="price c-fc1"><sub>￥</sub>{{cartMessage.price}}</div>
            <div class="spec">{{cartMessage.spec}}</div>
            <div class="spec-num">
                <span v-if="!isEditor">数量：{{cartMessage.num}}</span>
                <div class="num-editor" v-if="isEditor">
                    <div class="numetr">
                        <span class="reduce" v-on:click="reduceNum(cartMessage)">-</span>
                        <input type="text" v-model="cartMessage.num" />
                        <span class="add" v-on:click="addNum(cartMessage)">+</span>
                    </div>
                </div>
            </div>
            <div class="ctrl">
                <span class="editor-btn" v-on:click="editorInfo()">{{editorBtnText}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartList',
    data() {
        return {
            isEditor: false,
            editorBtnText: '编辑'
        }
    },
    props: ['cartMessage','totalCheckLength','indexNum'],
    mounted() {
        console.log(this.indexNum)
    },
    methods: {
        editorInfo() {
            this.isEditor = !this.isEditor;
            this.editorBtnText = this.isEditor ? '完成' : '编辑';
        },
        checkHanld() {
            if(this.$refs.cartinput.checked) {
                // 把对应的商品的isCheck属性设置为true,代表选中
                this.$store.state.CartList[this.indexNum].isCheck = true;
                // 调用父组件的方法
                this.$emit('increment','1');
            } else {
                // 把对应的商品的isCheck属性设置为false,代表没选中
                this.$store.state.CartList[this.indexNum].isCheck = false;
                // 调用父组件的方法
                this.$emit('increment','0');
            }
        },
        // 取消全选
        cancelAllCheck() {
            this.$refs.cartinput.checked = false;
        },
        // 全选
        inAllCheck() {
            this.$refs.cartinput.checked = true;
        },
        reduceNum() {
            if(this.$store.state.CartList[this.indexNum].num > 1) {
                this.$store.state.CartList[this.indexNum].num--;
            }
            // console.log(this.$store.state.CartList[this.indexNum])
            this.$emit('increment');
        },
        addNum() {
            this.$store.state.CartList[this.indexNum].num++;
            // console.log(this.$store.state.CartList[this.indexNum])
            this.$emit('increment');
        }
    }
}
</script>

<style lang="css">
.cart-list {
    width: 100%;
    background: #fff;
    position: relative;
    padding: 3% 0;
    padding-left: 0.8rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
}
.cart-list:first-child { margin-top: 0px; }
.cart-list:after {
    content: '';
    display: block;
    clear: both;
}
.cart-list .ischeck {
    width: 0.8rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 3rem;
}
.cart-list .pic {
    float: left;
    width: 2.2rem;
    height: 2.2rem;
}
.cart-list .pic img {
    width: 100%;
    height: 100%;
}
.cart-list .info {
    display: inline-block;
    width: 7rem;
    padding: 0 10px;
    font-size: 12px;
    position: relative;
}
.cart-list .info .name {
    color: #000;
    font-size: .4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cart-list .info .price {
    font-size: .5rem;
}
.cart-list .ctrl {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 10px;
    font-size: .35rem;
    color: #48BCE9;
}
.spec-num {
    height: .5rem;
    line-height: .5rem;
}
.num-editor {
    line-height: 1;
}
.numetr {
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    font-size: 0px;
}
.numetr span {
    display: inline-block;
    vertical-align: top;
    width: .5rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    font-size: .4rem;
    border: 1px solid #ddd;
}
.numetr .reduce {
    border-right: 0px;
}
.numetr .add {
    border-left: 0px;
}
.numetr input {
    display: inline-block;
    vertical-align: top;
    width: 1rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    font-size: .4rem;
    border: 1px solid #ddd;
}
</style>
