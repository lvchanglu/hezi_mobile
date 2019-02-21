<template>
	<div id="about">
		<v-banner></v-banner>
		<!-- 简介 -->
		<div class="about item">
			<div class="about_banner" :style="{background:'url('+about_img+')'}"></div>
			<div class="about_content">
				<div class="title_e">Company Profile</div>
				<div class="hengxian"></div>
				<div class="title">{{about_title}}</div>
				<div class="context" v-html="about_context"></div>
			</div>			
		</div>
		<!-- 商业模式 -->
		<div class="buess item">
			<div class="buess_banner" :style="{background:'url('+buess_img+')'}"></div>
			<div class="buess_content">
				<div class="title_e">Business Model</div>
				<div class="hengxian"></div>
				<div class="context" v-html="buess_context"></div>
			</div>
		</div>
		<!-- 办公环境 -->
		<!-- <div class="work item" v-for="item in work">
			<div class="work_banner" :style="{background:'url('+item.img+')'}"></div>
			<div class="work_content" v-html="item.context"></div>
		</div> -->
		<div class="work item">
			<div class="work_banner" :style="{background:'url('+work[0].img+')'}"></div>
			<div class="work_content" >
				<div class="content_title">办公环境</div>
				<div class="hengxian"></div>
				<div class="work_describe"v-html="work[0].context"></div>
				<div class="content_title">1000 <span>m&sup2</span></div> 
				<span>办公总面积</span>
			</div>
		</div>
		<div class="work item">
			<div class="work_banner" :style="{background:'url('+work[1].img+')'}"></div>
			<div class="work_content" v-html="work[1].context"></div>
		</div>
		<div class="work item">
			<div class="work_banner" :style="{background:'url('+work[2].img+')'}"></div>
			<div class="work_content" v-html="work[2].context"></div>
		</div>
		<div class="work item">
			<div class="work_banner" :style="{background:'url('+work[3].img+')'}"></div>
			<div class="work_content">
				<div class="content_title">和梓未来</div>
				<div class="hengxian"></div>
				<div class="work_describe"v-html="work[3].context"></div>
			</div>
		</div>
		
	</div>
</template>



<script>
	import vBanner from'../common/vBanner.vue'
	import {ask,stringToHtml,admin,adminapi} from '../../assets/js/connect.js'
	import '../../assets/css/about.css'
	export default{
		name:'about',
		components:{
			vBanner
		}, 
		data(){
			return{
				about_img:'',
				about_title:'',
				about_context:'',
				buess_img:'',
				buess_context:'',
				work:[]
			}
		},
		mounted(){
			//数据初始化
			this.init();
			//调用动效
			let transform=this.transform
			window.addEventListener('scroll',transform)
			//第一组动效需要默认有
			const tt =document.getElementsByClassName('about')[0]
			tt.style.opacity=1
			tt.style.transform='translate(0)'
		},
		methods:{
			// 初始化数据
			init(){
				console.log('init');
				ask('about','about',res=>{
					let data =res.data.data.Activity[0];
					this.about_img=admin+data.img
					this.about_title=data.table
					this.about_context=stringToHtml(data.context)
				}),
				ask('about','buess',res=>{
					let data =res.data.data.Activity[0];
					this.buess_img=admin+data.img;
					this.buess_context=stringToHtml(data.context);

				}),
				ask('about','work',res=>{
					let data=res.data.data.Activity
					data.forEach(item=>{
						item.img=admin+item.img
						item.context=stringToHtml(item.context)
					})
					this.work=data;
				})
			},
			//添加页面的动效
			transform(){
				console.log("transoform")
				//获取需要添加动效的几个div
				const items=document.getElementsByClassName('item');
				let screenHeight=window.innerHeight||document.documentElement.ClientHeight||doucment.body.ClientHeight
				for(let item of items){
					//每个div距离浏览器窗口顶部的偏移量
					const top=item.getBoundingClientRect().top
					if(top<=screenHeight*0.8){
						item.style.opacity=1;
						item.style.transform='translateY(0)'
					}
				}


			}
		}
	}
</script>


<style>
	#about .v-banner{
		margin-bottom: 0.2rem;
	}
</style>