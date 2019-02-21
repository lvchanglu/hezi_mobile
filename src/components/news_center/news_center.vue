
<template>
	<div class="news_center" id="newsCenter">
		<v-banner></v-banner>
		<!-- <div class="banner_new">
			<div class="banner_contain">
				<h3 class="banner_slogan">新闻中心</h3>
				<div class="hengxian"></div>
				<p>最新的和梓动态</p>
				<p>最前沿的行业洞见</p>
			</div>		
		</div> -->
		<h3>新闻中心</h3>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		   <el-tab-pane label="和梓动态" name="first">
			   	<div class="content" v-for='item in data_item' >
			   		<div class="new_item">
			   			<router-link :to="'/news_detail/'+item.id"><img :src='item.img' ></router-link>
			   			<router-link :to="'/news_detail/'+item.id">{{item.title}}</router-link>
			   			<div class="date">
			   				<span>和梓动态</span>
			   				<span class="shuxian">|</span>
			   				<span>{{item.time}}</span>
			   			</div>
			   		</div>
			   	</div>
			   	<div class="el_box">
			   		<el-pagination :page-size="8" :pager-count="5" layout="prev, pager, next" :total="pageCount"  @current-change="pagination" background >
					</el-pagination>
			   	</div>
			   	
		   </el-tab-pane>
		   <el-tab-pane label="和梓洞见" name="second">
		   		<div class="content" v-for='item in dataty_item'>
			   		<div class="new_item"  >
			   			<router-link :to="'/news_detail/'+item.id"><img :src='item.img' ></router-link>
			   			<router-link :to="'/news_detail/'+item.id">{{item.title}}</router-link>
			   			<div class="date">
			   				<span>和梓洞见</span>
			   				<span class="shuxian">|</span>
			   				<span>{{item.time}}</span>
			   			</div>
			   		</div>
			   	</div>
			   	<div class="el_box">
			   		<el-pagination :page-size="8" :pager-count="5" layout="prev, pager, next" :total="pageCount_ty" @current-change="pagination2" >
					</el-pagination>
			   	</div>
		   </el-tab-pane>
		   <!-- <el-tab-pane label="一亿中流" name="third">角色管理</el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
	import '../../assets/css/news_center.css';
	import vBanner from'../common/vBanner.vue'
	import {ask,stringToHtml,admin} from '../../assets/js/connect.js'

	export default{
		name:'news_center',
		components:{
			vBanner
		},
		data() {
	      return {
	        activeName: 'first',
	      	news_data:[{img:''}],
	      	news_data_ty:[{img:''}],
	      	data_item:[],
	      	dataty_item:[],
	      	pageCount:1,
	      	pageCount_ty:1,
	      	type:'',
	      };
	    },
	    created(){
				// 初始化数据
				this.menu();
	    	this.getnews('news');
	    	this.getnews('news_ty');
			},
			watch:{
				"$route":"toggleType"
			},
	    mounted(){
				this.toggleType()
	    },
	    methods: {
				menu() {
					window.scrollTo(0,0);
				},
				toggleType(){
					this.activeName = this.$route.params.type==0?'first':'second';
				},
	      handleClick(tab, event) {
	        // console.log(tab, event);
	      },
	      // 获取新闻
	      getnews(type){
		      	ask('news',type||'news',res=>{
		      		// 拿到的数据还需要做些处理
			      	if(type=='news'){
			      		//拿到新闻的数据并存到变量中
		      			let news_data=res.data.data.Activity
			      		news_data=news_data.map(function(item){
			      			let obj={}
			      			obj.title=stringToHtml(item.title)
			      			// obj.title=item.title
			      			obj.id=item.id
			      			obj.time=item.time
			      			obj.img= admin+item.img
			      			// console.log(item.img);
			      			return obj
			      		})
			      		// 把处理后的数据放到vue的data里
		      			this.news_data=news_data;

		      			// 分页的数据
		      			this.pageCount=news_data.length
		      			this.pagination(1); 
			      	}else{
			      		//拿到新闻的数据并存到变量中
		      			let news_data_ty=res.data.data.Activity
			      		news_data_ty=news_data_ty.map(function(item){
			      			let obj={}
			      			obj.title=stringToHtml(item.title)
			      			obj.id=item.id
			      			obj.time=item.time
			      			obj.img= admin+item.img
			      			// console.log(item.img);
			      			return obj
			      		})
			      		this.news_data_ty=news_data_ty;
			      		// 分页的数据
			      		this.pageCount_ty=news_data_ty.length
			      		this.pagination2(1);
			      	}
		      	})
	      },

	      // 分页
	      pagination(pageNo) {
		      	console.log(pageNo)
		      	let pageSize=8;
		      	let array=this.news_data;
				var offset = (pageNo - 1) * pageSize;
				let data= (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
				this.data_item=data;
		  },
		   pagination2(pageNo) {
		      	console.log(pageNo)
		      	let pageSize=8;
		      	let array=this.news_data_ty;
				var offset = (pageNo - 1) * pageSize;
				let data= (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
				this.dataty_item=data;
				console.log(data);
		  },
		  
	     /* getnew(tab, event){
	      	console.log(tab, event);
	      	// this.$router.push({path:'/news_detail?id=222'})
	      }*/
	      
	    }
	}
</script>

<style>
	#newsCenter .v-banner{
		margin-bottom: 0;
	}
</style>