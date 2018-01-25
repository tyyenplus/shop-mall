<template lang="html">
    <div class="main">
        <div class="addAddress-block">
            <div class="additem">
                <div class="label">收货人姓名</div>
                <div class="txt">
                    <div class="input w100">
                        <input type="text" placeholder="请输入姓名" v-model="user_name" />
                    </div>
                </div>
            </div>
            <div class="additem">
                <div class="label">收货人电话</div>
                <div class="txt">
                    <div class="input w100">
                        <input type="text" placeholder="请输入联系电话" v-model="user_phone" />
                    </div>
                </div>
            </div>
            <div class="additem">
                <div class="label">地区</div>
                <div class="txt" v-on:click="layer = !layer">{{province_text}} {{city_text}} {{area_text}}</div>
            </div>
            <div class="additem">
                <div class="label">详细地址</div>
                <div class="txt">
                    <div class="input">
                        <input type="text" placeholder="请输入详细地址" v-model="defail_address" />
                    </div>
                </div>
            </div>
            <div class="btnblock mt20">
                <span class="blockbtn blue" v-on:click="keepHandler()">保存</span>
            </div>
        </div>

        <transition name="fade">
            <div class="shade" v-if="layer" v-on:click="layer = !layer"></div>
        </transition>
        <transition name="slideUp">
            <div class="area-wrap" v-if="layer">
                <div class="top">
                    请选择地区
                </div>
                <div class="content">
                    <div class="province area-item w30">
                        <span
                            class="item active"
                            v-for="(item, index) in myProvince"
                            v-if="item.value == province_num"
                            v-bind:data-key="item.value"
                            v-on:click="chooseProvince(item.value, index, item.text)">
                            {{item.text}}
                        </span>
                        <span class="item"
                            v-else
                            v-bind:data-key="item.value"
                            v-on:click="chooseProvince(item.value, index, item.text)">
                            {{item.text}}
                        </span>
                    </div>
                    <div class="city area-item w30">
                        <span class="item active"
                            v-for="item in myCity"
                            v-if="item.value == city_num"
                            v-bind:data-key="item.value"
                            v-on:click="chooseCity(item.value, item.text)">
                            {{item.text}}
                        </span>
                        <span class="item"
                            v-else
                            v-bind:data-key="item.value"
                            v-on:click="chooseCity(item.value, item.text)">
                            {{item.text}}
                        </span>
                    </div>
                    <div class="area area-item w40">
                        <span class="item active"
                            v-for="item in myArea"
                            v-bind:data-key="item.value"
                            v-if="item.value == area_num"
                            v-on:click="chooseArea(item.value, item.text)">
                            {{item.text}}
                        </span>
                        <span class="item"
                            v-bind:data-key="item.value"
                            v-else
                            v-on:click="chooseArea(item.value, item.text)">
                            {{item.text}}
                        </span>
                    </div>
                </div>
                <div class="address-confirm" v-on:click="layer = !layer">确定</div>
            </div>
        </transition>
    </div>
</template>

<script>
import CityArea from '../../../src/assets/js/data.city.js'
import { mapMutations } from 'vuex';
export default {
    name: 'myAddress',
    data() {
        return {
            layer: false,
            address_name: '',
            myProvince: [],
            province_num: 0,
            province_text: '请选择地区',
            myCity: [],
            city_num: 0,
            city_text: '',
            myArea: [],
            area_num: 0,
            area_text: '',

            user_name: '',
            user_phone: '',
            defail_address: ''
        }
    },
    methods: {
        chooseProvince(value, idx, txt) {
            // console.log(value)
            this.province_num = value;
            this.province_text = txt;
            this.showCity(idx);
        },
        showCity(value) {
            var me = this;
            me.myCity = CityArea[value].children;
            me.myArea = [];
        },
        chooseCity(value, txt) {
            this.city_num = value;
            this.city_text = txt;
            this.showArea(value)
        },
        showArea(value) {
            var me = this;
            me.myCity.forEach(function(obj) {
                if(obj.value == value) {
                    me.myArea = obj.children;
                }
            })
            console.log(me.myArea)
        },
        chooseArea(value, txt) {
            this.area_num = value;
            this.area_text = txt;
        },
        // 保存地址
        keepHandler() {
            var me = this;
            var oldAdrLen = this.$store.state.address.length;
            var newArr = {};
            let id = new Date().getFullYear() + (oldAdrLen < 10 ? ('0'+(++oldAdrLen)) : ++oldAdrLen);
            newArr.id = id;
            newArr.text = me.province_text + ' ' + me.city_text + ' ' + me.area_text + ' ' + me.defail_address;
            newArr.phone = me.user_phone;
            newArr.user_name = me.user_name;
            newArr.isDefault = false;
            this.addAddress(newArr);
            alert('保存成功');
            this.$router.go(-1)
        },
        ...mapMutations({
            addAddress: 'ADD_ADDRESS'
        })
    },
    mounted() {
        console.log(CityArea)
        var me = this;
        CityArea.forEach(function(value) {
            me.myProvince.push(value);
        })
    }
}
</script>

<style lang="css">
.additem {
    background: #fff;
    padding: 10px 3%;
    font-size: .4rem;
    border-top: 1px solid #ddd;
}
.additem:first-child {border-top: 0px;}
.additem .label {
    display: inline-block;
    vertical-align: top;
    width: 2.2rem;
    line-height: 30px;
    color: #999;
}
.additem .txt {
    display: inline-block;
    vertical-align: top;
    width: 7rem;
    line-height: 30px;
    color: #333;
    text-align: left;
}
.additem .input input {
    width: 100%;
    height: 30px;
    border: 0px;
    /* border-bottom: 1px solid #ddd; */
    color: #333;
}
.additem .input input:focus {
    border-bottom-color: #999;
}

.blockbtn {
    display: block;
    width: 90%;
    margin: auto;
    height: 1rem;
    line-height: 1rem;
    border-radius: 5px;
    text-align: center;
    font-size: .4rem;
}
.blockbtn.red{ background: #ff0036;color: #fff;}
.blockbtn.blue{ background: #5095ED;color: #fff;}

.area-wrap {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 7rem;
    background: #fff;
    z-index: 999999;
    border-top: 2px solid #ff0036;
}
.area-wrap .top {
    height: 1rem;
    line-height: 1rem;
    padding: 0 3%;
    border-bottom: 1px solid #ddd;
    color: #000;
    font-size: .37rem;
}
.area-wrap .content {
    height: 5rem;
}
.area-item {
    height: 5rem;
    float: left;
    overflow-y: auto;
    border-left: 1px solid #eee;
}
.area-wrap .content .area-item:first-child { border-left: 0px; }
.area-item .item {
    display: block;
    height: .8rem;
    line-height: .8rem;
    padding: 0 5px;
    padding: 0 10px;
}
.area-item .item.active {
    background: #5095ED;
    color: #fff;
}
.address-confirm {
    height: 1rem;
    background: #ff0036;
    color: #fff;
    line-height: 1rem;
    text-align: center;
    font-size: .35rem;
}
</style>
