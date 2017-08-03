<template>
  <div class="login"  v-title data-title="登录">
    <input type="text" placeholder="新密码">
    <input type="password" placeholder="重复密码">
    <div class="go">
      <router-link to="/home/homepage/homepageA">
        <div class="aui-btn aui-btn-block">确认更改密码</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    background: #EEEEEE;
    padding: 0.5rem;
    input{
      width: 100%;
      height: 2rem;
      background: #ffffff;
      margin:0 0 0.5rem 0;
      padding: 0.2rem;
    }

    .go{
      width: 100%;
      padding: 3rem 1rem 1rem 1rem;
      div{
        background:#FF6801;
        color:#ffffff;
      }
    }
  }

</style>
