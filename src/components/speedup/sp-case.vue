<template>
  <div class="speedup-item cases">
          <p class="item-title">经典案例</p>
          <div class="more-box">
            <router-link to="/speedup" class='more-btn'>MORE</router-link>
          </div>
           
          <div class="cases-bg">
            <div class="cases-box swiper-wrapper">  

              <div class="swiper-slide">
                <div class='cases-col' v-for='(item, i) in casesData' :key='i'>

                  <div class='half-col' v-if='item.length==2'>
                    <div class='case-item' :style="{  backgroundImage: 'url(' + item[0].img + ')' }">
                      <div class='mask'>
                        <p class='case-title'>{{ item[0].title }}</p>
                        <p class='case-context' v-html='item[0].context'></p>
                      </div>
                    </div>
                    
                    <div class='case-item' :style="{  backgroundImage: 'url(' + item[1].img + ')' }">
                      <div class='mask'>
                        <p class='case-title'>{{ item[1].title }}</p>
                        <p class='case-context' v-html='item[1].context'></p>
                      </div>
                    </div>
                  </div>

                  <div v-else :style="{  backgroundImage: 'url(' + item[0].img + ')' }" class='case-item'>
                    <div class='mask'>
                      <p class='case-title'>{{ item[0].title }}</p>
                      <p class='case-context' v-html='item[0].context'></p>
                    </div>
                  </div>
                  
                </div>

              <!--  <div class="swiper-button-prev"></div> -->
              <!--  <div class="swiper-button-next"></div> -->
            </div>
          </div>
          </div>
        </div>
</template>

<script>
import {ask, admin, adminApi, stringToHtml} from '../../assets/js/connect.js'

export default {
  name: 'spCase', 
  data(){
    return{
    casesData: [ 
          [{title: '',img: '',context: ``}],
          [{title: '',img: '',context: ``},{title: '',img: '',context: ``}]
        ]
    }
  },
  mounted() {
    
    this.$nextTick(()=>{
      ask('serve','jingdian',res=>{
        let a = res.data.data.Activity;
        res.data.data.Activity.forEach(e=>{
        
            e.context = stringToHtml(e.context);
            e.title = e.table;
          e.img = admin + e.img;
        })
        a.forEach(e => {
          if(e.type == '左大图'){
            this.casesData[0].pop() 
            this.casesData[0].push(e)
          }else if(e.type == '中小图上'){
            this.casesData[1][0] = e
          }else if(e.type == '中小图下'){
            this.casesData[1][1] = e
          }
        });
      })
    })

    // new Swiper('.cases-bg', {
    //   loop: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // })

  },  
}
</script>

<style>
  .cases-box .swiper-slide{
    height: 5.4rem;
  }
  .cases-col{
    vertical-align: bottom;
    display: inline-block;
    height: 100%;
    width: 50%;
  }
  .half-col{
    width: 100%;
    height: 50%;
  }
  .speedup-item .case-item{
    width: 100%;
    height: 100%;
  }
  .cases-col .mask{
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,.3);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.cases-col .mask .case-title{
  font-size: 0.3rem;
  text-align: center;
  margin-bottom: 1em;
}
.cases-col .mask .case-context p,.cases-col .mask .case-context span{
  font-size: 0.28rem !important;
}
.speedup-item .more-box{
  text-align: center;
  margin: 1em;
}
.speedup-item .more-btn{
  display: inline-block;
}
</style>