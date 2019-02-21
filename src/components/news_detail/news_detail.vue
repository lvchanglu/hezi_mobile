<template>
	<div>
		<div class="new_content">		
			<div class="new_banner" style="background-image:url('static/img/new.png')"></div>
			<div class="content">
				<div class="type">
					<router-link to="/news_center/0" >新闻中心></router-link>
					<router-link to="/news_center/0" v-if="new_data.type==2">和梓动态</router-link>
					<router-link to="/news_center/1" v-if="new_data.type==3">和梓洞见</router-link>
					<a>></a>
				</div>
				<div class="date">{{new_data.time}}</div>
				<div class="title" v-html='new_data.title'></div>	
				<hr class="hr_t">	
				<div class="context" v-html='new_data.context'></div>
				<hr class="hr_b">
			</div>	

			<div class="new_bottom">
				<router-link class="prev" :to="'/news_detail/'+prev.id" v-if="prev.id>-1">
					<span>上一篇</span><span>|</span><span>{{prev.title}}</span>
				</router-link>
				<router-link class="next" :to="'/news_detail/'+next.id" v-if="next.id>-1">
					<span>下一篇</span><span>|</span><span>{{next.title}}</span>
				</router-link>
				<!-- <a class="back" href="/news_center">返回列表</a> -->
			</div>
		</div>
	</div>
</template>


<script>
	import '../../assets/css/news_detail.css';

	import {ask,stringToHtml,admin,getUrlParam,cloneObj} from '../../assets/js/connect.js'
import { all } from 'q';

	export default{
		name:'news_detail',
		data() {
	      return {
	        activeName: 'first',
	      	news_data:[{img:''}],
	      	news_data_ty:[{img:''}],
	      	new_data:{
						id:-1,
						type:0,
						time:'',
						title:'',
						context:''
						},
					new_id:'',
					prev:{
						title:'',
						id:-1
					},
					next:{
						title:'',
						id:-1
					},
	      };
	    },
	    created(){
				this.menu();
			},
			watch:{
				"$route":function(){
					this.menu();

					this.updateNews(window.news_data);
					this.updateNews(window.news_data_ty);

				}
			},
	    mounted(){
				window.news_data = window.news_data?window.news_data:null;
				window.news_data_ty = window.news_data_ty?window.news_data_ty:null;
	    	this.getnews('news')
	    	this.getnews('news_ty')	    	
	    },
	    methods: {
				menu() {
					window.scrollTo(0,0);
				},
				getActiveNews(id,all){
					let active = null;
					
					all.forEach((e,i,a)=>{
					let activeIndex = -1;
						if(e.id == id){
							activeIndex = i;
							active = cloneObj(e)
						}
						if(activeIndex>-1){
							if(activeIndex === 0){
								this.prev.id = all[activeIndex+1].id;
								this.prev.title = stringToHtml(all[activeIndex+1].title);
								this.next.id = -1;

							}else if(activeIndex == a.length-1){
									console.log(activeIndex)
								this.next.id = all[activeIndex-1].id;
								this.next.title = stringToHtml(all[activeIndex-1].title);
								this.prev.id = -1;
								
							}else{
								this.next.id = all[activeIndex-1].id;
								this.next.title = stringToHtml(all[activeIndex-1].title);
								this.prev.id = all[activeIndex+1].id;
								this.prev.title = stringToHtml(all[activeIndex+1].title);		
							}
						}
					})

					if(active){
						return active;
					}
						
				},
				updateNews(allData) {
					this.new_id = this.$route.params.id;
					// 根据id找到需要的那条新闻存起来
					// this.new_data = this.getActiveNews(this.new_id,window.news_data);
					let o = this.getActiveNews(this.new_id,allData);
					this.new_data.id = o.id;
					this.new_data.type = o.type;
					this.new_data.time = o.time;
					this.new_data.title = o.title;
					this.new_data.context = o.context;
				},
	      // 获取新闻
	      getnews(g){
	      	ask('news',g||'news',res=>{
	      		// 拿到的数据还需要做些处理
		      	if(g=='news'){
		      		//拿到新闻的数据并存到变量中
							window.news_data = cloneObj(res.data.data.Activity);
							
							window.news_data.forEach(e=>{
								e.context=stringToHtml(e.context)
							})

							this.updateNews(window.news_data)

		      	}else{
		      		//拿到新闻的数据并存到变量中
	      			window.news_data_ty = cloneObj(res.data.data.Activity);

							window.news_data_ty.forEach(e=>{
								e.context=stringToHtml(e.context)
							})
							this.updateNews(window.news_data_ty)
		      // 		// 从url中获取id
					// let new_id=getUrlParam('?');
					// // 根据id找到需要的那条新闻存起来
					// var that=this;
					// news_data_ty.forEach(function(item){
			    //   		if(item.id==new_id){
			    //   			let arr={}
			    //   			arr.id=item.id;
			    //   			arr.time=item.time;
			    //   			arr.type=item.type;
			    //   			arr.title=item.title
			    //   			arr.context=item.context;
			    //   			console.log(arr);
			    //   			that.new_data_ty=arr;
			    //   		}
			    //   	});
		      	}
	      	})
	      }, 
	      // // 上一篇下一篇
	      // prev(){
		    //   	this.new_id=this.new_id-1
		    //   	var that=this;
		    //   	console.log(that.new_id);
		    //   	this.news_data.forEach(function(item){
				// 	if(item.id==that.new_id){
				// 		let arr={}
				// 		arr.id=item.id;
				// 		arr.time=item.time;
				// 		arr.type=item.type;
				// 		arr.title=item.title;
				// 		arr.context=item.context;
				// 		console.log(arr);
				// 		that.new_data=arr;
				// 	}
				// });
	      // },
	      // next(){
		    //   	this.new_id=parseInt(this.new_id)+1
		    //   	var that=this;
		    //   	console.log(that.new_id)
		    //   	this.news_data.forEach(function(item){
				// 	if(item.id==that.new_id){
				// 		let arr={}
				// 		arr.id=item.id;
				// 		arr.time=item.time;
				// 		arr.type=item.type;
				// 		arr.title=item.title;
				// 		arr.context=item.context;
				// 		console.log(arr);
				// 		that.new_data=arr;
				// 	}
				// });
		    //   }   
	      }
	}
</script>

<style scope>
	.context img{
		width: 100%;
		height:auto;
	}
	.new_content .title{
		line-height: 1.25em
	}
</style>