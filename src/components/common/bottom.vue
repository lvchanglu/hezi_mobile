<template>
		<!-- 底部 -->
		<div class="bottom">
			<ul class="contact">
				<li>
					<span>总部地址:</span>
					<img src="../../assets/img/location.png" alt="">
					<span>杭州市江干区越秀·维多利中心B座 9-14楼</span>
				</li>
				<li>
					<span>商务合作:</span>
					<img src="../../assets/img/email.png" alt="">
					<span>hezi@hezitop.com</span>
					<img src="../../assets/img/phone.png" alt="">
					<span>0571-88697197</span>
				</li>
				<li>
					<span>人才招聘:</span>
					<img src="../../assets/img/email.png" alt="">
					<span>hezi@hezitop.com</span>
					<img src="../../assets/img/phone.png" alt="">
					<span>0571-88697197</span>
				</li>
				<li class="erweima">
					<img src="../../assets/img/erweima.png" alt="" >
					<span>微信公众号</span>
				</li>
			</ul>
			<ul class="other">
				<li>Copyright © www.hezitop.com, 2018.</li>
				<li>浙江和梓创实企业管理有限公司 版权所有</li>
				<li>浙ICP备16042944号</li>
				<li>浙公安网备 33011002012813号</li>
			</ul>
		</div>
</template>

<script>
	import '../../assets/css/bottom.css'
	export default{
		name:'bottom'
	}
</script>
<style>
	.bottom img{
		margin: 0 0.1rem;
	}
	.bottom .erweima img{
		margin-left: 0;
		margin-right: 0.25rem;
	}
	.bottom .other li{
		letter-spacing: 0.015rem;
	}
</style>