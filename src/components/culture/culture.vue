<template>
	<div class="culture" id="civilization">
		<v-banner></v-banner>
		<!-- <div class="culture_banner">
			<div class="banner_contain">
				<h3 class="banner_slogan">发展历程</h3>
				<div class="hengxian"></div>
				<p>放眼世界展望未来</p>
				<p>做全球卓越的产品全要素赋能平台</p>
			</div>		
		</div> -->

	  	<div class="item">
	  		<div class="item_banner">
	  			<img src="../../assets/img/culture_b1.png" height="433" width="769" alt="">
	  		</div>
	  		<h3>和梓使命</h3>
	  		<div class="hengxian"></div>
	  		<div class="discribe" v-html="culture_data.context">
	  		</div>
	  	</div>
		<div class="item">
	  		<div class="item_banner">
	  			<img src="../../assets/img/culture_2.png" height="473" width="840" alt="">
	  		</div>
	  		<h3 class="c_value">价值观</h3>
	  		<!-- <div class="hengxian"></div> -->
	  		<div class="discribe" v-html="value_data.context">
	  		</div>
	  		<br>
	  	</div>
	  	<div class="culture_bottom">
		  	<div class="vision">
		  		愿景：做全球卓越的产业全要素赋能平台
		  	</div>
		</div>
	</div> 
</template>

<script>
	import '../../assets/css/culture.css'
	import {ask,stringToHtml,admin} from  '../../assets/js/connect.js'
	import vBanner from '../common/vBanner.vue'
	export default{
		name:'culture',
		components:{
			vBanner
		},
		data(){
			return{
				culture_data:{},
				value_data:{}
			}
		},
		created(){
			this.menu();
		},
		mounted(){
			this.init();
		},
		methods:{
			menu() {
				window.scrollTo(0,0);
			},

			init(){
				ask('about','corporate_culture',res=>{
					res.data.data.Activity.forEach(item=>{
						item.context=stringToHtml(item.context)
					})
					this.culture_data=res.data.data.Activity[0]
				})
				ask('about','corporatevalue',res=>{
					res.data.data.Activity.forEach(item=>{
						item.context=stringToHtml(item.context).replace(/：/g,"<br>")
						item.context=item.context.replace(/；/g,"")
						console.log(item.context)
					})
					this.value_data=res.data.data.Activity[0]

				})
			}
		}
	}
</script>
<style>
	#civilization .v-banner{
		margin-bottom: 0;
	}
</style>