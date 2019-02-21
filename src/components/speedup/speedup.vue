<template>
  <div id="speedup">
    <v-banner></v-banner>
    <bussiness></bussiness>
    <div class="slogan">
        <p class='title'>一亿中流战略入股</p>
        <div class="short-line"></div>
        <div class="main-title-context">
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">走向资本市场，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">赢得企业竞争的“制空权”，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">以上市目标反向牵引公司走向</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">“战略升级、人才集聚、组织规范、资本充沛”</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">的良性发展道路。</span>
          </p>
          <p style="line-height: 1.75em;">
            <br>
              <span style="font-size: 14px;">有和梓来为你加速，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">这条路并不遥远，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">让不可能变成可能，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">让遥远的梦想变成清晰的步骤，</span>
          </p>
          <p style="line-height: 1.75em;">
              <span style="font-size: 14px;">圆你一个上市公司的梦想。</span>
          </p>
        </div>
    </div>

    <sp-info></sp-info>

    <provides></provides>

    <sp-case></sp-case>

     <logos-banner :title='bottomBannerTitle'></logos-banner>
  </div>
</template>

<script>
import { ask, stringToHtml, admin } from '../../assets/js/connect.js'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import vBanner from '../common/vBanner.vue'
import bussiness from '../common/bussiness.vue'

import spInfo from './sp-info.vue'
import provides from './provides.vue'
import spCase from './sp-case.vue'

import logosBanner from '../common/logosBanner.vue'

export default {
  name: 'speedup',
  components:{
    vBanner,
    bussiness,
    spInfo,
    provides,
    spCase,
    logosBanner
  },
  data(){
    return {
      bottomBannerTitle: '服务客户',
      casesData:[[],[],[],[]]
    }
  },
  methods:{
    menu() {
      window.scrollTo(0,0);
    },

  },
  created(){
    this.menu();
  },
  mounted() {
    new Swiper('#custom-swiper', {
      loop: true,
      spaceBetween: 15,
      autoplay: {
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    })

    const mainTitle = document.getElementsByClassName('main-title')[0];
    const items = document.getElementsByClassName('speedup-item');

    // window.addEventListener('scroll', () => {
    //   const top = mainTitle.getBoundingClientRect().top;
    //   if (top <= 350) {
    //     mainTitle.setAttribute('ready', true);
    //   }

    //   for (let item of items) {
    //     const itemTop = item.getBoundingClientRect().top;
    //     if (itemTop <= 800) {
    //       item.style.transform = `translateY(0)`;
    //       item.style.opacity = 1;
    //       continue
    //     }
    //   }
    // })


  }

}
</script>

<style>
#speedup .slogan{
  margin: 1em;
  text-align: center;
}
.slogan .short-line::after{
  width: 0.6rem;
  height: 0.01rem;
  transform: translateX(-50%);
}
.slogan .title{
  font-size: 0.4rem;
  text-align: center;
  color: #183074;
}
.slogan .main-title-context p, .slogan .main-title-context span{
   text-align: center;
   color: #585858;
}
#speedup .item-title{
  margin: 1em;
}
</style>
