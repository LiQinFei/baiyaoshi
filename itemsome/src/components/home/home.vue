<template>
  <div class="home">
    <keep-alive><router-view></router-view></keep-alive>
    <v-foot></v-foot>
  </div>
</template>
<script>
  import foot from '../foot/foot.vue'
  export default {

    components:{
      'v-foot':foot
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
