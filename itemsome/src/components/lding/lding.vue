<template>
  <div class="spread" v-title data-title="推广员">
    <p class="first">感谢加入我们百耀大家庭</p>
    <p>您的信息正在审核，请耐心等待</p>
     <h2>资料正在审核中...</h2>

  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      users: [],

    }
  },
  created() {
    this.users = JSON.parse(localStorage.getItem("users"));


  },
  beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));

    if (oo == null) {
      next({ path: '/login' })
    }
    else {
      next()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spread {
  height: 90%;
  width: 100%;
  overflow: auto;

  h2{
    width:100%;
    margin-top:1rem;

    text-align:center;
    letter-spacing:2px;
  }
  .first{
    margin-top:10rem;
  }
  p{
    width:100%;
    text-align:center;
    font-size:0.7rem;
    line-height:1.2rem;
  }
}
</style>
