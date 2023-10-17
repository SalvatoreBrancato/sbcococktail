<script>
import axios from 'axios';
import {store} from '../store'

export default{
        name: "mainComp",
        data(){
    return{
      store,
      nome:'',
      categoria:'',
      istruzioni:'',
      image:'',
      ingrediente1:'',
      ingrediente2:'',
      ingrediente3:'',
      ingrediente4:'',
      ingrediente5:'',
      ingrediente6:'',
      ingrediente7:'',
      ingrediente8:'',
      ingrediente9:'',
      ingrediente10:'',
    }
  },
  mounted(){
    this.chiamataApi()
  },
  methods: {
    chiamataApi(){
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
      const result = response.data.drinks[0];
      this.nome = result.strDrink;
      this.categoria = result.strAlcoholic;
      this.istruzioni = result.strInstructionsIT;
      this.image = result.strDrinkThumb;
      this.ingrediente1 = result.strIngredient1;
      this.ingrediente2 = result.strIngredient2;
      this.ingrediente3 = result.strIngredient3;  
      this.ingrediente4 = result.strIngredient4;  
      this.ingrediente5 = result.strIngredient5;  
      this.ingrediente6 = result.strIngredient6;
      this.ingrediente7 = result.strIngredient7;  
      this.ingrediente8 = result.strIngredient8;  
      this.ingrediente9 = result.strIngredient9;  
      this.ingrediente10 = result.strIngredient10;  
      });
    },
    chiamataApiCocktail(){
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${store.cocktailSelezionato}`)
      .then((response) => {
      const result = response.data.drinks[0];
      //console.log(result.strDrink)
      this.nome = result.strDrink;
      this.categoria = result.strAlcoholic;
      this.istruzioni = result.strInstructionsIT;
      this.image = result.strDrinkThumb;
      this.ingrediente1 = result.strIngredient1;
      this.ingrediente2 = result.strIngredient2;
      this.ingrediente3 = result.strIngredient3;  
      this.ingrediente4 = result.strIngredient4;  
      this.ingrediente5 = result.strIngredient5;  
      this.ingrediente6 = result.strIngredient6;
      this.ingrediente7 = result.strIngredient7;  
      this.ingrediente8 = result.strIngredient8;  
      this.ingrediente9 = result.strIngredient9;  
      this.ingrediente10 = result.strIngredient10;  
      });
      console.log(store.cocktailSelezionato)
    }
  }
    }
</script>

<template>

    <div>
      <button @click="chiamataApiCocktail()">Ricerca selezionato</button>
      <button @click="chiamataApi()">Random</button>
      <h1>{{this.nome}}</h1>
      <div>Categoria: {{this.categoria}}</div>
      <div>Istruzioni: {{this.istruzioni}}</div>
      <img :src="`${this.image}`" alt="immmagine {{ this.nome }}">
      <ul>
        <li v-if="this.ingrediente1">{{this.ingrediente1}}</li>
        <li v-if="this.ingrediente2">{{this.ingrediente2}}</li>
        <li v-if="this.ingrediente3">{{this.ingrediente3}}</li>
        <li v-if="this.ingrediente4">{{this.ingrediente4}}</li>
        <li v-if="this.ingrediente5">{{this.ingrediente5}}</li>
        <li v-if="this.ingrediente6">{{this.ingrediente6}}</li>
        <li v-if="this.ingrediente7">{{this.ingrediente7}}</li>
        <li v-if="this.ingrediente8">{{this.ingrediente8}}</li>
        <li v-if="this.ingrediente9">{{this.ingrediente9}}</li>
        <li v-if="this.ingrediente10">{{this.ingrediente10}}</li>
      </ul>
    </div> 

</template>


<style lang="scss" scoped>
    

</style>