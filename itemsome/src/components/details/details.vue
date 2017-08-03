<template>
  <div class="details" v-title data-title="商品详情">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./banner_1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./banner_2.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="infor">
      <h2> 百耀 移动WiFi</h2>
      <p>私人专属 安全加密</p>
      <p class="cost">￥1680</p>
    </div>
    <div class="image_text">
      <h2>图文详情</h2>
      <img src="./1.jpg" alt="">
      <img src="./2.jpg" alt="">
      <img src="./3.jpg" alt="">
      <img src="./4.jpg" alt="">
      <img src="./5.jpg" alt="">
      <img src="./6.jpg" alt="">
      <img src="./7.jpg" alt="">
      <img src="./14.jpg" alt="">
      <img src="./15.jpg" alt="">
      <img src="./8.jpg" alt="">
      <img src="./9.jpg" alt="">
      <img src="./10.jpg" alt="">
      <img src="./11.jpg" alt="">
      <img src="./12.jpg" alt="">
      <img src="./13.jpg" alt="">
    </div>
    <div class="pay">

        <div class="aui-btn aui-btn-block" @click="bay">立即购买</div>

    </div>
  </div>


</template>
<script>
  import Vue from 'vue'

  export default {
      data(){
        return{
          users:[]
        }
      },
    created(){
     this.users = JSON.parse(localStorage.getItem("users"));
      Vue.nextTick(function () {
        let mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 3000
        })
      })

    },methods:{

      bay()
      {
         if(this.users == null){
          this.$router.push('/login')
        }else{
         this.$router.push('/paypage')
       }
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .details {
    padding-bottom: 2.5rem;
    background: #F7F7F7;
    .swiper-slide{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .infor {
      background: #ffffff;
      h2 {
        text-align: center;
        font-size: 0.7rem;
        margin-top: 0;
        font-weight: bold;
        line-height: 2rem;

      }
      p {
        text-align: center;
        font-size: 0.6rem;
        margin-bottom: 0.5rem;
      }
      .cost {
        font-size: 0.9rem;
        color: #FAE487;
      }
    }

    .image_text {
      width: 100%;
      margin-top: 0.5rem;
      background: #ffffff;
      img {
        width: 100%;
      }
      h2 {
        text-align: center;
        font-size: 0.8rem;
        font-weight: bold;
        line-height: 2rem;
      }
    }
    .pay{
      position: fixed;
      bottom: 0;
      left:0;
      width: 100%;
      div{
        background:#FF6801;
        color:#ffffff;
        width: 100%;
      }
    }
  }

</style>
