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

  }
}
</script>

<template>
     <div id="sidebar">
        <div class="title-sidebar">I più ricercati:</div>
        <div v-for="elem in store.listaCocktail" :key="elem.id">
          <input type="radio" name="elem" v-model="store.cocktailSelezionato" :value="elem.name" @click="chiamataApiCocktail()">
          <span class="e-sidebar">{{ elem.name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #sidebar{
        border-right: 2px solid #ae8652;
        color: white;
        height: 100vh;
        overflow-y: auto;
        width: 230px;
        height: calc(100vh - 40px);

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
        .title-sidebar{
          margin-left: 10px;
          font-size: 26px;
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
      #sidebar{
        height: calc(100vh - 50px);
      }
    }
      @media screen and (min-width: 900px) {
      #sidebar{
        height: calc(100vh - 60px);
      }
    }

</style>