<template>
  <div class="details" v-title data-title="商品详情">
    <div v-if="boos == true">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./banner_1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./banner_2.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="infor">
        <h2> 百耀 移动WiFi</h2>
        <p>私人专属 安全加密</p>
        <p class="cost">￥1680</p>
      </div>
      <div class="image_text">
        <h2>图文详情</h2>
        <img src="./1.jpg" alt=""> <img src="./2.jpg" alt=""> <img src="./3.jpg" alt=""> <img src="./4.jpg" alt="">
        <img src="./5.jpg" alt=""> <img src="./6.jpg" alt=""> <img src="./7.jpg" alt=""> <img src="./14.jpg" alt="">
        <img src="./15.jpg" alt=""> <img src="./8.jpg" alt=""> <img src="./9.jpg" alt=""> <img src="./10.jpg" alt="">
        <img src="./11.jpg" alt=""> <img src="./12.jpg" alt=""> <img src="./13.jpg" alt="">
      </div>
    </div>
    <div v-else>
      <div v-html="datas">
        {{datas}}
      </div>
    </div>
    <div class="pay">
      <div class="aui-btn-block" @click="bay">立即购买</div>
      <div class="aui-btn-block" @click="gowu(id)" v-if="(id != 'baiyao')">加入购物车</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    data(){
      return {
        users : [],
        datas : '',
        boos : '',
        id : ''
      }
    }, beforeCreate(){
      toast.loading({
        title : "加载中",
        duration : 2000
      });
    }
    , updated(){
      toast.hide()
    },
    created(){
      let that = this
      this.id = that.$route.params.id
      this.users = JSON.parse(localStorage.getItem("users"));
      Vue.nextTick(function(){
        let mySwiper = new Swiper('.swiper-container', {
          direction : 'horizontal',
          loop : true,
          pagination : '.swiper-pagination',
          autoplay : 3000
        })

        if(that.$route.params.id == 'baiyao'){
          toast.hide()
        }

      })   
      if(this.$route.params.id == 'baiyao'){
        this.boos = true;
      } else {
        this.boos = false;
        this.getData();
      }

    }, methods : {

      bay()
      {
        if(this.users == null){
          this.$router.push('/login')
        } else {
          //this.$router.push('/paypage')
          if(this.$route.params.ids == 'A'){
            this.$router.push({name : 'pagea', params : {id : this.id,ids:this.$route.params.ids}})
          } else {
            this.$router.push({name : 'paypage', params : {id : this.id,ids:this.$route.params.ids}})
          }

        }
      }, getData(){
        let that = this
        this.$http({
          method : 'post',
          url : commonUrl + api + "/index.php?m=Mobile&c=user&a=goods_detial",
          data : {
            goods_id : this.$route.params.id
          }
        }).then(function(res){
        

          let zhuan = res.data.goods_content
         


          function unescape(str){
            var elem = document.createElement('div')
            elem.innerHTML = str
            return elem.innerText || elem.textContent
          }

          that.datas = unescape(zhuan)
        }).catch(function(err){
         
        })
      }, gowu(id){
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
                title : '加入购物车失败',
                duration : 2000
              });
            }
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .details{
    padding-bottom:2.5rem;
    background:#f7f7f7;
    .swiper-slide{
      width:100%;
      img{
        width:100%;
      }
    }
    .infor{
      background:#ffffff;
      h2{
        text-align:center;
        font-size:0.7rem;
        margin-top:0;
        font-weight:bold;
        line-height:2rem;
      }
      p{
        text-align:center;
        font-size:0.6rem;
        margin-bottom:0.5rem;
      }
      .cost{
        font-size:0.9rem;
        color:#fae487;
      }
    }

    .image_text{
      width:100%;
      margin-top:0.5rem;
      background:#ffffff;
      img{
        width:100%;
      }
      h2{
        text-align:center;
        font-size:0.8rem;
        font-weight:bold;
        line-height:2rem;
      }
    }
    .pay{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      display:flex;
      div{
        background:#ff6801;
        color:#ffffff;
        flex:1;
        display:inline-block;
        text-align:center;
        &:last-child{
          background:rgba(249, 136, 59, 1);
        }

      }
    }
  }

</style>
