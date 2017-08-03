<template>
  <div class="homepageC" v-title data-title="兑换商城C">
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
            <li><router-link to="/home/homepage/homepageSort">wifi放大器</router-link></li>
            <li><router-link to="/home/homepage/homepageSort">无线网卡</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">无线呼叫器</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">投影仪</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">和田玉</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">钻戒</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">铂金</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">珍珠</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">女表</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">儿童表</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">学生表</router-link> </li>
            <li><router-link to="/home/homepage/homepageSort">情侣表</router-link> </li>
          </ul>
        </transition>
      </div>

      <div  class="menu_l">
        <transition name="fadel">
          <ul v-if="showl">
            <li><router-link to="/home/homepage/homepageA">百耀商城&nbsp;A</router-link> </li>
            <li><router-link to="/home/homepage/homepageB">免费商城&nbsp;B</router-link> </li>
          </ul>
        </transition>
      </div>
    </div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/details">
          <img src="./banner@2x.jpg" alt="">
            </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <img src="./banner@2x.jpg" alt="">
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <img src="./banner@2x.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--内容-->
    <div class="home_c">
      <!--热门产品 start-->
      <div class="hot">
        <h2><i></i><span>热门产品</span></h2>
        <div class="hot_t">
          <router-link to="/details">
            <img src="./yz.jpg" alt="">
            <div class="text">
              <div>
                <span>简约咖啡厅靠背椅</span>
                <span>￥199</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="hot_b">
          <div>
            <router-link to="/details">
              <img src="./kby.jpg" alt="">
              <div>
                <span>简约咖啡厅靠背椅</span>
                <span>￥199</span>
              </div>
            </router-link>
          </div>
          <div>
            <router-link to="/details">
              <img src="./td.jpg" alt="">
              <div>
                <span>简约咖啡厅靠背椅</span>
                <span>￥199</span>
              </div>
            </router-link>
          </div>

          <div>
            <router-link to="/details">
              <img src="./td.jpg" alt="">
              <div>
                <span>简约咖啡厅靠背椅</span>
                <span>￥199</span>
              </div>
            </router-link>
          </div>
          <div>
            <router-link to="/details">
              <img src="./td.jpg" alt="">
              <div>
                <span>简约咖啡厅靠背椅简背椅简约椅简约约咖啡</span>
                <span>￥199</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!--热门产品 end-->

      <!--热门产品-->
      <div class="all">
        <h2><i></i><span>全部产品</span></h2>
        <ul class="list">
          <li>
            <router-link to="/details">
              <div class="listL">
                <img src="./sf.jpg" alt="">
              </div>
              <div class="listR">
                <p>四轴飞行遥控飞机耐摔无人机高清航拍飞行器</p>
                <div class="listRB">
                  <p class="num">库存:172</p>
                  <p class="money">￥5500</p>
                  <div class="icon"><i class="iconfont icon-gouwuche"></i></div>
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
        show: false,
        showl: false,

      }
    },
    created(){
      Vue.nextTick(function () {
        let mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          autoplay : 3000

        })

      })
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
        width: 50%;
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
            color: #FF6801;
          }
        }
        &:last-child{
          float: right;
          text-align: right;
          padding-right: 0.5rem;
          line-height: 2rem;
          i{
            font-size: 1.5rem;
            color: #FF6801;
          }

        }
      }

    }
    .swiper-container{
      padding: 2rem 0 0 0;
      width: 100%;
      .swiper-wrapper{
        width: 100%;
        .swiper-slide{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }

    .home_c {
      padding:0 0.4rem 0;
      overflow: auto;
      /*轮播图*/
      /*热门产品*/
      .hot{
        h2{
          line-height: 2rem;
          height: 2rem;
          span{
            display: inline-block;
            font-size: 0.8rem;
            font-weight: bold;
          }
          i{
            display: inline-block;
            width: 0.3rem;
            height: 1rem;
            background: #FF6801;
            vertical-align: middle;
            margin-right: 0.5rem;
          }
        }
        .hot_t{
          position: relative;
          width: 100%;
          img{
            width: 100%;
          }
          .text{
            width: 100%;
            height: 2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            line-height: 2rem;
            div{
              width: 100%;
              height: 2rem;
              display: flex;
              background: rgba(255,255,255,0.4);
              span{
                flex: 1;
                &:first-child{
                  padding-left: 1rem;
                }
                &:last-child{
                  color: #FF6801;
                  text-align: right;
                  padding-right: 1rem;
                  font-size: 1.1rem;
                }
              }
            }
          }
        }
        .hot_b{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          &>div{
            width: 50%;
            position: relative;
            img{
              width: 100%;
              padding: 0.3rem 0.2rem;
            }

            div{
              position: absolute;
              bottom: 0.3rem;
              left: 0;
              width: 100%;
              padding: 0.2rem;
              display: flex;
              background: rgba(255,255,255,0.4);
              height: 2rem;
              span{
                font-size: 0.6rem;
                height: 1.6rem;
                line-height: 1.6rem;
                &:first-child{
                  flex: 1;
                  text-align: left;
                  padding-left: 0.3rem;
                  overflow: hidden;
                  text-overflow:ellipsis;
                  white-space: nowrap;
                }
                &:last-child{
                  flex: 0 0 3rem;
                  color: #FF6801;
                  font-size: 0.8rem;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .all{
        h2{
          line-height: 2rem;
          height: 2rem;
          span{
            display: inline-block;
            font-size: 0.8rem;
            font-weight: bold;
          }
          i{
            display: inline-block;
            width: 0.3rem;
            height: 1rem;
            background: #FF6801;
            vertical-align: middle;
            margin-right: 0.5rem;
          }
        }
        .list {
          li {
            border-radius: 5px;
            margin-bottom: 0.5rem;
            box-shadow: 0 0 5px 3px #ccc;
            width: 100%;
            a{
              width: 100%;
              display: flex;
            }
            .listL {
              flex: 0 0 5rem;
              img {
                width: 100%;
              }
            }
            .listR {
              flex: 1;
              padding: 0.4rem;
              & > p {
                height: 2.5rem;
                font-size: 0.7rem;
              }

              .listRB {
                position: relative;
                .num {
                  font-size: 0.6rem;
                }
                .money {
                  font-size: 0.8rem;
                  font-weight: bold;
                  color: #FF6801;
                }
                .icon {
                  position: absolute;
                  right: 0;
                  top: 0.3rem;
                  width: 1.4rem;
                  height: 1.4rem;
                  background: #FF6801;
                  border-radius: 50%;
                  text-align: center;
                  line-height: 1.4rem;
                  i {
                    color: #ffffff;
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
