<template>
<div>
    <img src="@/assets/img/ui/logo.png" alt="Outsider" id="logo" v-bind:class="{ visible: showLogo }">
    <a href="#" v-on:click="toggleMenu"><img src="@/assets/img/ui/burger.svg" alt="Open menu" id="burger"></a>  

    <div id="menu" v-bind:class="{ visible: menuVisible }">
      <ul>
        <li><a href="#" v-on:click="scrollTo('#album')">ALBUM</a></li>
        <li><a href="#" v-on:click="scrollTo('#videos')">VIDEOS</a></li>
        <li><a href="#" v-on:click="scrollTo('#podcasts')">PODCASTS</a></li>
        <li><a href="#" v-on:click="scrollTo('#tour')">TOUR</a></li>
        <li><a href="#" v-on:click="scrollTo('#press')">PRESS</a></li>
        <li><a href="#" v-on:click="scrollTo('#shop')">SHOP</a></li>
        <li><a href="#" v-on:click="scrollTo('#contact')">CONTACT</a></li>
      </ul>
      <a href="#" v-on:click="toggleMenu" class="bt-close"><img src="@/assets/img/ui/close.svg" alt="Close menu"></a>
    </div>

    <div id="mask-top"></div>
    <div id="mask-bottom"></div>
    <div id="mask-left"></div>
    <div id="mask-right"></div>
</div>
  
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Frame',
  data() {
    return {
      menuVisible: false,
      showLogo: false
    }
  },
  created(){
    let that = this
    window.addEventListener('scroll', toggleLogo)
    function toggleLogo() {
      if(window.pageYOffset > 1500)
        that.showLogo = true
      else
        that.showLogo = false
    }
  },
  methods: {
    toggleMenu(e) {
      e.preventDefault()

      if(!this.menuVisible)
        this.menuVisible = true
      else
        this.menuVisible = false
    },
    scrollTo(id){
      $([document.documentElement, document.body]).animate({
        scrollTop: $(id).offset().top - window.innerHeight/1.7
      }, 2000);
    }
  }
}
</script>