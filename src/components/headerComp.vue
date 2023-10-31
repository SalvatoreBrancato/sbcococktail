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
        <h1>Scegli il tuo drink</h1>
        <div class="d-flex align-items-center">
            <!-- inizio offcanvass -->
            <button class="contact-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Contatti</button>
            <div class="offcanvas offcanvas-end h-25" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header offcanvascolor">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Salvatore Brancato</h5>
                <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offcanvascolor d-flex flex-column justify-content-end">
                <div>Web developer</div>
                <div>email: salvatorebrancato90@gmail.com</div>
                <div>LinkedIn: /in/salvatore-brancato</div>
                <div>GitHub: /SalvatoreBrancato</div>
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
        height: 40px;
        h1{
            font-family: 'Kaushan Script', cursive;
            color: rgba(255, 255, 255, 0.8);;
        }
        .contact-btn{
            font-size: 14px;
            border: 1px solid #ae8652;
            background-color: rgba(0, 0, 0, 0.0);
            color: #ae8652;  
            padding: 4px;
            font-weight: bold;
            margin-right: 5px;
            &:hover{
                background-color: #ae8652;
                color: black;
                transition: 1s;
            }
        }
        .offcanvascolor{
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 2px;
            font-size: 14px;
            background-color: rgb(56, 56, 56);
            color: white;
            h5{
                color: #ae8652;
                flex: 2;
                border-bottom: 2px solid #ae8652;
                font-family: 'Abril Fatface', serif;
            }

        }
    }
        @media screen and (min-width: 600px) {
            #navbar{
            display: flex;
            justify-content:space-between;
            color: white;
            border-bottom: 2px solid #ae8652;
            height: 50px;
            
            .contact-btn{
                font-size: 18px;
                border: 2px solid #ae8652;
                background-color: rgba(0, 0, 0, 0.0);
                color: #ae8652;  
                padding: 3px;
                font-weight: bold;
                margin-right: 5px;
                &:hover{
                    background-color: #ae8652;
                    color: black;
                    transition: 1s;
                }
            }
        }
    }


        @media screen and (min-width: 900px) {
            #navbar{
            display: flex;
            justify-content:space-between;
            color: white;
            border-bottom: 2px solid #ae8652;
            height: 60px;
            .contact-btn{
                font-size: 24px;
                border: 2px solid #ae8652;
                background-color: rgba(0, 0, 0, 0.0);
                color: #ae8652;  
                padding: 4px;
                font-weight: bold;
                margin-right: 5px;
                &:hover{
                    background-color: #ae8652;
                    color: black;
                    transition: 1s;
                }
            }
        }
    }

</style>