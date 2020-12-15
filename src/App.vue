<template>
  <div id="app">
    <img src="./assets/img/ui/logo.png" alt="Outsider" class="logo">
    <div id="loadbar"></div>
    <div id="flipbook">
      <img v-for="fbImage in fbImages" 
      :key="fbImage.id" 
      :id="fbImage.id" 
      :src="fbImage.src">
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data(){
    return{
      fbImages: [],
      nbLoaded: 0,
      nbFlipImages: 1099,
      loadbarWidth: 200
    }
  },
  created(){


    //let img = new Image();
        //let id = "i"+i;
        //img.setAttribute("id", id);

        //this.nbLoaded ++;
        //let percent = this.nbLoaded / this.nbFlipImages;
        //$('#loadbar').css({width: percent * loadbarWidth});

    for (let i = 0; i < this.nbFlipImages; i++) {
      if(i == this.nbFlipImages-1) {
          //document.getElementById("loadbar").remove();
          this.$forceUpdate();
        }

        this.fbImages.push({
          id: 'fbi'+i,
          src: require("./assets/img/flipbook/out-site-export_"+i+".jpg")
        });
    }

    let that = this;
    let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
    let tY = document.body.scrollHeight - sbHeight;

    window.addEventListener('scroll', function() {
      let currentImg = Math.floor((window.pageYOffset / tY) * that.nbFlipImages);
      // todo: hide seulement la bonne img
      $('#flipbook').children().hide();
      $('#flipbook #fbi'+ currentImg).show();
    });

  }
}
</script>

<style>
@import './assets/styles/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
