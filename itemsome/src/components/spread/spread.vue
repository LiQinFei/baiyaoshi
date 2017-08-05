<template>
  <div class="spread" v-title data-title="推广员">
    <div class="spread_head">
      <div class="sh_l">
        <img  v-bind:src="datas.head_pic" alt="">
      </div>
      <div class="sh_r">
        <div class="erwei" @click="imgs()"><img :src="datas.user_qrcode" alt=""></div>
        <p class="name">{{datas.nickname}}</p>
        <p class="num">推广账号：{{datas.check_code }}</p>
        <div class="line"></div>
        <span>推广金额：{{datas.much}}元</span>
        <span>推广人数：{{datas.underling_number}}人</span>
        <p class="num">推广人:{{datas.user_ang}}</p>
      </div>
    </div>
    <div class="rank">
      <div class="title">
        <div>
          <span>当前享受特权</span>
          <p>金牌会员专属礼品</p>
        </div>
        <div>
          <span>距离下一个等级还需要</span>
          <p>推广{{datas.last_num}}人</p>
        </div>
      </div>

        <img class="user" src="./xtx.png" alt="">

      <img @click="downP" class="pu" src="./pu.png" alt="">
      <img @click="downT" class="tong" src="./tong.png" alt="">
      <img @click="downY" class="yin" src="./yin.png" alt="">
      <img @click="downJ" class="jin" src="./jin.png" alt="">
    </div>

    <div class="codes">
      <img :src="datas.user_qrcode" alt="">
    </div>
    <div class="instruction">
      <h2>推广系统介绍</h2>
      <p>推广员系统说平台推广为客户提供的平台差异化服务，按照推广的人数进行级别划分，并用徽章表示，点亮的徽章越多表示级别越高，将会享受更优质的平台服务。</p>
      <h3>
        注意事项：
      </h3>
      <p>1.推广人数达到标准会升级徽章</p>
      <p>2.需要用户在注册时填写推广账号二次可计入推广</p>
      <p>3.推广账号不可更改</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      users: [],
      posi: [
          ['5%', '1.6rem'],
          ['30%', '2.1rem'],
          ['55%', '3.5rem'],
          ['79%', '6.3rem']
         ],
      datas:[]
    }
  },
  created() {
    this.users = JSON.parse(localStorage.getItem("users"));
    let that = this;
    Vue.nextTick(function () {
      that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=Mobile&c=user&a=user_ang_info",
        data: {
          user_id: that.users.user_id
        }
      }).then(function (res) {
        // that.nums = res.data
        // console.log(that.nums)

         that.datas = res.data
        console.log(that.datas)
       let levels = res.data.lever-1

         $('.user').css({ 'left': that.posi[levels][0], 'bottom': that.posi[levels][1] });


      }).catch(function (err) {
        console.log('网络错误')
      })
    })

  },
  beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));

    if (oo == null) {
      next({ path: '/login' })
    }
    else {
      next()
    }
  },
  methods: {
    downP: function () {
      $('.user').css({ 'left': '5%', 'bottom': '1.6rem' });
    },
    downT: function () {
      $('.user').css({ 'left': '30%', 'bottom': '2.1rem' });
    },
    downY: function () {
      $('.user').css({ 'bottom': '3.5rem', 'left': '55%' });
    },
    downJ: function () {

      $('.user').css({ 'bottom': '6.3rem', 'left': '79%' });
    },
    imgs:function(){
        if(this.datas.user_qrcode){
          this.$router.push({ name: 'code', params: { imgUrl: this.datas.user_qrcode }})
        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spread {
  height: 100%;
  width: 100%;
  padding-bottom: 5em;
  overflow: auto;
  .spread_head {
    width: 100%;
    height: 5rem;
    background: #F6B652;
    display: flex;
    padding: 15px 0.5rem;
    .sh_l {
      flex: 0 0 3.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .sh_r {
      flex: 1;
      padding-left: 0.5rem;
      position:relative;
      .erwei{
        position:absolute;
        width:1rem;
        height:1rem;

        right:1rem;
        top:0.5rem;
        img{
          width:100%;
          height:100%;
        }
      }
      .name {
        font-size: 0.7rem;
        color: #FFFFFB;
      }
      .line {
        width: 10rem;
        height: 1px;
        background: #FFFFFB;
        margin: 0.2rem 0;
      }
      .num {
        color: #FFFFFB;
        font-size: 0.6rem;
      }
      span {
        font-size: 0.7rem;
        color: #FFFFFB;
      }
    }
  }
  .rank {
    width: 100%;
    height: 12rem;
    background: url("./bg.jpg") no-repeat center;
    background-size: 100% 12rem;
    position: relative;
    .title {
      width: 100%;
      display: flex;
      div {
        flex: 1;
        padding-left: 0.3rem;
        padding-top: 0.5rem;
        span {
          font-size: 0.6rem;
          color: #ffffff;
        }
        p {
          font-size: 0.8rem;
          color: #ffffff;
        }
      }
    }
    img {
      position: absolute;
      width: 2rem;
    }

    .user {
      width: 2.5rem;
      left: 5%;
      bottom: 1.6rem;
      z-index: 30;
      animation: mymove 2s infinite;
    }
    @keyframes mymove {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    .pu {
      width: 2.5rem;
      left: 7%;
      bottom: 1.6rem;
    }
    .tong {
      left: 32%;
      bottom: 2.3rem;
    }
    .yin {
      left: 57%;
      bottom: 3.7rem;
    }
    .jin {
      left: 81%;
      bottom: 6.5rem;
    }
  }
  .codes{
    width: 100%;
    /*height: 10rem;*/
    text-align: center;
    padding: 2rem;
    padding-bottom: 1rem;
    img{
      display: inline-block;
      width: 50%;
    }
  }
  .instruction {
    h2 {
      width: 100%;
      height: 3rem;
      border-bottom: 1px solid #dddddd;
      font-size: 0.9rem;
      line-height: 3rem;
      margin-bottom: 0.4rem;
      padding-left: 0.5rem;
    }
    h3 {
      font-size: 0.7rem;
      margin-top: 0.5rem;
      padding-left: 0.5rem;
    }
    p {
      font-size: 0.7rem;
      padding-left: 0.5rem;
    }
  }
}
</style>
