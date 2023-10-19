<script >
//import axios from 'axios';
import headerComp from './components/headerComp.vue'
import sidebarComp from './components/sidebarComp.vue'
import mainComp from './components/mainComp.vue'
//import {store} from '../src/store'

export default{
  name: "App",
  components: {
        headerComp,
        sidebarComp,
        mainComp,
    },
data(){
    return{
      
    }
  },
  mounted(){
    
  },
  methods: {
   
  }
}  
</script>

<template>
  <div id="app">
    
    <!-- Navbar -->
    <headerComp/>

    <div class="d-flex">
      <!-- Sidebar -->
      <sidebarComp/>
      

      <!-- Main -->
      <mainComp/>
    </div>

  </div>

  
  

</template>

<style lang="scss">
@use './style/main.scss';
  #app{
    background-image: url('../public/img/avadabarbers-about-introbackground.jpg') ;
    //height: 100vh;
  }
</style>
