<template>
  <div class="orderAlls"  v-title data-title="已完成">
      <!--已完成-->
  <!--  <div class="finish" v-for="(item,index) in datas">
      <div class="tops">
        <div>{{item.order}}</div>
        <div><i class="iconfont icon-msnui-trash" @click="removes(index)"></i></div>
      </div>
      <div class="cont">
        <div><img :src="item.urls" alt=""></div>
        <div>
          <p>{{item.title}}</p>
          <ul>
            <li>{{item.color}}</li>
            <li>{{item.num}}</li>
            <li>{{item.zhuang}}</li>
          </ul>
        </div>
      </div>
      <div class="foots">
        <div>{{item.fukuan}}</div>
        <div>
          <i class="iconfont icon-kefu"></i>
          售后联系</div>
      </div>
    </div>-->

    <div v-for="item in datas" @click="xiangqing(item.order_id)" class="finish">
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
            order_status: 3
          }
        }).then(function (res) {
          that.datas = res.data


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
    },beforeCreate(){
    toast.loading({
      title:"加载中",
      duration:2000
    });
  }
  ,updated(){
    toast.hide()
  },
    methods: {
      removes: function (index) {
        let dom = $('.finish');
        /*  $(e.target).parents('.finish').remove()*/
        dom.eq(index).hide(500);
      }, xiangqing(id){
      
       this.$router.push({name : 'delist', params : {ordid : id}})
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .orderAlls{
    background: #E5E5E5;
    padding-top: 2.5rem;


    /*已完成*/
    .finish{
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
            i{
              font-size: 1.2rem;
            }
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
            p{
              padding: 1rem 0.3rem 0.5rem 1rem;
            }
            ul{
              width: 100%;
              display: flex;
              padding: 0  0.3rem 0 1rem;
              li{
                flex: 1;
                &:nth-child(2){
                  text-align: center;
                }
                &:nth-child(3){
                  text-align: right;
                  padding-right: 0.5rem;
                  color:#BCBCBC;
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
            i{
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


  }

</style>
