<template>
<div>
    <!-- preloader -->
    <div id="preloader" v-if="showPreloader">
      <div class="heading">
        <img src="@/assets/img/ui/preloader-logo.png" alt="">
      </div>     
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
import $ from 'jquery'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  name: 'Flipbook',
  data() {
    return {
      fbImages: [],
      nbFlipImages: 250,
      loadbarWidth: 0,
      showPreloader: true
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
        that.loadbarWidth = progress * 250

        //-----------------

        that.fbImages.push({
          id: 'fbi'+i,
          src: img.src
        })

        //-----------------

        if(i == that.nbFlipImages-1) {
          that.$forceUpdate()
          enableBodyScroll(document.body)
          $('#preloader').addClass('inactive');
          //that.showPreloader = false
        }

      }, false)

      // if mobile
      if(window.innerWidth <= 1024)
        img.src = require("@/assets/img/flipbook/flipbook-mobile_"+i+".jpg")
      else
        img.src = require("@/assets/img/flipbook/flipbook_"+i+".jpg")
      
      //img.src = require("@/assets/img/flipbook/flipbook_"+(i*2)+".jpg")
    }

  },
  created(){
    let that = this
    window.addEventListener('scroll', function() {
      let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)
      let tY = document.body.scrollHeight - sbHeight
      let currentImg = Math.floor((window.pageYOffset / tY) * that.nbFlipImages)   
      $('#flipbook #fbi'+ currentImg).show()
      $('#flipbook').children().not('#flipbook #fbi'+ currentImg).hide()
    })
  }
}
</script>