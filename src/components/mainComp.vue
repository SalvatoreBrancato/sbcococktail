<script>
import axios from 'axios';
import {store} from '../store'


export default{
        name: "mainComp",
        data(){
    return{
      store,
      arrow: false,
    }
  },
  mounted(){
    this.chiamataApi();
  },
  computed: {
    isSidebarOpen() {
      return this.store.sidebarOpen;
    }
  },
  watch: {
    isSidebarOpen() {
      if (this.isSidebarOpen) {
        //console.log('aperta')
        document.getElementById("container").style.opacity = '0.3';

      } else {
        //console.log('chiusa')
        document.getElementById("container").style.opacity = '1.0';
      }
    },
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
  }
}
</script>

<template>

    <div id="container">
      <div id="box-ricerca">
        <div class="d-flex flex-column flex-md-row">
          <span>Cerca il tuo cocktail: </span>
          <input type="text" placeholder="es. negroni" v-model="store.cocktailInput" @input="inputApi()">
        </div>
        <button class="mt-3" @click="chiamataApi()">Non sai cosa bere?</button>
      </div>

<!-- RICERCA INPUT -->
      <div v-for="elem in store.arrayInput" class="d-flex flex-column flex-lg-row ms-3 card-drink">
        <div id="main-left">
          <div id="title">{{ elem.strDrink }}</div>
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
            <div v-if="elem.strInstructionsIT"> {{elem.strInstructionsIT}}</div>
            <div v-else>{{elem.strInstructions}}</div>

        </div>
        <div id="main-right" class="d-flex justify-content-center align-items-center">
            <img :src="`${elem.strDrinkThumb}`" alt="immagine cocktail">
        </div>
      </div>
<!--FINE RICERCA INPUT  -->

      <div v-if="store.arrayInput.length > 1" class="container-arrow">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div> 
</template>


<style lang="scss" scoped>
    #container{
        width: 100%;
        height: calc(100vh - 40px);
        overflow-y: auto;
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 3px;
        font-size: 24px;
        position: relative;
        margin-left: 40px;
        &::-webkit-scrollbar {
        width: 5px;
        }
        &::-webkit-scrollbar-track {
        background: rgb(22, 22, 22);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        }
        &::-webkit-scrollbar-thumb {
        background: #ae8652;
        }
        #box-ricerca{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          input{
            background-color: rgba(0, 0, 0, 0.0);
            font-family: 'Montserrat', sans-serif;;
            //letter-spacing: 3px;
            color: #ae8652;
            border-bottom: 2px solid #ae8652;
            border-top: 0;
            border-left: 0;
            border-right: 0;

          }
          button{
            border: 2px solid #ae8652;
            background-color: rgba(0, 0, 0, 0.0);
            color: #ae8652;  
            padding: 5px;
            font-weight: bold;
            width: 80%;
            &:hover{
                background-color: #ae8652;
                color: black;
                transition: 2s;
            }
          }
        }
        .card-drink{
          margin-bottom: 100px;
          #title{
            font-size: 50px;
            font-family: 'Abril Fatface', serif;
            letter-spacing: 5px;
            color: #ae8652;
          }
          .etichetta{
            //font-family: 'Abril Fatface', serif;
            letter-spacing: 5px;
            color: #ae8652;
          }         
          img{
            display: block;
            object-fit: cover;
            margin-top: 20px;
            border-radius: 20px 10px 20px 10px;
            width: 80%;
            //box-shadow: 15px 15px 7px -5px rgba(152, 151, 151, 0.5);
          }
        }
            .container-arrow {
              position: fixed;
              top: 50%;
              right: 2px;
              width: 24px;
              height: 24px;
            }
            
            .chevron {
              position: absolute;
              width: 16px;
              height: 6px;
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
    
    @media screen and (min-width: 600px) {
      #container{
        height: calc(100vh - 50px);
        .container-arrow {   
              right: 20px;
            }
            
            .chevron {
              width: 28px;
            }
      }
    }
      @media screen and (min-width: 992px) {
      #container{
        height: calc(100vh - 60px);
        margin-left: 230px;
        opacity: 1.0;
        #box-ricerca{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          margin: 10px 0;
          button{
            border: 2px solid #ae8652;
            background-color: rgba(0, 0, 0, 0.0);
            color: #ae8652;  
            padding: 5px;
            font-weight: bold;
            width: 30%;
            
            &:hover{
                background-color: #ae8652;
                color: black;
                transition: 2s;
            }
          }
        }
        #main-left{
          width: 50%;
        }
        #main-right{
          width: 50%;
        }
      }
    }    
</style>