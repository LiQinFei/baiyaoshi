<template>
  <div class="register" v-title data-title="注册">
    <div class="ipone">
      <span>+86</span>
      <input type="text" class="phone" v-model="phone" placeholder="手机号">
    </div>
    <div class="infor">
      <input type="text" placeholder="短信验证码" v-model="code">
      <span>{{num}}</span>
      <div class="go aui-btn" @click="boos ? '' : send()">获取验证码</div>
    </div>
    <div class="passwords">
      <input type="text" placeholder="新密码" v-model="passone">
    </div>
    <div class="passwords">
      <input type="text" placeholder="确认密码" v-model="passtwo">
    </div>
    <div class="tuiguang">
      <input type="text" placeholder="请填写推广员推广码" v-model='tuima'>
    </div>
    <div class="agree">
      <div class="aui-list-item-right">
        <label>
          <input type="checkbox" class="aui-checkbox" checked> 我已经阅读并同意遵守法律声明和隐私条款 </label>
      </div>
    </div>
    <div class="gos">
      <div class="aui-btn aui-btn-block" @click="regist">注册</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
      num: '',
      boos: false,
      passone: '',
      passtwo: '',
      code: '',
      tuima:'',
      
    }
  },
  created() {
   
      this.tuima = this.$route.query.code 
  },
  methods: {
    //发送验证码
    send() {
      let that = this
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))) {
        toast.fail({
          title:"手机号码格式不正确",
          duration:1000
        });
      } else {
        toast.loading({
          title:"加载中",
          duration:2000
        });
        this.$http({
          method: 'post',

           url: commonUrl + api+ "/index.php?m=Home&c=Api&a=send_validate_code",

          data: {
            mobile: this.phone,
            scene: 1
          }
        }).then(function (res) {
            toast.hide();
          if (res.data.status == 1) {
            let time = 120;
            that.boos = true;
            let timer = setInterval(function () {
              time--;
              that.num = time + 's'
              if (time == -1) {
                clearInterval(timer);
                that.num = '';
                that.boos = false;
              }
            }, 1000)
            toast.success({
              title:res.data.msg,
              duration:1000
            });
          } else {
            toast.fail({
              title:res.data.msg,
              duration:1000
            });
          }
        }).catch(function (err) {
          toast.hide();
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
            duration:1000
          });
        } else if (this.code == '') {
          toast.fail({
            title:'请输入验证码',
            duration:1000
          });
        } else {
          toast.fail({
            title:'密码不能为空',
            duration:1000
          });
        }

      } else if (this.passone != this.passtwo) {
        toast.fail({
          title:'两次密码不正确',
          duration:1000
        });
      } else if (this.tuima == '') {
        toast.fail({
          title:'推广员不能为空',
          duration:1000
        });
      }else {
        toast.loading({
          title:"加载中",
          duration:2000
        });
        this.$http({
          method: 'post',
          url: commonUrl + api+ "/index.php/?m=mobile&c=User&a=reg",
          data: {
            username: this.phone,
            password: this.passone,
            password2: this.passtwo,
            mobile_code: this.code,
            code:this.tuima,
            scene: 1
            
          }
        }).then(function (res) {
            toast.hide()
          if (res.data.status == 1) {
            toast.success({
              title:res.data.msg,
              duration:2000
            });
            that.$router.push('/login');


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
</script><!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.register {
  height: 100%;
  width: 100%;
  background: #eeeeee;
  padding: 0.5rem;
  .ipone {
    position: relative;
    width: 100%;
    span {
      position: absolute;
      left: 0.5rem;
      top: 0.4rem;
    }
    input {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      margin: 0 0 0.5rem 0;
      padding: 0.2rem 0.2rem 0.2rem 2.5rem;
    }
  }
  .infor {
    position: relative;
    width: 100%;
    span {
      position: absolute;
      right: 6rem;
      top: 0.5rem;
    }
    .go {
      position: absolute;
      right: 0.5rem;
      top: 0.2rem;
      background: #ff6801;
      color: #ffffff;
    }
    input {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      margin: 0 0 0.5rem 0;
      padding: 0.2rem 6rem 0.2rem 0.5rem;
    }
  }
  .passwords {
    input {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      margin: 0 0 0.5rem 0;
      padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    }
  }
  .tuiguang {
    input {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      margin: 0 0 0.5rem 0;
      padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    }
  }
  .agree {
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
    input {
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
    }
  }

  .gos {
    width: 100%;
    padding: 3rem 1rem 1rem 1rem;
    div {
      background: #ff6801;
      color: #ffffff;
    }
  }
}
</style>
