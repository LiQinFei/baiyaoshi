<template>
  <div class="orderAlls" v-title data-title="购物车">
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
            <div class="del"><span>删除</span></div>
            <p> {{item.goods_name}}</p>
            <span>{{item.spec_key_name}}</span>
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
          合计：￥
          {{allpri}}
        </div>
        <div>
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
        users: [],
        datas: [],
        num:1,
        checkedNames: [],
        getdata:[]
      }
    },computed:{
      allpri(){
        let allpris = 0
        let allit = this.datas
        let selit = this.checkedNames
        this.getdata = [];
        for(let i = 0; i<selit.length;i++){
          for(let y = 0; y<allit.length;y++){
            if(selit[i] == allit[y].goods_id){

              allpris = Number(allpris) + (this.datas[y].goods_num*this.datas[y].goods_price)
              let olone = [selit[i] , this.datas[y].goods_num]
              this.getdata.push(olone)

            }
          }
        }
        console.log(this.getdata)
        return allpris

      }
    },
    created() {
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this;
      Vue.nextTick(function () {
        that.$http({
          method: 'post',
          url: commonUrl + api + "/index.php?m=mobile&c=User&a=goods_list",
          data: {
            user_id: that.users.user_id
          }
        }).then(function (res) {
          that.datas = res.data
          console.log(that.datas)
        }).catch(function (err) {
          console.log('网络错误')
        })
      })
    }, beforeRouteEnter(to, from, next) {
      let oo = JSON.parse(localStorage.getItem("users"));
      if (oo == null) {
        next({ path: '/login' })
      }
      else {
        next()
      }
    },
    methods: {
      removes: function (index) {
        let dom = $('.finish');
        /*  $(e.target).parents('.finish').remove()*/
        dom.eq(index).hide(500);
      }
      ,plus(index){
        // let pri =  this.datas[index].goods_price
        let nums = this.datas[index].goods_num
          //let olone = pri/nums
        //this.datas[index].goods_price = Number(this.datas[index].goods_price) + Number(olone)
        //console.log(olone)
        this.datas[index].goods_num++;
      },mins(index){
      //  let pri =  this.datas[index].goods_price
        let nums = this.datas[index].goods_num
        //let olone = pri/nums
        if(nums<2){
          return false;
        }
       // this.datas[index].goods_price = Number(this.datas[index].goods_price) - Number(olone)
        this.datas[index].goods_num--;

      }

          //console.log(e.path[6])
        //this.num ++
    /*


      }*/
    },beforeCreate(){
      toast.loading({
        title:"加载中",
        duration:2000
      });
    }
    ,updated(){
      toast.hide()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .orderAlls {
    background: #E5E5E5;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom:2.5rem;
    overflow:auto;
    /*等待付款*/
    .waitPay {
      background: #ffffff;
      font-size: 0.6rem;
      margin: 0.5rem 0;
      &:first-child{
        margin-top: 0;
      }
      .tops {
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
        line-height: 2rem;
      }
      .cont {
        width: 100%;
        display: flex;

        border-top: 1px solid #D3D3D3;
        &>div {
          &:first-child {
            flex:0 0 2rem;
            position:relative;
            input{
              display:inline-block;
              position:absolute;
              left:50%;
              top:50%;
              transform:translate(-50%,-50%);
              width:1rem;
              height:1rem;
            }
          }
          &:nth-child(2){
            flex: 0 0 5rem;
          }
          &:last-child {
            flex: 1;
            .del{
              width:100%;
              text-align:right;
              padding:0.3rem 1rem 0 0;
              span{
               font-size:0.7rem;
              }
            }
            p {
              padding: 0 0.3rem 0 0.5rem;

              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            span {
              font-size: 0.6rem;
              padding-left: 1rem;
              white-space: nowrap;
            }
            ul {
              width: 100%;
              display: flex;
              padding: 0 0.3rem 0 0.5rem;
              li {
                flex: 1;
                &:nth-child(1){
                  text-align:left;
                  line-height:1.5rem;
               }
                &:nth-child(2) {
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
    .foots {
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
          background:#FF6801;
          text-align:center;
          line-height:2.5rem;
          font-size:0.8rem;
        }
      }
    }
  }
</style>
