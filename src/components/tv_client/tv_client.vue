<template>
	<div class="tv_client" id="tv">
		<div class="tv_banner">
			<div class="banner_contain">
				<h3 class="banner_slogan">一亿中流企业风采</h3>
				<div class="hengxian"></div>
				<p>一代宗工 | 亿兆一心 | 中流砥柱 | 功成名就</p>
				<p></p>
			</div>		
		</div>

		<div class="tv_container">
			<!-- 一亿中流企业纪录片 -->
			<div class="documentary">
				<h3>一亿中流企业纪录片</h3>
				<div class="title">睦田消防</div>
				<div class="swiper-container" id="documentary_swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in tv_client">
							<div class="mask" @click="play" v-show="show" style="opacity:1"></div>
							<video :src="item.url" controls="control"></video>
						</div>
					</div>
					<div class="swiper-pagination" id="documentary_pagin"></div>
				</div>
			</div>
			<!-- 一亿中流企业风采 -->
			<div class="mien">
				<h3>一亿中流企业纪录片</h3>
				<div class="title">睦田消防</div>
				<div class="swiper-container" id="mien_swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in tv_client">
							<div class="mask" @click="play" v-show="show" style="opacity:1"></div>
							<video :src="item.url" controls="control"></video>
						</div>
					</div>
					<div class="swiper-pagination" id="mien_pagin"></div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import '../../assets/css/tv_client.css';
	
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'

	export default{
		name:'tv_client',
		data(){
			return{
				show:true,
				tv_client:[
					{url:"https://www.hezitop.com/videos/testVideo.mp4"},
					{url:"https://www.hezitop.com/videos/testVideo.mp4"},
					{url:"https://www.hezitop.com/videos/testVideo.mp4"}
				]
			}
		},
		mounted(){
			var documentary_swiper =new Swiper('#documentary_swiper',{
				pagination:{
					el:'#documentary_pagin',
					clickable:'true'
				},
				observer:true,
				observeParents:true

			})
			var documentary_swiper =new Swiper('#mien_swiper',{
				pagination:{
					el:'#mien_pagin',
					clickable:'true'
				},
				observer:true,
				observeParents:true
			})
			// this.play()
			console.log(document.cookie)
		},
		created(){
			this.menu();
		},
		methods:{
			menu() {
				window.scrollTo(0,0);
			},

			play(e){
				console.log('click')
				if(e.target.style.opacity!=0){
					e.target.style.opacity=0
					// 获取当前点击的那个视频
					const video=e.target.nextSibling
					video.play()
				}else{
					e.target.style.opacity=1
					const video=e.target.nextSibling
					video.pause()
				}
			}
		}
	}
</script>