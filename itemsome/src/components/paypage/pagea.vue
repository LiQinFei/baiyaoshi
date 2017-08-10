<template>
  <div class="paypage"  v-title data-title="支付">
    <ul class="tops">
      <li>
        <div>
          {{dataadd.consignee}}
        </div>
        <div>
          <p>{{dataadd.mobile}}</p>
          <p>{{dataadd.address}}</p>
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
          <p class="pri">￥ 1680.00</p>
          <span>*1</span>
      </div>
    </div>
    <div class="list">
      <ul>

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
        <!--<li>-->
          <!--<div>发票类型</div>-->
          <!--<div>电子发票</div>-->
        <!--</li>-->
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
          qwerqwre:"0",
          datas:[],
          datagoods:[],
          dataadd:[]
        }
    },beforeCreate(){
    toast.loading({
      title:"加载中",
      duration:2000
    });
  },computed:{

    }
  ,updated(){
    toast.hide()
  },
    created() {
    this.users = JSON.parse(localStorage.getItem("users"));
    let that = this;
        that.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=Mobile&c=user&a=shop_a",
          data: {
            user_id: that.users.user_id,
            goods_id: that.$route.params.id
          }
        }).then(function (res) {
          that.datagoods = res.data.goods
          if(res.data.address ==null){
            that.dataadd = ''
          }else {
            that.dataadd = res.data.address
          }
          console.log(that.dataadd )
          //console.log(res)
        })

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
          let that = this
      if(this.dataadd == ''){
        dialog.alert({
          title:"提示",
          msg:'请点击右上角增加收货地址',
          buttons:['确定']

        },function(ret){
        })
      }else {
        toast.loading({
          title:"正在加载",
          duration:1000
        });
        this.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=Mobile&c=user&a=add_order",
          data: {
            user_id: that.users.user_id,
            goods_id: that.$route.params.id,
            type:1
          }
        }).then(function (res) {
          // that.nums = res.data
          toast.hide();
          console.log(res)
          // console.log(that.nums)

          if(res.data.status == 1){
           /* toast.success({
              title:'已购买成功',
              duration:2000
            });*/
            that.$router.push('/codepay')
          }

        })


      }



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
