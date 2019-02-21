<template>
<div>
  <div id="casePage">
    <div class="page-title">
      <router-link to='/position'>一亿中流战略定位</router-link>>><router-link to='/case'>经典案例</router-link>
       <div class="short-line"></div>
    </div>
    <div class="case-item" 
          v-for="(item,i) in caseData" :key='i'
          :style="{ backgroundImage: `url(${ item.img })`}"
        >
      <div class="mask">
        <div class="title">{{ item.title }}</div>
        <div class="context"  v-html='item.context'></div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import {ask, admin, adminApi, stringToHtml} from '../../assets/js/connect.js'

export default {
  name:'case',
  data(){
    return {
      caseData:null
    }
  },
  mounted(){
    ask('serve','servicea',res=>{
      this.caseData = res.data.data.Activity;
      this.caseData.forEach(e => {
        e.context = stringToHtml(e.context)
        e.img = admin + e.img
      })
    })
  }
}
</script>

<style>

 #casePage .case-item{
    width: 100%;
    height: 4rem;
    background-size: cover;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  /* .case-page{

  } */
 #casePage .mask{
   width: 100%;
   height: 100%;
    background: rgba(1,1,1,.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #D0CFCF; 
  }
 #casePage .mask .title{
   text-align: center;
   color: #fff;
   font-size: 0.4rem;
  }
   #casePage .mask .context{
     width: 90%;
     margin: 0 auto;
   }
  #casePage .mask .context p:first-child{
    margin-top: 1em !important;
  }
</style>   