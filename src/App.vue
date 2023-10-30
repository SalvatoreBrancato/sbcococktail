<script >
//import axios from 'axios';
import headerComp from './components/headercomp.vue'
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
    
    <header>
      <!-- Navbar -->
      <headerComp/>
    </header>

    <main>
      <div class="d-flex">
        <!-- Sidebar -->
        <sidebarComp/>
        
        <!-- Main -->
        <mainComp/>
      </div>
    </main>

  </div>

  
  

</template>

<style lang="scss">
@use './style/main.scss';
  #app{
    background-image: url('../public/img/avadabarbers-about-introbackground.jpg') ;
    background-attachment: fixed;
  }
</style>
