<template>
    <div class="bussiness">
    <p class="bussiness-title">{{ bussinessTitle }}</p>
    <p class="bussiness-name">{{people}}：{{tel}}</p>
    <p class="bussiness-context">留下您的联系方式，我们将在第一时间与你确认。</p>
    <form action="" method="post">
      <label for="name">姓名：</label>
      <input type="text" placeholder='请输入姓名' id='name' v-model='name' >
      <label for="company">公司名称：</label>
      <input type="text" placeholder='请输入公司名称' id="company" v-model='company'>
      <label for="phone">电话号码：</label>
      <input type="text" placeholder='请输入你的电话号码' id='phone' v-model='clientTel'>
      <span :class="succ?'tipsSucc tips':'tipErr tips'">{{ tipInfo }}</span>
      <input type="button" value="点击提交" v-on:click='submitInfo'>
    </form>
  </div>
</template>

<script>
import { ask, stringToHtml, admin } from '../../assets/js/connect.js'
export default {
  name: 'bussiness'  ,

  data(){
    return {
      bussinessTitle:null,
      people:null,
      tel:null,
      name: null,
      clientTel: null,
      company: null,
      tipInfo:null,
      succ:false,
    }
  },
  methods:{
      tips(){
      if(this.succ){
        this.tipInfo = '发送成功';
        let timer = setTimeout(() => {
          this.tipInfo = null;
          clearTimeout(timer)
        }, 2000);
      }else{
        this.tipInfo = '请输入正确的电话号码';
      }
    },

    submitInfo(){
      if(this.name != null && this.clientTel !=null && this.company != null ){
        let phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        let fixPhone = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/; 
        if(!phoneReg.test(this.clientTel)) {
          this.succ = false;
          this.tips()
        }else{
          ask('serve',`business?name=${this.name}&phone=${this.clientTel}&company=${this.company}&table=${this.title}`,res=>{
              console.log(res)
              this.succ = true;
              this.tips()
          })
        }
  
        }
     
    }
  },
    mounted(){
      let app = document.getElementById('app')
      let id = app.childNodes[1].id
      let o = {
        position: '战略定位',
        community: '商学社群',
        transmission: '品牌传播',
        speedup: '上市加速',
        proIpo: 'IPO产业园'
      }
      let title = o[id];

      ask('serve','yewu',res=>{
        let data = res.data.data.Activity;
        data.forEach(e => {
          if(e.page == title){
            this.bussinessTitle = e.table;
            this.people = e.name;
            this.tel = e.phone;
          }
        });
      })
    }
}
</script>

<style scoped>
.tips.tipsSucc{
  color: lightgreen
}
.tips.tipErr{
  color: lightcoral
}
.bussiness {
     width: 7.2rem;
     margin: 0.15rem auto;
     background-color: #fff;
     padding: 0.9rem 0.8rem;
     padding-bottom: 0.2rem;
     -webkit-box-shadow: 0 0 0.1rem #999;
     box-shadow: 0 0 0.1rem #999;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     z-index: 10;
     margin-bottom: 0.46rem;
}
 .bussiness-title {
     font-size: 0.5rem;
     margin-bottom: 0.27rem;
}
 .bussiness-name {
     font-size: 0.33rem;
     color: #183074;
     padding-bottom: 0.15rem;
     border-bottom: 0.02rem solid #808080;
     margin-bottom: 0.15rem;
}
 .bussiness-context {
     font-size: 0.24rem;
     color: rgb(176,177,177);
     text-align:justify;
     font-weight: bold;
     margin-bottom: 0.44rem;
}
 form * {
     display: block;
}
 form input {
     width: 100%;
     height: 0.66rem;
     margin-bottom: 0.23rem;
     padding:  0.18rem;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     border: 1px solid #ccc;
}
 form label {
     font-size: 0.25rem;
     color: rgb(37,39,41);
     font-weight: bold;
     margin-bottom: 0.1rem;
}
 form input[type='button'] {
     width: 100%;
     font-size: 0.26rem;
     color: #000;
     background-color: #ffcf71;
     border-radius: 0.05rem;
     border-color: #ffcf71;
     margin-top: 0.4rem;
     margin-bottom: 0.6rem;
}
 
 ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #E2E2E2;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #E2E2E2;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #E2E2E2;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #E2E2E2;
}
</style>
