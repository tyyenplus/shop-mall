# 基于vue2.0、vue-cli、vuex、vue-router、vue-resource实现的简单商场

> 基于vue2.0、vue-cli、vuex、vue-router、vue-resource实现的简单商场。由于是没有进行数据交互，只是用mock来模拟数据生成动态结构。该项目只是简单的一个购物流程，首页->列表->商品详情->选择规格->加入购物车->提交订单

## 安装/使用说明

``` bash
# 克隆项目
git clone git@github.com:tyyenplus/shop-mall.git

# 安装依赖
npm install

# 本地开发环境，运行demo 访问:http://localhost:8080
npm run dev

# 打包文件
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#### 手机扫码预览
![](http://chen.asd945.com/images/shop.png)

#### demo的页面截图：
![](http://chen.asd945.com/images/index.png)
![](http://chen.asd945.com/images/list.png)
![](http://chen.asd945.com/images/cart.png)
![](http://chen.asd945.com/images/user.png)
![](http://chen.asd945.com/images/address.png)
![](http://chen.asd945.com/images/order.png)

在线访问：[http://chen.asd945.com/#/](http://chen.asd945.com/#/)

## 项目主架构（目录说明）
![](http://chen.asd945.com/images/test.jpg)

## 使用的库

* vue-cli（vue-cli+webpack脚手架）
* vue-router（路由跳转）
* vuex（状态管理）
* vue-resource（ajax请求）
* mock.js（mock模拟后台数据）
* swiper（轮播图插件）

## 设计布局

* HTML5
* CSS3
* Less
* rem(限定html最大的fontsize为64px)
* Flex(弹性布局)
* 动画（vue原生transition）

## 数据请求

* Mock(模拟后台数据)
* vue-resource(请求数据)

## 实现细节

## 实现过程心得
* 对于新手来说，vue-cli脚手架傻瓜式一键搭建vue环境是很nice的，因为那些配置文件是在是难和麻烦，先弄懂vue文件里面的实现
* vue里面相对路径的问题也是一个比较心酸的问题，比如链接一张图片，css，js都会根据不同的vue组件的位置而不同
* 
