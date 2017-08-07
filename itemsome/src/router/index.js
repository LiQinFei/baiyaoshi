import Vue from 'vue'
import Router from 'vue-router'
//import homepage from '../components/homepage/homepage.vue'
//import spread from '../components/spread/spread.vue'
//import conv from '../components/conv/conv.vue'
//import conv2 from '../components/conv2/conv2.vue'
//import conv1 from '../components/conv1/conv1.vue'

//import details from '../components/details/details.vue' /*商品详情*/
//import paypage from '../components/paypage/paypage.vue' /*支付*/



//import gongyi from '../components/publis_spirited/code.vue' /*gongyi*/






//import user from '../components/user/user.vue'
//import userInfor from '../components/userChild/userInfro/userInfro.vue'
//import testing from '../components/userChild/testing/testing.vue'
//import testsucceed from '../components/userChild/testsucceed/testsucceed.vue'
//import address from '../components/userChild/address/address.vue'
//import editAddress from '../components/userChild/editAddress/adiAaddress.vue'
//import login from '../components/login/login.vue' /*登录*/
//import register from '../components/register/register.vue' /*注册*/
//import forgetlogin1 from '../components/forgetlogin1/forgetlogin1.vue' /*找回密码1*/
//import forgetlogin2 from '../components/forgetlogin2/forgetlogin2.vue' /*找回密码1*/



//import home from '../components/home/home.vue'
//import homepageA from '../components/homepageA/homepageA.vue'
//import homepageB from '../components/homepageB/homepageB.vue'
//import homepageC from '../components/homepageC/homepageC.vue'
//import homepageSort from '../components/homepageSort/homepageSort.vue'
//import apply from '../components/apply/apply.vue'

//import orderAll from '../components/userChild/order/orderAll/orderAll.vue'
//import orderAlls from '../components/userChild/order/orderAlls/orderAlls.vue'
//import waitPay from '../components/userChild/order/waitPay/waitPay.vue'
//import waitSend from '../components/userChild/order/waitSend/waitSend.vue'
//import Shipped from '../components/userChild/order/Shipped/Shipped.vue'
//import finish from '../components/userChild/order/finish/finish.vue'



