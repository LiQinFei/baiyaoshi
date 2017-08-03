<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import Vue from 'vue'
export default {
  name: 'app',
  created(){

      Vue.directive('title', {
        inserted: function (el, binding) {
          document.title = el.dataset.title
        }
      })


  }

}
</script>
<style lang="scss" scoped>

  #app{
    background: #ffffff;
    height: 100%;
    width: 100%;
    overflow: auto;
  }

</style>

