<template>
  <div id="app">
    <img src="./assets/img/ui/logo.png" alt="Outsider" id="logo">
    <img src="./assets/img/ui/burger.svg" alt="Menu" id="burger">
    <Menu/>

    <div id="mask-top"></div>
    <div id="mask-bottom"></div>
    <div id="mask-left"></div>
    <div id="mask-right"></div>

    <img src="./assets/img/ui/home.png" alt="" id="hometest">
    

    <!-- preloader -->

    <div id="preloader" v-if="showPreloader">
      <div id="loadbar-container">
        <div id="loadbar" v-bind:style="{ width: loadbarWidth + 'px' }"></div>
      </div>
    </div>

    <!-- flipbook -->

    <div id="flipbook">
      <img v-for="fbImage in fbImages" 
      :key="fbImage.id" 
      :id="fbImage.id" 
      :src="fbImage.src">
    </div>
    
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import $ from 'jquery'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  name: 'App',
  components: {
    Menu
  },
  data(){
    return{
      fbImages: [],
      nbFlipImages: 1099,
      loadbarWidth: 0,
      showPreloader: false
    }
  },
  mounted() {

    let that = this
    let nbLoaded = 0

    disableBodyScroll(document.body)

    for (let i = 0; i < this.nbFlipImages; i++) {

      let img = new Image()
      //img.setAttribute('id', 'fbi'+i)

      img.addEventListener('load', function() {

        nbLoaded ++
        let progress = nbLoaded / that.nbFlipImages
        that.loadbarWidth = progress * 400

        //-----------------

        that.fbImages.push({
          id: 'fbi'+i,
          src: img.src
        })

        //-----------------

        if(i == that.nbFlipImages-1) {
          that.$forceUpdate()
          enableBodyScroll(document.body)
          that.showPreloader = false
        }

      }, false)

      img.src = require("./assets/img/flipbook/out-site-export_"+i+".jpg")
    }

  },
  created(){
    let that = this
    window.addEventListener('scroll', function() {
      let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)
      let tY = document.body.scrollHeight - sbHeight
      let currentImg = Math.floor((window.pageYOffset / tY) * that.nbFlipImages)
      // todo: hide seulement la bonne img
      $('#flipbook').children().hide()
      $('#flipbook #fbi'+ currentImg).show()
    })
  },
  methods: {
    launch(){

    }
  }
}
</script>

<style lang="scss">

#hometest{
  width: 100%; 
}

</style>
