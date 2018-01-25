// 引入mockjs
const Mock = require('mockjs');
// console.log(Mock);

// 轮播mock
// Mock.mock('/api/bannerdata', (req, res) => {
//     return {
//         data: [
//             {
//                 "id": "1",
//                 "img": "./assets/images/goods/swipe_3.jpg"
//             },
//             {
//                 "id": "2",
//                 "img": "./assets/images/goods/swipe_2.jpg"
//             },
//             {
//                 "id": "3",
//                 "img": "./assets/images/goods/swipe_1.jpg"
//             }
//         ]
//     }
// })
// 轮播图json
Mock.mock('/api/bannerdata',{
    'data': [
        {
            "id": 1,
            "img": "https://res.vmallres.com/pimages//sale/2018-01/20180115140542959.png"
        },
        {
            "id": 2,
            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1888a9f0a6ae807113cb428b9e01f5fe.jpg"
        },
        {
            "id": 3,
            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f4f2d20f46773ba378475a8ea40d63d5.jpg"
        },
        {
            "id": 4,
            "img": "https://res.vmallres.com/pimages//sale/2018-01/20180121211040310.jpg"
        }
    ]
})
// 商品
Mock.mock('/api/indexshop', {
    'data': [
        {
            'category': {
                "id": 1,
                "msg": "华为/HUAWEI",
                "product": [
                    {
                        "CategoryId": "1001001",
                        "GoodsName": "华为/HUAWEI Mate10 pro",
                        "GoodsPrice": 5899.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp"
                    },
                    {
                        "CategoryId": "1001002",
                        "GoodsName": "华为/HUAWEI P10 Plus",
                        "GoodsPrice": 3988.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i4/TB1WHcbRXXXXXcrXVXXdrP88XXX_021433.jpg_400x400Q50s50.jpg_.webp"
                    }
                ]
            }
        },
        {
            'category': {
                "id": 2,
                "msg": "小米/Xiaomi",
                "product": [
                    {
                        "CategoryId": "1002001",
                        "GoodsName": "小米/Xiaomi 小米MIX 2",
                        "GoodsPrice": 3299.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp"
                    },
                    {
                        "CategoryId": "1002002",
                        "GoodsName": "小米/Xiaomi 小米6",
                        "GoodsPrice": 2499.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i7/TB1_L2UQFXXXXatXpXXdble8VXX_031202.jpg_400x400Q50s50.jpg_.webp"
                    }
                ]
            }
        },
        {
            'category': {
                "id": 3,
                "msg": "苹果/Apple",
                "product": [
                    {
                        "CategoryId": "1002001",
                        "GoodsName": "苹果/Apple iPhone7 ",
                        "GoodsPrice": 4088.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp"
                    },
                    {
                        "CategoryId": "1002005",
                        "GoodsName": "苹果/Apple iPhone X",
                        "GoodsPrice": 7788.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i1/TB1xCxCm8TH8KJjy0FizrARsXXa_114232.jpg_400x400Q50s50.jpg_.webp"
                    }
                ]
            }
        },
        {
            'category': {
                "id": 4,
                "msg": "三星/Samsung",
                "product": [
                    {
                        "CategoryId": "1005001",
                        "GoodsName": "三星/Samsung GALAXY S8 SM-G9500 ",
                        "GoodsPrice": 4999.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i8/TB1YJ6pRXXXXXaXaVXXDP359pXX_042615.jpg_400x400Q50s50.jpg_.webp"
                    },
                    {
                        "CategoryId": "1005002",
                        "GoodsName": "三星/Samsung GALAXY Note8 SM-N9500",
                        "GoodsPrice": 7388.00,
                        "GoodsNum": 1,
                        "GoodsImage": "//img.alicdn.com/bao/uploaded/i4/TB1dGsXfm3PL1JjSZFxTzgBBVXa_102352.jpg_400x400Q50s50.jpg_.webp"
                    }
                ]
            }
        },
    ]
})
// 产品详情
Mock.mock('/api/detail', {
    'data': {
        'id': '102',
        'imgdata': [
            "//img.alicdn.com/imgextra/i2/713805254/TB1GqIrl9_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg_760x760Q50s50.jpg_.webp",
            "//img.alicdn.com/imgextra/i4/713805254/TB2iJLDrlUSMeJjy1zkXXaWmpXa_!!713805254.jpg_760x760Q50s50.jpg_.webp",
            "//img.alicdn.com/imgextra/i3/713805254/TB2BMLVmvNNTKJjSspkXXaeWFXa_!!713805254.jpg_760x760Q50s50.jpg_.webp",
            "//img.alicdn.com/bao/uploaded/i4/1917047079/TB2CRmRmPuhSKJjSspjXXci8VXa_!!1917047079.jpg_760x760Q50s50.jpg",
            "//img.alicdn.com/bao/uploaded/i3/1917047079/TB25Tn3qRUSMeJjy1zjXXc0dXXa_!!1917047079.jpg_760x760Q50s50.jpg"
        ],
        'text': 'iPhone X是Apple（苹果公司）于北京时间2017年9月13日凌晨1点，在Apple Park新总部的史蒂夫·乔布斯剧院会上发布的新机型。其中“X”是罗马数字“10”的意思，代表着苹果向iPhone问世十周年致敬。iPhone X属于高端版机型，采用全新设计，搭载色彩锐利的OLED屏幕，配备升级后的相机，使用3D面部识别（Face ID）传感器解锁手机，支持AirPower(空中能量)无线充电。分为64GB、256GB两个版本，中国大陆起售价8388人民币，美国[1]  起售价999美元，2017年10月27日预售，11月3号正式开卖。',
        'title': '【12期免息】Apple/苹果iPhone X 全网通4G智能手机苹果10 苹果X',
        'price': '99.00',
        'stock': '1999',
        'note': '其他说明'
    }
})
// 购物车列表
Mock.mock('/api/cartlist', {
    'cartlist': [
        {
            'id': '1001',
            'img': '//img.alicdn.com/imgextra/i3/2838892713/TB27NkvjnnI8KJjSszgXXc8ApXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 Mate 10 Pro 四曲全面屏全网通智能手机',
            'price': '4899.00',
            'num': 1,
            'spec': '6+128G'
        },
        {
            'id': '1003',
            'img': '//img.alicdn.com/imgextra/i2/713805254/TB1GqIrl9_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg_760x760Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone X 全网通手机',
            'price': '9888.01',
            'num': 1,
            'spec': '256G'
        },
        {
            'id': '1005',
            'img': '//img.alicdn.com/imgextra/i4/2517790622/TB1eKRLm6ihSKJjy0FeXXbJtpXa_!!2-item_pic.png_2200x2200Q50s50.jpg_.webp',
            'name': 'Apple/苹果 iPhone 8 移动联通4G手机中移动',
            'price': '5500.00',
            'num': 1,
            'spec': '64G'
        },
        {
            'id': '1006',
            'img': '//img.alicdn.com/imgextra/i1/2838892713/TB2d9QYjgvD8KJjy0FlXXagBFXa_!!2838892713.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Huawei/华为 P10 Plus 全网通 智能手机',
            'price': '3988.00',
            'num': 1,
            'spec': '曜石黑 4G全网通 官方标配 64GB'
        },
        {
            'id': '1008',
            'img': '//img.alicdn.com/imgextra/i3/1714128138/TB22M4XgInI8KJjSspeXXcwIpXa_!!1714128138.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Xiaomi/小米 小米mix 2 18:9全面屏2.0官方旗舰正品大屏智能手机',
            'price': '4699.00',
            'num': 1,
            'spec': '全陶瓷尊享版 黑色(8GB) 4G+全网通 官方标配 128GB'
        },
        {
            'id': '1010',
            'img': '//img.alicdn.com/imgextra/i4/370627083/TB13kdzl2DH8KJjy1XcXXcpdXXa_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp',
            'name': 'Samsung/三星 Galaxy S8+ SM-G9550 4+64G 全网通 手机',
            'price': '5499.00',
            'num': 1,
            'spec': '烟晶灰 官方标配 64GB 中国大陆'
        }
    ]
})

