<script >
//import axios from 'axios';
import headerComp from "./components/headerComp.vue"
import sidebarComp from "./components/sidebarComp.vue"
import mainComp from "./components/mainComp.vue"

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
    // const elemento = document.querySelector('#elemento')
    // let scrollY; 
    // // Aggiorna la posizione dello scrollY
    // window.addEventListener("scroll", () => {
    //   // Aggiorna la posizione dello scrollY utilizzando la proprietà scrollTop
    //   scrollY = document.documentElement.scrollTop;
    //   //altezzaPagina = document.documentElement.clientHeight;
    //     if (scrollY >= elemento.offsetHeight) {
    //     console.log('fondo')
    //     }
    //     console.log(scrollY)
        

    // })    
  },
  watch: {
    // prova(){
    //   window.addEventListener('scroll', () =>{
    //     console.log('provaaaa')
    //   })
    // }
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
      <div id="elemento" class="d-flex">
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
