<template>
  <div class="orderAlls" v-title data-title="所有订单">

    <div v-for="item in datas" class="lists">
      <!--待付款-->
      <div v-if="item.order_status == 0" @click="xiangqing(item.order_id)"  class="waitPay">
        <div class="tops">
          <div>订单编号：{{item.order_sn}}</div>
          <div>取消订单</div>
        </div>
        <div v-for="list in item.goods_list" class="cont">
          <div>
            <img :src="list.goods_img" alt="">
          </div>
          <div>
            <p> {{list.goods_name}}</p>
            <span>{{list.spec_key_name}}</span>
            <ul>
               <!-- <li>黑色</li>  -->
              <li>*{{list.goods_num}}</li>
              <li>待付款</li>
            </ul>
          </div>
        </div>
        <div class="foots">
          <div>应付：￥{{item.order_amount}}</div>
          <div>
            <router-link to="/paypage">
              <div class="aui-btn aui-btn-danger">付款</div>
            </router-link>

          </div>
        </div>
      </div>

      <!--待发货-->
      <div v-else-if="item.order_status == 1"  @click="xiangqing(item.order_id)" class="waitSend">
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
              <!-- <li>白色</li> -->
              <li>*{{list.goods_num}}</li>
              <li>待发货</li>
            </ul>
          </div>
        </div>
        <div class="foots">
          <div>应付：￥{{item.order_amount}}</div>
          <div>
            <i class="iconfont icon-kefu"></i>
            售后联系</div>
        </div>
      </div>

      <!--已完成-->
      <div v-else-if="item.order_status == 3"  @click="xiangqing(item.order_id)"  class="finish">
        <div class="tops">
          <div>订单编号：{{item.order_sn}}</div>
          <div>
            <i class="iconfont icon-msnui-trash" @click="removes"></i>
          </div>
        </div>
        <div v-for="list in item.goods_list" class="cont">
          <div>
            <img :src="list.goods_img" alt="">
          </div>
          <div>
            <p>{{list.goods_name}}</p>
            <span>{{list.spec_key_name}}</span>
            <ul>
              <!-- <li>蓝色</li> -->
              <li>*{{list.goods_num}}</li>
              <li>已完成</li>
            </ul>
          </div>
        </div>
        <div class="foots">
          <div>应付：￥{{item.order_amount}}</div>
          <div>
            <i class="iconfont icon-kefu"></i>
            售后联系</div>
        </div>
      </div>

      <!--已发货-->
      <div v-else-if="item.order_status == 2"  @click="xiangqing(item.order_id)"  class="Shipped">
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
          user_id: that.users.user_id
        }
      }).then(function (res) {
        that.datas = res.data
        console.log(that.datas)
     

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
    removes: function (e) {
      $(e.target).parents('.finish').hide(500);
    }, xiangqing(id){
      
       this.$router.push({name : 'delist', params : {ordid : id}})
    }
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
.orderAlls {
  background: #E5E5E5;
  padding-top: 2.5rem;
  .lists{
    margin-bottom: 0.5rem;
  }
  /*已付款*/
  .waitPay {
    background: #ffffff;
    font-size: 0.6rem;
    .tops {
      display: flex;
      &>div {

        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 4rem;
          padding-right: 0.5rem;
          text-align: right;
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
    .cont {
      width: 100%;
      display: flex;
      border-top: 1px solid #D3D3D3;
      // border-bottom: 1px solid #D3D3D3;
      &>div {
        &:first-child {
          flex: 0 0 5rem;
        }
        &:last-child {
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
          ul {
            width: 100%;
            display: flex;
            padding: 0 0.3rem 0 1rem;
            li {
              flex: 1;
              &:nth-child(1) {
                text-align: left;
              }
              &:nth-child(2) {
                text-align: right;
                padding-right: 0.5rem;
                color: #FEADAD;
              }
            }
          }
        }
      }
    }
    .foots {
      display: flex;
      border-top: 1px solid #D3D3D3;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 4rem;
          padding-right: 0.5rem;
          text-align: right;
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
  }

  /*待发货*/
  .waitSend {
    background: #ffffff;
    font-size: 0.6rem;
    margin: 0.5rem 0;
    .tops {
      display: flex;
      &>div {

        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 4rem;
          padding-right: 0.5rem;
          text-align: right;
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
    .cont {
      width: 100%;
      display: flex;
      border-top: 1px solid #D3D3D3;
      // border-bottom: 1px solid #D3D3D3;
      &>div {
        &:first-child {
          flex: 0 0 5rem;
        }
        &:last-child {
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
          ul {
            width: 100%;
            display: flex;
            padding: 0 0.3rem 0 1rem;
            li {
              flex: 1;
              &:nth-child(1) {
                text-align: left;
              }
              &:nth-child(2) {
                text-align: right;
                padding-right: 0.5rem;
                color: #F9D950;
              }
            }
          }
        }
      }
    }
    .foots {
      border-top: 1px solid #D3D3D3;
      display: flex;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 6rem;
          padding-right: 0.5rem;
          text-align: right;
          font-size: 0.7rem;
          i {
            font-size: 1rem;
            vertical-align: middle;
            margin-right: 0.3rem;
          }
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
  }


  /*已完成*/
  .finish {
    font-size: 0.6rem;
    background: #ffffff;
    margin: 0.5rem 0;
    .tops {

      display: flex;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 4rem;
          padding-right: 0.5rem;
          i {
            font-size: 1.2rem;
          }
          text-align: right;
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
    .cont {
      width: 100%;
      display: flex;
      border-top: 1px solid #D3D3D3;
      // border-bottom: 1px solid #D3D3D3;
      &>div {
        &:first-child {
          flex: 0 0 5rem;
        }
        &:last-child {
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
          ul {
            width: 100%;
            display: flex;
            padding: 0 0.3rem 0 1rem;
            li {
              flex: 1;
              &:nth-child(1) {
                text-align: left;
              }
              &:nth-child(2) {
                text-align: right;
                padding-right: 0.5rem;
                color: #BCBCBC;
              }
            }
          }
        }
      }
    }
    .foots {
      border-top: 1px solid #D3D3D3;
      display: flex;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 6rem;
          padding-right: 0.5rem;
          text-align: right;
          font-size: 0.7rem;
          i {
            font-size: 1rem;
            vertical-align: middle;
            margin-right: 0.3rem;
          }
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
  }

  /*已经发货*/
  .Shipped {
    font-size: 0.6rem;
    background: #ffffff;
    margin: 0.5rem 0;
    .tops {
      display: flex;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 4rem;
          padding-right: 0.5rem;
          text-align: right;
        }
      }
      height: 2rem;
      line-height: 2rem;
    }
    .cont {
      width: 100%;
      display: flex;
      border-top: 1px solid #D3D3D3;
      // border-bottom: 1px solid #D3D3D3;
      &>div {
        &:first-child {
          flex: 0 0 5rem;
        }
        &:last-child {
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
          ul {
            width: 100%;
            display: flex;
            padding: 0 0.3rem 0 1rem;
            li {
              flex: 1;
              &:nth-child(1) {
                text-align: left;
              }
              &:nth-child(2) {
                text-align: right;
                padding-right: 0.5rem;
                color: #62E799;
              }
            }
          }
        }
      }
    }
    .foots {
      border-top: 1px solid #D3D3D3;
      display: flex;
      &>div {
        &:first-child {
          flex: 1;
          padding-left: 0.5rem;
        }
        &:last-child {
          flex: 0 0 6rem;
          padding-right: 0.5rem;
          text-align: right;
          font-size: 0.7rem;
          display: flex;
          div {
            flex: 1;
            margin: 0.2rem 0.3rem 0 0;
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
