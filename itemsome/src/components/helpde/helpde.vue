<template>
  <div class="paypage"  v-title data-title="帮助">
    <div v-for="(item,index) in datas">
      <div class="indexs" v-if="index == indexId">
        <h3>{{item}}</h3>
        <div class="five" v-if="indexId == 4">
          <p>第一步：选择A商城点击购买</p>
          <img src="./five1.jpg" alt="">
          <p>第二步：选择立即购买</p>
          <img src="./five2.jpg" alt="">
          <p>第三步：下单页面点击去支付</p>
          <img src="./five3.jpg" alt="">
          <p>第四步：进入二维码支付页，长按二维码点击识别二维码</p>
          <img src="./five4.jpg" alt="">
          <p>第五步：进入支付页面收入金额点击确认支付</p>
          <img src="./five5.jpg" alt="">
          <p>第六步：点击完成按钮</p>
        </div>
        <div class="six" v-else-if="indexId == 5">
          <p>第一步：找到菜单栏的个人中心点开 并点击进入中心菜单</p>
          <img src="./six1.jpg" alt="">
          <p>第二步：进入个人中心后就能看到当前你剩余的金豆数和积分</p>
          <img src="./six2.jpg" alt="">
        </div>
        <div class="seven" v-else-if="indexId == 6">
          <p>第一步：进入c商城</p>
          <img src="./seven1.jpg" alt="">
          <p>第二步：看中的商品先放进购物车</p>
          <img src="./seven2.jpg" alt="">
          <p>第三步：进入购物车结账</p>
          <img src="./seven3.jpg" alt="">
          <p>第四步：系统会自动生成订单并扣去金豆进入订单页面</p>
          <img src="./seven4.jpg" alt="">
        </div>
        <div class="eight" v-else-if="indexId == 7">
          <p>第一步：进入b商城</p>
          <img src="./eight1.jpg" alt="">
          <p>第二步：看中的商品先放进购物车</p>
          <img src="./eight2.jpg" alt="">
          <p>第三步：进入购物车结账</p>
          <img src="./eight3.jpg" alt="">
          <p>第四步：系统会自动生成订单并扣去金豆进入订单页面</p>
          <img src="./eight4.jpg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
      data(){
        return{
          datas:[
            '百耀商城是一家全新模式的电商平台，公司专注于通讯，科技，金融领域。公司与中国电信集团签约推出全国不限流量的移动无限WIFI.全国流量不限使用，多台设备可同时上网。让固定宽带变成移动随身WIFI，随时随地畅享网络。商城模式为买1000送1000在送1000的全新模式。自用省钱，分享赚钱..........',
            '注册购买A商城移动WIFI成为会员，生成自己独立推广二维码。',
            '三级分销模式，自用省钱，分享赚钱，直推第一级收益200元，二级120元。三级80元。',
            '4、收益显示及提现?',
            '',
            '',
            '在c商城我们准备了大量的货物可以用金豆换取中间会有很少的一部分差价需要用现金来补',
            '在b商城我们准备了大量的货物可以用积分免费领取'
          ],
          indexId:''
        }
      },
    created() {
        /*轮播图的字动*/
      this.indexId = this.$route.params.indexId
    console.log(this.indexId)


    },
    methods:{
      helpde(index){

        this.$router.push({ name: 'home', params: { indexId: index }})
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    width:100%;
    height:100%;
    position:relative;
    padding: 1rem;
    h3{
      text-indent: 2em;
    }
    img{
      width:70%;
      display:inline-block;
    }
  .indexs{
    line-height:1.5em;
    font-size:0.8rem;
  }

    .five{
      p{
        margin:1rem;
        font-size:0.8rem;
        color:#000000;
      }
      text-align:center;
    }
    .six{
      p{
        margin:1rem;
        font-size:0.8rem;
        color:#000000;
      }
      text-align:center;
    }
    .seven{
      p{
        margin:1rem;
        font-size:0.8rem;
        color:#000000;
      }
      text-align:center;
    }
    .eight{
      p{
        margin:1rem;
        font-size:0.8rem;
        color:#000000;
      }
      text-align:center;
    }
  }

</style>
