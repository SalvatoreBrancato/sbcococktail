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
  mounted() {
    const btn = this.$refs.btn
    //const prova = this.$refs.prova


    btn.addEventListener('click', () => {
      // console.log(btn.textContent);
      store.cocktailSelezionato = btn.textContent
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${store.cocktailSelezionato}`)
          .then((response) => {
          const result = response.data.drinks;
          store.arrayInput.length = 0;
          for(let elem of result){
          store.arrayInput.push(elem);
          }
        });        
    });
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
    prova(){
      const arrow = document.getElementById('arrow');
      
    }
  }
}
</script>

<template>
     <div id="sidebar">
        <div class="e-sidebar">I più ricercati</div>
        
        <!-- prova check -->
        
          <div ref="btn">martini</div>
          <!-- <div ref="prova">gin</div> -->

        <!-- fine vprova check -->

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
        input{
            cursor: pointer;
        }
        .e-sidebar{
          margin-left: 10px;
          font-family: 'Abril Fatface', serif;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.9);
        }
        input[type="radio"]:after {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 5px 40% 5px 40%;
          border: 2px solid #ae8652;
          background-color: rgba(255, 255, 255, 1.0);
        }
        input[type="radio"]:checked:after {
          background-color: #ae8652;
          border: 2px solid rgba(255, 255, 255, 1.0);
        }
    }

</style>