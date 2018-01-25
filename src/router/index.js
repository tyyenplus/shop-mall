import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index/Index.vue';
import Detail from '../components/detail/Detail.vue';
import Order from '../components/order/Order.vue';
import List from '../components/list/List.vue';
// import Cart from '../components/cart/Cart.vue';
import Address from '../components/base/Address.vue';

import User from '../components/user/User.vue';
import UserIndex from '../components/user/UserIndex.vue';
import UserAddress from '../components/user/UserAddress.vue';
import UserOrder from '../components/user/UserOrder.vue';

Vue.use(Router)

const Cart = (resolve) =>{
	import('@/components/Cart/Cart').then((module) =>{
		resolve(module)
	})
}

export default new Router({
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/user',
        component: User,
		children: [
			{
				path: 'index',
				component: UserIndex
			},
			{
				path: 'address',
				component: UserAddress
			},
			{
				path: 'order',
				component: UserOrder
			}
		]
    },
    {
        path: '/address',
        name: 'Address',
        component: Address
    }
  ]
})
