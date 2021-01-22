<template>
  <div id="app">

    <img src="./assets/img/ui/home.png" alt="" id="hometest">
    <img src="./assets/img/ui/scroll.svg" alt="Scroll down" id="scrolldown">

    <Frame/>
    <Flipbook/>
    
  </div>
</template>

<script>
import Flipbook from './components/Flipbook.vue'
import Frame from './components/Frame.vue'

export default {
  name: 'App',
  components: {
    Flipbook,
    Frame
  }
}
</script>

<style lang="scss">

#hometest{
  width: 100%;
  opacity: 0;
}

</style>
