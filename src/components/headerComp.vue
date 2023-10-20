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
        <div>
            <!-- inizio offcanvass -->
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Contatti</button>
            <div class="offcanvas offcanvas-end h-25" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                Salvatore Brancato<br>
                Web developer full-stack<br>
                email: salvatorebrancato90@gmail.com
            </div>
            </div>
            
            <!-- fine offcanvass -->
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