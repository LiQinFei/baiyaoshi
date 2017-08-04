<template>
  <div class="userInfor" v-title data-title="个人信息">
    <div class="banner">
      <img src="./xtx.png" alt="" id="imgs">
      <p>点击修改图片</p>
      <input type="file" id="files" accept="image/*" enctype="multipart/form-data">
    </div>
    <div class="userinfor">
      <ul>
        <li>
          <div class="inleft">手机</div>
          <router-link to="/testing">
            <input type="text" value="136****4419" disabled="true">
            <i class="aui-iconfont aui-icon-right"></i>
          </router-link>
        </li>
        <li>

          <div class="inleft">密码</div>
          <router-link to="/changePas">
            <span class="change">点击修改密码</span>
            <i class="aui-iconfont aui-icon-right"></i>
          </router-link>
        </li>
        <li>
          <div class="inleft">昵称</div>
          <input type="text" value="大秦之子" v-model="nickname">
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label">
            性别
          </div>
          <div class="aui-list-item-input">
            <select v-model="selected">
              <option selected="selected">男</option>
              <option>女</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
    <img class="iii" src="">
    <div class="save">
      <div class="aui-btn aui-btn-block" @click="save">保存</div>
    </div>

  </div>
</template>
<script>
import Vue from 'vue'

export default {
  data() {
    return {
      users: [],
      nickname: '',
      selected: '',
      head_pic: '',
      imgl: ''
    }
  },updated(){
    toast.hide()
  },
  created() {

    this.users = JSON.parse(localStorage.getItem("users"));

    let that = this
    Vue.nextTick(function () {
      //读取图片
      $("#files").change(function (){
        let file = document.getElementById('files').files[0];
        let imgSize = file.size;
        if(imgSize < 1024 * 1024 / 2){
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(event){
            let txt = event.target.result;
            that.imgl = txt
            $('#imgs').attr('src', txt)

          };
        } else {
          toast.fail({
            title:"图片必须小于500k",
            duration:1000
          });
        }

      });
    })
  }, methods: {
    save() {
      let that = this
      toast.loading({
        title:"加载中",
        duration:2000
      });
      this.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=Mobile&c=user&a=userinfosave",
        data: {
          user_id: that.users.user_id,
          nickname: that.nickname,
          sex: that.selected,
          confirm_password: that.anewpass,
          head_pic: that.imgl
        }
      }).then(function (res) {
        if (res.data.status == 1) {
          toast.hide()
          toast.success({
            title:res.data.msg,
            duration:2000
          });
          that.$router.push('/home/user')
        } else {
          toast.hide()
          toast.fail({
            title:res.data.msg,
            duration:2000
          });
        }



      }).catch(function (err) {
        //MessageBox('提示', '网络错误')
        toast.fail({
          title:'网络错误',
          duration:2000
        });
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.userInfor {
  .banner {
    width: 100%;
    height: 10rem;
    background: url("./bg_03.jpg") no-repeat center;
    text-align: center;
    position: relative;
    #files {
      width: 6rem;
      height: 6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    img {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-top: 2.5rem;
    }
    p {
      font-size: 0.6rem;
      color: #ffffff;
    }
  }

  .userinfor {
    background: #ffffff;
    ul {
      li {
        width: 100%;
        height: 2rem;
        display: flex;
        line-height: 2rem;
        border-bottom: 1px solid #eeeeee;
        position: relative;
        .aui-icon-right {
          position: absolute;
          right: 1rem;
          top: 0;
        }
        a {
          flex: 1;
        }
        span {
          margin-left: 2rem;
          font-size: 0.7rem;
          color: #D6D6D6;
          display: inline-block;
          height: 100%;
          width: 100%;
        }
        .inleft,
        .aui-list-item-label {
          flex: 0 0 3rem;
          text-align: right;
        }
        .aui-list-item-input {
          flex: 1;
          height: 2rem;
          padding-left: 1.8rem;
          select {
            height: 2rem;
            width: 100%;
            option {
              width: 100%;
              height: 2rem;
            }
          }
        }
        input {
          height: 2rem;
          line-height: 2rem;
          flex: 1;
          padding-left: 1.8rem;
        }
      }
    }
  }
  .save {
    width: 100%;
    padding: 2rem 1rem;
    div {
      background: #FF6801;
      color: #ffffff;
    }
  }
}
</style>
