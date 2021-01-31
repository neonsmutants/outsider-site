<template>
<div>
    <img src="@/assets/img/ui/logo.png" alt="Outsider" id="logo">
    <a href="#" v-on:click="toggleMenu"><img src="@/assets/img/ui/burger.svg" alt="Open menu" id="burger"></a>  

    <div id="menu" v-bind:class="{ visible: menuVisible }">
      <ul>
        <li><a href="#">ALBUM</a></li>
        <li><a href="#">CLIPS</a></li>
        <li><a href="#">PODCASTS</a></li>
        <li><a href="#">TOUR</a></li>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">CONTACT</a></li>
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
export default {
  name: 'Frame',
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