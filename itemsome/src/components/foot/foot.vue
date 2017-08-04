<template>
  <div class="foot">
    <footer class="aui-bar aui-bar-tab" id="footer">
      <div class="aui-bar-tab-item aui-active" tapmode>
        <router-link to="/home/homepage/homepageA" class="link" v-bind:class="{ actives: isActive }">
          <i class="aui-iconfont iconfont icon-shopshangdian"></i>
          <div class="aui-bar-tab-label">商店</div>
        </router-link>
      </div>
      <div class="aui-bar-tab-item" tapmode>
        <a @click="isDistribut" class="link" v-bind:class="{ actives: TGActive }">
          <i class="aui-iconfont iconfont icon-tuiguang"></i>
          <div class="aui-bar-tab-label">推广员</div>
        </a>
      </div>
      <div class="aui-bar-tab-item" tapmode>
        <router-link to="/gongyi" class="link">
          <i class="aui-iconfont iconfont icon-bianmin"></i>
          <div class="aui-bar-tab-label">公益</div>
        </router-link>
      </div>
      <div class="aui-bar-tab-item" tapmode>
        <a @click="isUser"  class="link" v-bind:class="{ actives: userActive }">
          <i class="aui-iconfont iconfont icon-gerenzhongxin"></i>
          <div class="aui-bar-tab-label">我的</div>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data(){
      return{
        users:[],
        isd:''
      }
    },
    created(){
      this.users = JSON.parse(localStorage.getItem("users"));
      this.isd = localStorage.getItem("is_distribut")

      Vue.nextTick(function(){
      })
    }, computed : {
      isActive : function(){
        if(this.$route.path == '/home/homepage/homepageC' || this.$route.path == '/home/homepage/homepageB' || this.$route.path == '/home/homepage/homepageSort'){
          return true
        }
      },
      TGActive : function(){
        if(this.$route.path == '/home/spread'|| this.$route.path == '/home/lding'){
          return true
        }
      },userActive:function(){
         if(this.$route.path == '/home/user'){
          return true
        }
      }

    },methods:{
      isDistribut(){
        if(this.users == null){
          this.$router.push('/login')
        }
       else if(this.isd == 1){
          this.$router.push('/apply')
       } else if(this.isd == 3){
           this.$router.push('/home/spread')
       }
       else{
         this.$router.push('/home/lding')
       }

      },isUser(){
         if(this.users == null){
          this.$router.push('/login')
        }else{
         this.$router.push('/home/user')
       }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('../../../static/css/iconfont.css');
  .foot{
    #footer{
      height:8%;
      background:#ffffff;
      border-top: 1px solid rgba(159, 159, 159, 0.58);
      .link{
        color:#000000;
      }
      //点击切换颜色
      .router-link-active{
        color:#ff6801;
      }
      .actives{
        color:#ff6801;
      }
    }
  }
</style>
