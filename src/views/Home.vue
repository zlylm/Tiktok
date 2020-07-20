<template>
  <div class="home">
    <nav-bar />
    <router-view/>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavBar from './compontents/navbar.vue'
@Component({
  components: {
    NavBar
  }
})
export default class Home extends Vue{
  
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  background-color: @bgColor;
}
</style>
