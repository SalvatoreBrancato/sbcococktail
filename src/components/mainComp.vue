<script>
import axios from 'axios';
import {store} from '../store'

export default{
        name: "mainComp",
        data(){
    return{
      store,
      arrayInput: []
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
    },
    chiamataApiCocktail(){
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
    },
    inputApi(){
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${store.cocktailInput}`)
      .then((response) => {
      const result = response.data.drinks;
        // cancello tutti glie elemnti pushati in precedenza nell'array, prima di pushare i nuovi elementi
        this.arrayInput.length = 0;
        for(let elem of result){
          this.arrayInput.push(elem);
        }
      });
    },
  }
}
</script>

<template>

    <div id="container">
      
      <button @click="chiamataApi()">Random</button>
      <span>Cerca il tuo cocktail</span><input type="text" v-model="store.cocktailInput" @input="inputApi()">
            
      <div class="d-flex ms-3">
        <div class="w-50">
            <h1>{{store.nome}}</h1>
            <span class="etichetta">Categoria: </span>
            <div>{{store.categoria}}</div>
            <span class="etichetta">Ingredienti: </span>
            <ul>
                <li v-if="store.ingrediente1">{{store.ingrediente1}}</li>
                <li v-if="store.ingrediente2">{{store.ingrediente2}}</li>
                <li v-if="store.ingrediente3">{{store.ingrediente3}}</li>
                <li v-if="store.ingrediente4">{{store.ingrediente4}}</li>
                <li v-if="store.ingrediente5">{{store.ingrediente5}}</li>
                <li v-if="store.ingrediente6">{{store.ingrediente6}}</li>
                <li v-if="store.ingrediente7">{{store.ingrediente7}}</li>
                <li v-if="store.ingrediente8">{{store.ingrediente8}}</li>
                <li v-if="store.ingrediente9">{{store.ingrediente9}}</li>
                <li v-if="store.ingrediente10">{{store.ingrediente10}}</li>
            </ul>
            <span class="etichetta">Istruzioni: </span>
            <div> {{store.istruzioni}}</div>
        </div>
        <div class="w-50 d-flex justify-content-center align-items-center">
            <img :src="`${store.image}`" alt="immmagine {{ store.nome }}">
        </div>
      </div>

<!-- RICERCA INPUT -->
      <!-- <span>Cerca il tuo cocktail</span><input type="text" v-model="store.cocktailInput">
      <button @click="inputApi()">Ricerca input</button> -->
      <div v-for="elem in arrayInput" class="d-flex ms-3">
        <div class="w-50" >
          <h1>{{ elem.strDrink }}</h1>
          <span class="etichetta">Categoria: </span>
            <div>{{elem.strAlcoholic}}</div>
            <span class="etichetta">Ingredienti: </span>
            <ul>
              <li v-if="elem.strIngredient1">{{elem.strIngredient1}}</li>
              <li v-if="elem.strIngredient2">{{elem.strIngredient2}}</li>
              <li v-if="elem.strIngredient3">{{elem.strIngredient3}}</li>
              <li v-if="elem.strIngredient4">{{elem.strIngredient4}}</li>
              <li v-if="elem.strIngredient5">{{elem.strIngredient5}}</li>
              <li v-if="elem.strIngredient6">{{elem.strIngredient6}}</li>
              <li v-if="elem.strIngredient7">{{elem.strIngredient7}}</li>
              <li v-if="elem.strIngredient8">{{elem.strIngredient8}}</li>
              <li v-if="elem.strIngredient9">{{elem.strIngredient9}}</li>
              <li v-if="elem.strIngredient10">{{elem.strIngredient10}}</li>
              <li v-if="elem.strIngredient11">{{elem.strIngredient11}}</li>
              <li v-if="elem.strIngredient12">{{elem.strIngredient12}}</li>
              <li v-if="elem.strIngredient13">{{elem.strIngredient13}}</li>
              <li v-if="elem.strIngredient14">{{elem.strIngredient14}}</li>
              <li v-if="elem.strIngredient15">{{elem.strIngredient15}}</li>

            </ul>
            <span class="etichetta">Istruzioni: </span>
            <div> {{elem.strInstructionsIT}}</div>
        </div>
        <div class="w-50 d-flex justify-content-center align-items-center">
            <img :src="`${elem.strDrinkThumb}`" alt="immagine cocktail">
        </div>
      </div>
<!--FINE RICERCA INPUT  -->

    </div> 

</template>


<style lang="scss" scoped>
    #container{
        width: 100%;
        //background-image: url('../../public/img/avadabarbers-about-introbackground.jpg') ;
        color: rgba(255, 255, 255, 0.8);
        //font-family: 'Abril Fatface', serif;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 3px;
        font-size: 24px;
        h1{
            font-family: 'Abril Fatface', serif;
            letter-spacing: 5px;
            color: #ae8652;
        }
        .etichetta{
            //font-family: 'Abril Fatface', serif;
            letter-spacing: 5px;
            color: #ae8652;
        }
        button{
            border: 2px solid #ae8652;
            background-color: rgba(0, 0, 0, 0.0);
            color: #ae8652;  
            padding: 5px;
            font-weight: bold;
            &:hover{
                background-color: #ae8652;
                color: black;
                transition: 2s;
            }
        }            
        img{
            display: block;
            object-fit: cover;
            margin-top: 20px;
            border-radius: 20px 10px 20px 10px;
            //box-shadow: 15px 15px 7px -5px rgba(152, 151, 151, 0.5);
            }
    }    

</style>