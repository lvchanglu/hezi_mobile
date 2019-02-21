<template>
<div id='index'>


	<!-- bannner -->
	<div class="swiper-container" id="swiper_homebanner">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="item in home_show">
	    	<div class="banner" v-bind:style="{background:'url('+item.img+')'}">
				<h3 class="index_banner_title">{{item.title}}</h3>
			</div>
	    </div>
	  </div>
	  <div class="swiper-pagination" id="homebanner"></div>
	</div>
	
	<!-- 页面主体内容 -->
	<div class="content ">   
		<div class="item" id="commerce" :style="{background:'url('+home.img+')'}">
			<div class="title_e">COMMERCE</div>
			<div class="title">商学社群</div>
			<!-- <img src="../img/hengxian.png" alt=""> -->
			<div class="hengxian"></div>
			<p class="describe" v-html="home.context"></p>  

			<p class="getmore"><router-link to='/community'>了解更多</router-link></p>
		</div>
		<div class="item" :style="{background:'url('+home_strategic.img+')'}">
			<div class="title_e">STRATEGIC POSITIONING</div>
			<div class="title">战略定位</div>
			<!-- <img src="../img/hengxian.png" alt=""> -->
			<div class="hengxian"></div>
			<p class="describe" v-html="home_strategic.context"></p> 
			<p class="getmore"><router-link to='/position'>了解更多</router-link></p> 
		</div>
		<div class="item" :style="{background:'url('+home_market.img+')'}">
			<div class="title_e">LISTING ACCELERATION</div>
			<div class="title">战略入股</div>
			<!-- <img src="../img/hengxian.png" alt=""> -->
			<div class="hengxian"></div>
			<p class="describe" v-html="home_market.context"></p>  
			<p class="getmore"><router-link to='/speedup'>了解更多</router-link></p>
		</div>
		<div class="item" :style="{background:'url('+home_ipo.img+')'}">
			<div class="title_e">INTELLECTUAL SERVICE</div>
			<div class="title">上市加速器</div>
			<!-- <img src="../img/hengxian.png" alt=""> -->
			<div class="hengxian"></div>
			<p class="describe" v-html="home_ipo.context"></p>  
			<p class="getmore"><router-link to='/pro-ipo'>了解更多</router-link></p>
		</div>
	</div> 

	<!-- 新闻中心 -->
	<div class="news" style="background-image:url(static/img/item5_bg.png)">
		<div class="title_e">NEWS CENTER</div>
		<div class="title">新闻中心</div>
		<router-link to="/news_center/0" class="more"><&nbsp;&nbsp;更多新闻&nbsp;&nbsp;></router-link>
		<!-- 轮播图 -->   
		<div class="swiper-container" id="swiper_homenews">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="(item,i) in home_news" :key='i'>
		      	<router-link v-bind:to="'/news_detail/'+item.id">
		      		 <div class="new_banner" :style="{background:'url('+url+item.img+')'}"></div>
			      	 <div class="new">
			      	 	<div class="title">{{item.title}}</div>
			      	 	<div class="date">{{item.time}}</div>
			      	 	<p class="information">
			      	 		{{item.context_detail}}
			      	 	</p>
			      	 </div>
		      	</router-link>
		      </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination" id="homenews"></div>
		</div>
	</div>

	
</div>
</template>

