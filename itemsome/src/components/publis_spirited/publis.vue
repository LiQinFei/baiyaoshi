<template>
  <div class="paypage"  v-title data-title="奖金公益">
    <img src="./axgy.jpg" alt="">
    <div class="swiper-text">
      <div class="swiper-wrapper">
        <div class="swiper-slide stop-swiping">
      <!--    <p>用户尾号<span>159***0003</span>已为公益机构捐赠  30元</p>-->
          <p>目前公益奖金池累计金额为{{datas}}元</p>
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
          datas:''
        }
      },
    created() {
        /*轮播图的字动*/
      let that = this
        Vue.nextTick(function(){
          /*let textSwiper = new Swiper('.swiper-text', {
            direction : 'vertical',
            loop : true,
            autoplay : 2000,
            noSwipingClass : 'stop-swiping'
          })*/
        })
      that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=Mobile&c=user&a=award"
      }).then(function (res) {
          that.datas = res.data.num
      
        //console.log(res)
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    width:100%;
    height:100%;
    img{
      width:100%;
      height:100%;

    }
    .swiper-text{
      width:100%;
      height:2.5rem;
      position:fixed;
      top:0;
      left:0;
      text-align:center;
     background:#ffffff;
      overflow:hidden;
      p{
        color:#343434;
        line-height:2.5rem;
        span{
          color:#3ABCF0;
        }
      }
    }
  }

</style>
