<script>
import {store} from '../store'

export default{
        name: "sidebarComp",
        data() {
            return {
              store  
            }
        }
    }
</script>

<template>
     <div id="sidebar">
        <div>I più ricercati</div>
      <div v-for="elem in store.listaCocktail" :key="elem.id">
        <input type="radio" name="elem" v-model="store.cocktailSelezionato" :value="elem.name">
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