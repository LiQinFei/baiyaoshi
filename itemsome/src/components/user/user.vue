<template>
  <div class="user" v-title data-title="个人中心">
    <router-link to="/userInfor">
      <div class="user_head">
        <div class="sh_l">
          <img src="./xtx.png" alt="">
        </div>
        <div class="sh_r">
          <p class="name">Chasser</p>
          <p class="num">推广账号：by987932</p>
          <i class="aui-iconfont aui-icon-right"></i>
        </div>
      </div>
    </router-link>
    <div class="order">
      <div class="order_t">

        <div>
          <span>我的订单</span>
        </div>
        <div>
          <router-link to="/orderAll/orderAlls">
            <span>全部订单</span>
            <i class="aui-iconfont aui-icon-right"></i>
          </router-link>
        </div>

      </div>
      <div class="order_con">
        <ul>
          <li>
            <router-link to="/orderAll/waitPay">
              <i class="iconfont icon-fukuan"></i>
              <p>待付款</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderAll/waitSend">
              <i class="iconfont icon-weifahuo"></i>
              <p>待发货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderAll/Shipped">
              <i class="iconfont icon-02"></i>
              <p>已收货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderAll/finish">
              <i class="iconfont icon-yiwancheng"></i>
              <p>已完成</p>
            </router-link>

          </li>
        </ul>
      </div>
    </div>
    <div class="guanli">
      <ul>
        <li>
          <div>
            <i class="iconfont icon-shouhuodizhi"></i>
          </div>

          <div>
            <router-link to="/address">
              管理地址
              <i class="aui-iconfont aui-icon-right"></i>
            </router-link>
          </div>

        </li>
        <li>
          <div>
            <i class="iconfont icon-msnui-market"></i>
          </div>
          <div>
            <router-link to="/home/spread">
              推广员系统

              <i class="aui-iconfont aui-icon-right"></i>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <i class="iconfont icon-kefu"></i>
          </div>
          <div>
            客服
            <i class="aui-iconfont aui-icon-right"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="xinyong">
      <ul>
        <!-- <li>
                <div>
                  <i class="iconfont icon-xinyongqia"></i>
                </div>
                <div>
                  <router-link to="/conv1">
                    信用卡申请
                    <i class="aui-iconfont aui-icon-right"></i>
                  </router-link>
                </div>
              </li>
              <li>
                <div>
                  <i class="iconfont icon-daikuan"></i>
                </div>
                <div>
                  <router-link to="/conv2">
                    信用贷款申请
                    <i class="aui-iconfont aui-icon-right"></i>
                  </router-link>

                </div>
              </li> -->
        <li>
          <div>
            <i class="iconfont icon-baoxian"></i>
          </div>
          <div>
            保险办理
            <i class="aui-iconfont aui-icon-right"></i>
          </div>
        </li>
        <li>
          <div>
            <i class="iconfont icon-gongyi"></i>
          </div>
          <div>
            <router-link to="/gongyi">
              奖金公益
              <i class="aui-iconfont aui-icon-right"></i>
            </router-link>

          </div>
        </li>
      </ul>
    </div>
    <div class="exit" @click="exits">退出登录</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      users:[]
    }
  },
  created() {
    this.users = JSON.parse(localStorage.getItem("users"));
  }, beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));
    if (oo == null) {
      next({ path: '/login' })
    }
    else {
      next()
    }
  }, methods: {
    exits() {
      localStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user {
  height: 92%;
  background: #EEEEEE;
  padding-bottom: 1rem;
  overflow: auto;
  .user_head {
    width: 100%;
    height: 5rem;
    background: #F6B652;
    display: flex;
    padding: 15px 0.5rem;
    .sh_l {
      flex: 0 0 3.5rem;
      img {
        width: 100%;
      }
    }
    .sh_r {
      flex: 1;
      padding: 0.7rem 0 0 1rem;
      position: relative;
      .name {
        font-size: 0.7rem;
        color: #FFFFFB;
      }
      .num {
        color: #FFFFFB;
        font-size: 0.6rem;
      }
      .aui-icon-right {
        position: absolute;
        right: 0.5rem;
        top: 1rem;
        color: #ffffff;
        font-size: 1rem;
      }
    }
  }

  /*全部订单*/
  .order {
    background: #ffffff;
    .order_t {
      display: flex;
      height: 2rem;
      border-bottom: 1px solid #eeeeee;
      div {
        flex: 1;
        line-height: 2rem;
        font-size: 0.6rem;
        &:first-child {
          text-align: left;
          padding-left: 0.5rem;
        }
        &:last-child {
          text-align: right;
          padding-right: 0.5rem;
          a {
            display: block;
            width: 100%;
          }
          span {
            vertical-align: top;
          }
          i {
            font-size: 1rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
    .order_con {
      width: 100%;
      height: 3rem;
      ul {
        width: 100%;
        display: flex;
        li {
          width: 25%;
          text-align: center;
          i {
            font-size: 1.3rem;
          }
          p {
            font-size: 0.6rem;
            color: #4D4D4D;
            margin-top: -0.2rem;
          }
        }
      }
    }
  }
  /*管理*/
  .guanli {
    ul {
      width: 100%;
      background: #ffffff;
      margin-top: 0.5rem;
      li {
        padding-left: 0;
        width: 100%;
        display: flex;
        height: 2rem;
        border-bottom: 1px solid #eeeeee;
        line-height: 2rem;
        &:last-child {
          border-bottom: 0;
        }
        &>div {
          &:first-child {
            flex: 0 0 3rem;
            padding-left: 0.5rem;
            i {
              font-size: 1rem;
            }
          }
          &:last-child {
            flex: 1;
            font-size: 0.7rem;
            position: relative;
            a {
              display: block;
              width: 100%;
            }
            .aui-icon-right {
              font-size: 1rem;
              position: absolute;
              right: 0.5rem;
            }
          }
        }
      }
    }
  }
  .exit {
    margin-top: 0.5rem;
    width: 100%;
    text-align: center;
    line-height: 2rem;
    font-size: 0.7rem;
    background: #ffffff;
    letter-spacing: 1px;
  }
  .xinyong {
    ul {
      width: 100%;
      background: #ffffff;
      margin-top: 0.5rem;
      li {
        padding-left: 0;
        width: 100%;
        display: flex;
        height: 2rem;
        border-bottom: 1px solid #eeeeee;
        line-height: 2rem;
        &:last-child {
          border-bottom: 0;
        }
        &>div {
          &:first-child {
            flex: 0 0 3rem;
            padding-left: 0.5rem;
            i {
              font-size: 1rem;
            }
          }
          &:last-child {
            flex: 1;
            font-size: 0.7rem;
            position: relative;
            .aui-icon-right {
              font-size: 1rem;
              position: absolute;
              right: 0.5rem;
            }
            a {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
