// 访问状态的对象，他就是我们SPA中的共享值
const state = {
    // 地址状态
    address: [
        {
            "id": "201701",
            "text": "广东省 深圳市 南山区 购物公园",
            "user_name": "陈奕迅",
            "phone": "13800138000",
            "isDefault": true
        },
        {
            "id": "201702",
            "text": "广东省 深圳市 福田区",
            "user_name": "谭咏麟",
            "phone": "13800138001",
            "isDefault": false
        },
        {
            "id": "201703",
            "text": "广东省 深圳市 罗湖区",
            "user_name": "张学友",
            "phone": "13800138002",
            "isDefault": false
        },
        {
            "id": "201704",
            "text": "广东省 深圳市 龙华区",
            "user_name": "张学友",
            "phone": "13800138003",
            "isDefault": false
        },
        {
            "id": "201705",
            "text": "广东省 深圳市 龙华区",
            "user_name": "张学友",
            "phone": "13800138004",
            "isDefault": false
        },
        {
            "id": "201706",
            "text": "广东省 深圳市 龙华区",
            "user_name": "张学友",
            "phone": "13800138005",
            "isDefault": false
        },
        {
            "id": "201707",
            "text": "广东省 深圳市 龙华区",
            "user_name": "张学友",
            "phone": "13800138006",
            "isDefault": false
        }
    ],
    // 购物车列表，从ajax中请求得来
    CartList: [
        {
            'id': '1001',
            'img': '//img.alicdn.com/imgextra/i3/2838892713/TB27NkvjnnI8KJjSszgXXc8ApXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 Mate 10 Pro 四曲全面屏全网通智能手机',
            'price': '4899.00',
            'num': 1,
            'spec': '6+128G',
            isCheck: true
        },
        {
            'id': '1003',
            'img': '//img.alicdn.com/imgextra/i2/713805254/TB1GqIrl9_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg_760x760Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone X 全网通手机',
            'price': '9888.01',
            'num': 1,
            'spec': '256G',
            isCheck: true
        },
        {
            'id': '1005',
            'img': '//img.alicdn.com/imgextra/i4/2517790622/TB1eKRLm6ihSKJjy0FeXXbJtpXa_!!2-item_pic.png_2200x2200Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone 8 移动联通4G手机中移动',
            'price': '5500.00',
            'num': 1,
            'spec': '64G',
            isCheck: true
        },
        {
            'id': '1006',
            'img': '//img.alicdn.com/imgextra/i1/2838892713/TB2d9QYjgvD8KJjy0FlXXagBFXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 P10 Plus 全网通 智能手机',
            'price': '3988.00',
            'num': 1,
            'spec': '曜石黑 4G全网通 官方标配 64GB',
            isCheck: true
        },
        {
            'id': '1008',
            'img': '//img.alicdn.com/imgextra/i3/1714128138/TB22M4XgInI8KJjSspeXXcwIpXa_!!1714128138.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Xiaomi/小米 小米mix 2 18:9全面屏2.0官方旗舰正品大屏智能手机',
            'price': '4699.00',
            'num': 1,
            'spec': '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
            isCheck: true
        },
        {
            'id': '1010',
            'img': '//img.alicdn.com/imgextra/i4/370627083/TB13kdzl2DH8KJjy1XcXXcpdXXa_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Samsung/三星 Galaxy S8+ SM-G9550 4+64G 全网通 手机',
            'price': '5499.00',
            'num': 1,
            'spec': '草木绿 官方标配 64GB 中国大陆',
            isCheck: true
        }
    ],
    // 默认选中的购物车列表状态，即结算订单时显示的商品
    checkedProduct: [
        {
            'id': '1001',
            'img': '//img.alicdn.com/imgextra/i3/2838892713/TB27NkvjnnI8KJjSszgXXc8ApXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 Mate 10 Pro 四曲全面屏全网通智能手机',
            'price': '4899.00',
            'num': 1,
            'spec': '6+128G',
            isCheck: true
        },
        {
            'id': '1003',
            'img': '//img.alicdn.com/imgextra/i2/713805254/TB1GqIrl9_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg_760x760Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone X 全网通手机',
            'price': '9888.01',
            'num': 1,
            'spec': '256G',
            isCheck: true
        },
        {
            'id': '1005',
            'img': '//img.alicdn.com/imgextra/i4/2517790622/TB1eKRLm6ihSKJjy0FeXXbJtpXa_!!2-item_pic.png_2200x2200Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone 8 移动联通4G手机中移动',
            'price': '5500.00',
            'num': 1,
            'spec': '64G',
            isCheck: true
        },
        {
            'id': '1006',
            'img': '//img.alicdn.com/imgextra/i1/2838892713/TB2d9QYjgvD8KJjy0FlXXagBFXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 P10 Plus 全网通 智能手机',
            'price': '3988.00',
            'num': 1,
            'spec': '曜石黑 4G全网通 官方标配 64GB',
            isCheck: true
        },
        {
            'id': '1008',
            'img': '//img.alicdn.com/imgextra/i3/1714128138/TB22M4XgInI8KJjSspeXXcwIpXa_!!1714128138.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Xiaomi/小米 小米mix 2 18:9全面屏2.0官方旗舰正品大屏智能手机',
            'price': '4699.00',
            'num': 1,
            'spec': '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
            isCheck: true
        },
        {
            'id': '1010',
            'img': '//img.alicdn.com/imgextra/i4/370627083/TB13kdzl2DH8KJjy1XcXXcpdXXa_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Samsung/三星 Galaxy S8+ SM-G9550 4+64G 全网通 手机',
            'price': '5499.00',
            'num': 1,
            'spec': '草木绿 官方标配 64GB 中国大陆',
            isCheck: true
        }
    ],
    // 我的订单
    orderList: [
        {
            "id": "8000",
            "value": "全部",
            "data": [
                {
                    state: '待付款',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "待付款"
                        }
                    ]
                },
                {
                    state: '待付款',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "待付款"
                        }
                    ]
                },
                {
                    state: '已付款',
                    totalPrice: 3988.00,
                    goods: [
                        {
                            "id": "1001002",
                            goodsName: "华为/HUAWEI P10 Plus",
                            goodsPrice: 3988.00,
                            goodsNum: 1,
                            spec: '曜石黑 4G全网通 官方标配 64GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i4/TB1WHcbRXXXXXcrXVXXdrP88XXX_021433.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                },
                {
                    state: '已付款',
                    totalPrice: 4088.00,
                    goods: [
                        {
                            "id": "1003001",
                            goodsName: "苹果/Apple iPhone7",
                            goodsPrice: 4088.00,
                            goodsNum: 1,
                            spec: '64G',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                },
                {
                    state: '已付款',
                    totalPrice: 4088.00,
                    goods: [
                        {
                            "id": "1003002",
                            goodsName: "苹果/Apple iPhone X",
                            goodsPrice: 4088.00,
                            goodsNum: 1,
                            spec: '64G',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                },
                {
                    state: '已发货',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "已发货"
                        }
                    ]
                },
                {
                    state: '已发货',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "已发货"
                        }
                    ]
                },
                {
                    state: '已完成',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "已完成"
                        }
                    ]
                },
                {
                    state: '已完成',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "已完成"
                        }
                    ]
                }
            ]
        },
        {
            "id": "8001",
            "value": "待付款",
            "data": [
                {
                    state: '待付款',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "待付款"
                        }
                    ]
                },
                {
                    state: '待付款',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "待付款"
                        }
                    ]
                }
            ]
        },
        {
            "id": "8002",
            "value": "已付款",
            "data": [
                {
                    state: '已付款',
                    totalPrice: 3988.00,
                    goods: [
                        {
                            "id": "1001002",
                            goodsName: "华为/HUAWEI P10 Plus",
                            goodsPrice: 3988.00,
                            goodsNum: 1,
                            spec: '曜石黑 4G全网通 官方标配 64GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i4/TB1WHcbRXXXXXcrXVXXdrP88XXX_021433.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                },
                {
                    state: '已付款',
                    totalPrice: 4088.00,
                    goods: [
                        {
                            "id": "1003001",
                            goodsName: "苹果/Apple iPhone7",
                            goodsPrice: 4088.00,
                            goodsNum: 1,
                            spec: '64G',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                },
                {
                    state: '已付款',
                    totalPrice: 4088.00,
                    goods: [
                        {
                            "id": "1003002",
                            goodsName: "苹果/Apple iPhone X",
                            goodsPrice: 4088.00,
                            goodsNum: 1,
                            spec: '64G',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp",
                            state: "已付款"
                        }
                    ]
                }
            ]
        },
        {
            "id": "8003",
            "value": "已发货",
            "data": [
                {
                    state: '已发货',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "已发货"
                        }
                    ]
                },
                {
                    state: '已发货',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "已发货"
                        }
                    ]
                }
            ]
        },
        {
            "id": "8004",
            "value": "已完成",
            "data": [
                {
                    state: '已完成',
                    totalPrice: 5899.00,
                    goods: [
                        {
                            "id": "1001001",
                            goodsName: "华为/HUAWEI Mate10 pro",
                            goodsPrice: 5899.00,
                            goodsNum: 1,
                            spec: '草木绿 官方标配 64GB 中国大陆',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                            state: "已完成"
                        }
                    ]
                },
                {
                    state: '已完成',
                    totalPrice: 3299.00,
                    goods: [
                        {
                            "id": "1002001",
                            goodsName: "小米/Xiaomi 小米MIX 2",
                            goodsPrice: 3299.00,
                            goodsNum: 1,
                            spec: '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB',
                            goodsImage: "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                            state: "已完成"
                        }
                    ]
                }
            ]
        }
    ],
    // 商品规格
    productSpec: [
        {
            "value": "机身颜色",
            "data": [
                {
                    "id": "10001",
                    "type":"color",
                    "text": "红色"
                },
                {
                    "id": "1002",
                    "type":"color",
                    "text": "玫瑰金"
                },
                {
                    "id": "1003",
                    "type":"color",
                    "text": "草木绿"
                },
                {
                    "id": "1004",
                    "type":"color",
                    "text": "亮黑色"
                },
                {
                    "id": "1005",
                    "type":"color",
                    "text": "钻雕蓝"
                }
            ]
        },
        {
            "value": "存储容量",
            "data": [
                {
                    "id": "2001",
                    "type": "productStorage",
                    "text": "4G+64G",
                    "price":"4899"
                },
                {
                    "id": "2002",
                    "type": "productStorage",
                    "text": "4G+128G",
                    "price":"5399"
                },
                {
                    "id": "2003",
                    "type": "productStorage",
                    "text": "6G+64G",
                    "price":"5499"
                },
                {
                    "id": "2004",
                    "type": "productStorage",
                    "text": "6G+128G",
                    "price":"5899"
                },
                {
                    "id": "2005",
                    "type": "productStorage",
                    "text": "6G+256G",
                    "price":"6399"
                },
                {
                    "id": "2006",
                    "type": "productStorage",
                    "text": "8G+256G",
                    "price":"7999"
                }
            ]
        }
    ]
}

export default state
