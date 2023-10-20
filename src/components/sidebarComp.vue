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
         const result = response.data.drinks[0];
         store.nome = result.strDrink;
         store.categoria = result.strAlcoholic;
         store.istruzioni = result.strInstructionsIT;
         store.image = result.strDrinkThumb;
         store.ingrediente1 = result.strIngredient1;
         store.ingrediente2 = result.strIngredient2;
         store.ingrediente3 = result.strIngredient3;  
         store.ingrediente4 = result.strIngredient4;  
         store.ingrediente5 = result.strIngredient5;  
         store.ingrediente6 = result.strIngredient6;
         store.ingrediente7 = result.strIngredient7;  
         store.ingrediente8 = result.strIngredient8;  
         store.ingrediente9 = result.strIngredient9;  
         store.ingrediente10 = result.strIngredient10;  
         });        
       }, 10);
    },
  }
}
</script>

<template>
     <div id="sidebar">
        <div>I più ricercati</div>
      <div v-for="elem in store.listaCocktail" :key="elem.id">
        <input type="radio" name="elem" v-model="store.cocktailSelezionato" :value="elem.name" @input="chiamataApiCocktail()">
        <span>{{ elem.name }}</span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    #sidebar{
        //background-image: url('../../public/img/avadabarbers-about-introbackground.jpg') ;
        border-right: 2px solid #ae8652;
        color: white;
        input{
            cursor: pointer;
        }
    }

</style>