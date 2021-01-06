<template>
<div>
    <img src="@/assets/img/ui/logo.png" alt="Outsider" id="logo">
    <a href="#" v-on:click="toggleMenu"><img src="@/assets/img/ui/burger.svg" alt="Open menu" id="burger"></a>  
    <img src="@/assets/img/ui/play.svg" alt="Play" id="play">

    <div id="menu" v-bind:class="{ visible: menuVisible }">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Interactive Experience</a></li>
        <li><a href="#">Short Film</a></li>
        <li><a href="#">Album</a></li>
        <li><a href="#">Films</a></li>
        <li><a href="#">Podcasts</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a href="#" v-on:click="toggleMenu" class="btn-close"><img src="@/assets/img/ui/close.svg" alt="Close menu"></a>
    </div>

    <div id="mask-top"></div>
    <div id="mask-bottom"></div>
    <div id="mask-left"></div>
    <div id="mask-right"></div>
</div>
  
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu(e) {
      e.preventDefault()

      if(!this.menuVisible)
        this.menuVisible = true
      else
        this.menuVisible = false
    }
  }
}
</script>