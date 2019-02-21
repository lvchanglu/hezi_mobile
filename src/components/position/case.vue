<template>
  <div id='case-box' class='position-item'>
      <div class='case-item' v-for='(item,i) in data' :key='i' 
      :style="{ backgroundImage: 'url(' + item.img + ')' }">
        <div class='mask' style='z-index:10'>
          <h2>{{ item.title }}</h2>
          <div class='context' v-html="item.context"></div>
        </div>
      </div>
 
  </div>
</template>

<script>
export default {
  name:'Case',
  props:['data'],
  data(){
    return{
      caseData: []
    }
  }
}
</script>

<style>
  .case-item{
    height: 4rem;
    background-size: cover
  }

</style>
