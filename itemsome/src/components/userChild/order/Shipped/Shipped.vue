<template>
  <div class="orderAlls"  v-title data-title="所有订单">


    <!--已发货-->
    <!--<div class="Shipped">
      <div class="tops">
        <div>订单编号：7898164349898999</div>
        <div>取消订单</div>
      </div>
      <div class="cont">
        <div><img src="./phc.jpg" alt=""></div>
        <div>
          <p>智能双频无线路由器</p>
          <ul>
            <li>黑色</li>
            <li>*1</li>
            <li>待收货</li>
          </ul>
        </div>
      </div>
      <div class="foots">
        <div>应付：￥5500</div>
        <div>
          <div class="aui-btn">查看物流</div>
          <div class="aui-btn aui-btn-warning">确认收货</div>
        </div>
      </div>
    </div>-->
    <div v-for="item in datas" class="Shipped">
      <div class="tops">
        <div>订单编号：{{item.order_sn}}</div>
        <div>取消订单</div>
      </div>
      <div v-for="list in item.goods_list" class="cont">
        <div>
          <img :src="list.goods_img" alt="">
        </div>
        <div>
          <p>{{list.goods_name}}</p>
          <span>{{list.spec_key_name}}</span>
          <ul>
            <!-- <li>黑色</li> -->
            <li>*{{list.goods_num}}</li>
            <li>已发货</li>
          </ul>
        </div>
      </div>
      <div class="foots">
        <div>应付：￥{{item.order_amount}}</div>
        <div>
          <div class="aui-btn">查看物流</div>
          <div class="aui-btn aui-btn-warning">确认收货</div>
        </div>
      </div>
    </div>





  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        users: [],
        datas: []
      }
    },
    created() {
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this;
      Vue.nextTick(function () {
        that.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=mobile&c=User&a=order_list",
          data: {
            user_id: that.users.user_id,
            order_status: 2
          }
        }).then(function (res) {
          that.datas = res.data
          console.log(that.datas[0])

        }).catch(function (err) {
          console.log('网络错误')
        })
      })
    }, beforeRouteEnter(to, from, next) {
      let oo = JSON.parse(localStorage.getItem("users"));
      if (oo == null) {
        next({ path: '/login' })
      }
      else {
        next()
      }
    },
    methods: {

    },beforeCreate(){
      toast.loading({
        title:"加载中",
        duration:2000
      });
    }
    ,updated(){
      toast.hide()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .orderAlls{
    background: #E5E5E5;
    padding-top: 2.5rem;

    /*已经发货*/

    .Shipped{
      font-size: 0.6rem;
      background: #ffffff;
      margin: 0.5rem 0;
      .tops{
        display: flex;
        &>div{
          &:first-child{
            flex: 1;
            padding-left: 0.5rem;

          }
          &:last-child{
            flex: 0 0 4rem;
            padding-right: 0.5rem;
            text-align: right;
          }

        }
        height: 2rem;
        line-height: 2rem;
      }
      .cont{
        width: 100%;
        display: flex;

        border-top: 1px solid #D3D3D3;
        &>div{
          &:first-child{
            flex: 0 0 5rem;
          }
          &:last-child{
            flex: 1;
            p {
              padding: 0 0.3rem 0 1rem;
              margin-top: 0.8rem;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            span{
              font-size: 0.6rem;
              padding-left: 1rem;
              white-space:nowrap;
            }
            ul{
              width: 100%;
              display: flex;
              padding: 0  0.3rem 0 1rem;
              li{
                flex: 1;
                &:nth-child(1){
                  text-align: left;
                }
                &:nth-child(2){
                  text-align: right;
                  padding-right: 0.5rem;
                  color:#62E799;
                }
              }
            }
          }
        }
      }
      .foots{
        border-top: 1px solid #D3D3D3;
        display: flex;
        &>div{
          &:first-child{
            flex: 1;
            padding-left: 0.5rem;
          }
          &:last-child{
            flex: 0 0 6rem;
            padding-right: 0.5rem;
            text-align: right;
            font-size: 0.7rem;
            display: flex;
            div{
              flex: 1;
              margin: 0.4rem 0.3rem 0 0;
              font-size: 0.6rem;
              padding: 0 0.3rem;
            }

          }

        }
        height: 2rem;
        line-height: 2rem;
      }
    }



  }

</style>
