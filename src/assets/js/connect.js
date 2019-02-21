
import axios from 'axios'
const admin = 'https://www.hezitop.com';
const adminApi = 'https://www.hezitop.com/hz/public/index.php/api';

// 请求数据
function ask(nav,port,resfn){
  axios.get(`${adminApi}/${nav}/${port}`).then(resfn)
}
// 将含有转义符的字符串转换为html
function stringToHtml(str){
  if(str == null) return;
  var arrEntities={
    'amp':'&',
    'lt':'<',
    'amp;lt':'<',
    'gt':'>',
    'amp;gt':'>',
    'nbsp':' ',
    'amp;nbsp':' ',
    '#39':'"',
    'quot':'"',
    'amp;quot':'"',
    'ldquo':'“',
    'amp;ldquo':'“',
    'rdquo':'”',
    'amp;rdquo':'”',
    'middot':'·',
    'amp;middot':'·',
    'iexcl':'?',
    'laquo':'?',
    'not':'?',
    'macr':'ˉ',
    'mdash':'—',
    'amp;mdash':'—'  
  };
 return str.replace(/&(lt|gt|nbsp|amp|quot|ldquo|rdquo|middot|iexcl|not|laquo|macr|mdash|amp;middot|amp;lt|amp;gt|amp;nbsp|amp;quot|amp;ldquo|amp;rdquo|amp;mdash);/ig,function(all,t){ return arrEntities[t];});
}
// 截取url
function getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
				var r = window.location.href.substr(1).match(reg); //匹配目标参数
				if (r != null) return unescape(r[2]); return null; //返回参数值
}
function mImgUrlDeal(str=''){
  let s = str;
  if(s.length==0)return;
  let i = str.lastIndexOf('/');
  s = `static/img${s.slice(i)}`;

  return s;
};
// 克隆对象
function cloneObj(obj){
   var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
  } else if(window.JSON){
    str = JSON.stringify(obj), //序列化对象
   newobj = JSON.parse(str); //还原
   } else {
       for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
 14 };
export {
	ask,stringToHtml,admin,adminApi,getUrlParam,mImgUrlDeal,cloneObj
}