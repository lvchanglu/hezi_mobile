<template>
    <div class="speedup-item provides">
      <p class="item-title">我们还可以提供</p>
      <div class="provide-box">
        <div class="provide-item" v-for='(item,i) in providesData' :key='i'>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'provides',
  data() {
    return {
      providesData: [`一起探讨战略定位及重构商业模式`, `协调政府及产业上下游等\n关键政策资源和产业资源`, `提供最适合且最优惠的办公空间`]
    }
  },
}
</script>

<style>
.provides{
  background: #AEAEAE;
  padding: 1.5em;
}
.provides .item-title{
  color: #333;
}
.provide-item p{
  text-align: center;
  font-size: 0.28rem;
  line-height: 2em;
  color: #333333;
}
</style>
