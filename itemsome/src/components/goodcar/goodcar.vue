<template>
  <div class="orderAlls" v-title data-title="购物车">
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
    <div class="carin">
      <div v-for="(item,index) in datas" class="waitPay">
        <div class="cont">
          <div>
            <input class="aui-radio" type="checkbox" :value="item.goods_id" v-model="checkedNames">
          </div>
          <div>
            <img :src="item.goods_img" alt="">
          </div>
          <div>
            <div class="del" v-on:click="dels(item.goods_id,$event)"><span>删除</span></div>
            <p> {{item.goods_name}}</p>
            <ul>
              <li>￥{{item.goods_price}}</li>
              <li>
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-right">
                    <div class="aui-bar aui-bar-btn aui-bar-btn-sm" style="width:60%;float:right">
                      <div class="aui-bar-btn-item" @click="mins(index)">
                        <i class="aui-iconfont aui-icon-minus"></i>
                      </div>
                      <div class="aui-bar-btn-item">
                        {{item.goods_num}}
                      </div>
                      <div class="aui-bar-btn-item" @click="plus(index)">
                        <i class="aui-iconfont aui-icon-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foots">
        <div>

          合计：￥ {{allpri}}
        </div>
        <div @click="payfor">
          结算
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
        users : [],
        datas : [],
        num : 1,
        checkedNames : [],
        getdata : '',
        dataadd : []
      }
    }, computed : {
      allpri(){
        let allpris = 0
        let allit = this.datas
        let selit = this.checkedNames
        this.getdata = '';
        for(let i = 0; i < selit.length; i++){
          for(let y = 0; y < allit.length; y++){
            if(selit[i] == allit[y].goods_id){
              allpris = Number(allpris) + (this.datas[y].goods_num * this.datas[y].goods_price)
              /*let olone = [selit[i], this.datas[y].goods_num]*/
              /*this.getdata.push(olone)*/
              let olone = selit[i] +','+ this.datas[y].goods_num
              this.getdata = this.getdata + olone+';'
            }
          }
        }
        return Math.floor(allpris * 100) / 100
      }
    },
    created() {
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this;
        this.$http({
          method : 'post',
          url : commonUrl + api + "/index.php?m=mobile&c=User&a=goods_list",
          data : {
            user_id : that.users.user_id
          }
        }).then(function(res){
          that.datas = res.data
         
        }).catch(function(err){
          console.log('网络错误')
        })

      that.$http({
        method : 'post',
        url : commonUrl + api + "/index.php?m=Mobile&c=goods&a=detail",
        data : {
          user_id : that.users.user_id
        }
      }).then(function(res){
        if(res.data.address == null){
          that.dataadd = ''
        } else {
          that.dataadd = res.data.address
        }
      })
    }, beforeRouteEnter(to, from, next) {
      let oo = JSON.parse(localStorage.getItem("users"));
      if(oo == null){
        next({path : '/login'})
      }
      else {
        next()
      }
    },
    methods : {
      dels : function(ids, event){

        let that = this


        dialog.alert({
          title : "提示",
          msg : '确定删除吗？',
          buttons : ['取消', '确定']
        }, function(ret){
          if(ret.buttonIndex == 2){
            toast.loading({
              title : "加载中",
              duration : 2000
            });

            that.$http({
              method : 'post',
              url : commonUrl + api + "/index.php?m=mobile&c=User&a=goods_delete",
              data : {
                user_id : that.users.user_id,
                goods_id : ids
                //user_id:4922
              }
            }).then(function(res){
              toast.hide();
              if(res.data.status == 1){
                toast.success({
                  title : '删除成功',
                  duration : 2000
                });
                $(event.target).parents('.waitPay').hide(500)
              } else {
                toast.fail({
                  title : res.data.msg,
                  duration : 2000
                });
              }
            }).catch(function(err){
              toast.hide()
              toast.fail({
                title : "网络错误",
                duration : 2000
              });
            })
          }
        })


      }
      , plus(index){
        // let pri =  this.datas[index].goods_price
        let nums = this.datas[index].goods_num
        //this.datas[index].goods_price = Number(this.datas[index].goods_price) + Number(olone)
        //console.log(olone)
        this.datas[index].goods_num++;
      }, mins(index){
        //  let pri =  this.datas[index].goods_price
        let nums = this.datas[index].goods_num
        //let olone = pri/nums
        if(nums < 2){
          return false;
        }
        // this.datas[index].goods_price = Number(this.datas[index].goods_price) - Number(olone)
        this.datas[index].goods_num--;

      }
      , payfor(){
        let that = this
        if(this.dataadd == ''){
          dialog.alert({
            title : "提示",
            msg : '请点击右上角增加收货地址',
            buttons : ['确定']

          }, function(ret){
          })
        } else {
          toast.loading({
            title : "正在加载",
            duration : 1000
          });
          this.$http({
            method : 'post',
            url : commonUrl + api + "/index.php?m=Mobile&c=user&a=add_order",
            data : {
              user_id : that.users.user_id,
              goods_data:that.getdata,
              type : 2
            }
          }).then(function(res){
            toast.hide();

            // console.log(that.nums)
            if(res.data.status == 1){
              toast.success({
                title : '已购买成功',
                duration : 2000
              });
             that.$router.push('/orderAll/orderAlls')
            }else {
              toast.fail({
                title:res.data.msg,
                duration:1000
              });
            }

          }).catch(function(err){
            console.log('网络错误')
          })
        }


      }

      //console.log(e.path[6])
      //this.num ++
      /*
       }*/
    }, beforeCreate(){
      toast.loading({
        title : "加载中",
        duration : 2000
      });
    }
    , updated(){
      toast.hide()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .orderAlls{
    background:#e5e5e5;
    width:100%;
    height:100%;
    overflow:auto;
    padding-bottom:2.5rem;
    overflow:auto;

    .tops{
      width:100%;
      background:#ffffff;
      li{
        width:100%;
        display:flex;
        padding:0.5rem 0.2rem;
        border-bottom:1px solid #c7c7c7;
        height:4rem;
        div{
          &:nth-child(1){
            flex:0 0 4rem;
            padding-left:0.2rem;
            font-size:0.8rem;
          }
          &:nth-child(2){
            flex:1;
            font-size:0.6rem;
          }
          &:nth-child(3){
            flex:0 0 3rem;
            text-align:center;
            line-height:3rem;
            i{
              font-size:1.5rem;
              color:#ff6801;
            }
          }
        }
      }
    }

    /*等待付款*/
    .waitPay{
      background:#ffffff;
      font-size:0.6rem;
      margin:0.2rem 0;
      .tops{
        display:flex;
        & > div{
          &:first-child{
            flex:1;
            padding-left:0.5rem;
          }
          &:last-child{
            flex:0 0 4rem;
            padding-right:0.5rem;
            text-align:right;
          }
        }
        height:2rem;
        line-height:2rem;
      }
      .cont{
        width:100%;
        display:flex;
        border-top:1px solid #d3d3d3;
        & > div{
          &:first-child{
            flex:0 0 2rem;
            position:relative;
            input{
              display:inline-block;
              position:absolute;
              left:50%;
              top:50%;
              transform:translate(-50%, -50%);
              width:1rem;
              height:1rem;
            }
          }
          &:nth-child(2){
            flex:0 0 5rem;
          }
          &:last-child{
            flex:1;
            .del{
              width:100%;
              text-align:right;
              padding:0.3rem 1rem 0 0;
              span{
                font-size:0.7rem;
                color:red;
              }
            }
            p{
              padding:0 0.3rem 0 0.5rem;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-line-clamp:2;
              -webkit-box-orient:vertical;
            }
            span{
              font-size:0.6rem;
              padding-left:1rem;
              white-space:nowrap;
            }
            ul{
              width:100%;
              display:flex;
              padding:0 0.3rem 0 0.5rem;
              li{
                flex:1;
                &:nth-child(1){
                  text-align:left;
                  line-height:1.5rem;
                }
                &:nth-child(2){
                  /*   text-align: right;
                     padding-right: 0.5rem;
                     color: #FEADAD;*/

                  /*&>div{
                    height:1rem;
                  }*/
                  padding-right:0.5rem;
                }
              }
            }
          }
        }
      }

    }
    .foots{
      /* border-top: 1px solid #D3D3D3;
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
       line-height: 2rem;*/
      position:fixed;
      bottom:0;
      left:0;
      z-index:10;
      width:100%;
      height:2.5rem;
      display:flex;
      background:#ffffff;
      div{
        &:first-child{
          flex:1;
          line-height:2.5rem;
          font-size:0.8rem;
          padding-left:1rem;
        }
        &:last-child{
          flex:0 0 6rem;
          background:#ff6801;
          text-align:center;
          line-height:2.5rem;
          font-size:0.8rem;
        }
      }
    }
  }
</style>
