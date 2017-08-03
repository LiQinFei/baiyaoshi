<template>
  <div class="address" v-title data-title="选择地址">
    <ul>
      <!-- <li v-for='(item,index) in nums'>
        <div v-on:click="addClassFun(index,item.address_id)">
          {{item.consignee}}
          <div v-show="item.is_default == 1" class="aui-label aui-label-info">默认</div>
        </div>
        <div v-on:click="addClassFun(index,item.address_id)">
          <p>{{item.mobile}}</p>
          <p>{{item.address}}</p>
        </div>
        <div>
          <router-link to="/editAddress">
            <i class="aui-iconfont aui-icon-pencil"></i>
          </router-link>
        </div>
      </li> -->

      <li v-for='(item,index) in nums'>
        <div class="aTop">
          <div>{{item.consignee}}</div>
          <div>{{item.mobile}}</div>
        </div>
        <div class="addre">
          {{item.address}}
        </div>
        <div class="aBut">
          <div>
          <!--  <label><input v-on:click="addClassFun(item.address_id)" class="aui-radio mor" v-model="dan" type="radio" name="moren" v-bind:value="item.is_default" > 默认地址</label>-->
            <label><input v-on:click="addClassFun(item.address_id)" v-bind:checked="item.is_default" class="aui-radio"  type="radio" name="radio"> 默认地址</label>
          </div>
          <div>
            <router-link to="/editAddress">
            <div><i class="aui-iconfont aui-icon-edit"></i><span>编辑</span> </div>
            </router-link>
            <div v-on:click="dels(item.address_id,$event)"> <i class="aui-iconfont aui-icon-trash"></i><span>删除</span></div>
          </div>
        </div>
      </li>

    </ul>
    <div class="foots">
      <router-link to="/editAddress">
        <div class="aui-btn aui-btn-block">新建地址</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      dan:'',
      users: [],
      nums: [],
      qwerqwre: '',
    }
},  beforeRouteEnter (to, from, next) {
      let oo = JSON.parse(localStorage.getItem("users"));
      if(oo == null ){
           next({path:'/login'})
          }
          else{
            next()
          }
  },
  created() {
    this.users = JSON.parse(localStorage.getItem("users"));
    let that = this;
    Vue.nextTick(function () {
      that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=mobile&c=User&a=address_list",
        data: {
          user_id: that.users.user_id,
        //user_id:4922
        }
      }).then(function (res) {
        that.nums = res.data
        console.log(that.nums)

      }).catch(function (err) {
        toast.fail({
          title:"网络错误",
          duration:2000
        });
      })
    })
  },beforeCreate(){
    toast.loading({
      title:"加载中",
      duration:2000
    });
  }
  ,updated(){
    toast.hide()
  }
  , methods: {
    addClassFun: function (ids) {
      toast.loading({
        title:"加载中",
        duration:2000
      });

        let that = this
        that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=mobile&c=User&a=set_default",
        data: {
          user_id: that.users.user_id,
          id:ids
        }
      }).then(function (res) {

        toast.hide();
          if(res.data.status == 1){
            toast.success({
              title:res.data.msg,
              duration:2000
            });
          }else {
            toast.fail({
              title:res.data.msg,
              duration:2000
            });
          }

      }).catch(function (err) {
         toast.fail({
            title:"网络错误",
            duration:2000
          });
      })
    },

    dels: function (ids,event) {

      let that = this


      dialog.alert({
        title:"提示",
        msg:'确定删除吗？',
        buttons:['取消','确定']
      },function(ret){
        if(ret.buttonIndex == 2){
          toast.loading({
            title:"加载中",
            duration:2000
          });

          that.$http({
            method: 'post',
            url: commonUrl + api + "/index.php?m=mobile&c=User&a=del_address",
            data: {
              user_id: that.users.user_id,
              id:ids
              //user_id:4922
            }
          }).then(function (res) {
            toast.hide();
            if(res.data.status == 1){
              toast.success({
                title:res.data.msg,
                duration:2000
              });
              $(event.target).parents('li').hide(500)
            }else {
              toast.fail({
                title:res.data.msg,
                duration:2000
              });
            }
          }).catch(function (err) {
              toast.hide()
            toast.fail({
              title:"网络错误",
              duration:2000
            });
          })
        }
      })



    }




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.address {
  height:100%;
  background: rgba(217, 217, 217, 0.55);
  overflow:auto;
  padding-bottom: 3rem;
  ul {

    width: 100%;
      li{
        width:100%;
        background:#ffffff;
        margin-bottom:0.5rem;
          .aTop{
            width:100%;
            display:flex;
            padding:0.5rem 0.5rem 0.2rem 0.5rem;
            div{
              flex:1;

              &:first-child{
                text-align:left;
                font-size:0.7rem;
              }
              &:last-child{
                text-align:right;
                font-size:0.7rem;
              }
            }
          }
        .addre{
          padding:0.1rem 0.5rem 0.2rem 0.5rem;
          width:100%;

          font-size:0.7rem;
          border-bottom:1px solid #dddddd;
        }
        .aBut{
          width:100%;
          height:1.5rem;
          display:flex;
          padding: 0 0.5rem;
         &>div{
           flex:1;
           &:first-child{
              font-size:0.7rem;
             line-height:1.5rem;
             input{
               width:0.8rem;
               height:0.8rem;
               line-height:0.8rem;
                margin-top:0.3rem;
             }
           }
           &:last-child{
             div{
               float:right;
               display:inline-block;
               font-size:0.7rem;
               line-height:1.5rem;
               margin-left:0.5rem;
               span{
                margin-left:0.2rem;
               }
             }
           }
         }
        }
      }



    // li {
    //   width: 100%;
    //   display: flex;
    //   padding: 0.5rem 0.2rem;
    //   border-bottom: 1px solid #eeeeee;
    //   height: 4rem;
    //   div {

    //     &:nth-child(1) {
    //       flex: 0 0 4rem;
    //       padding-left: 0.2rem;
    //       font-size: 0.8rem;
    //     }
    //     &:nth-child(2) {
    //       flex: 1;
    //       font-size: 0.6rem;
    //     }
    //     &:nth-child(3) {
    //       flex: 0 0 3rem;
    //       text-align: center;
    //       line-height: 3rem;
    //       i {
    //         font-size: 1.5rem;
    //         color: #FF6801;
    //       }
    //     }
    //   }
    // }
  }
  .foots {
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    div {
      background: #FF6801;
      color: #ffffff;
    }
  }
}
</style>
