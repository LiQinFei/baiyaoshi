<template>
  <div class="login" v-title data-title="登录">
    <input type="text" placeholder="旧密码" v-model="oldpass">
    <input type="password" placeholder="新密码" v-model="newpass">
    <input type="password" placeholder="重复密码" v-model="anewpass">
    <div class="go">
      <div class="aui-btn aui-btn-block" @click="send">确认更改密码</div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      users: [],
      oldpass:'',
      newpass:'',
      anewpass:''
    }
  },
  created(){
this.users = JSON.parse(localStorage.getItem("users"));
  }
  ,
  methods: {
    //发送验证码
    send() {
      let that = this
      if (this.oldpass =='' || this.newpass =='' || this.anewpass =='') {

        toast.fail({
          title:'密码不能为空',
          duration:2000
        });


      } else if (this.newpass != this.anewpass){
        toast.fail({
          title:'两次密码输入不一致',
          duration:2000
        });
      }
        else{
        toast.loading({
          title:"加载中",
          duration:2000
        });
        this.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=Mobile&c=user&a=password",
          data: {
            user_id: that.users.user_id,
            old_password: that.oldpass,
            new_password: that.newpass,
             confirm_password:that.anewpass
          }
        }).then(function (res) {
            toast.hide()
          if(res.data.status == 1){
            toast.success({
              title:res.data.msg,
              duration:2000
            });

          }else{

            toast.fail({
              title:res.data.msg,
              duration:2000
            });
          }



        }).catch(function (err) {
          toast.hide()
          toast.fail({
            title:'网络错误',
            duration:2000
          });
        })
      }
    },
    //注册
    regist() {
      let that = this
      if (this.passone == '' || this.code == '' || this.phone == '') {
        if (this.phone == '') {
          toast.fail({
            title:'手机号不能为空',
            duration:2000
          });
        } else if (this.code == '') {
          toast.fail({
            title:'请输入验证码',
            duration:2000
          });
        } else {
          toast.fail({
            title:'密码不能为空',
            duration:2000
          });
        }

      } else if (this.passone != this.passtwo) {
        toast.fail({
          title:'两次密码不正确',
          duration:2000
        });

      } else {
        toast.loading({
          title:"加载中",
          duration:2000
        });
        this.$http({
          method: 'post',
          url: commonUrl + api + "/index.php/?m=mobile&c=User&a=reg",
          data: {
            username: this.phone,
            password: this.passone,
            password2: this.passtwo,
            mobile_code: this.code,
            scene: 1
          }
        }).then(function (res) {
            toast.hide()
          if (res.data.status == 1) {

            toast.success({
              title:res.data.msg,
              duration:2000
            });

          } else {
            toast.fail({
              title:res.data.msg,
              duration:2000
            });
          }

        }).catch(function (err) {
            toast.hide()
          toast.fail({
            title:'网络错误',
            duration:2000
          });
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