Vue.use(Router);
export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: resolve => require(['../components/home/home.vue'], resolve),
            children: [{
                    path: 'homepage',
                    name: 'homepage',
                    component: resolve => require(['../components/homepage/homepage.vue'], resolve),
                    children: [{
                            path: 'homepageA',
                            name: 'homepageA',
                            component: resolve => require(['../components/homepageA/homepageA.vue'], resolve),
                        },
                        {
                            path: 'homepageB',
                            name: 'homepageB',
                            component: resolve => require(['../components/homepageB/homepageB.vue'], resolve),
                        }, {
                            path: 'homepageC',
                            name: 'homepageC',
                            component: resolve => require(['../components/homepageC/homepageC.vue'], resolve),
                        }, {
                            path: 'homepageSort/:id',
                            name: 'homepageSort',
                            component: resolve => require(['../components/homepageSort/homepageSort.vue'], resolve),
                        }
                    ]
                },
                {
                    path: 'spread',
                    name: 'spread',
                    component: resolve => require(['../components/spread/spread.vue'], resolve)
                },
              {
                path: 'lding',
                name: 'lding',
                component: resolve => require(['../components/lding/lding.vue'], resolve)
              },
                {
                    path: 'conv',
                    name: 'conv',
                    component: resolve => require(['../components/conv/conv.vue'], resolve)
                },
                {
                    path: 'user',
                    name: 'user',
                    component: resolve => require(['../components/user/user.vue'], resolve)
                }
            ]
        }, {
            path: '/apply',
            name: 'apply',
            component: resolve => require(['../components/apply/apply.vue'], resolve)
        },
        {
            path: '/conv2',
            name: 'conv2',
            /*贷款*/
            component: resolve => require(['../components/conv2/conv2.vue'], resolve)
        },
        {
            path: '/conv1',
            name: 'conv1',
            /*银行*/
            component: resolve => require(['../components/conv1/conv1.vue'], resolve)
        },
        {
            path: '/userInfor',
            name: 'userInfor',
            /*个人信息*/
            component: resolve => require(['../components/userChild/userInfro/userInfro.vue'], resolve)
        },
        {
            path: '/testing',
            name: 'testing',
            /*个人信息*/
            component: resolve => require(['../components/userChild/testing/testing.vue'], resolve)
        },
        {
            path: '/testsucceed',
            name: 'testsucceed',
            /*个人信息*/
            component: resolve => require(['../components/userChild/testsucceed/testsucceed.vue'], resolve)
        },
        {
            path: '/address',
            name: 'address',
            /*地址信息*/
            component: resolve => require(['../components/userChild/address/address.vue'], resolve)
        },
        {
            path: '/editAddress',
            name: 'editAddress',
            /*修改地址*/
            component: resolve => require(['../components/userChild/editAddress/adiAaddress.vue'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            /*登录*/
            component: resolve => require(['../components/login/login.vue'], resolve)

        }, {
            path: '/register',
            name: 'register',
            /*登录*/
            component: resolve => require(['../components/register/register.vue'], resolve)

        },
        {
            path: '/changePas',
            name: 'changePas',
            /*登录*/
            component: resolve => require(['../components/changePas/changePas.vue'], resolve)
        },
        // 修改密码
        {
            path: '/forgetlogin1',
            name: 'forgetlogin1',
            /*登录*/
            component: resolve => require(['../components/forgetlogin1/forgetlogin1.vue'], resolve)
        }, {
            path: '/forgetlogin2',
            name: 'forgetlogin2',
            /*登录*/
            component: resolve => require(['../components/forgetlogin2/forgetlogin2.vue'], resolve)
        },
        {
            path: '/details/:id',
            name: 'details',
            /*商品详情*/
            component: resolve => require(['../components/details/details.vue'], resolve)
        },
        {
            path: '/paypage/:id',
            name: 'paypage',
            /*支付*/
            component: resolve => require(['../components/paypage/paypage.vue'], resolve)
        },
      {
        path: '/pagea/:id',
        name: 'pagea',
        /*支付*/
        component: resolve => require(['../components/paypage/pagea.vue'], resolve)
      },
        {
            path: '/gongyi',
            name: 'gongyi',
            /*gongyi*/
            component: resolve => require(['../components/publis_spirited/publis.vue'], resolve)
        },{
        path: '/code',
        name: 'code',
        /*code*/
        component: resolve => require(['../components/code/code.vue'], resolve)
      },
        {
            path: '/orderAll',
            name: 'orderAll',
            /*订单*/
            component: resolve => require(['../components/userChild/order/orderAll/orderAll.vue'], resolve),
            children: [{
                    path: 'orderAlls',
                    name: 'orderAlls',
                    /*所有订单*/
                    component: resolve => require(['../components/userChild/order/orderAlls/orderAlls.vue'], resolve)
                }, {
                    path: 'waitPay',
                    name: 'waitPay',
                    /*待付款*/
                    component: resolve => require(['../components/userChild/order/waitPay/waitPay.vue'], resolve)
                },
                {
                    path: 'waitSend',
                    name: 'waitSend',
                    /*待发货*/
                    component: resolve => require(['../components/userChild/order/waitSend/waitSend.vue'], resolve)
                },
                {
                    path: 'Shipped',
                    name: 'Shipped',
                    /*已发货*/
                    component: resolve => require(['../components/userChild/order/Shipped/Shipped.vue'], resolve)
                },
                {
                    path: 'finish',
                    name: 'finish',
                    /*已完成*/
                    component: resolve => require(['../components/userChild/order/finish/finish.vue'], resolve)
                }
            ]
        }, {
            path: '*',
            redirect: '/login'
        }
    ]
})
