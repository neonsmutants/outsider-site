<template>
  <div id="app">

    <Flipbook/>
    <Home/>
    <Frame/>
    
  </div>
</template>

<script>
import Flipbook from './components/Flipbook.vue'
import Frame from './components/Frame.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Flipbook,
    Frame,
    Home
  }
}
</script>
