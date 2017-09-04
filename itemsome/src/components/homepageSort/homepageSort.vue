<template>
  <div class="homepageC" v-title data-title="商城C">
    <div class="navs_warp">
      <div class="navs">
        <div v-on:click="showl = !showl">
            <i class="iconfont icon-iconfont303"></i>
        </div>
        <div  v-on:click="show = !show">
          <i class="iconfont icon-daohang"></i>
        </div>
      </div>
      <div  class="menu_r">
        <transition name="fade">
        <ul v-if="show">
          <li v-for="item in datasList">
              <router-link v-bind='{to:"/home/homepage/homepageSort/"+item.id +"/"+ item.mobile_name }'>{{item.mobile_name}}</router-link>
            </li>
        </ul>
        </transition>
     </div>
      <div  class="menu_l">
        <transition name="fadel">
          <ul v-if="showl">
            <li><router-link to="/home/homepage/homepageA">A商城</router-link> </li>
            <li><router-link to="/home/homepage/homepageB">B商城</router-link> </li>
            <li><router-link to="/home/homepage/homepageC">C商城</router-link> </li>
          </ul>
        </transition>
      </div>
    </div>
    <!--内容-->
    <div class="home_c">
      <!--热门产品 end-->
      <!--热门产品-->
      <div class="all">
      <h2>
        <i></i><span>{{name}}</span>
        <!-- <div><span>价格↑</span><span>销量↓</span></div> -->
      </h2>
      <ul class="list">
       <li v-for="item in datasall">
            <router-link v-bind='{to:"/details/"+item.goods_id+"/B"}'>
              <div class="listL">
                <img v-bind='{src:"http://www.xzljszm.top/"+item.original_img}' alt="">
              </div>
              <div class="listR">
                <p>{{item.goods_name}}</p>
                <div class="listRB">
                  <p class="num">库存:{{item.store_count}}</p>
                  <p class="money">￥{{item.shop_price}}</p>
                  <div class="icon" @click.prevent="gowu(item.goods_id)"><i class="iconfont icon-gouwuche"></i></div>
                </div>
              </div>
            </router-link>
          </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
        return{
          datasList:[],
            users : [],
          show: false,
          showl: false,
          datasall:[],
          name:'',
        }
    },beforeCreate(){
      toast.loading({
        title : "加载中",
        duration : 2000
      });
    }
    , updated(){
      toast.hide()
    },
    created(){
      this.name =  this.$route.params.name
      Vue.nextTick(function () {
        let mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          autoplay : 3000

        })
      })
      this.users = JSON.parse(localStorage.getItem("users"))
      this.getdata()
     this.getdatas()
    }, methods : {
 gowu(id){
        let that = this
       

        if(this.users == null){
          dialog.alert({
            title : "提示",
            msg : '请先登录',
            buttons : ['确定']
          }, function(ret){
            if(ret.buttonIndex == 1){
              that.$router.push({path : '/login'})
            }
          })
        } else {
          toast.loading({
            title : "加载中",
            duration : 2000
          });
          that.$http({
            method : 'post',
            url : commonUrl + api + "/index.php?m=mobile&c=User&a=goods_add",
            data : {
              user_id : that.users.user_id,
              goods_id : id
            }
          }).then(function(res){
         
            toast.hide();
            if(res.data.status == 1){
              dialog.alert({
                title : "增加成功",
                msg : '商品已成功加入购物车',
                buttons : ['再逛逛', '去购物车']
              }, function(ret){
                if(ret.buttonIndex == 2){
                  that.$router.push({path : '/goodcar'})
                }
              })
            } else {
              toast.fail({
                title : res.data.msg,
                duration : 2000
              });
            }
          })
        }
      },

      getdata(){
        let that = this
          that.$http({
            method : 'post',
            url : commonUrl + api + "/index.php?m=mobile&c=goods&a=class_goods_list",
            data : {
              id : that.$route.params.id
            }
          }).then(function(res){
              that.datasall = res.data
          })
        },
        getdatas : function(){
        let that = this
        this.$http({
          method : 'post',
          url : commonUrl + api + "/index.php?m=Mobile&c=goods&a=categoryList"
        }).then(function(res){
          // that.nums = res.data
          // console.log(that.nums)

          that.datasList = res.data[0]
        
          console.log(that.datasList)
        

        }).catch(function(err){
      
        })
      }
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform:translateY(-10rem);
  }
  .fadel-enter-active, .fadel-leave-active {
    transition: all .5s
  }
  .fadel-enter, .fadel-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform:translateX(-200%);
  }
  .homepageC {
    background: #ffffff;
    height: 100%;
    width: 100%;
    overflow: auto;
    .navs_warp{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2rem;
      z-index: 200;
      .menu_r{
        position: absolute;
        width: 100%;
        z-index: 100;
        top: 2rem;
        left: 0;
        overflow: hidden;
        ul{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          background: #ffffff;
          z-index: 0;
          li{
            width: 25%;
            text-align: center;
            height: 1.6rem;
            a{
              display: inline-block;
              padding: 0 0.6rem;
              border: 1px solid #dddddd;
              border-radius: 15px;
              font-size: 0.6rem;
            }
          }
        }
      }
      .menu_l{
        position: absolute;
        width: 60%;
        z-index: 20;
        top: 0;
        left: 15%;
        overflow: hidden;
        ul{
          width: 100%;
          background: #ffffff;
          z-index: 0;
          display: flex;
          li{

            flex: 1;
            text-align: center;
            height: 1.6rem;
            a{
              display: inline-block;
              padding: 0.1rem 0.3rem;
              border: 1px solid #dddddd;
              border-radius: 15px;
              font-size: 0.6rem;
              margin-top: 0.4rem;
            }
          }
        }
      }

    }
    .navs {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      position: fixed;
      z-index: 2;
      top: 0;
      border-bottom: 1px solid #dddddd;

      div{
      width: 3rem;
        height:2rem;
        &:first-child{
          padding-left: 0.5rem;
          text-align: left;
          line-height: 2rem;
          float: left;
          i{
            font-size: 1.5rem;
            color: #ff6801;
          }
        }
        &:last-child{
      display: none;
          float: right;
          text-align: right;
          padding-right: 0.5rem;
          line-height: 2rem;
          i{
            font-size: 1.5rem;
            color: #ff6801;
          }

        }
      }

    }


    .home_c {
      padding:1.7rem 0.4rem 0;
      overflow: auto;
      /*轮播图*/
      /*热门产品*/
      .all{
        h2{
          position: relative;
          line-height: 2rem;
          height: 2rem;
          &>span{
            display: inline-block;
            font-size: 0.8rem;
            font-weight: bold;
          }
          i{
            display: inline-block;
            width: 0.3rem;
            height: 1rem;
            background: #ff6801;
            vertical-align: middle;
            margin-right: 0.5rem;
          }
          div{
            position: absolute;
            right: 0.3rem;
            top: 0;
            span{
              margin: 0 0.2rem;
              font-size: 0.7rem;
              font-weight: bold;
            }
          }

        }
         .list{
          li{
            border-radius:5px;
            margin-bottom:0.5rem;
            box-shadow:0 0 5px 3px #ccc;
            width:100%;
            a{
              width:100%;
              display:flex;
            }
            .listL{
              flex:0 0 5rem;
              img{
                width:100%;
                border-radius:5px 0 0 5px;
              }
            }
            .listR{
              flex:1;
              padding:0.4rem;
              & > p{
                font-size:0.7rem;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
              }

              .listRB{
                position:relative;
                .num{
                  font-size:0.6rem;
                }
                .money{
                  font-size:0.8rem;
                  font-weight:bold;
                  color:#ff6801;
                }
                .icon{
                  position:absolute;
                  right:0;
                  top:0.3rem;
                  width:1.4rem;
                  height:1.4rem;
                  background:#ff6801;
                  border-radius:50%;
                  text-align:center;
                  line-height:1.4rem;
                  i{
                    color:#ffffff;
                  }
                }
              }
            }
          }
        }
      }

    }
  }
</style>
