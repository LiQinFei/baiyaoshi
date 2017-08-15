<template>
  <div class="paypage"  v-title data-title="帮助">
    <div v-for="(item,index) in datas">
      <div class="indexs" v-if="index == indexId">
        {{item}}
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
            '6、赠送的金豆及积分在哪显示？',
            '7、金豆如何使用？',
            '8、积分如何使用？'
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
  }

</style>
