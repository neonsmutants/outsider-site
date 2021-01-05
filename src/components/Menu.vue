<template>
  <div id="menu">
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

    <a href="#" v-on:click="toggleMenu"></a>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  }
}
</script>