// 分类data
Mock.mock('/api/list', {
    'listdata': [
        {
            "id": "1001",
            "value": "华为/HUAWEI",
            "img": "//img.alicdn.com/bao/uploaded/TB1CxrVHpXXXXcjXpXXSutbFXXX.jpg",
            "children": [
                {
                    "id": "1001001",
                    "title": "华为/HUAWEI Mate10 pro",
                    "price": "4899-8999",
                    "img": "//img.alicdn.com/bao/uploaded/i2/TB1kq5EaMnH8KJjSspc7Hz3QFXa_010733.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "9999"
                },
                {
                    "id": "1001002",
                    "title": "华为/HUAWEI P10 Plus",
                    "price": "3988.00",
                    "img": "//img.alicdn.com/bao/uploaded/i4/TB1WHcbRXXXXXcrXVXXdrP88XXX_021433.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1001003",
                    "title": "华为/HUAWEI nova 2s",
                    "price": "2999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1Yul5e63z9KJjy0FmL8piwXXa_115833.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1001004",
                    "title": "华为/HUAWEI Mate 10",
                    "price": "3899.00",
                    "img": "//img.alicdn.com/bao/uploaded/i2/TB1wQkqhLBNTKJjSszc0rzO2VXa_105946.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1001005",
                    "title": "华为/HUAWEI Mate 9",
                    "price": "3488.00",
                    "img": "//img.alicdn.com/bao/uploaded/i7/TB1PhwoRXXXXXbJXpXXym1v8XXX_020327.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1001006",
                    "title": "华为/HUAWEI 畅享7",
                    "price": "999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i1/TB1FrOLSXXXXXc7XpXXrhPQ_XXX_053507.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "199"
                },
                {
                    "id": "1001007",
                    "title": "华为/HUAWEI P10",
                    "price": "3488.00",
                    "img": "//img.alicdn.com/bao/uploaded/i5/TB1Em7rRXXXXXcpXpXXcG.R8XXX_021818.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "135"
                },
                {
                    "id": "1001008",
                    "title": "华为/HUAWEI 麦芒6",
                    "price": "2199.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1RTq4eYwTMeJjSszf9PtbtFXa_035857.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "124"
                }
            ]
        },
        {
            "id": "1002",
            "value": "Apple",
            "img": "//img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg",
            "children": [
                {
                    "id": "1002001",
                    "title": "苹果/Apple iPhone7",
                    "price": "4088.00",
                    "img": "//img.alicdn.com/bao/uploaded/i7/TB1opTlNXXXXXaYXXXXV8Gr9XXX_035038.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "10000+"
                },
                {
                    "id": "1002002",
                    "title": "苹果/Apple iPhone7 Plus",
                    "price": "5988.00",
                    "img": "//img.alicdn.com/bao/uploaded/i1/TB1j._nNXXXXXXGXXXXuiqt9XXX_035048.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1000"
                },
                {
                    "id": "1002003",
                    "title": "苹果/Apple iPhone8",
                    "price": "5888.00",
                    "img": "//img.alicdn.com/bao/uploaded/i4/TB1h.B5m2DH8KJjy1XceVUpdXXa_114036.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "500"
                },
                {
                    "id": "1002004",
                    "title": "苹果/Apple iPhone8 Plus",
                    "price": "6688.00",
                    "img": "//img.alicdn.com/bao/uploaded/i4/TB1h.B5m2DH8KJjy1XceVUpdXXa_114036.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1458"
                },
                {
                    "id": "1002005",
                    "title": "苹果/Apple iPhone X",
                    "price": "7788.00",
                    "img": "//img.alicdn.com/bao/uploaded/i1/TB1xCxCm8TH8KJjy0FizrARsXXa_114232.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "9998"
                },
                {
                    "id": "1002006",
                    "title": "苹果/Apple iPhone 6s Plus",
                    "price": "3488.00",
                    "img": "//img.alicdn.com/bao/uploaded/i7/TB1HYjLJpXXXXXMXVXXUKyv_pXX_055451.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "100"
                },
                {
                    "id": "1002007",
                    "title": "苹果/Apple iPhone SE",
                    "price": "3788.00",
                    "img": "//img.alicdn.com/bao/uploaded/i2/TB1awBiMXXXXXXoXFXXNdSi9XXX_034656.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "5554"
                },
                {
                    "id": "1002001",
                    "title": "苹果/Apple iPhone 6s",
                    "price": "3788.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1nCYMJpXXXXbOXFXXG8XK_VXX_063642.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "487"
                }
            ]
        },
        {
            "id": "1003",
            "img": "//img.alicdn.com/bao/uploaded/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg",
            "value": "小米/Xiaomi",
            "children": [
                {
                    "id": "1003001",
                    "title": "小米/Xiaomi 小米MIX 2",
                    "price": "3299.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1AHlVegMPMeJjy1Xbb8IwxVXa_070400.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1003002",
                    "title": "小米/Xiaomi 小米6",
                    "price": "2499.00",
                    "img": "//img.alicdn.com/bao/uploaded/i7/TB1_L2UQFXXXXatXpXXdble8VXX_031202.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "199"
                },
                {
                    "id": "1003003",
                    "title": "小米/Xiaomi 小米5X",
                    "price": "3299.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1Kw21SpXXXXbEXVXXM6KW_VXX_064544.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "289"
                },
                {
                    "id": "1003004",
                    "title": "小米/Xiaomi 红米note 4X",
                    "price": "3299.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1MC6sRVXXXXckXVXX1xvh9FXX_044339.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1544"
                },
                {
                    "id": "1003005",
                    "title": "小米/Xiaomi 小米note2 高配版",
                    "price": "2099.00",
                    "img": "//img.alicdn.com/bao/uploaded/i1/TB1uVfYNVXXXXbTXFXX7_WB9FXX_044010.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1003006",
                    "title": "小米/Xiaomi note4X 32G",
                    "price": "999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i3/TB1YFz9RVXXXXXBXpXXtFPQ7VXX_015349.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                }
            ]
        },
        {
            "id": "1004",
            "img": "//img.alicdn.com/bao/uploaded/i2/TB19a.oJFXXXXb9XpXXXZp8.pXX",
            "value": "魅族/MEIZU",
            "children": [
                {
                    "id": "1004001",
                    "title": "魅族/MEIZU Note6",
                    "price": "999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i2/TB1WRGkXgsSMeJjSspee.m77VXa_042140.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1999"
                },
                {
                    "id": "1004002",
                    "title": "魅族/MEIZU PRO 6 Plus",
                    "price": "2099.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1AF1.SFXXXXchXFXXQSqF9pXX_041104.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "99"
                },
                {
                    "id": "1004003",
                    "title": "魅族/MEIZU PRO 7",
                    "price": "1999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1bGrGSpXXXXb_apXXJ6JC_pXX_055014.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1999"
                },
                {
                    "id": "1004004",
                    "title": "魅族/MEIZU PRO 7 Plus",
                    "price": "2799.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1cEuMXH3XS1JjSZFFRIsvupXa_032311.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "128"
                },
                {
                    "id": "1004005",
                    "title": "魅族/MEIZU pro 6s",
                    "price": "1499.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1xqWiSVXXXXbRXXXXg1ZG.pXX_104620.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "1154"
                },
                {
                    "id": "1004006",
                    "title": "魅族/MEIZU 魅蓝S6",
                    "price": "999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i3/TB1ziEul63z9KJjy0FmcU4iwXXa_031622.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "154485"
                },
                {
                    "id": "1004007",
                    "title": "魅族/MEIZU 魅蓝E2",
                    "price": "899.00",
                    "img": "//img.alicdn.com/bao/uploaded/i4/TB1n93PRXXXXXa2XpXXs94O8FXX_025538.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "354"
                },
                {
                    "id": "1004008",
                    "title": "魅族/MEIZU 魅蓝X",
                    "price": "958.00",
                    "img": "//img.alicdn.com/bao/uploaded/i5/TB1yNUVRXXXXXalXXXXI3py8FXX_025420.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "34"
                },
            ]
        },
        {
            "id": "1005",
            "value": "三星/Samsung",
            "img": "//img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg",
            "children": [
                {
                    "id": "1005001",
                    "title": "三星/Samsung GALAXY S8 SM-G9500",
                    "price": "4999.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1YJ6pRXXXXXaXaVXXDP359pXX_042615.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "999"
                },
                {
                    "id": "1005002",
                    "title": "三星/Samsung GALAXY Note8 SM-N9500",
                    "price": "7388.00",
                    "img": "//img.alicdn.com/bao/uploaded/i4/TB1dGsXfm3PL1JjSZFxTzgBBVXa_102352.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "19999"
                },
                {
                    "id": "1005003",
                    "title": "三星/Samsung GALAXY S8+ SM-G9550",
                    "price": "5499.00",
                    "img": "//img.alicdn.com/bao/uploaded/i6/TB1yov4RXXXXXcuXFXXj0sZ9pXX_042548.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "3548"
                },
                {
                    "id": "1005004",
                    "title": "三星/Samsung GALAXY C9 Pro SM-C9000",
                    "price": "2499.00",
                    "img": "//img.alicdn.com/bao/uploaded/i8/TB1gC_URXXXXXcCXVXX3ZmX9FXX_043457.jpg_400x400Q50s50.jpg_.webp",
                    "stock": "548"
                }
            ]
        },
        {
            "id": "1006",
            "img": "//img.alicdn.com/bao/uploaded/TB19nHpJFXXXXacXXXXSutbFXXX.jpg",
            "value": "一加/OnePlus",
            "children": [
                {
                    "id": "1006001",
                    "title": "一加/OnePlus 一加5T",
                    "price": "2999.00",
                    "img": "https://m.360buyimg.com/mobilecms/s357x357_jfs/t12859/355/1502498371/155178/f5e7e927/5a213b0aNcbdbb90a.jpg!q50.jpg",
                    "stock": "548"
                },
                {
                    "id": "1006001",
                    "title": "一加/OnePlus 一加5",
                    "price": "3099.00",
                    "img": "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15265/79/1708445084/298533/81f4ba72/5a55af81N3e9d50ee.jpg!q50.jpg",
                    "stock": "548"
                }
            ]
        },
        {
            "id": "1007",
            "img": "//img.alicdn.com/bao/uploaded/TB1wAWQPFXXXXbiXXXXSutbFXXX.jpg",
            "value": "锤子/Smartisan",
            "children": [
                {
                    "id": "1007001",
                    "title": "锤子/Smartisan 坚果 Pro 2",
                    "price": "1799.00",
                    "img": "https://m.360buyimg.com/mobilecms/s357x357_jfs/t13816/293/427102639/77903/94670e7a/5a0bbbfbNa3704237.jpg!q50.jpg",
                    "stock": "4578"
                }
            ]
        }
    ]
})
