<template>
	<!-- 顶部导航 -->

	<div class="nav_box">
		<nav id="nav">
			<div class="nav_top" id="nav_top">
				<router-link to='/'>
					<img src="../../assets/img/logo2018.png" alt="" class="logo">
				</router-link>
				<img src="../../assets/img/start@2x.png" alt="" class="start" @click="nav">
			</div>
			
			<div class="nav_bar " id="nav_bottom">
				<div class="right">
					<div class="r_top">
						<div class="t_1"><span>SEARCH</span><img src="../../assets/img/nav_close.png" @click="close_nav"></div>
						<!-- <div class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><a href="/"><span style="color:#fff">首页</span></a></div> -->
					</div>
					<div class="list" id="list">
						<ul>
							<li><a><span>一亿中流服务</span><img src="../../assets/img/next.png" ></a></li>
							<li><a><span>一亿中流风采</span><img src="../../assets/img/next.png" ></a></li>
							<li><a><span>新闻中心</span><img src="../../assets/img/next.png" ></a></li>
							<li><a><span>关于和梓</span><img src="../../assets/img/next.png" ></a></li>
							<li><a><span>联系我们</span><img src="../../assets/img/next.png"></a></li>
							<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
						</ul>
					</div>
					<div class="list-wrapper" >
						<div class="list-item" id="list-wrapper">
							<ul>
								<li class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><span style="color:#fff">一亿中流服务</span></li>
								<li><router-link to="/community"><span>商学社群</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/position"><span>战略定位</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/transmission"><span>品牌传播</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/speedup"><span>战略入股</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/pro-ipo"><span>上市加速器</span><img src="../../assets/img/next.png"></router-link></li>
								<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
							</ul>
						</div>
						<div class="list-item">
							<ul>
								<li class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><span style="color:#fff">一亿中流风采</span></li>
								<li><router-link to="/tv"><span>和梓纪录片</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/tv_client"><span>一亿中流风采</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
							</ul>
						</div>
						<div class="list-item">
							<ul>
								<li class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><span style="color:#fff">新闻中心</span></li>
								<li><router-link to="/news_center/0"><span>和梓动态</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/news_center/1"><span>和梓洞见</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
							</ul>
						</div>
						<div class="list-item">
							<ul>
								<li class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><span style="color:#fff">关于和梓</span></li>
								<li><router-link to="/about"><span>和梓简介</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/culture"><span>文化&愿景</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/history"><span>发展历程</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/coreteam"><span>核心团队</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
							</ul>
						</div>
						<div class="list-item">
							<ul>
								<li class="t_2"> <img src="../../assets/img/nav_3.png" height="26" width="15" ><span style="color:#fff">联系我们</span></li>
								<li><router-link to="/contact_us/0"><span>杭州</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/contact_us/1"><span>深圳</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/contact_us/2"><span>上海</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><router-link to="/contact_us/3"><span>昆明</span><img src="../../assets/img/next.png" ></router-link></li>
								<li><a href="https://exmail.qq.com/cgi-bin/loginpage"><img src="../../assets/img/nav_email.png"></a></li>
							</ul>
						</div>
					</div>
						
				</div>
			</div>
			

			<!-- <div class="nav_bar " id="nav_bottom">
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
			</div> -->
		</nav>
	</div>
		
</template>

<script>
	import '../../assets/css/nav2.css'
	import $ from 'jquery'
	export default{
		name:'top',
		data(){
			return{
				display:'block'
			}
		},
		mounted(){
			this.list_item();
		},
		methods:{
			nav(){
				// 使页面无法滑动
				document.body.style.overflow='hidden';
				document.getElementById('nav').setAttribute('style', 'transform:translateX(-4.95rem)')
				document.getElementById('nav_bottom').setAttribute('style', 'display:block')
				// document.getElementById('app').setAttribute('style', 'transform:translateX(-4.95rem)')
			},
			close_nav(){
				document.body.style.overflow='';
				document.getElementById('nav').setAttribute('style', 'transform:translateX(0)')
				// document.getElementById('app').setAttribute('style', 'transform:translateX(0)')
			},
			list_item(){
				var that=this;
				// 为出来绑定事件
				$('#list li').on('click',function(){
					let i=($(this).index())
					$('.list-wrapper .list-item')[i].setAttribute('style','left:0');
				})

				// 为返回绑定事件
				$('.list-item ul>li:first-child').on('click',function(){
					console.log('back')
					let i=($(this).parent().parent().index())
					// console.log(i)
					$('.list-wrapper .list-item')[i].setAttribute('style','left:4.95rem');
				})

				//点击跳转页面后关闭
				$('.list-item ul a').on('click',function(){
					let i=($(this).parent().parent().parent().index())
					$('.list-wrapper .list-item')[i].setAttribute('style','left:4.95rem');
					that.close_nav();
				})

				

			},

		}
	}
</script>
<style>
	#nav_bottom{
		display: none;
	}
</style>