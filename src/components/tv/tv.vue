<template>
	<div class="tv">
		<h3>和梓企业纪录片</h3>
		<div class="video_box">
			<div class="mask">
				<img src="../../assets/img/play.png" class="play">
			</div>		
			<video id="video"  :src="video_url" controls="controls"></video>
		</div>
	</div>
</template>


<script>
	import '../../assets/css/tv.css';

	import{ask,admin} from '../../assets/js/connect.js'

	export default{
		name:'tv',
		data(){
			return{
				mask_show:true,
				video_url:'https://www.hezitop.com/videos/tv.mp4'
			}	
		},
		mounted(){
			this.init();

		},
		created(){
			this.menu();
		},
		methods:{
			menu() {
				window.scrollTo(0,0);
			},

			init(){
				ask('tv','tv',res=>{

				})
				this.play();
			},
			play(){
				const mask=document.getElementsByClassName('mask')[0];
				const video=document.getElementById('video');
				mask.onclick=function(){
					mask.style.visibility='hidden';
					video.play()
					console.log('mask')
				}
				video.onclick=function(){
					mask.style.visibility='visible';
					video.pause()
					console.log('video')
				}			
			}
		}
	}
</script>