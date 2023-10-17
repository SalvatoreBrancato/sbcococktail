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
     <div>
      <div v-for="elem in store.listaCocktail" :key="elem.id">
        <input type="radio" name="elem" v-model="store.cocktailSelezionato" :value="elem.name">
        <span>{{ elem.name }}</span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    input{
        cursor: pointer;
    }

</style>