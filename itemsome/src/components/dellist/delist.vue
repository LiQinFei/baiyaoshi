<template>
  <div class="paypage"  v-title data-title="订单详情">
    <div class="aui-content aui-margin-b-15">
    <ul class="aui-list aui-list-in">
        <li class="aui-list-header">
          订单详情
        </li>
         <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                    收货人：{{datas.consignee}}
                </div>
            </div>
          </li>
           <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                    联系电话：{{datas.mobile}}
                </div>
            </div>
          </li>
          <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                    收货地址：{{datas.address}}
                </div>
            </div>
          </li>
          <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                    订单号：{{datas.order_sn}}
                </div>
            </div>
          </li>
        <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                  下单时间： {{datas.add_time}}
                </div>
            </div>
        </li>
          <li class="aui-list-item" >
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">
                    发货时间：{{datas.shipping_time}}
                </div>
            </div>
          </li>

            <li class="aui-list-item" v-if="datas.order_status == 0">
              <div class="aui-list-item-inner">
                  <div class="aui-list-item-title">
                      订单状态：未付款
                  </div>
              </div>
            </li>
             <li class="aui-list-item" v-else="datas.order_status == 1">
              <div class="aui-list-item-inner">
                  <div class="aui-list-item-title">
                      订单状态：已付款
                  </div>
              </div>
            </li>
             <li class="aui-list-item" v-else="datas.order_status == 2">
              <div class="aui-list-item-inner">
                  <div class="aui-list-item-title">
                      订单状态：已发货
                  </div>
              </div>
            </li>
             <li class="aui-list-item" v-else="datas.order_status == 3">
              <div class="aui-list-item-inner">
                  <div class="aui-list-item-title">
                      订单状态：已完成
                  </div>
              </div>
            </li>


          
       
    </ul>
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
          url : commonUrl + api + "/index.php?m=Mobile&c=user&a=order_detail",
          data : {
            user_id : that.users.user_id,
            order_id:that.$route.params.ordid
          }
        }).then(function(res){  
          console.log(res)
          that.datas = res.data
        }).catch(function(err){
       
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
    
  }

</style>
