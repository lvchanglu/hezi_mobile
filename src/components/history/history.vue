<template>
	<div id="path">
		<v-banner></v-banner>
		<!-- <div class="history_banner">
			<div class="banner_contain">
				<h3 class="banner_slogan">发展历程</h3>
				<div class="hengxian"></div>
				<p>放眼世界展望未来</p>
				<p>做全球卓越的产品全要素赋能平台</p>
			</div>		
		</div> -->
		<div class="history">
			<div class="title_e">Decelopment path</div>
			<div class="title">发展历程</div>
			<ul>
				<li class="item" v-for="(item,i) in develop_data" :key='i'>
					<img :src="admin+item.img">
					<div class="list">
						<div class="list_title">{{item.time}}</div>
						<ul>
							<li>{{item.title}}</li>
							<li v-html="item.context"></li>
						</ul>
					</div>					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/history.css';
	import vBanner from '../common/vBanner.vue'
	import {ask,stringToHtml,admin}  from '../../assets/js/connect.js'

	export default{
		name:'history',
		components:{
			vBanner
		},
		data(){
			return{
				develop_data:[],
				admin:admin
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

			// 初始化数据
			init(){
				ask('about','develop',res=>{
					res.data.data.Activity.forEach(function(item){
						item.title=stringToHtml(item.title);
						item.context=stringToHtml(item.context);
					})
					this.develop_data=res.data.data.Activity;
				})
			}
		}
	}
</script>

<style>
	#path .v-banner{
		margin-bottom: 0;
	}
</style>