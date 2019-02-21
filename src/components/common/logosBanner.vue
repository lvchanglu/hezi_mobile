<template>
  <div class="logos-banner-box">
    <p class="item-title" v-cloak>{{ title }}</p>

    
    <div class="swiper-container logos">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="logos" alt="">
          <!-- <div class="logos" :style='{backgroundImage:`url(${ logos })`}'></div> -->
        </div>

      </div>
    </div>

</div>
  <!--   <div id="custom" class='position-item'>
    <p class="item-title" v-cloak>{{ title }}</p>

    
    <div id="custom-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/logos.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="logos-banner-pagination"></div>
     <div class="swiper-button-prev"></div> 
    <div class="swiper-button-next"></div>

  </div>-->

</template>

<script>
import { ask, stringToHtml, admin } from '../../assets/js/connect.js'
export default {
  name:'logosBanner',
  props:{
    title:String
  },
  data(){
      return {
        logos:''
      }
  },
  mounted(){
  // let title = document.title;
  
  let app = document.getElementById('app')
  let id = app.childNodes[1].id
  let arr = {
    position: '战略定位',
    community: '商学社群',
    transmission: '品牌传播',
    speedup: '上市加速',
    proIpo: 'IPO产业园'
  }
  let title = arr[id];
  ask('serve','logobanner',res=>{
    let i = res.data.data.Activity;
    i.forEach(e => {
      if(e.type == title){
        this.logos = admin + e.img;
      }
    });
  })
}
}
</script>

<style>
.logos-banner-box{
  margin: 1em 0;
}
.logos{
  width: 7.29rem;
}
.logos img{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>