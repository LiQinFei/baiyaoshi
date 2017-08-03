<template>
  <div class="paypage"  v-title data-title="支付">
    <ul class="tops">
      <li  v-for='(item,index) in nums'>
        <div v-on:click="addClassFun(index)">
          徐晓霞
          <div v-if="index == qwerqwre" class="aui-label aui-label-info">默认</div>
        </div>
        <div v-on:click="addClassFun(index)">
          <p>{{item.ipone}}</p>
          <p>{{item.add}}</p>
        </div>
        <div>
          <router-link to="/address">
            <i class="aui-iconfont aui-icon-pencil"></i>
          </router-link>

        </div>
      </li>
    </ul>

    <!--详情-->
    <div class="details">
      <div>
        <img src="./1.png" alt="">
      </div>
      <div>
          <h4>百耀 移动WiFi</h4>
          <p>白色</p>
          <p class="pri">￥ 1680.00</p>
          <span>*1</span>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <div>商品总额</div>
          <div>￥1680</div>
        </li>
        <li>
          <div>购买数量</div>
          <div>1</div>
        </li>
        <li>
          <div>运费</div>
          <div>￥0.00</div>
        </li>
        <li>
          <div>活动优惠</div>
          <div>￥0</div>
        </li>
        <li>
          <div>发票类型</div>
          <div>电子发票</div>
        </li>
        <li>
          <div>发票内容</div>
          <div>购买商品明细</div>
        </li>
        <li>
          <div>应付总额</div>
          <div>￥1680</div>
        </li>
      </ul>
    </div>

    <div class="foots">
      <ul>
        <li> 应付：￥1680</li>
        <li><div class="aui-btn aui-btn-danger aui-btn-block" @click="payfor">去支付</div></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
        return{
          users:[],
          nums:[
            {ipone:'15888555555',add:'广东省深圳市南山区洱海大道冰海大道87号55'}
          ],
          qwerqwre:"0"
        }




    },
    created() {
    this.users = JSON.parse(localStorage.getItem("users"));
    let that = this;
    // Vue.nextTick(function () {
    //   that.$http({
    //     method: 'post',
    //     url: commonUrl + api + "/index.php?m=home&c=User&a=order_detail",
    //     data: {
    //       user_id: that.users.user_id
    //     }
    //   }).then(function (res) {

    //     console.log(res)

    //   }).catch(function (err) {
    //     console.log('网络错误')
    //   })
    // })

  }, beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));
    if (oo == null) {
      next({ path: '/login' })
    }
    else {
      next()
    }
  }
    ,methods: {
      addClassFun: function(index) {
        this.qwerqwre = index;
      }
    ,payfor:function(){
        window.location = 'https://one.teegon.com/buy/createorder?id=05a08df24b1ce9dc726ad6a14a87098e'

       }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    background: #F2F2F2;
    .tops{
      width: 100%;
      background: #ffffff;
      li{
        width: 100%;
        display: flex;
        padding: 0.5rem 0.2rem;
        border-bottom: 1px solid #C7C7C7;
        height: 4rem;
        div{
          &:nth-child(1){
            flex: 0 0 4rem;
            padding-left: 0.2rem;
            font-size: 0.8rem;
          }
          &:nth-child(2){
            flex: 1;
            font-size: 0.6rem;
          }
          &:nth-child(3){
            flex: 0 0 3rem;
            text-align: center;
            line-height: 3rem;
            i{
              font-size: 1.5rem;
              color: #FF6801;
            }
          }
        }
      }
    }
    .details{

      background: #ffffff;
      width: 100%;
      display: flex;
      padding: 0.5rem;
      &>div{
        &:first-child{
          flex: 0 0 5rem;
          img{
            width: 100%;
          }
        }
        &:last-child{
          flex: 1rem;
          position: relative;
          h4{
            padding-left: 0.5rem;
            padding-top: 0.8rem;
            font-size: 0.7rem;
          }
          p{
            padding-left: 0.5rem;
            margin: 0.2rem 0;
          }
          .pri{
            margin-top: 1rem;
          }
          span{
            position: absolute;
            right: 0.5rem;
            top: 0.6rem;

          }
        }
      }
    }

    .list{
      background: #ffffff;
      width: 100%;
      ul{
        width: 100%;
        li{
          display: flex;
          height: 2rem;
          line-height: 2rem;
          &>div{
            &:first-child{
              padding-left: 0.5rem;
            }
            &:last-child{
              padding-right: 0.5rem;
              text-align: right;
            }
            flex: 1;
          }
        }
      }
    }
    .foots{
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      ul{
          width: 100%;
        display: flex;
        li{
          flex:1;
          &:first-child{
            line-height: 2.5rem;
            padding-left: 0.5rem;
          }
          &:last-child{
            text-align: right;
            position: relative;
            div{
             position: absolute;
              width: 6rem;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
  }

</style>
