<template lang="html">
    <div class="">
        <header-ctr>
            <h4 slot="headerctr">收获地址</h4>
        </header-ctr>
        <div class="main" style="padding-bottom: 1.1rem;">
            <div style="padding-top: 5px">
                <div class="address-wrap">
                    <div class="address-item" v-for="address in addressList">
                        <div class="info clearfix">
                            <span class="name">{{address.user_name}}</span>
                            <span class="phone fr">{{address.phone}}</span>
                        </div>
                        <div class="adrtxt">{{address.text}}</div>
                        <div class="ctr clearfix">
                            <div class="check fl">
                                <div class="c-check">
                                    <input type="radio" v-on:change="defaultAddress(address.id)" name="address" :checked="address.isDefault" :id="'address' + address.id" />
                                    <!-- <input type="radio" v-on:change="defaultAddress(address.id)" name="address" v-else :id="'address' + address.id" /> -->
                                    <label :for="'cart' + address.id">设为默认地址</label>
                                </div>
                            </div>
                            <span class="ctrbtn">编辑</span>
                            <span class="ctrbtn" v-on:click="removeAddress(address.id)">删除</span>
                        </div>
                    </div>
                </div>
                <div class="addAddressBtnBox">
                    <router-link to="/address" class="addbtn">添加地址</router-link>
                </div>
            </div>
        </div>
        <layer ref="layer"></layer>
    </div>
</template>

<script>
import HeaderCtr from '../base/HeaderCtr.vue';
import Layer from '../base/Layer.vue';
import { mapMutations } from 'vuex';
export default {
    name: 'userAddress',
    data() {
        return {
            addressList: []
        }
    },
    components: {
        HeaderCtr,
        Layer
    },
    mounted() {
        // console.log(Base)
        this.addressList = this.$store.state.address;
        console.log(this.$store.state.address)
    },
    methods: {
        defaultAddress(id) {
            this.setDefaultAddress(id);
        },
        // 删除地址
        removeAddress(id) {
            this.$refs.layer.openLayer({time: 1000, html: '地址删除成功'});
            this.deleteAddress(id)
            // 重新赋值给addresslist
            this.addressList = this.$store.state.address;
            console.log(this.addressList)
            console.log(this.$store.state.address)
        },
        ...mapMutations({
            "setDefaultAddress": "SET_ADDRESS",
            "deleteAddress": "REMOVE_ADDRESS"
        })
    }
}
</script>

<style lang="css">
    .address-wrap {
        padding-bottom: 5px;
    }
    .address-item {
        display: block;
        background: #fff;
        border-top: 2px solid #5095ED;
        position: relative;
        color: #000;
        margin-top: 5px;
    }
    .address-item:first-child { margin-top: 0px; }
    .address-item .info {
        color: #000;
        font-size: .4rem;
        padding: 0 3%;
        padding-top: 10px;
    }
    .address-item .adrtxt {
        border-bottom: 1px dashed #ddd;
        margin-top: 5px;
        padding: 0 3%;
        padding-bottom: 10px;
    }
    .address-item .ctr {
        padding: 10px 3%;
        text-align: right;
    }
    .address-item .ctrbtn {
        display: inline-block;
        width: 1.5rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        border: 1px solid #999;
        border-radius: 5px;
    }
    .addAddressBtnBox {
        width: 100%;
        left: 0;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .addAddressBtnBox .addbtn {
        width: 100%;
        display: block;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: center;
        background: #5095ED;
        color: #fff;
        font-size: .45rem;
    }
</style>
