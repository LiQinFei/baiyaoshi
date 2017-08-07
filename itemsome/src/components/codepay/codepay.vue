<template>
  <div class="paypage"  v-title data-title="付款">
    <h2>请长按识别百耀支付码支付</h2>
    <img src="./689185119817611012.png" alt="">
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
      data(){
        return{
            url:''
        }
      },
    created() {
        /*轮播图的字动*/



    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    width:100%;
    height:100%;
    position:relative;
    h2{
      width: 100%;
      text-align: center;
      position:absolute;
      top:12%;
    }
    img{
      position:absolute;
      width:80%;
      top:45%;
      left:50%;
      transform:translate(-50%,-50%);


    }

  }

</style>
