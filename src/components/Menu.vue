<template>
  <div id="menu">
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">SHORT FILM</a></li>
      <li><a href="#">ALBUM</a></li>
      <li><a href="#">FILMS</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  }
}
</script>

<style scoped lang="scss">

  #menu{
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: black;

    font-family: 'DargerScript';
  }

  li{
    list-style: none;
  }

  a{
    color: white;
    text-decoration: none;
    font-family: 'DargerScript';
  }
</style>