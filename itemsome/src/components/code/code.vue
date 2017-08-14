<template>
  <div class="paypage"  v-title data-title="二维码">
    <ul class="top">
      <li>
        <img src="./w.png" alt="">
      </li>
      <li>
        <p>我是: <span>{{datas.name}}</span></p>
        <p>服务号：<span>bysc88886666</span></p>
        <p>我的推广码：<span>{{datas.check_code}}</span></p>
      </li>
    </ul>
    <div class="mid">
      <p class="mid_top">
        关注百耀商城，惊喜连连
      </p>
      <img :src="url" alt="">
      <p class="mid_but">在微信中长按识别二维码</p>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
      data(){
        return{
            url:'',
            users : [],
            datas:[]
        }
      }
  ,beforeCreate(){
    toast.loading({
      title:"加载中",
      duration:2000
    });
  }
  ,updated(){
    toast.hide()
  },
    created() {
        /*轮播图的字动*/
       this.url = this.$route.params.imgUrl
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this;

        that.$http({
          method : 'post',
          url : commonUrl + api + "/index.php?m=Mobile&c=user&a=user_ang_info",
          data : {
            user_id : that.users.user_id
          }
        }).then(function(res){



         console.log(res.data)
        that.datas = res.data

        }).catch(function(err){
          console.log('网络错误')
        })

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    width:100%;
    height:100%;
    position:relative;
    .top{
      width: 100%;
      display: flex;
      height: 30%;
      li{
        height: 100%;
        &:first-child{
          flex: 0 0 6rem;
          text-align: center;
          img{
            margin-top: 28%;
            width: 70%;
            display: inline-block;
          }
        }
        &:last-child{
          flex: 1;
        p{
          font-size: 0.8rem;
          &:first-child{
            margin-top: 20%;
          }
          margin-top: 0.3rem;
          span{
            color: #dd191b;
          }
        }
        }
      }
    }
    .mid{
      width: 100%;
      height: 60%;
      background: #258C21;
      position: absolute;
      top: 30%;
      img{
        position:absolute;
        width:60%;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index: 2;
      }
      p{
        font-size: 0.9rem;
        color: #ffffff;
        letter-spacing: 1px;
      }
      .mid_top{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 7%;

      }
      .mid_but{
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 7%;
      }
    }
  }

</style>
