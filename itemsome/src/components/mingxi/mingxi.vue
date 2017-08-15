<template>
  <div class="paypage" v-title data-title="账户明细">


    <div class="aui-content aui-margin-b-15">
      <ul class="aui-list aui-list-in">
        <li class="aui-list-header">
          账户明细：
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              账户总金额：￥<span>{{datas.count}}</span>
            </div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              一级推广员分配红利：￥<span>{{datas.first}}</span>

            </div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              二级推广员分配红利：￥<span>{{datas.second}}</span>

            </div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              三级推广员分配红利：￥<span>{{datas.third}}</span>

            </div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              剩余金豆数目：￥<span>{{datas.share_bean}}</span>

            </div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              剩余积分：￥<span>{{datas.share_car}}</span>

            </div>
          </div>
        </li>

      </ul>
    </div>


<div class="inputs">
  <input type="number" placeholder="请输入提现金额" v-model="moneys">
</div>

<div class="butt">
  <div class="aui-btn" @click="tixian">申请提现</div>
</div>


  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
      return {
        url: '',
        users: [],
        datas: '',
        moneys:''
      }
    }
    , beforeCreate(){
      toast.loading({
        title: "加载中",
        duration: 2000
      });
    }
    , updated(){
      toast.hide()
    },
    created() {
      /*轮播图的字动*/
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this;

      that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=Mobile&c=user&a=user_account",
        data: {
          user_id: that.users.user_id
        }
      }).then(function (res) {

        console.log(res.data[0])
        that.datas = res.data[0]
      }).catch(function (err) {
        console.log('网络错误')
      })

    },methods:{
      tixian(){
       this.$http({
         method: 'post',
         url: commonUrl + api + "/index.php?m=Mobile&c=user&a=withdrawals",
         data: {
           user_id: this.users.user_id,
           money:this.moneys
         }
       }).then(function (res) {
          if(res.data.status==1){
            toast.success({
              title:res.data.msg,
              duration:2000
            });
          }else{
            toast.fail({
              title:res.data.msg,
              duration:2000
            });
          }
         console.log(res)
       })
     }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage {
    width: 100%;
    height: 100%;
    position: relative;
  span{
    color: #dd191b;
  }
    .inputs{
      width: 100%;
      padding-left: 1rem;
      input{
        width: 50%;
        display: inline-block;
      }
    }
    .butt{
      width: 100%;
      text-align: center;
     div{
       display: inline-block;
     }
    }
  }

</style>
