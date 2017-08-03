<template>
  <div class="orderAll"  v-title data-title="所有订单">
    <div class="headers">
      <ul>
        <li>
          <router-link class="addA" to="/orderAll/orderAlls">
            <span>
              全部
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/orderAll/waitPay">
            <span>待付款</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orderAll/waitSend">
            <span>待发货</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orderAll/Shipped">
            <span>已发货</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orderAll/finish">
            <span>已完成</span>
          </router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .orderAll{
    background: #EAEAEA;
    .headers{
      background: #ffffff;
      width: 100%;
      height: 2.5rem;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      ul{
        width: 100%;
        height: 2.5rem;
        display: flex;
        li{
          flex: 1;
          line-height: 2.5rem;
          text-align: center;
          a{
            display: inline-block;
            height: 2.5rem;
          }
          span{
            display: inline-block;
            height: 2.5rem;
          }
        }
      }
    }

    .router-link-active{
      border-bottom: 2px solid #F6A0A1;
    }
  }

</style>
