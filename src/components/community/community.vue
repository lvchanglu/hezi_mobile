<template>
  <div id="community" class='main'>
    <v-banner></v-banner>

    <bussiness></bussiness>

    <div class="who">
       <div class="text-ani-box">
          <div v-show='textShow' v-html="textBox"></div>
        </div>
    </div>

    <div class="community-item">
      <!-- 问题 -->
        <div class='item'>
          <div class="community-article article1">
            <div class='image' :style="{backgroundImage: 'url(' + article1Img + ') '}"></div>
            <div class="article-content">
              <p class="article-title" v-cloak>{{ article1Title }}</p>
              <p class="article-context" v-html='article1Context'></p>
            </div>
          </div>
        </div>
        
        <!-- 加速器 -->
        <div class="item">
          <div class="community-article article2">
            <div class="image" :style="{backgroundImage: 'url(' + article2Bg + ') '}">
              <div class="text-box">
                 <p class="article-title" v-cloak>{{ article2Title }}</p>
                 <div class="short-line"></div>
                 <p class="article-subTitle" v-cloak>{{ article2SubTitle }}</p>
              </div>
            </div>

            <div class="article-content" >
              <p class="article-context" v-html='article2Context'></p>
            </div>

          </div>
        </div>
      </div>

      <!-- 课程内容 -->
      <div class="item">

        <p class="item-title">课程内容</p>
        <p class="item-subTitle">六堂围绕扩张地图的课程</p>

        <div id="class-content" class="community-item">
          <div class="class-content-item" v-for='(item, i) in classData' :key='i'>
            <div class="box">
              <p class='class-num'>Part <span v-cloak>{{ i + 1 }}</span></p>
              <div class='text-box' v-html='item'></div>
            </div>
          </div>
        </div>

      <!-- 游学 -->
        <div id="show1" class="community-item item">
          <div class="image" :style="{backgroundImage:'url(' + show1.img + ') '}"></div>
          <div class="show-box">
            <div class="show-title" v-cloak>{{ show1.title }}</div>
            <!-- <div class="short-line"></div> -->
            <div class="show-context" v-html='show1.context'></div>
          </div>
        </div>

      <!-- 办学特色 -->
        <div id="show2" class="community-item item">
          <div class="image" :style="{backgroundImage:'url(' + show2.img + ') '}"></div>
          <!-- <div class='show2-bg'></div> -->
          <div class="show-box">
            <div class="show-title" v-cloak>{{ show2.title }}</div>
            <div class="show-subTitle" v-cloak>{{ show2.subTitle }}</div>
            <div class="show-context" v-html='show2.context'></div>
          </div>
        </div>
      </div>

      <!-- 学员分享 -->
      <div id="share" class='community-item item'>
        <p class="item-title">学员分享</p>
        <div class="share-box">
          <div class="share-item" v-for='(item,i) in shareData' :key="i">
            <img :src="item.img" alt="">
            <!-- <div class="image" :style="{backgroundImage:'url(' + item.img + ') '}"></div> -->
            <p class="name" style='text-align: center; font-weight: bold' v-cloak>{{ item.name }}</p>
            <p class="info" style='text-align: center; ' v-cloak>{{ item.info }}</p>
            <div class="context" v-html='item.context'></div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import { ask, stringToHtml, admin, mImgUrlDeal } from '../../assets/js/connect.js'

import vBanner from '../common/vBanner.vue'
import bussiness from '../common/bussiness.vue'

