<template>
  <div class="address" v-title data-title="修改地址">
    <div class="userinfor">
      <ul>
        <li>
          <div class="inleft">姓名</div>
          <input type="text" v-model="names">
        </li>
        <li>
          <div class="inleft">手机号</div>
          <input type="number" name="number" pattern="[0-9]*" v-model="phone">
        </li>
        <li>

          <div class="inleft">所在地区</div>
          <!--    <input id="sel_city"  type="text" value="点击选取省市区县"/>-->
          <div id="sel_city">点击选取省市区县</div>
          <!--  <a id="sel_city">点击选取省市区县</a>-->

        </li>
        <li>
          <div class="inleft">街道地址</div>
          <input type="text" v-model="address">
        </li>
      </ul>
      <div class="tab">
        <div class="mid">
          <input type="checkbox" class="aui-checkbox" id="checkbox" v-model="checked" v-bind:true-value="1" v-bind:false-value="0">
          <label for="checkbox">设置默认地址</label>
        </div>
      </div>
    </div>
    <div class="footwarp">
      <div class="foots">
        <div>
          <div class="aui-btn aui-btn-block" @click="quxiao">取消</div>
        </div>
        <div>
          <div class="aui-btn aui-btn-block" @click="save">保存</div>
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
      form: '',
      checked: 0,
      one: '',
      two: '',
      three: '',
      names: '',
      phone: '',
      address: ''

    }
  },
  beforeRouteEnter(to, from, next) {
    let oo = JSON.parse(localStorage.getItem("users"));
    if (oo == null) {
      next({ path: '/login' })
    }
    else {
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.form = from.path
      })
    }


  },
  created() {
    this.users = JSON.parse(localStorage.getItem("users"));
    let that = this
    Vue.nextTick(function () {
      let nameEl = document.getElementById('sel_city');

      let first = []; /* 省，直辖市 */
      let second = []; /* 市 */
      let third = []; /* 镇 */

      let selectedIndex = [0, 0, 0]; /* 默认选中的地区 */

      let checked = [0, 0, 0]; /* 已选选项 */




      function creatList(obj, list) {
        obj.forEach(function (item, index, arr) {
          let temp = new Object();
          temp.text = item.name;
          temp.value = index;
          list.push(temp);
        })
      }

      creatList(city, first);

      if (city[selectedIndex[0]].hasOwnProperty('sub')) {
        creatList(city[selectedIndex[0]].sub, second);
      } else {
        second = [{ text: '', value: 0 }];
      }

      if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
        creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
      } else {
        third = [{ text: '', value: 0 }];
      }

      let picker = new Picker({
        data: [first, second, third],
        selectedIndex: selectedIndex,
        title: '地址选择'
      });

      picker.on('picker.select', function (selectedVal, selectedIndex) {
        let text1 = first[selectedIndex[0]].text;
        let text2 = second[selectedIndex[1]].text;
        let text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

        nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
        that.one = text1
        that.two = text2
        that.three = text3


      });

      picker.on('picker.change', function (index, selectedIndex) {
        if (index === 0) {
          firstChange();
        } else if (index === 1) {
          secondChange();
        }

        function firstChange() {
          second = [];
          third = [];
          checked[0] = selectedIndex;
          let firstCity = city[selectedIndex];
          if (firstCity.hasOwnProperty('sub')) {
            creatList(firstCity.sub, second);

            let secondCity = city[selectedIndex].sub[0]
            if (secondCity.hasOwnProperty('sub')) {
              creatList(secondCity.sub, third);
            } else {
              third = [{ text: '', value: 0 }];
              checked[2] = 0;
            }
          } else {
            second = [{ text: '', value: 0 }];
            third = [{ text: '', value: 0 }];
            checked[1] = 0;
            checked[2] = 0;
          }

          picker.refillColumn(1, second);
          picker.refillColumn(2, third);
          picker.scrollColumn(1, 0)
          picker.scrollColumn(2, 0)
        }

        function secondChange() {
          third = [];
          checked[1] = selectedIndex;
          let first_index = checked[0];
          if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
            let secondCity = city[first_index].sub[selectedIndex];
            creatList(secondCity.sub, third);
            picker.refillColumn(2, third);
            picker.scrollColumn(2, 0)
          } else {
            third = [{ text: '', value: 0 }];
            checked[2] = 0;
            picker.refillColumn(2, third);
            picker.scrollColumn(2, 0)
          }
        }

      });

      /*picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
       console.log(selectedVal);
       console.log(selectedIndex);
       });*/

      nameEl.addEventListener('click', function () {
        picker.show();
      });
    })
  },
  computed: {

  }
  , methods: {

    save() {
      let that = this
      toast.loading({
        title:"加载中",
        duration:2000
      });
      that.$http({
        method: 'post',
        url: commonUrl + api + "/index.php?m=mobile&c=User&a=add_address",
        data: {
          user_id: that.users.user_id,
          consignee: that.names,
          province: that.one,
          city: that.two,
          district: that.three,
          address: that.address,
          mobile: that.phone,
          is_default: that.checked
          //user_id:4922
        }
      }).then(function (res) {
        toast.hide()
        if(res.data.status == 1){
          toast.success({
            title:res.data.msg,
            duration:2000
          });
          that.$router.push('/address');
        }else {
          toast.fail({
            title:res.data.msg,
            duration:2000
          });
        }

      }).catch(function (err) {
        toast.hide()
        toast.fail({
          title:"网络错误",
          duration:2000
        });
      })
    }
    , quxiao() {
      this.$router.push(this.form);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.address {
  height: 100%;
  background: #F7F7F7;

  .userinfor {

    ul {


      li {
        width: 100%;
        height: 2.5rem;
        display: flex;
        line-height: 2.5rem;
        border-bottom: 1px solid #eeeeee;
        padding-left: 0.5rem;
        background: #ffffff;
        .inleft {
          flex: 0 0 4rem;
        }
        #sel_city {
          flex: 1;
        }
        &:last-child {
          input {
            padding-left: 0;
          }
        }
        /*    .aui-list-item-input{
            flex: 1;
            height: 2.5rem;
            padding-left: 1rem;
            select{
              height: 2.5rem;
              width: 100%;
              option{
                width: 100%;
                height: 2.5rem;
              }
            }
          }*/
        input {
          height: 2.5rem;
          line-height: 2.5rem;
          flex: 1;
          color: #393939;
        }
        .place {
          width: 100%;
          #distpicker4 {
            padding: 0 0.2rem;
            width: 100%;
            display: flex;
            .form-control {
              flex: 1;
              option {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .tab {
    width: 100%;
    display: flex;
    background: #ffffff;
    margin-top: 0.5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    .mid {
      width: 7.5rem;
      line-height: 2rem;
      input {
        margin-top: 0.4rem;
        margin-right: 0.5rem;
        border-radius: 50%;
      }
    }
  }
  .footwarp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .foots {
      display: flex;
      &>div {
        flex: 1;
        &:last-child {
          div {
            background: #FF6801;
            color: #ffffff;
          }
        }
      }
    }
  }


  /*yanshi*/
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  a,
  code,
  em,
  img,
  small,
  strong,
  sub,
  sup,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent
  }
}
</style>
