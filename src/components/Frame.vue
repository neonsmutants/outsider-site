<template>
<div>
    <img src="@/assets/img/ui/logo.png" alt="Outsider" id="logo">
    <a href="#" v-on:click="toggleMenu"><img src="@/assets/img/ui/burger.svg" alt="Open menu" id="burger"></a>  

    <div id="menu" v-bind:class="{ visible: menuVisible }">
      <ul>
        <li><a href="http://smarturl.it/outsiderdarger" target="blank">ALBUM</a></li>
        <li><a href="https://www.youtube.com/watch?v=p3FKn5eVCwg&list=PL6c_5GyF9mZQXOmzXyQ5WsqcjZ3GnWYaL" target="blank">CLIPS</a></li>
        <li><a href="#" target="blank">PODCASTS</a></li>
        <li><a href="https://www.songkick.com/artists/3653951-philippe-cohen-solal" target="blank">TOUR</a></li>
        <li><a href="https://yabasta-records.com/boutique" target="blank">SHOP</a></li>
        <li><a href="mailto:info@yabasta-records.com">CONTACT</a></li>
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