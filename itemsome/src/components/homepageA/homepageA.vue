<template>
  <div class="homepageA" v-title data-title="百耀商城A">
    <div class="nav">
      <ul class="navT">
        <li><span>百耀商城&nbsp;A</span></li>
        <li>
          <span>
            <router-link to="/home/homepage/homepageB">
                免费商城&nbsp;B
             </router-link>
          </span>
        </li>
        <li>
          <span>
            <router-link to="/home/homepage/homepageC">
              兑换商城&nbsp;C
            </router-link>
        </span>
        </li>
      </ul>
    </div>
    <!--内容-->
    <div class="home_c">
      <ul class="list">
        <li>
          <router-link to="/details/baiyao">
            <div class="listL">
              <img src="./1.png" alt="">
            </div>
            <div class="listR">
              <p>百耀 移动无限WIFI</p>
              <div class="listRB">
                <p class="num">库存:172</p>
                <p class="money">￥1680</p>
                <div class="icon"><span>购买</span></div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    /*    created(){
     Vue.directive('title', {
     inserted: function (el, binding) {
     document.title = el.dataset.title
     }
     })

     }*/
    data(){
      return {
        users : []
      }
    }, created() {

    },
    methods : {}


  }
</script><!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .homepageA{
    background:#ffffff;
    height:100%;
    width:100%;
    .nav{
      width:100%;
      height:2.5rem;
      background:#ffffff;
      position:fixed;
      z-index:2;
      top:0;
      .navT{
        width:100%;
        height:100%;
        padding:0 1rem;
        display:flex;
        li{
          flex:1;
          position:relative;
          span{
            position:absolute;
            display:inline-block;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%);
            white-space:nowrap;
            padding:0.1rem 0.4rem;
            border:1px solid #343434;
            border-radius:5px;
            font-size:0.6rem;
          }
        }
      }
    }
    .home_c{
      padding:2.6rem 0.4rem 0;
      height:100%;
      overflow:auto;

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
            }
          }
          .listR{
            flex:1;
            padding:0.4rem;
            & > p{
              height:2.5rem;
              font-size:0.7rem;
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
                top:0.6rem;
                width:3rem;
                height:1.4rem;
                color:#ff6801;
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
</style>
