<template>
  <div id="app">
    <top2></top2> 
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
  import './assets/css/common.css'
  
  import  top2 from './components/common/top2.vue'
  import  bottom from './components/common/bottom.vue'

  export default {
    name: 'App',
    components:{
      top2,
      bottom
    }
  }
</script>

<style>

</style>