<script>
	import '../../assets/css/index.css';

	// 导入轮播图的依赖
	import 'swiper/dist/css/swiper.min.css';
	import Swiper from  'swiper';

	// 导入外部定义的方法变量
	import{ask,admin,stringToHtml,mImgUrlDeal} from'../../assets/js/connect.js';

	export default{
		name:'index',
		data(){
			return{
				url:admin,
				home_show:[],
				home_content:[],
				home_news:[],
				home:{},
				home_ipo:{},
				home_market:{},
				home_strategic:{},
				style:{

				}
			}
		},
		mounted(){

			//数据初始化
		    this.init();

			// 初始化新闻轮播图
			var swiper = new Swiper('#swiper_homenews', {
		      pagination: {
		        el: '#homenews',
		        clickable:true
		      },
		      observer: true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents: true,//修改swiper的父元素时，自动初始化swiper

		    });
		    // 初始化bannner轮播图
		    var swiper_homebanner = new Swiper('#swiper_homebanner',{		      
		      pagination: {
		        el: '#homebanner',
		        clickable:true
		      },
		      autoplay:true,
		      observer: true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents: true//修改swiper的父元素时，自动初始化swiper
		    });
		    // 设置监听器当页面滚动时出现动效
		    const transform=this.transform
		    window.addEventListener('scroll', transform);
		    // 页面刚加载出来第一个也要动效但是此时没有滚动加一个默认的
		    var commerce=document.getElementById('commerce')
		    var commer_child = commerce.childNodes;
			for(var i = 0; i < commer_child.length; i++){
			    if(commer_child[i].nodeType !== 1){
			       return box.removeChild(commer_child[i]);
			    }else{
			    	commer_child[i].style.opacity=1;
			    	commer_child[i].style.transform='translateY(0)';

			    }
			}
		    // window.scrollTo(1,1)
		},
		created(){
			this.menu();
		},
		methods:{
			menu() {
				window.scrollTo(100,100);
			},

			// 数据初始化
			init(){
				ask('home','home_show',res=>{
					this.home_show=res.data.data.Activity;
					this.home_show.forEach(e=>{
						e.img = mImgUrlDeal(e.img)
					})
				});
				ask('home','home',res=>{
					res.data.data.Activity[0].context=stringToHtml(res.data.data.Activity[0].context);
					this.home=res.data.data.Activity[0];
					this.home.img = mImgUrlDeal(this.home.img)
					// this.home_content.push(res.data.data.Activity[0]);
				});
				ask('home','home_ipo',res=>{
					res.data.data.Activity[0].context=stringToHtml(res.data.data.Activity[0].context);
					this.home_ipo=res.data.data.Activity[0];
					this.home_ipo.img = mImgUrlDeal(this.home_ipo.img)
					// this.home_content.push(res.data.data.Activity[0]);
				});
				ask('home','home_market',res=>{
					res.data.data.Activity[0].context=stringToHtml(res.data.data.Activity[0].context);
					this.home_market=res.data.data.Activity[0];
					this.home_market.img = mImgUrlDeal(this.home_market.img)
					// this.home_content.push(res.data.data.Activity[0]);
				});
				ask('home','home_strategic',res=>{
					res.data.data.Activity[0].context=stringToHtml(res.data.data.Activity[0].context);
					this.home_strategic=res.data.data.Activity[0];
					this.home_strategic.img = mImgUrlDeal(this.home_strategic.img)
					// this.home_content.push(res.data.data.Activity[0]);
				});
				ask('home','home_news',res=>{
					var arr=res.data.data.Activity.forEach(function(item){
						item.title=stringToHtml(item.title)
						item.context=stringToHtml(item.context)
						item.context_detail=stringToHtml(item.context_detail)
					})
					this.home_news=res.data.data.Activity
				});
			},
			// 动效
			transform(){
				// 先获取几个有动效的div
				const items =document.getElementsByClassName('item');
				//获取屏幕高度
				let screenHeight =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
				// 循环需要加动效的几个div
				for(let item of items){
					// 每个div都需要获取与顶部的偏移值
					const top =item.getBoundingClientRect().top
					// 当div的偏移量符合条件时让动效出现
					if (top <= screenHeight*0.6) {
						// 把item里的子元素找出来加上动效
		             	var box_child = item.childNodes;
						for(var j = 0; j < box_child.length; j++){
						        if(box_child[j].nodeType !== 1){
						           return box.removeChild(box_child[i]);
						        }else{
						        	box_child[j].style.opacity=1;
						        	box_child[j].style.transform='translateY(0)';

						        }
						}
		            }
				}

				// 新闻的动效
				const news=document.getElementsByClassName('news')[0]
				let news_top= news.getBoundingClientRect().top;
				if(news_top<=screenHeight*0.6){
					var box_child = news.childNodes;
						for(var j = 0; j < box_child.length; j++){
						        if(box_child[j].nodeType !== 1){
						           return box.removeChild(box_child[i]);
						        }else{
						        	box_child[j].style.opacity=1;
						        	box_child[j].style.transform='translateY(0)';

						        }
						}
				}
			}

		}
	}	
</script>

<style>
	#index .news .more{
		color: #fff
	}
	#index .new .title{
		line-height: 1.25em;
		text-align: justify;
	}
	#index .new .information{
		font-size: 0.28rem;
		line-height: 1.5em;
	}
	#homenews .swiper-pagination-bullet-active{
		background: #183074;
	}

	.index_banner_title{
		animation:index_banner_title .5s;
		-webkit-animation:index_banner_title .5s
	}
	@-webkit-keyframes index_banner_title {
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
	@keyframes index_banner_title {
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

	
</style>