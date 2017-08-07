<template>
  <div class="login" v-title data-title="登录">
    <input type="text" placeholder="手机号码" v-model="phone">
    <input type="password" placeholder="密码" v-model="password">
    <div class="tab">
      <router-link to="/register">
        <span>注册</span>
      </router-link>
      |
      <router-link to="/forgetlogin1">
        <span>忘记密码</span>
      </router-link>

    </div>
    <div class="go">
      <div class="aui-btn aui-btn-block" @click="send">登录</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default {

  data() {
    return {
      users: [],
      phone: '',
      password: '',
      form: ''
    }
  }, beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));
    // if(oo != null ){

    //     }else{
    //       next()
    //     }
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.form = from.path
    })


  },
  created() {
    this.users = localStorage.getItem("users");

  },
  methods: {
    send() {
      let that = this
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) || this.password == '') {
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))) {
          toast.fail({
            title:"账号格式不正确",
            duration:1000
          });

        } else {
          toast.fail({
            title:"密码不能为空",
            duration:1000
          });
        }
      } else {
        toast.loading({
          title:"加载中",
          duration:2000
        });
        this.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=Mobile&c=User&a=do_login",
          //url: commonUrl + api + "/index.php/mobile/User/do_login",
          data: {
            username: this.phone,
            password: this.password
          }
        }).then(function (res) {
          toast.hide()
          if (res.data.status == 1) {
            let obj = JSON.stringify({ "user_id": res.data.result.user_id, "is_distribut": res.data.result.is_distribut });
            localStorage.setItem("users", obj);
            localStorage.setItem("is_distribut", res.data.result.is_distribut)

            toast.success({
              title:res.data.msg,
              duration:2000
            });

            if (that.form == '/') {
              that.$router.push('/home/homepage/homepageA');
            } else if (that.form == '/register') {
              that.$router.push('/home/homepage/homepageA');
            } else {
              that.$router.push(that.form);
            }


          } else {

            toast.fail({
              title:res.data.msg,
              duration:2000
            });
          }

        }).catch(function (error) {
          toast.hide();
      if(error.response){
        //请求已发出，但服务器使用状态代码进行响应
        //落在2xx的范围之外
        alert(error.response.data);
        alert(error.response.status);
        alert(error.response.headers);
      } else {
        //在设置触发错误的请求时发生了错误
        toast.fail({
          title:'网络错误',
          duration:2000
        });
     }



        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: #EEEEEE;
  padding: 0.5rem;
  input {
    width: 100%;
    height: 2rem;
    background: #ffffff;
    margin: 0 0 0.5rem 0;
    padding: 0.2rem;
  }
  .tab {
    width: 100%;
    text-align: right;
  }
  .go {
    width: 100%;
    padding: 3rem 1rem 1rem 1rem;
    div {
      background: #FF6801;
      color: #ffffff;
    }
  }
}
</style>
