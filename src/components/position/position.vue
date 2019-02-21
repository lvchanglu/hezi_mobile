<template>
 <div id="position">
    <v-banner has-down='true'></v-banner>

    <bussiness></bussiness>
    
    <div class="img" style="background-image: url(static/img/description_bg.png)" ></div>
    <div class="text-ani-box " id='description'>
      <p class="description-title text-ani-title">一亿中流战略定位</p>
      <p class="short-line text-ani-subtitle"></p>
      <div  class='ani-text-box' v-html="descriptionContext"></div>
    </div>


    <!-- 解决方案 -->
    <div id="scheme" class="position-item description-context" style='background-image:url(static/img/scheme_bg.png)'>
      <div class="item-title">解决方案</div>
      <div class="short-line"></div>
      <div class="scheme-context">
        <p>《一亿中流战略定位》</p>
        <p>开创了发展方向+发展模式+战略解码</p>
        <p>三位一体的策略服务</p>
      </div>
      <div class="scheme-box">
        <div class="scheme-item" v-for='(item,i) in schemeData'  :key='i'>
          <p class="title" v-cloak>{{ item.title }}</p>
          <p class='context' v-html='item.context'></p>
        </div>
      </div>
    </div>

    <!-- 核心观点 -->
    <div id="opinion" class="position-item">
      <p class="item-title">核心观点</p>
      <div class="opinion-box">
        <div class="opinion-item" v-for='(item,i) in opinionData' :key='i'>
          <p class="opinion-context" v-html='item'></p>
        </div>
      </div>
    </div>

    <!-- 经典案例 -->
    <div id="case" class="position-item" >
      <p class="item-title">经典案例</p>
      <div class="more-case">
        <router-link to='case'>更多案例</router-link>
      </div>
      <case :data='caseData'></case>
    </div>

    <!-- 服务客户 -->
    <logos-banner :title='bottomBannerTitle'></logos-banner>

 </div>
</template>

<script>
import { ask, stringToHtml, admin } from '../../assets/js/connect.js'

import vBanner from '../common/vBanner.vue'
import logosBanner from '../common/logosBanner.vue'
import bussiness from '../common/bussiness.vue'

import Case from './pos-case.vue'

import Swiper from  'swiper';
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'position',
  components:{
    vBanner,
    bussiness,
    logosBanner,
    Case
  },
  data(){
    return{
        bottomBannerTitle:'服务客户',
        caseData: null,
        bannerHtml: '',
        descriptionContext: null,
        schemeData: [{
            title: '',
            context: ''
          }
        ],
        opinionData: []
    }
  },
  methods:{
    menu() {
      window.scrollTo(0,0);
    },

    // 获取描述文字 dom
    getTextBox(){
      let text = document.getElementsByClassName('ani-text-box')[0].querySelectorAll('p');
      text.forEach((e,i)=>{
        i=i+1
        e.classList.add(`text-ani-p${i}`)
      })
    }
  },
  updated(){
      this.getTextBox();
  },
  created(){
    this.menu();
  },
  mounted() {


    // 战略定位内容
    this.$nextTick(function(){
      ask('serve','strategicPosition',res=>{
        let i = res.data.data.Activity[0]
        this.descriptionContext = stringToHtml(i.context)
      })
    })

    // 解决方案
    ask('serve','solution',res=>{
      this.schemeData =res.data.data.Activity;
      this.schemeData.forEach(e=>{
        e.context = stringToHtml(e.context)
      })
    })

    // 核心观点
    ask('serve','keyIdea',res=>{
      let i = res.data.data.Activity;
      i.forEach(e=>{
        this.opinionData.push(stringToHtml(e.context))
      })
    })

  // 经典案例
  ask('serve','service',res=>{
    this.caseData = res.data.data.Activity;
    this.caseData.forEach(e => {
      e.context = stringToHtml(e.context)
      e.img = admin + e.img
    });
    })

  let aniBox = document.getElementsByClassName('description-context')[0]
  let scheme = document.getElementById('scheme')
  window.addEventListener('scroll', () => {
    let top = aniBox.getBoundingClientRect().top
    if (top <= 350) {
      aniBox.setAttribute('ready', true)
    }
    let sTop = scheme.getBoundingClientRect().top
    if (sTop <= 365) {
      scheme.setAttribute('ready', true)
    }
  })

}
}
</script>

<style>
#position .v-banner-content{
  padding-top: 13%;
  padding-left: 13%;
}
#position .short-line::after{
  width: 0.5rem;
}
#position .v-banner-html p{
  line-height: 1.7em !important;
}
#position .img{
  height: 4.54rem;
  background-size: cover;
}
.text-ani-box ,#scheme, #opinion{
  padding: 0.58rem;
  min-height: 3rem;
}
#scheme{
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
#scheme .item-title{
  color: #fff;
  font-size: 0.4rem;
}
#scheme .short-line::after{
  background: #fff;
  transform: translateX(-50%)
}
#scheme .scheme-context p{
  color: #fff;
}
#scheme .scheme-context p, .scheme-box .title{
  text-align: center;
}
.scheme-box{
  margin: 0.5rem -0.58rem 0;
  display: flex;
  flex-wrap: wrap;
}
.scheme-box .scheme-item{
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}
.scheme-item .title{
  font-size: 0.36rem !important;
}

#scheme .title,  #scheme .context p, #scheme .context span{
  color: #fff !important;
}
 #scheme .context p, #scheme .context span{
   line-height: 1.5em !important;
 }
.scheme-item{
  height: 3rem;
  overflow: hidden;
  vertical-align: top;
}
.scheme-item:nth-child(2), .scheme-item:nth-child(3){
  background: #ccc
} 
.scheme-item:nth-child(1), .scheme-item:nth-child(4){
  background: #333333
}
.opinion-box{
  margin: 0 -0.58rem;
}
.opinion-item{
  height: 3rem;
  position: relative;
}

.opinion-item{
  text-align: center;
}
.opinion-item:nth-child(2n-1){
  background: #333333;
  color: #A0A0A0;
} 
.opinion-item:nth-child(2n){
  background: #c4c4c4;
  color: #696969;
} 
.opinion-context{
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
.more-case{
  text-align:center;
}

#position .case-item{
  position: relative;
  margin-bottom: 0.16rem;
}
#position .case-item::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);

}
#position .case-item .mask{
  width: 90%;
  /* height: 80%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
#position .case-item .mask h2{
  font-size: 0.36rem;
}
#position .case-item .mask .context p,#position .case-item .mask .context span{
  font-size: 0.28rem !important;
}
#position .case-item .mask h2,#position .case-item .mask .context p,#position .case-item .mask .context span{
  color: #ECECEC; 
}
#case{
  margin-bottom: 0.5rem;
}
#position .more-case{
  margin-bottom: 1em;
}
#position .more-case a{
  color: #3D518A;
}
</style>
