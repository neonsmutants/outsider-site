<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img src="assets/img//ui/logo.png" alt="Outsider" class="logo">
    <div id="loadbar"></div>
    <div id="flipbook"></div>

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
      created(){
        
        const nbFlipImages = 1099;
        var nbLoaded = 0;
        const loadbarWidth = 200;

        function load(i) {

            let img = new Image();
            let id = "i"+i;
            img.setAttribute("id", id);

            img.addEventListener('load', function() {

                nbLoaded ++;
                document.getElementById('flipbook').appendChild(img);

                let percent = nbLoaded / nbFlipImages;
                $('#loadbar').css({width: percent * loadbarWidth});

                //-> images loaded

                if(i == nbFlipImages-1) {
                    document.getElementById("loadbar").remove();
                }
            }, false);
            
            img.src = "assets/img/flipbook/out-site-export_"+i+".jpg";
        }

        for (let i = 0; i < nbFlipImages; i++) {
          load(i);  
        }

        function flip() {
          var currentImg = Math.floor((window.scrollY / window.innerHeight) * nbFlipImages);
          $('#flipbook').children().hide();
          $('#flipbook #i'+ currentImg).show();
        }

        window.addEventListener('scroll', flip);

      }
    }
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
