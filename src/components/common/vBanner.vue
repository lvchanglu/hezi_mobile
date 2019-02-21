<template >
    <div :style='renderStyle' class='v-banner'>
      <div class='v-banner-content'>
        <p class='v-banner-title'>{{ title }}</p>
        <p class='short-line'></p>
        <p class='v-banner-context'>{{ context }}</p>
        <p class='v-banner-context'>{{ surContext }}</p>
        <p class='v-banner-html' v-html='html'></p>
 
      </div>  
    </div>
</template>

<script>
import axios from 'axios'
import {adminApi,admin,stringToHtml,mImgUrlDeal} from '../../assets/js/connect.js'
export default {
  name: 'vBanner',
  props: [ 'hasDown'],
  data(){
    return {
      imgUrl:'',
      title:'',
      context:'',
      surContext:'',
      html:''
    }
  },
  computed: {
    renderStyle() {
      return `background-image: url(${this.imgUrl})`
    }
  },
  mounted(){
    let app = document.getElementById('app');
    let id = app.childNodes[1].id;
    let o = {
      position: '服务-战略',
      community: '服务-商学',
      transmission: '服务-品牌',
      speedup: '服务-上市',
      proIpo: '服务-IPO',
      about:'关于-简介',
      civilization:'关于-文化',
      path:'关于-发展',
      team:'关于-核心',
      contact:'联系我们',
      newsCenter:'新闻中心',
      tv:'一亿中流风采'
    }
      let type = o[id];
      axios.get(`${adminApi}/tv/bannertu`)
            .then(res=>{
              let data =res.data.data.Activity;
              data.forEach(e => {
                if(e.type == type){
                  if(e.type == '服务-商学'){
                    if(e.table1.indexOf('&mdash;')<0) return;
                    e.table2 = e.table1.slice(e.table1.lastIndexOf(';')+1)
                    e.table1 = e.table1.slice(0,e.table1.indexOf('&'))
                  }
                  this.imgUrl = mImgUrlDeal(e.img);
                  this.title = stringToHtml(e.table);
                  this.context  = e.table1.length == 0 ? '' : stringToHtml(e.table1);
                  this.surContext  = e.table2.length == 0 ? '' : stringToHtml(e.table2);
                  this.html  = e.context ? stringToHtml(e.context) : '' ;
                }
              });
            })
    }
}
</script>
 

<style>

@-webkit-keyframes bannerAni {
  from {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1
  }
}
@keyframes bannerAni {
  from {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1
  }
}

.v-banner {
  width: 100%;
  color: #fff;
  height: 1.5rem;
  padding-top: 49.49%;
  line-height: 2em;
  font-size: 0.32rem;
  position: relative;
  background-size: 100% 100%;
  margin-bottom: 0.46rem;
}

.v-banner-content {
  text-align: left;
  padding-left: 15%;
  padding-top: 15%;
  position: absolute;
  top: 0;
}

.v-banner-title {
  opacity: 0;
  font-size: 0.54rem;
  -webkit-animation: bannerAni .5s;
  animation: bannerAni .5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.v-banner .short-line{
  position: relative;
  height: 0.6rem;
}
.v-banner .short-line::after{
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 2px;
  background: #fff;
  opacity: 0;
}
.v-banner .short-line::after {
  -webkit-animation: bannerAni .5s .5s;
  animation: bannerAni .5s .5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.v-banner-context {
  font-size: 0.36rem;
  opacity: 0;
  -webkit-animation: bannerAni .5s 1s;
  animation: bannerAni .5s 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.v-banner-html {
  opacity: 0;
  -webkit-animation: bannerAni .5s 1s;
  animation: bannerAni .5s 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}


</style>
