<script>
import axios from 'axios';
import {store} from '../store'

export default{
        name: "mainComp",
        data(){
    return{
      store,
      arrow: false
    }
  },
  mounted(){
    this.chiamataApi();
    this.prova()
    //  // Ascolta l'evento scroll sull'elemento #container
    //   window.addEventListener("scrollend", () => {
    // //   // Verifica se l'utente ha raggiunto la fine della scroll
    //   //if (this.$refs.prova.scrollTop === this.$refs.prova.offsetHeight) {
    // //     // L'utente ha raggiunto la fine della scroll
    //     //this.$alert("Arrivato in fondo!");
    //     console.log('funziona')
    //   //}
    // });
  },  
  methods: {
    chiamataApi(){
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
      const result = response.data.drinks;
      store.arrayInput.length = 0;
        for(let elem of result){
          store.arrayInput.push(elem);
        }
      });
    },
    inputApi(){
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${store.cocktailInput}`)
      .then((response) => {
      const result = response.data.drinks;
        // cancello tutti glie elemnti pushati in precedenza nell'array, prima di pushare i nuovi elementi
        store.arrayInput.length = 0;
        for(let elem of result){
          store.arrayInput.push(elem);
        }
      });
    },
    prova(){
      window.addEventListener('scrollend', () =>{
        console.log('funzionaa')
      })
    }
  }
}
</script>

<template>

    <div id="container">
      
      <button @click="chiamataApi()">Random</button>
      <span>Cerca il tuo cocktail</span><input type="text" v-model="store.cocktailInput" @input="inputApi()">

<!-- RICERCA INPUT -->
      <div v-for="elem in store.arrayInput" class="d-flex ms-3">
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

      <div class="container-arrow">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div> 
</template>


<style lang="scss" scoped>
    #container{
        width: 100%;
        //height: 100vh;
        //background-image: url('../../public/img/avadabarbers-about-introbackground.jpg') ;
        color: rgba(255, 255, 255, 0.8);
        //font-family: 'Abril Fatface', serif;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 3px;
        font-size: 24px;
        position: relative;
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
            .container-arrow {
              position: fixed;
              top: 50%;
              right: 20px;
              width: 24px;
              height: 24px;
            }
            
            .chevron {
              position: absolute;
              width: 28px;
              height: 8px;
              opacity: 0;
              transform: scale3d(0.5, 0.5, 0.5);
              animation: move 3s ease-out infinite;
            }
            
            .chevron:first-child {
              animation: move 3s ease-out 1s infinite;
            }
            
            .chevron:nth-child(2) {
              animation: move 3s ease-out 2s infinite;
            }
            
            .chevron:before,
            .chevron:after {
              content: ' ';
              position: absolute;
              top: 0;
              height: 100%;
              width: 51%;
              background: #ae8652;
            }
            
            .chevron:before {
              left: 0;
              transform: skew(0deg, 30deg);
            }
            
            .chevron:after {
              right: 0;
              width: 50%;
              transform: skew(0deg, -30deg);
            }
            
            @keyframes move {
              25% {
                opacity: 1;
            
              }
              33% {
                opacity: 1;
                transform: translateY(30px);
              }
              67% {
                opacity: 1;
                transform: translateY(40px);
              }
              100% {
                opacity: 0;
                transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
              }
            }
    }    
</style>