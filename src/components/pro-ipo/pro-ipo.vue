<template>
  <div id='proIpo' class="pro main">
    <v-banner img-url='static/img/architectural-architecture-building-140981.png' title='一亿中流PRE-IPO园区加速器' context='打造最优质的PRE-IPO产业加速园' has-down='true'></v-banner>

    <bussiness></bussiness>

    <div class="item">
      <p class="description-title">加速器简介</p>
      <div class="short-line"></div>
      <div class="description-context" v-html='descriptionData.context'></div>
    </div> 

    <div class="img" :style='{backgroundImage:`url( ${descriptionData.img} )`}'></div>

    <div class="item">
      <!-- <p class="sub-des-title" v-cloak>{{ descriptionData.title }}</p> -->
      <p class="sub-des-title">浙江清华长三角研究院杭州分院</p>
      <div class="short-line"></div>
      <div class="sub-context" v-html='descriptionData.subContext'></div>
    </div>

 <!-- 产业园定位 -->
    <div class="item">
      <div class="position-bg" style="background-image: url('static/img/position_bg.png')">
        <div class="position pre-ipo-item" >
          <p class="position-title">加速器定位</p>
          <div class="short-line"></div>
          <div class="position-context" v-html='positionData.context'></div>
        </div>
      </div>
    </div>

      <!-- 绿谷·杭州PRE-IPO产业园 -->
      
      <div class="item">
        <pro-ipo-title title='绿谷·杭州PRE-IPO产业园' context='绿谷·杭州东部创新中心，位于杭州市江干区九州路和红普路交叉口。规划总面积30余万平方米，紧邻德胜高架、杭甬高速等两大交通主干线，距离杭州地铁1号线九和路站仅300米,合纵连横，畅达八方,毗邻九沙河水系，地理和环境优势明显。' ></pro-ipo-title>
        <div  class="pre-ipo-item">
          <click-img ip='lg' :imgs='imgs'></click-img>
        </div>
      </div>

      <!-- 未来科技城PRE-IPO产业园 -->
      
      <div class="item">
        <pro-ipo-title title='柯城科创园' context='衢时代·柯城科创园坐落于景腾路和文一西路交叉口，位于未来科技城管委会科创中心6号楼，整体规划面积约15000平方米。园区毗邻杭州未来科技城管委会，面朝未来科技城“金融岛”。周边商业配套完善。是地铁3线地铁口沿线上的高端商业与产业综合体。' ></pro-ipo-title>
        <div class="pre-ipo-item">
          <click-img ip='kjc'  :imgs='imgs2'></click-img>
        </div>
      </div>

      <!-- 运营优势 -->
      <div id="advantage" style='background-image:url(static/img/advantage_bg.png)'>
        <div class="advantage-bg" >
          <pro-ipo-title title='运营优势' noLine='true' context='清创和梓具备成熟的内外部条件打造产业加速园' ></pro-ipo-title>
          <div  class="pre-ipo-item">
            <div class="advantage-item" v-for='(item,i) in advantageData' :key='i'>
              <p class="title" v-cloak>{{ item.title }}</p>
              <!-- <div class="short-line"></div> -->
              <p class='context' v-html='item.context'></p>
            </div>
          </div>
        </div>
      </div>

      <!-- 产业园规划 -->
      <div id="plan">
        <pro-ipo-title title='加速器规划' no-line='true'></pro-ipo-title>
        <div  class="plan-box">
          <div class="plan-l">
            <p class="title" v-cloak>{{ planData.planL.title }}</p>
            <!-- <div class="short-line"></div> -->
            <p class='context' v-html='planData.planL.context'></p>
          </div>
          <div class="plan-r">
            <p class="title" v-cloak>{{ planData.planR.title }}</p>
            <div class="short-line"></div>
            <p class='context' v-html='planData.planR.context'></p>
          </div>
        </div>
      </div>

      <!-- 服务客户 -->
      <!-- <logos-banner :title='bottomBannerTitle'></logos-banner> -->
  </div>
</template>

