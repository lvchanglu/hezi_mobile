<template>
	<div class="contact_us" id="contact">
		<!-- <div class="contact_banner">
			<div class="banner_contain">
				<h3 class="banner_slogan">联系我们</h3>
				<div class="hengxian"></div>
				<p>立足杭、深，布局全国</p>
				<p></p>
			</div>
		</div> -->
		<v-banner></v-banner>
		<div class="map" id="map"></div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" 
						v-for="(item,i) in position" :key='i'
					 :style="{background:'url('+admin+item.img+')'}">
					<div class="mask">
						<div class="city_e">{{item.title1}}</div>
						<div class="city">{{item.title2}}</div>
						<div class="content">
							<div class="address">地址: {{item.local}}</div>
							<div class="context">{{item.context}}</div>
							<div class="phone">电话：{{item.phone}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/contact_us.css'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import {ask,admin,stringToHtml} from '../../assets/js/connect.js'
	import vBanner from '../common/vBanner.vue'

	export default{
		name:'contact',
		components:{
			vBanner
		},
		data(){
			return{
				admin:'',
				position:[],
				i:'',
				contactSwiper:null
			}
		},
		  created(){
				this.menu();
			},
		watch:{
			"$route":"activeSwiper"
		},
		mounted(){
			this.init();
		},
		methods:{
			activeSwiper(){
				this.contactSwiper.slideTo(this.$route.params.to);
			},
		menu() {
        window.scrollTo(0,0);
      },
			init(){
				// 数据的初始化
				this.admin=admin

				ask('contact','contact',res=>{
					let data=res.data.data.Activity
					data.forEach(item=>{
						item.local=stringToHtml(item.local)
						item.context=stringToHtml(item.context)
					})
					this.position=data
					// 初始化swiper
					this.swiper();
					this.activeSwiper()
					// 初始化地图
					this.map(0);
				})	
			},
			map(i){
				// 实例化地图
				var map=new BMap.Map("map");
				var a=this.position[i].pos;
				var b=a.split(',');
				// console.log(b);

				var point =new BMap.Point(b[0],b[1]);
				map.centerAndZoom(point,16);
				map.addControl(new BMap.NavigationControl());
				var marker = new BMap.Marker(point);        // 创建标注    
				map.addOverlay(marker);						//标注添加到地图上
			},
			swiper(){
				var that=this
				//实例化swiper
				this.contactSwiper=new Swiper('.swiper-container',{
					// pagination:{
					// 	el:'.pagination'
					// }
					// hashNavigation: true,
					// watchState: true,
					navigation:{
						nextEl:'.swiper-button-next',
						prevEl:'.swiper-button-prev',
					},
					observer:true,
					observeparents:true,
					on:{
						slideChangeTransitionEnd:function(){
							// console.log(this.activeIndex)
							let i=this.activeIndex;
							// 当切换的时候地图要跟着初始化
							that.map(i);
						}
					}
				})
			}
		}

	}
</script>

<style>
	#contact .v-banner{
		margin-bottom: 0;
	}
</style>