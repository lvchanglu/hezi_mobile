<template>
  <div class="speedup-info speedup-item">
    <div class="img-box">
      <img src="static/img/speedup_info.png" alt="">
    </div>
    <div class="info-content">
      <p class="info-title">{{title}}</p>
      <div v-for='(item,i) in infoData' :key='i'>
        <p class="info-kind">{{ item.kind }}</p>
        <p class='info-context' v-html='item.context'></p>  
      </div>
    </div>
  </div>
</template>

<script>
import { ask, stringToHtml, admin } from '../../assets/js/connect.js'
export default {
  name: 'sp-info',
  data() {
    return {
      title: '我们能为你做什么?',
      infoData: [
        {
          kind: '',
          context: ''
      }
      ]
    }
  },
  mounted(){
    ask('serve','appearmarket',res=>{
      let i = res.data.data.Activity;
      i.forEach(e=>{
        e.context = stringToHtml(e.context)
      })
      this.infoData = i
    })
  },
}
</script>

<style>
.speedup-info {
  background:#333333;
}
.img-box{
  width: 100%;
  height: 3.87rem;
}
.img-box img{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.info-content{
  padding: 0.5rem 0.7rem;
}
.info-content .info-title{
  font-size: 0.4rem;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
}
.info-content .info-kind{
  color: #fff;
  font-size: 0.36rem;
  margin: 0.5em 0;
}
 .info-content .info-context p{
  color: #A6A6A6;
  line-height: 1.5em;
  font-size: 0.3rem;
}

</style>

