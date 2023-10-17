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

    <div id="container">
      <button @click="chiamataApiCocktail()">Ricerca selezionato</button>
      <button @click="chiamataApi()">Random</button>
      <div class="d-flex ms-3">
        <div class="w-50">
            <h1>{{this.nome}}</h1>
            <span class="etichetta">Categoria: </span>
            <div>{{this.categoria}}</div>
            <span class="etichetta">Ingredienti: </span>
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
            <span class="etichetta">Istruzioni: </span>
            <div> {{this.istruzioni}}</div>
        </div>
        <div class="w-50 d-flex justify-content-center align-items-center">
            <img :src="`${this.image}`" alt="immmagine {{ this.nome }}">
        </div>
      </div>
    </div> 

</template>


<style lang="scss" scoped>
    #container{
        width: 100%;
        //background-image: url('../../public/img/avadabarbers-about-introbackground.jpg') ;
        color: rgba(255, 255, 255, 0.6);
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