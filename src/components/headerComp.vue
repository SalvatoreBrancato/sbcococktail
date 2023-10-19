<script>
import {store} from '../store'

export default{
    name: "headerComp",
    data() {
        return {
            store,
            cocktails: [],
        }
    },
    watch:{
        'store.search' (newVal) {
            this.cocktails = this.filteredCocktails()
        }

    },
    // mounted: {
        
    // },
    methods: {
        filteredCocktails() {
            return store.listaCocktail.filter((cocktail) => {
                return cocktail.name.toLowerCase().includes(store.search.toLowerCase());
            });
        }
    }
}
</script>

<template>
     <div id="navbar">
        <p>Logo</p>
        <div class="position-relative">
            <span>->(Inserire contatti con modale)</span>
            <input type="text" v-model="store.search"/>
            
            <div id="tendina">
                <ul v-if="store.search.length > 0">
                    <li v-for="cocktail in this.cocktails" :key="cocktail.name">
                        {{ cocktail.name }}
                    </li>
                </ul>
            </div>
        </div>
     </div>
</template>

<style lang="scss" scoped>
    #navbar{
        display: flex;
        justify-content:space-between;
        color: white;
        border-bottom: 2px solid #ae8652;
       #tendina{
            position: absolute;
            top:30px;
            right: 40px;
            background-color: white;
            li{
                color: black;
            }
        }
    }

</style>