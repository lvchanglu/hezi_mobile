<template>
  <div class="swiper-box trans-swiper">
    <div class="swiper-container" :id='ip'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in swiperData" :key='i' :style="{backgroundImage:`url(${item.img})`}">
          <p class="context" v-html='item.context'></p>
        </div>
      </div>
      <div class="swiper-pagination inter-page"></div>
    </div>
    
    <div class="swiper-button-prev inter-prev"></div><!--左箭头-->
    <div class="swiper-button-next inter-next"></div><!--右箭头-->
  </div>

</template>

<script>
import {ask, admin, adminApi, stringToHtml } from '../../assets/js/connect.js'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


export default {
  props:['ip'],
  name: 'transSwiper',
  data(){
    return {
      swiperData:null
    }
  },
  mounted(){
    this.$nextTick(function(){
      ask('serve',this.ip,res=>{
        this.swiperData = res.data.data.Activity;
        this.swiperData.forEach(e => {
          e.img = admin + e.img;
          e.context = stringToHtml(e.context)
        });
      })
    })
  },
  updated(){
    new Swiper(`#${this.ip}`,{
      observer:true,
      observeParents:true,
      navigation: {
        nextEl: '.inter-next',
        prevEl: '.inter-prev'
      },
      pagination:{
        el: '.inter-page',
        clickable:true
      }
    })
  }
}
</script>

<style>
.trans-swiper .swiper-container {
     width: 80%;
     height: 3.95rem;
     padding-bottom: 0.5rem;
   }
.trans-swiper .swiper-slide{
    background-size: cover;
  }
.trans-swiper .context{
    position: absolute;
    bottom: 0;
    height: 0.8rem;
    width: 100%;
    background: rgba(1,1,1,0.6);
    color: #fff;
    line-height: 0.8rem;
  }
 .trans-swiper{
    position: relative;
  }
 .trans-swiper .inter-page .swiper-pagination-bullet-active{
    background: #333;
  }
 .trans-swiper .inter-next{
    background-image: url('../../assets/img/arrowRight.png');
  }
 .trans-swiper .inter-prev{
    background-image: url('../../assets/img/arrowLeft.png')
  }
</style>