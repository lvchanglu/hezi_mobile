<template>
  <!-- <div class='clickImg-box' style='display:flex;'>
  <div class='img-item'
    style='border-radius: 5px; transition: all .5s ease;over-flow: hidden'
    @mouseenter='handle(i)' 
    v-for='(item, i) in renderImg' 
    :key='i'
    :class='i===activeIndex?"active box":"box"'
    >
    <div class='context' style='font-size:16px'>{{ item.context }}</div>
    <img :src="item.img" alt=""/>  
    <div class='mask'></div>
  </div>
</div> -->
    <div class="swiper-container ipo" :id='ip'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" 
              v-for='(item, i) in imgs' :key='i' 
              :style='{ backgroundImage:`url(${ item.img })` }'>
              <p class='ipo-des'>{{ item.context }}</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>

import Swiper from  'swiper';
import 'swiper/dist/css/swiper.min.css'

export default {
  name:'click-img',
  props: ['imgs', 'ip'],
  data() {
    return {
      activeIndex: 0,
    }
  },
  // computed: {
  //   renderImg() {
  //     return this.imgs.reverse()
  //   }
  // },
  // created(){
  //   this.handle(1)
  // },
  methods: {
    ipoSwiper(){
      let swiper = new Swiper(`#${this.ip}`,{
        autoplay: false,
        observer:true,
        observeParents:true,
        pagination:{
          el:'.swiper-pagination',
          clickable: true
        },
      })
    }
    // handle(i) {
    //   const items = document.querySelectorAll(`#${this.which} .img-item`)
    //   this.activeIndex = i
    //   if (i === 0) {
    //     let num = 1
    //     for (let item of items) {
    //       item.style.transform = `scale(${num})`
    //       num *= 1
    //     }
    //   }
    //   if (i === 1) {
    //     let num = 1
    //     for (let i = 0; i < items.length; i++) {
    //       if (i === 0) {
    //         items[i].style.transform = `scale(1)`
    //         continue
    //       }
    //       items[i].style.transform = `scale(${num})`
    //       num *= 1
    //     }
    //   }
    //   if (i === 2) {
    //     let num = 1
    //     for (let index = items.length - 1; index >= 0; index--) {
    //       if (index === items.length - 1) {
    //         console.log(items[index]);
    //         items[index].style.transform = `scale(1)`
    //         continue
    //       }
    //       items[index].style.transform = `scale(${num})`
    //       num *= 1
    //     }
    //   }
    //   if (i === 3) {
    //     let num = 1
    //     for (let index = items.length - 1; index >= 0; index--) {
    //       items[index].style.transform = `scale(${num})`
    //       num *= 1
    //     }
    //   }
    // }
  },
  mounted() {
    this.ipoSwiper()
    // const items = document.querySelectorAll(`#${this.which} .img-item`)
    // let num = 1
    // for (let item of items) {
    //   item.style.transform = `scale(${num})`
    //   num *= 1
    // }
  }
}
</script>

<style>
  .ipo.swiper-container{
    width: 100%;
    height: 4.08rem;
    overflow: hidden;
    padding-bottom: 2em;
  }
  .swiper-slide{
    position: relative;
    background-size: cover;
  }
  .ipo-des{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color:rgba(0,0,0,.6);
    font-size: 0.28rem;
    color: #fff;
  }

  .ipo .swiper-pagination-bullet-active{
    background: #333;
  }
</style>
