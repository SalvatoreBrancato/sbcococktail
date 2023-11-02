<script>
import {store} from '../store'
import axios from 'axios';

export default{
  name: "sidebarComp",
  data() {
      return {
        store,
      }
  },
  methods: {
    chiamataApiCocktail(){
       setTimeout(() => {
          axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${store.cocktailSelezionato}`)
          .then((response) => {
          const result = response.data.drinks;
          store.arrayInput.length = 0;
          for(let elem of result){
          store.arrayInput.push(elem);
          }
        });        
       }, 10);
    },
    sidebar(){
      const sidebar = document.getElementById('sidebar');
      const containerSidebar = document.getElementById('container-sidebar');
      const mediaQueryMobile = window.matchMedia("(min-width: 300px)");
      const mediaQuery = window.matchMedia("(min-width: 900px)");
      if(mediaQueryMobile.matches){
        sidebar.classList.toggle('open')
        sidebar.classList.toggle('d-none')
        if(store.sidebarOpen === false){
            store.sidebarOpen = true
            containerSidebar.style.backgroundColor = 'rgba(39, 40, 41, 0.9)';
        }else{
            store.sidebarOpen = false
            containerSidebar.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        }        
      }
      if(mediaQuery.matches){
        store.sidebarOpen = false
      }
    }
  }
}
</script>

<template>
  <div id="container-sidebar">
    <div v-if="store.sidebarOpen === false" class="d-lg-none" @click="sidebar()"><font-awesome-icon icon="fa-solid fa-angles-right" class="style-icon" shake /></div>
    <div v-else class="d-lg-none" @click="sidebar()"><font-awesome-icon icon="fa-solid fa-angles-left" class="style-icon" /></div>
    <div id="sidebar" class="d-none d-lg-block">
       <div class="title-sidebar">I più ricercati:</div>
       <div v-for="elem in store.listaCocktail" :key="elem.id">
         <input type="radio" name="elem" v-model="store.cocktailSelezionato" :value="elem.name" @click="chiamataApiCocktail(), sidebar()">
         <span class="e-sidebar">{{ elem.name }}</span>
       </div>
   </div>
  </div>
</template>

<style lang="scss" scoped>

    #container-sidebar{
        border-right: 2px solid #ae8652;
        color: white;
        height: 100vh;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.0);
        height: calc(100vh - 40px);
        position: absolute;
        z-index: 9;
        //width: 40px;
        transition: width 2.5s ease-in-out;
        &::-webkit-scrollbar {
        width: 0;
        }
        &::-webkit-scrollbar-track {
        background: black;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        }
        &::-webkit-scrollbar-thumb {
        background: #ae8652;
        }
          .open{
            width: 230px;
          }
        .style-icon{
          color: #ae8652;
          font-size: 1.5rem;
          margin: 5px 5px;
        }
        .title-sidebar{
          margin-left: 10px;
          font-size: 24px;
          font-family: 'Abril Fatface', serif;
          letter-spacing: 1px;
          color: #ae8652;
        }
        input{
            cursor: pointer;
            margin-left: 5px;
        }
        .e-sidebar{
          margin-left: 10px;
          font-size: 20px;
          font-family: 'Abril Fatface', serif;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.9);
        }
        input[type="radio"]:after {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          border-radius: 5px 40% 5px 40%;
          border: 2px solid #ae8652;
          background-color: rgba(255, 255, 255, 1.0);
        }
        input[type="radio"]:checked:after {
          background-color: #ae8652;
          border: 2px solid rgba(255, 255, 255, 1.0);
        }
    }
    
    

    @media screen and (min-width: 600px) {
      #container-sidebar{
        height: calc(100vh - 50px);
      }
    }
      @media screen and (min-width: 992px) {
      #container-sidebar{
        height: calc(100vh - 60px);
        min-width: 230px;
        background-color: rgba(0, 0, 0, 0.0);
      }
    }

</style>