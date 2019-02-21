<template>
  <div class="transmission-title">
    <div class="item-title" :data-title="hasLine?'':'transmission-title'">{{ title }}</div>
    <div v-if='hasLine' class="short-line"></div>
    <div class="item-title-context">
      <p :class="subcontext?'text-center':''">{{ context }}</p>
      <p :class="subcontext?'text-center':''">{{ subcontext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transmission-title',
  props: ['title', 'context', 'subcontext', 'hasLine']
}
</script> 

<style>
.transmission-title {
  margin-top: 1em;
  margin-bottom: 1em;
}
.transmission-title .item-title{
  font-size: 0.4rem;
  margin-bottom: 0;
}
.transmission-title .item-title[data-title=transmission-title]{
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.transmission-title .short-line{
  text-align: center;
}
.transmission-title .short-line::after{
  /* background: #fff; */
  transform: translateX(-50%);
  width: 0.4rem;
} 
.transmission-title .item-title-context{
  width: 80%;
  margin: 0 auto;
}
.transmission-title .item-title-context p{
  font-size: 0.28rem;
  line-height: 1.5em;
}
.transmission-title .item-title-context .text-center{
  text-align: center
}
</style>
