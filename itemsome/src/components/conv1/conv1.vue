<template>
  <div class="conv1" v-title data-title="信用卡办理">
    <div class="banner">
      <img src="./banner@2x_02.jpg" alt="">
    </div>
    <ul>
      <li><img src="./gd.jpg" alt=""></li>
      <li><img src="./hx.jpg" alt=""></li>
      <li><img src="./jt.jpg" alt=""></li>
      <li><img src="./ms.jpg" alt=""></li>
      <li><img src="./ny.jpg" alt=""></li>
      <li><img src="./pa.jpg" alt=""></li>
      <li><img src="./pf.jpg" alt=""></li>
      <li><img src="./xy.jpg" alt=""></li>
      <li><img src="./zs.jpg" alt=""></li>
      <li><img src="./zx.jpg" alt=""></li>
    </ul>
  </div>

</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .conv1{
    .banner{
      width: 100%;
      img{
        width: 100%;
      }
    }
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 0.2rem;
      li{
        width: 50%;
        padding: 0.2rem;
      }
    }
  }

</style>