export default {
  name: 'community',
  components:{
    vBanner,
    bussiness
  },
  data(){
    return{

      textShow:false,
      bottomBannerTitle:'服务客户',
      textBox: null,
      article1Img: '',
      article1Title: '',
      article1Context: '',
      article2Title: '',
      article2SubTitle: '',
      article2Bg: '',
      article2Context: '',
      classData: [],
      show1: {
        img: '',
        title: '',
        context: ''
      },
      show2: {
        img: '',
        title: '',
        context: ''
      },
      
      shareData: []
    }
  },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      getTextBox(){
      let text = document.getElementsByClassName('text-ani-box')[0].childNodes[0].childNodes;
      console.log()
      text.forEach((e,i)=>{
          if(i!=0) {
            e.classList.add(`text-ani-p${i}`)
          }else{
            e.classList.add("who-title")
            e.classList.add("text-ani-title")
          }
      })
    }
  },  
  created(){
    this.menu();
  },
  updated(){
    let textBoxTop = document.getElementsByClassName('text-ani-box')[0].getBoundingClientRect().top;
    this.getTextBox()
  },
  mounted() {
        // 我们是谁
        this.$nextTick(function(){  
          ask('serve','who',res=>{
            this.textBox = stringToHtml(res.data.data.Activity[0].context);
          })
        })

        // 中间栏
        ask('serve','middlecolumn',res=>{
          let i = res.data.data.Activity[0];
          this.article1Img = mImgUrlDeal(i.article1Img);
          this.article1Title= stringToHtml(i.article1Title);
          this.article1Context= stringToHtml(i.context);
        })

        // 加速器
          ask('serve','accelerator',res=>{
            let item2 = res.data.data.Activity[0]
            this.article2Title = stringToHtml(item2.article2Title);
            this.article2SubTitle= stringToHtml(item2.article2SubTitle);
            this.article2Bg=mImgUrlDeal(item2.img);
            this.article2Context=  stringToHtml(item2.context);
          })
          
        // 课程内容
        ask('serve','course',res=>{
          res.data.data.Activity.forEach(e=>{
            this.classData.unshift(stringToHtml(e.context))
          }) 
        })

        // 企业游学
        ask('serve','overseasstudy',res=>{
            this.show1 = res.data.data.Activity[0]
            this.show1.img = mImgUrlDeal(this.show1.img),
            this.show1.title = stringToHtml(this.show1.title),
            this.show1.context = stringToHtml(this.show1.context)

        })

        // 办学特色
          ask('serve','feature',res=>{
            this.show2 = res.data.data.Activity[0]
            this.show2.img = mImgUrlDeal(this.show2.img);
            // this.show2.title = stringToHtml(this.show2.title)
            
            this.show2.subTitle = this.show2.title.slice(this.show2.title.indexOf('&'));
            this.show2.title = this.show2.title.slice(0,this.show2.title.indexOf('&'));
            this.show2.subTitle = stringToHtml(this.show2.subTitle);
            this.show2.context = stringToHtml(this.show2.context);
          })

        // 学员分享
          ask('serve','share',res=>{
            this.shareData = res.data.data.Activity;
            this.shareData.forEach(e=>{
              e.img = admin + e.img;
              e.context = stringToHtml(e.context)
            })
          })

        // new Swiper('#custom-swiper', {
        //   loop: true,
        //   spaceBetween: 15,
        //   autoplay: {
        //     disableOnInteraction: false,
        //   },
        //   pagination: {
        //         el: '.banner-pagination',
        //         type: 'bullets',
        //   },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
        // })

        const items = document.getElementsByClassName('item');
        let that = this;
        function scrollHandle() {
         let textAniBox = document.getElementsByClassName('text-ani-box')[0];
          let  textAniBoxTop = textAniBox.getBoundingClientRect().top;
          let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;
        
          if(textAniBoxTop <= screenHeight*0.8){
              that.textShow = true;
              
          }
          for (let item of items) {
            const top = item.getBoundingClientRect().top
            
            if (top <= screenHeight*0.8) {
              item.style.opacity = 1;
              item.style.transform = 'translateY(0)';
              console.log(item)
            }
          }
        }
        window.addEventListener('scroll', scrollHandle)

      }

}
</script>

<style>
/* 我们是谁start */
.who {
  margin: 0 auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.46rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.who .text-ani-box{
  padding:0 0.2rem
}
.who-title{
  margin-bottom: .2rem;
}
.who-title p,
.who-title span{
  font-size: 0.4rem !important; 
  color: #183074;
  padding-top: 0.2rem;
  margin-bottom: 0.38rem;
}
/* 我们是谁 end */

/* community-item start */
#community .item{
  margin-bottom: 0.46rem;
  opacity: 0;
  transform: translateY(10%);
  transition: all 1s ease 100ms;
}

.article-title, .article-subTitle,.show-title,.show-subTitle{
  color: #fff;
}

.image{
  width: 100%;
  height: 4rem;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment:fixed; */
  position: relative;
}

.article-title, .show-title,.show-subTitle{
  font-size: 0.35rem
}
.article-content,.show-box{
  padding: 0.43rem 0.5rem;
}
.article1 .article-content,.show-box{
  background-color: rgb(51,51,51) ;
  color: #D0D0D0;
}

.article1 .article-title, .show-title,.show-subTitle{
  margin-bottom: 0.2rem;
}

.article2 .text-box{
  position: absolute;
  bottom: 8%;
  left: 9%;
}

.article2 .article-title{
  font-size: 0.36rem;
  margin-left: -0.6em;
}
.article2 .short-line{
  position: relative;
  height: 0.6rem;
}
.article2 .short-line::after{
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 0.01rem;
  background: #fff;
}
.article2 .article-subTitle{
  font-size: 0.30rem;
}
.article2 .article-content{
  padding-bottom: 0.2rem;
  background-color: #E0E0E0;
  color: #4B4B4B;
}
/* community-item end */

/* item  start */

.item-title ,.item-subTitle,.class-num{
  color: #183074;
  text-align: center;
  margin-bottom: 0.4rem;
}
.item-title{
  font-size: 0.4rem;
}
.item-subTitle{
  font-size: 0.3rem
}
.class-content-item{
  height: 3rem;
  margin-bottom: 0.2rem;
  position: relative;
}
.class-content-item .class-num{
  margin-bottom: 0.2rem;
}
.class-content-item:nth-child(2n-1){
  background-color: #E0E0E0
}
.class-content-item:nth-child(2n){
  background-color: #F2F2F2
}
.class-content-item .box{
  position: absolute;
  width: 6rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#show1 .image{
  background-position:0 100%;
}
.show-context span{
  line-height: 1.5em
}
.share-item{
  text-align: center
}
.name{
  font-size: 0.36rem;
}
.info{
  font-size: 0.33rem;
}
.name,.info{
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
}
.share-item .context{
  padding: 0.2rem 0.7rem;
  padding-top: 0; 
}
/* item  end */
</style>

