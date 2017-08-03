<template>
  <div class="login"  v-title data-title="登录">
    <input type="text" placeholder="手机号">
    <div class="getNum">
      <input type="password" placeholder="填写验证码">
      <div class="getGo aui-btn">发送短信</div>
    </div>

    <div class="go">
      <router-link to="/home/homepage/homepageA">
        <router-link to="/forgetlogin2">
          <div class="aui-btn aui-btn-block">下一步</div>
        </router-link>
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
    .getNum{
      position: relative;
      width: 100%;
      input{
        padding-right: 5rem;
      }
      .getGo{
        width: 4rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        background: #FF6801;
        font-size: 0.6rem;
        position: absolute;
        right: 0.3rem;
        top: 0.25rem;
        border-radius: 5px;
        color: #ffffff;
      }
    }
  }

</style>
