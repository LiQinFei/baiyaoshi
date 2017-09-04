<template>
  <div class="apply" v-title data-title="申请">
    <p class="infor">
      您可以查看，修改或者补充您的实名认证注册信息，以便于我们为您完全推广员注册，为了帮助您成功注册推广员，一下信息需要您如实填写，我们会为您保密信息，敬请放心。
    </p>
    <div class="userinfor">
      <h2><i class="iconfont icon-gerenxinxi"></i><span>个人信息</span><i class="aui-iconfont aui-icon-down"></i></h2>
      <ul>
        <li>
          <div class="inleft">姓名</div>
          <input type="text" v-model="name" placeholder="请填写您的姓名">
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label">
            性别
          </div>
          <div class="aui-list-item-input">
            <select v-model="sex">
              <option>男</option> <option>女</option>
            </select>
          </div>
        </li>
        <li>
          <div class="inleft">电话</div>
          <input type="number" name="number" pattern="[0-9]*" placeholder="请填写您的手机号码" v-model="phone">
        </li>
      </ul>
    </div>
    <div class="bank">
      <h2><i class="iconfont icon-yinxingqia"></i><span>银行卡信息</span><i class="aui-iconfont aui-icon-down"></i></h2>
      <ul>
        <li>
          <div class="inbank">银行账号</div>
          <input type="text" v-model="bankNum" onkeyup="this.value=this.value.replace(/\D/g,'').replace(/....(?!$)/g,'$& ')" placeholder="请选择您的银行账号">
        </li>
        <li class="aui-list-item">
          <div class="inbank">
            开户行
          </div>
           <input type="text" v-model="bankT" placeholder="请输入您的开户行地址">

        </li>
      </ul>
    </div>


    <div class="information">
      <h2><i class="iconfont icon-yinxingqia"></i><span>身份认证信息</span><i class="aui-iconfont aui-icon-down"></i></h2>
      <ul>
        <li>
          <div class="inuser">身份证号</div>
          <input type="text" v-model="userNum" placeholder="请输入您的身份证号">
        </li>
        <li class="card">
          <div class="ahead">
            <div class="tops">请上传您的身份证正面照片 <span>(照片在前)</span></div>
            <div class="center">
              <div>
                <div><i class="iconfont icon-yinxingqia"></i>
                  <p>(示意图)</p>
                </div>
              </div>
              <div>
                <div class="forCard one">
                  <input type="file" id="ones" accept="image/*" enctype="multipart/form-data"> <img id="one" src="./上传图片.png">
                  <span>(上传图片小于2M)</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="ahead">
            <div class="tops">请上传您的身份证背面照片 <span>(国徽在前)</span></div>
            <div class="center">
              <div>
                <div><i class="iconfont icon-yinxingqia"></i>
                  <p>(示意图)</p>
                </div>
              </div>
              <div>
                <div class="forCard one">
                  <input type="file" id="twos" accept="image/*" enctype="multipart/form-data"> <img id="two" src="./上传图片.png">
                  <span>(上传图片小于2M)</span>
            </div>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="ahead">
            <div class="tops">请上传您的银行卡正面照片 <span>(数字在前)</span></div>
            <div class="center">
              <div>
                <div><i class="iconfont icon-yinxingqia"></i>
                  <p>(示意图)</p>
                </div>
              </div>
              <div>
                <div class="forCard one">
                  <img id="three" src="./上传图片.png"> <input type="file" id="threes" accept="image/*" enctype="multipart/form-data">
                 <span>(上传图片小于2M)</span>
                </div>
              </div>
            </div>
          </div>
        </li>
     <!--   <li class="card">
          <div class="ahead">
            <div class="tops">请上传您银行卡背面照片 <span>(防伪码在前)</span></div>
            <div class="center">
              <div>
                <div><i class="iconfont icon-yinxingqia"></i>
                  <p>(示意图)</p>
                </div>
              </div>
              <div>
                <div class="forCard one">
                  <img id="four" src="./上传图片.png"> <input type="file" id="fours" accept="image/*" enctype="multipart/form-data">
                </div>
              </div>
            </div>
          </div>
        </li>-->
      </ul>
    </div>
      <div class="aui-btn aui-btn-warning aui-btn-block" @click="send()">提交注册申请</div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
      return {
         users:[],
        imgone : '',
        imgtwo : '',
        imgthree : '',
        /*imgfour : '',*/
        phone:'',
        name:'',
        sex:'',
        bankNum:'',
        bankT:'',
        userNum:''
      }
    }, computed : {}, methods : {
      send() {
        let that = this
        if (this.imgone=='' || this.imgtwo=='' || this.imgthree ==''|| this.phone ==''|| this.name =='' || this.sex ==''|| this.bankNum ==''||this.bankT =='' || this.userNum =='') {
          toast.fail({
            title:"资料不能有空",
            duration:1000
          });
        } else {
          toast.loading({
            title:"正在发送",
            duration:1000
          });
          this.$http({
            method: 'post',
            url: commonUrl + api+ "/index.php?m=Mobile&c=user&a=add_ang",
            data: {
              user_id: that.users.user_id,
              user_code: that.userNum,
              bank_code:that.bankNum,
              sex:that.sex,
              user_name:that.name,
              mobile:that.phone,
              user_self_img1:that.imgone,
              user_self_img2:that.imgtwo,
              bank_img1:that.imgthree,
            /*  bank_img2:that.imgfour,*/
              bank_name:that.bankT
            }
          }).then(function (res) {
            toast.hide();
            if (res.data.status == 1) {

              toast.success({
                title:res.data.msg,
                duration:2000
              });
              /*let obj = JSON.stringify({"is_distribut": res.data.result.is_distribut });*/
              localStorage.setItem('is_distribut',4);
              that.$router.push('/home/lding')
            } else {
              toast.fail({
                title:res.data.msg,
                duration:1000
              });
            }
          }).catch(function (err) {
            toast.hide();
            toast.fail({
              title:'网络错误',
              duration:2000
            });
          })
        }
      }
    }, created(){
      this.users = JSON.parse(localStorage.getItem("users"));
      let that = this
      Vue.nextTick(function(){
        $("#ones").change(function(){
          let file = document.getElementById('ones').files[0];
          let imgSize = file.size;


          if(imgSize < 1024 * 1024 *3.5){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(event){
              let txt = event.target.result;
              that.imgone = txt
              $('#one').attr('src', txt)
            };
          } else {
            toast.fail({
              title:"图片必须小于3500k",
              duration:1000
            });
          }
        });
        $("#twos").change(function(){
          let file = document.getElementById('twos').files[0];
          let imgSize = file.size;

          if(imgSize < 1024 * 1024 *3.5){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(event){
              let txt = event.target.result;
              that.imgtwo = txt
              $('#two').attr('src', txt)
            };
          } else {
            toast.fail({
              title:"图片必须小于3500k",
              duration:1000
            });
          }

        });
        $("#threes").change(function(){
          let file = document.getElementById('threes').files[0];
          let imgSize = file.size;
          if(imgSize < 1024 * 1024 *3.5){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(event){
              let txt = event.target.result;
              that.imgthree = txt
              $('#three').attr('src', txt)
            };
          } else {
            toast.fail({
              title:"图片必须小于3500k",
              duration:1000
            });
          }

        });
      /*  $("#fours").change(function(){
          let file = document.getElementById('fours').files[0];
          let imgSize = file.size;
          if(imgSize < 1024 * 1024 *2.5){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(event){
              let txt = event.target.result;
              that.imgfour = txt
              $('#four').attr('src', txt)
            };
          } else {
            toast.fail({
              title:"图片必须小于2500k",
              duration:1000
            });
          }
        });*/
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .apply{
    background:#f7f7f7;
    img{
      margin-top:0.7rem;
      width:4rem;
      height:3.6rem;
    }
    .infor{
      font-size:0.7rem;
      color:#b9b9b9;
      padding:0.4rem;
    }
    .userinfor{
      background:#ffffff;
      h2{
        height:2rem;
        border-bottom:1px solid #eeeeee;
        line-height:2rem;
        font-size:0.8rem;
        padding-left:0.2rem;
        i{
          font-size:1.5rem;
          vertical-align:top;
          color:#fad94c;
        }
        span{
          display:inline-block;
          height:2rem;
          line-height:2rem;
          vertical-align:top;
          margin-left:0.5rem;
          padding-top:0.1rem;
        }
      }
      ul{
        li{
          width:100%;
          height:2rem;
          display:flex;
          line-height:2rem;
          border-bottom:1px solid #eeeeee;
          .inleft, .aui-list-item-label{
            flex:0 0 3.8rem;
            text-align:right;
          }
          .aui-list-item-input{
            flex:1;
            height:2rem;
            padding-left:1.8rem;
            select{
              height:2rem;
              width:100%;
              option{
                width:100%;
                height:2rem;
              }
            }
          }
          input{
            height:2rem;
            line-height:2rem;
            flex:1;
            padding-left:1.8rem;
            color:#b9b9b9;
          }
        }
      }
    }
    .bank{
      background:#ffffff;
      margin-top:0.6rem;
      h2{
        height:2rem;
        border-bottom:1px solid #eeeeee;
        line-height:2rem;
        font-size:0.8rem;
        padding-left:0.2rem;
        i{
          font-size:1.5rem;
          vertical-align:top;
          color:#fad94c;
        }
        span{
          display:inline-block;
          height:2rem;
          line-height:2rem;
          vertical-align:top;
          margin-left:0.5rem;
          padding-top:0.1rem;
        }
      }
      ul{
        li{
          width:100%;
          height:2rem;
          display:flex;
          line-height:2rem;
          border-bottom:1px solid #eeeeee;
          .inbank, .aui-list-item-label{
            flex:0 0 5.4rem;
            text-align:left;
            padding-left:2.2rem;
          }
          .aui-list-item-input{
            flex:1;
            height:2rem;
            padding-left:0.4rem;
            select{
              height:2rem;
              width:100%;
              option{
                width:100%;
                height:2rem;
              }
            }
          }

          input{
            height:2rem;
            line-height:2rem;
            flex:1;
            padding-left:0.4rem;
            color:#b9b9b9;
          }
        }
      }
    }
    .information{
      background:#ffffff;
      margin-top:0.6rem;
      h2{
        height:2rem;
        border-bottom:1px solid #eeeeee;
        line-height:2rem;
        font-size:0.8rem;
        padding-left:0.2rem;
        i{
          font-size:1.5rem;
          vertical-align:top;
          color:#fad94c;
        }
        span{
          display:inline-block;
          height:2rem;
          line-height:2rem;
          vertical-align:top;
          margin-left:0.5rem;
          padding-top:0.1rem;
        }
      }
      ul{
        li{
          width:100%;
          height:2rem;
          display:flex;
          line-height:2rem;
          border-bottom:1px solid #eeeeee;
          .inuser, .aui-list-item-label{
            flex:0 0 5.4rem;
            text-align:left;
            padding-left:2.2rem;
          }
          .aui-list-item-input{
            flex:1;
            height:2rem;
            padding-left:0.4rem;
            select{
              height:2rem;
              width:100%;
              option{
                width:100%;
                height:2rem;
              }
            }
          }
          input{
            height:2rem;
            line-height:2rem;
            flex:1;
            padding-left:0.4rem;
            color:#b9b9b9;
          }
        }
        .card{
          height:8rem;
        }
        .ahead{
          width:100%;
          .tops{
            width:100%;
            text-align:center;
            height:2rem;
            line-height:2rem;
          }
          .center{
            height:6rem;
            display:flex;
            width:100%;
            div:first-child{
              flex:1;
              text-align:center;
              div{
                padding-top:1.5rem;
                i{
                  padding-top:2rem;
                  font-size:5rem;
                }
                p{
                  margin-top:-1rem;
                }
              }
            }
            div:last-child{
              flex:0 0 8rem;
              .forCard{
                display:inline-block;
                width:6rem;
                height:5rem;
                margin-top:0;
                border-radius:5px;
                span{
                  display:inline-block;
                  font-size:0.5rem;
                  color:red;
                  margin-left:-1rem;
                  
                }
                img{
                  width:80%;
                }
                i{
                  font-size:2rem;
                  line-height:4.8rem;
                }
              }
            }
          }
        }
      }
    }
    .ipone{
      margin-top:0.6rem;
      background:#ffffff;
      h2{
        height:2rem;
        line-height:2rem;
        font-size:0.8rem;
        padding-left:0.2rem;
        i{
          font-size:1.5rem;
          vertical-align:top;
          color:#fad94c;
        }
        span{
          display:inline-block;
          height:2rem;
          line-height:2rem;
          vertical-align:top;
          margin-left:0.5rem;
          padding-top:0.1rem;
        }
      }
      ul{
        li{
          width:100%;
          height:2rem;
          display:flex;
          line-height:2rem;
          border-bottom:1px solid #eeeeee;
          .inleft, .aui-list-item-label{
            flex:0 0 3.8rem;
            text-align:right;
          }
          &:first-child{
            input{
              padding-right:0;
            }
          }
          .aui-list-item-input{
            flex:1;
            height:2rem;
            padding-left:1.8rem;
            select{
              height:2rem;
              width:100%;
              option{
                width:100%;
                height:2rem;
              }
            }
          }
          .getR{
            flex:1;
            width:100%;
            position:relative;
            height:2rem;
            span {
              position: absolute;
              right: 6rem;
              top: 0;
            }
            div{
              display:inline-block;
              height:1rem;
              position:absolute;
              right:1rem;
              font-size:0.6rem;
              top:0.3rem;
              line-height:1rem;
              padding:0.2rem 0.3rem 1.2rem;
              border-radius:5px;
              background:#fad94c;
            }
          }
          input{
            width:100%;
            height:2rem;
            padding-left:1.8rem;
            color:#b9b9b9;
            padding-right:5rem;
          }
        }
      }
    }
    .aui-btn{
      margin-top:2rem;
      background:#fad94c;
    }
    h2{
      position:relative;
    }
    .aui-icon-down{
      position:absolute;
      right:1rem;
      top:0;
      font-size:1rem !important;
    }
    .forCard{
      position:relative;
      input{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:5rem !important;
        opacity:0;
      }
    }
  }
</style>
