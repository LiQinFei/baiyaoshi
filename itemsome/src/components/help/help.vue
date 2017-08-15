<template>
  <div class="paypage"  v-title data-title="帮助">
    <div class="aui-content aui-margin-b-15">
      <ul class="aui-list aui-list-in">
        <li class="aui-list-header">
          帮助
        </li>
        <li class="aui-list-item" v-for="(item,index) in datas" @click="helpde(index)">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title">
              {{item}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>



</template>
<script>
  import Vue from 'vue'
  export default {
      data(){
        return{
          datas:[
            '1、关于百耀?',
            '2、怎样推广?',
            '3、推广收益?',
            '4、收益显示及提现?',
            '5、A商城产品如何购买？',
            '6、赠送的金豆及积分在哪显示？',
            '7、金豆如何使用？',
            '8、积分如何使用？'
          ]
        }
      },
    created() {
        /*轮播图的字动*/




    },
    methods:{
      helpde(index){

        this.$router.push({ name: 'helpde', params: { indexId: index }})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .paypage{
    width:100%;
    height:100%;
    position:relative;


  }

</style>
