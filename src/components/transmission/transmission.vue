<template>
  <div id="transmission">
    <v-banner></v-banner>

    <bussiness></bussiness>

    <div class="hope">
      <div class="img-box">
       <img src="static/img/hope_bg.png" alt="">
      </div>
      <div class="text-box">
        <p class="hope-title">栏目初心</p>
        <p class='hope-subTitle'>心系“一亿中流” ，打造品牌公信</p>
        <p class="short-line"></p>
        <div class="hope-content" v-html="hopeContent"></div>
      </div>
    </div>

          <transmission-title title='节目形态' hasLine='true' context='以中央电视台为核心，' subcontext='构建企业的全方位品牌背书和传播平台'>
      </transmission-title>
       <div class='transmission-item'>
          <div class='shape-item' v-for='(item,i) in shapeData' :key='i' >
            <div class='mask'>
              <p class="title">{{ item.title }}</p>
              <p v-html="item.context" class='context'></p>
            </div>
          </div>
        </div>

      <div class="stroke-bg">
        <div class="diff"></div>
        <transmission-title which='stroke1'  title='高端访谈直击' context='每期邀请3位“一亿中流”企业家嘉宾，形成主持人、企业家、观众多位一体的互动交流。节目将当下热点与企业实际相结合，在深挖企业家创业成长故事的同时，邀请企业家们共同为中国经济发展出谋划策，呈现一场出多角度、有思考、有疑问、有价值观、有锋芒的思想碰撞盛宴。'>
        </transmission-title>
        <trans-swiper ip='interview'></trans-swiper>


      </div>

      <div class="diff diff-width"></div>
      <transmission-title title='企业纪录片直击'  context='以纪录片的形式，围绕企业创始人的创业历程以及企业风貌，通过企业家创业历程中最具代表性的几个故事，全视角记录一亿中流企业家的心路历程和成长轨迹。以独特的视角、真诚的情感交流，将时代中的创业名家、行业典范的品牌发展过程，真实展现在观众面前，力求为社会大众树立积极向上的品牌价值观。'>
      </transmission-title>
      <trans-swiper ip='documentary'></trans-swiper>


      <div class="value-bg">
        <transmission-title title='节目价值' hasLine='true' context='高端视角 强势落地'>
        </transmission-title>
        <div class="value" v-for="(item,i) in valueData" :key='i'>
          <div class="value-num">{{i+1}}</div>
          <div class="value-context" v-html='item.context'></div>
        </div>
      </div>

      <transmission-title title='立体传播 长尾效应'>
      </transmission-title>
      <!-- <effect :data='effectData'></effect> -->
      <div class="effect-bg">
        <div class="effect" v-for="(item,i) in effectData" :key='i'>
          <div class="effect-title">{{ item.title }}</div>
          <div class="effect-context"  v-html=item.context></div>
        </div>        
      </div>

      
      <!-- <transmission-title class-name='custom' title='服务客户' context='高端视角 强势落地'>
      </transmission-title> -->

      <!-- <logos-banner :title='bottomBannerTitle'></logos-banner> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import { ask, stringToHtml, admin } from '../../assets/js/connect.js'

import vBanner from '../common/vBanner.vue'
import bussiness from '../common/bussiness.vue'

import transmissionTitle from './transmission-title.vue'
import transSwiper from './trans-swiper.vue'

export default {
  name: 'transmission',
  components:{
    vBanner,
    bussiness,
    transmissionTitle ,
    transSwiper
  },
  data() {
    return {
      
        shapeData: null,  // 节目形态
        strokeData: null, // 高端访谈直击
        docData: null, // 纪录片直击
        effectData: null,  // 立体传播
        valueData: null,  // 节目价值
        bottomBannerTitle: '',
        hopeContent: ''
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
    // 栏目初心
    ask('serve','columnbeginner',res=>{
      let i =res.data.data.Activity[0];
      this.hopeContent = stringToHtml(i.context)
    })
    // 节目形态
    ask('serve','program',res=>{
      if(res.data.data.Activity.length>6){
        res.data.data.Activity.pop()
      }
      this.shapeData  = res.data.data.Activity;
      this.shapeData.forEach(e => {
        e.img = admin+ e.img
        e.context = stringToHtml(e.context)
      });
    })
    // this.$nextTick(function(){
    //      // 访谈接口
    //   ask('serve','interview',res=>{})
    // // 纪录片直击
    // ask('serve','documentary',res=>{ }) 
    // })
      // 节目价值 
    ask('serve','cost',res=>{
      this.valueData = res.data.data.Activity;
      this.valueData.forEach(e => {
        e.img = admin+ e.img
        e.context = stringToHtml(e.context)
      });
    })

    // 立体传播
    ask('serve','diffuse',res=>{
      this.effectData = res.data.data.Activity;
      this.effectData.forEach(e => {
        e.context = stringToHtml(e.context)
      });
    })
    
    new Swiper('#custom-swiper', {
      loop: true,
      spaceBetween: 15,
      autoplay: {
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    const hope = document.getElementsByClassName('hope')[0]
    window.addEventListener('scroll', () => {
      const top = hope.getBoundingClientRect().top
      if (top <= 350) {
        hope.setAttribute('ready', true)
      }
    })
  }
}
</script>

<style>
.hope .img-box{
  width: 100%;
  height: 4.66rem;
}
  .img-box img{
    width: 100%;
    height: 100%;
  }
 .hope .text-box{
    background: #333;
    color: #F0F0F0;
    padding:  0.6rem;

    //margin-top: -0.5rem;
  }
 .hope .text-box .hope-title{
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .hope .text-box .hope-subTitle{
    font-size: 0.4rem;
  }
  .hope-content p, .hope-content span{
    font-size: 0.28rem !important;
    line-height: 1.5em !important;
    display:inline;
  }
  .hope .short-line::after{
    background: #fff;
    width: 0.8rem;
    height: 0.02rem;
  }
  .shape-item{
    height: 3.7rem;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .shape-item .title{
    font-size: 0.4rem;
    text-align: center;
  }
  .shape-item:nth-child(2n) {
    background:#666;
  }
   .shape-item:nth-child(2n-1){
     background: #333;
   } 
   .shape-item .context span{
     line-height: 1.5em;
   }
   .shape-item .context strong{
     font-weight: 550;
   }
.value-bg{
  background: #333; 
  color: #fff;
  padding: 1em;
}
.value-bg .item-title{
  color: #fff;
}
.value-bg .short-line::after{
  background: #fff; 
}
.value-bg,.value-bg .item-title-context p{
  text-align: center;
  font-size: 0.36rem;
}
.value-bg .value{
  width: 5.7rem;
  margin: 0 auto;
}
.value-bg .value-num{
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  border: 1px solid #fff;
}
.value-bg  .value-context{
  margin: 1em 0; 
}
.value-bg  .value-context p,.value-bg  .value-context span{
  font-size: 0.28rem !important;
  line-height: 1.5em !important;
}
.effect:nth-child(2n){
  background:  #C4C4C4;
}
.effect:nth-child(2n-1){
  background:  #F0F0F0;
}

.effect {
  height: 3.4rem;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.effect .effect-title{
  text-align:center;
  font-size: 0.3rem;
  color: #333333;
  margin-bottom: 0.15rem;
  font-weight:bold;
}
.effect .effect-context p, .effect .effect-context span{
  font-size: 0.28rem !important; 
  color: #333333;
  line-height: 1.75em !important;
}
</style>
