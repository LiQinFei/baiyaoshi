<template>
  <div class="paypage"  v-title data-title="二维码">
    <img :src="url" alt="">

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

       this.url = this.$route.params.imgUrl

      console.log(this.url)

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
      position:absolute;
      width:80%;
      top:45%;
      left:50%;
      transform:translate(-50%,-50%);


    }

  }

</style>
