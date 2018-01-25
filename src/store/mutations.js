// 修改状态所定义的方法的集合
const cartArr = [];
const matutaions = {
    // 商品详情
    SET_GOODS(state,goods) {
        state.goods = goods;
    },
    // 更新购物车
    UPDATE_CARTS(state,cartlist) {
        state.CartList = cartlist;
    },
    // 更新默认提交订单的商品
    UPDATE_CHECK_PRODUCT(state, checkproduct) {
        state.checkedProduct = checkproduct;
    },
    // push要提交订单的商品
    PUSH_CHECK_PRODUCT(state, listobj) {
        state.checkedProduct.push(listobj);
    },
    // 清空默认提交订单的商品
    EMPTY_CHECK_PRODUCT(state) {
        state.checkedProduct = [];
    },
    // 购物车
    SET_CARTS(state,carts) {
        cartArr.push(carts);
        state.CartList = cartArr;
    },
    PUSH_CARTS(state,carts) {
        state.CartList.push(carts);
    },
    // 添加地址
    ADD_ADDRESS(state,address) {
        state.address.push(address);
    },
    // 设置为默认地址
    SET_ADDRESS(state,id) {
        console.log(id)
        state.address.forEach(function(value) {
            if(value.id == id) {
                value.isDefault = true;
            } else {
                value.isDefault = false;
            }
        })
    },
    // 删除地址
    REMOVE_ADDRESS(state, id) {
        let isDef = false;          // 表示是否删除的是默认地址
        let new_arr = [];
        state.address.forEach(function(value) {
            console.log(value)
            if(value.id != id) {
                new_arr.push(value)
            } else {
                if(value.isDefault) {
                    // 赋值为true
                    isDef = true;
                }
            }
        })
        if(isDef) {
            // 设置新的默认地址
            new_arr[0].isDefault = true;
        }
        state.address = new_arr;
    }
}

export default matutaions
