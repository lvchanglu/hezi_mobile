<template>
	<!-- 顶部导航 -->
	<nav>
		<div class="nav_top" id="nav_top">
			<img src="../../assets/img/logo2018.png" alt="" class="logo">
			<img src="../../assets/img/start@2x.png" alt="" class="start" @click="nav">
		</div>
		
		<div class="nav_bar  none" id="nav_bottom">
			<div class="left">
				<img src="../../assets/img/nav_1.png" height="32" width="44" alt="">
			</div>
			<div class="right">
				<div class="r_top">
					<div class="t_1"><span>SEARCH</span><img src="../../assets/img/nav_close.png" @click="close_nav"></div>
					<div class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><a href="/"><span style="color:#fff">首页</span></a></div>
				</div>
				<div class="list">
					<ul>
						<li><router-link to="/news_center"><span>新闻中心</span><img src="../../assets/img/next.png" ></router-link></li>
						<li><router-link to="/history"><span>发展历程</span><img src="../../assets/img/next.png" ></router-link></li>
						<li><router-link to="/culture"><span>企业文化</span><img src="../../assets/img/next.png" ></router-link></li>
						<li><router-link to="/coreteam"><span>核心团队</span><img src="../../assets/img/next.png" ></router-link></li>
						<li><router-link to="/"><span>IPO产业园</span><img src="../../assets/img/next.png"></router-link></li>
						<li><img src="../../assets/img/nav_email.png"></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default{
		name:'top',
		data(){
			return{
				display:'block'
			}
		},
		methods:{
			nav(){
				console.log('111');
				// 使页面无法滑动
				document.body.style.overflow='hidden';
				// 改变样式
				document.getElementById('nav_top').setAttribute('style', 'display:none');
				document.getElementById('nav_bottom').setAttribute('style', 'display:block');
			},
			close_nav(){
				document.body.style.overflow='';
				document.getElementById('nav_top').setAttribute('style', 'display:block');
				document.getElementById('nav_bottom').setAttribute('style', 'display:none');
			}
		}
	}
</script>