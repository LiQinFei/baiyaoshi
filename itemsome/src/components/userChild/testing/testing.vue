<template>
  <div class="testing"  v-title data-title="绑定手机">
    <div class="ipone">
      <ul>
        <li class="getI">
          <div class="inleft">手机号</div>
          <div class="getR">
            <input type="text" value="136****4419" disabled="true">
            <span>获取验证码</span>
          </div>
        </li>
        <li>
          <div class="inleft">验证码</div>
          <input type="text" placeholder="请填写您的验证码">
        </li>
      </ul>
    </div>
    <div class="sit">
      <router-link to="/testsucceed">
        <div class="aui-btn aui-btn-block">验证后输入手机号码</div>
      </router-link>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .testing {
    height: 100%;
    width: 100%;
    padding-top: 0.1rem;
    background: #F7F7F7;
    .ipone{
      margin-top: 0.6rem;
      background: #ffffff;

      ul{
        li{
          width: 100%;
          height: 2rem;
          display: flex;
          line-height: 2rem;
          border-bottom: 1px solid #9F9F9F;
          .inleft,.aui-list-item-label{
            flex: 0 0 3.8rem;
            text-align: right;
          }
          .aui-list-item-input{
            flex: 1;
            height: 2rem;
            padding-left: 1.8rem;
            select{
              height: 2rem;
              width: 100%;
              option{
                width: 100%;
                height: 2rem;
              }
            }
          }
          .getR{
            flex: 1;
            width: 100%;
            position: relative;
            height: 2rem;

            span{
              display: inline-block;
              height: 1rem;
              position: absolute;
              right: 1rem;
              font-size: 0.6rem;
              top: 0.3rem;
              line-height: 1rem;
              padding: 0.2rem 0.3rem 1.2rem;
              border-radius: 5px;
              background: #FF6801;
              color:#ffffff;
            }
          }
          input{
            width: 100%;
            height: 2rem;
            padding-left: 1.8rem;
            color: #B9B9B9;
            padding-right: 5rem;
          }
        }
      }
    }
    .sit{
      width: 100%;
      padding: 5rem 1rem;
      div{
        color:#ffffff;
        background:#FF6801;
      }
    }
  }

</style>