<script>
  import { ask, stringToHtml, admin } from '../../assets/js/connect.js'

  import vBanner from '../common/vBanner.vue'
  import bussiness from '../common/bussiness.vue'

  import proIpoTitle from './pro-ipo-title.vue'
  import clickImg from './click-img.vue'

  import Swiper from  'swiper';
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name:'proIpo',
    components:{
      vBanner,
      bussiness,
      proIpoTitle,
      clickImg
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
    },
    created(){
      this.menu();
    },
    data(){
      return{
          bottomBannerTitle:'入园企业',
          descriptionData: {
            title: '',
            context: '',
            img: '',
            subContext: ''
          },
          positionData: {
            context: `
            <div style='font-size: 14px; line-height: 2em;'>
              <p>清创和梓“一亿中流”上市加速器，以“一亿中流”高成长企业为主要服务对象，通过服务模式创新满足此类企业对于空间、管理、服务、投融资等深度需求，产业园以其强大的股东实力、优质的团队、丰富的产业资源、突出的资本运作能力，打造以“中国好企业”聚集的“PRE-IPO加速器”。</p>
            </div>
            `
          },
          advantageData: [{
              title: '',
              context: ''
            }
          ],
          planData: {
            planL: {
              title: '',
              context: ''
            },
            planR: {
              title: '',  
              context: ''
            }
          },
          imgs2: [{
              img: 'static/img/ipo001.jpg',
              context: '柯城科创园：整体规划面积约15000平方米'
            },
            {
              img: 'static/img/ipo003.jpg',
              context: '柯城科创园内部环境：宽敞的会议室'
            },
            {
              img: 'static/img/ipo002.jpg',
              context: '柯城科创园内部环境：宽敞的大厅'
            },
           
            {
              img: 'static/img/ipo004.jpg',
              context: '柯城科创园内部环境：舒适的办公空间'
            },
          ],
          imgs: [{
              img: 'static/img/ipo005.png',
              context: '绿谷·杭州Pre-IPO产业园'
            },
            {
              img: 'static/img/ipo007.png',
              context: '绿谷·杭州Pre-IPO产业园——商业街'
            },
            {
              img: 'static/img/ipo006.png',
              context: '绿谷·杭州Pre-IPO产业园俯瞰图'
            },
            
            {
              img: 'static/img/ipo008.png',
              context: '绿谷·杭州Pre-IPO产业园外景图'
            },
          ]
      }
    },
    mounted() {

      // 加速器简介
      ask('serve','acceleratorintro',res=>{
        let i = res.data.data.Activity[0];
        console.log(i)
        i.img = admin + i.img;
        i.title = stringToHtml(i.title);
        i.context = stringToHtml(i.context);
        i.subContext = stringToHtml(i.subcontext);
        this.descriptionData = i
      })

      // 运营优势
      ask('serve','operatingadvantages',res=>{
        let i = res.data.data.Activity;
        i.forEach(e=>{
          e.title = stringToHtml(e.title)
          e.context = stringToHtml(e.context)
        })
        this.advantageData = i;
      })

      // 产业园规划
      ask('serve','programme',res=>{
        let item = res.data.data.Activity;
        item.forEach(e=>{
          e.context = stringToHtml(e.context)
        })
        this.planData.planL = item[0]
        this.planData.planR = item[1]
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

      const items = document.getElementsByClassName('item')
      window.addEventListener('scroll', () => {
        for (let item of items) {
          const top = item.getBoundingClientRect().top
          if (top < 800) {
            item.style.transform = 'translateY(0)'
            item.style.opacity = 1
          }
        }
      })
    }
  }
</script>

<style>
.v-banner-content{
  padding-left: 5%;
  padding-top: 20%;
}
.pro .img{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 3.21rem;
}
.pro .item{
  margin: 0.5rem auto;
  width: 6.25rem;
} 
.description-title, .sub-des-title,.position-title{
  font-size: 0.4rem;
  color: #183074;
}
 .short-line{
  position: relative;
  height: 0.6rem;
}
.short-line::after{
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 2px;
  background: #183074;
}
 .description-context p, .description-context span,.sub-context p, .sub-context span{
  font-size: 0.28rem !important;
  color: #8B8B8B;
  line-height: 2em;
}
.position-bg{
  height: 5.37rem;
  background-size: cover;
  background-repeat: no-repeat;
}
.position{
  padding: 5%;
}
.position-title, .position-context p, .position-context span{
  color: #fff;
}
.position .short-line::after{
  background-color: #fff;
}
.position-context p, .position-context span{
 line-height: 1.75em
}


/* 运营优势 */

#advantage, #advantage  .pre-ipo-title{
 color: #fff 
}
#advantage .pre-ipo-context{
  color: #fff;
  text-align: center;
}
.advantage-bg{
  padding: 1em;
  padding-top: 3em;
}
.advantage-bg{
  background-color: rgba(49, 84, 161, .8)
}
.advantage-item{
  margin-bottom: 0.4rem;
}
.advantage-item,.advantage-item .title{
  text-align: center
}
.advantage-item .title{
  font-size: 0.36rem;
  margin-bottom: 0.1rem;
}
.advantage-item .context{
  width: 78%;
  margin: 0 auto;
  line-height: 1.5em
}
.advantage-item:first-child .context{
  width: 3rem
}
@media screen and (max-width:320px){
  .advantage-item:first-child .context{
    width: 3.3rem
  }
}

/* 产业园规划 */

#plan ,.plan-box{
  margin-top: 1em;
}
.plan-box .title{
  font-size: 0.36rem;
}
.plan-box .context{
  font-size: 0.28rem;
}
.plan-l,.plan-r{
  padding: 2em;
}
.plan-l{
  background: #333;
}
.plan-l .title{
  margin-bottom: 0.8em;
  color: #F8F8F8;
}
.plan-l .context{
  line-height: 1.5em;
  color: #989898;
}
.plan-r .title{
  color: #183074;
}
.plan-r{
  background: #F0F0F0;
  margin-top: 0.12rem;
}
.plan-r .short-line::after{
  width: 0.5rem;
}
.plan-r .context{
  color: #333;
}


.item  .pro-ipo-title{
  line-height:1.5em;
}
</style>

