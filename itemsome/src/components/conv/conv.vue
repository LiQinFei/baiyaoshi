<template>
  <div class="conv" v-title data-title="便民">
    <div class="heads_warp">
      <div class="heads">
        <h2>信用卡、现金贷款、保险办理等业务</h2>
        <p>业务办理不收取任何费用，谨防电话诈骗</p>
      </div>
    </div>
    <router-link to="/conv1">
      <div class="xyk box">
        <img src="./xyk_02.jpg" alt="">
        <h2>信用卡</h2>
        <p>2515&nbsp;1256&nbsp;3652&nbsp;1252&nbsp;215</p>
      </div>
    </router-link>
    <router-link to="/conv2">
      <div class="xyjk box">
        <img src="./wd_02.jpg" alt="">
        <h2>信用借款</h2>
        <p class="one">无抵押 零担保</p>
        <p class="two">月入2000即可申请</p>
        <div class="rit">
          <p>额度高|最高申请500万</p>
          <p>费率低|月费率低至0.5%</p>
          <p>放款快|最快一天到账</p>
        </div>
      </div>
    </router-link>
   <!-- <div class="bxk box">
      <img src="./bx_02.jpg" alt="">
      <h2>保险卡</h2>
      <p>00000000000000</p>
    </div>-->
    </div>

</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .conv{
    background: #ffffff;
    padding-bottom: 2.5rem;
    overflow: auto;
    .heads_warp{
      padding: 0.5rem;
      width: 100%;
      .heads{
        text-align: center;
        width: 100%;
        height: 3rem;
        box-shadow: 0 2px 10px 0 #dddddd;
        h2{
          padding-top: 0.4rem;
          font-size: 0.7rem;
          font-weight: bold;
        }
        p{
          font-size: 0.6rem;
        }
      }
    }
    .box{
      width: 100%;
      margin-bottom: 0.5rem;
      position: relative;
      img{
        width: 100%;
      }
    }
    .xyk{
      h2{
        position: absolute;
        left: 2rem;
        top: 1rem;
        color: #ffffff;
      }
      p{
        position: absolute;
        left: 2rem;
       bottom: 1rem;
        color: #ffffff;

      }
    }
    .xyjk{
      h2{
        position: absolute;
        left: 1rem;
        top: 20%;
        color: #ffffff;
      }

      .one{
        position: absolute;
        color: #ffffff;
        left: 1rem;
        top: 50%;
        font-size: 0.7rem;

      }

      .two{
        position: absolute;
        color: #ffffff;
        left: 1rem;
        top: 65%;
        font-size: 0.7rem;
      }
      .rit{
        position: absolute;
        top: 30%;
        right: 5%;
        p{
          font-size: 0.6rem;
          color: #ffffff;
          line-height: 1rem;
        }
      }
    }
    .bxk{
      h2{
        position: absolute;
        left: 2rem;
        top: 1rem;
        color: #ffffff;
      }
      p{
        position: absolute;
        left: 2rem;
        bottom: 1rem;
        color: #ffffff;

      }
    }
  }

</style>
