<template>
  <div class="preloader">
    <div class="loadbar-container">
      <div id="loadbar"></div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    loadbarWidth: String
  }
}
</script>

<style scoped>

</style>