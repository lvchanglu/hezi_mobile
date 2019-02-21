<template>
  <div class='pre-ipo-title-box'>
    <p class='pre-ipo-title'>{{ title }}</p>
    <div v-if='!noLine' class='short-line'></div>
    <p v-if='context' class='pre-ipo-context'>{{ context }}</p>
  </div>
</template>

<script>

export default {
  name:'proIpoTitle',
  props: ['title', 'context', 'noLine','showSubTitle']
}
</script>

<style scoped>
.pre-ipo-title-box,.pre-ipo-title{
  text-align: center;
}

.pre-ipo-title{
  font-size: 0.4rem;
  color: #183074
}
 .short-line{
  position: relative;
  height: 0.6rem;
}
.short-line::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 0.5rem;
  height: 2px;
  background: #183074;
}
.pre-ipo-context{
  padding: 1.5em 0;
  color: #0F0F0F;
}
.pre-ipo-context{
  line-height: 2em;
}
</style>
