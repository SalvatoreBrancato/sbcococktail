import { reactive} from 'vue'

export const store = reactive(
    {
        listaCocktail: 
        [
          {
            name:'Margarita'
          },
          {
            name:'Mar'
          },
          {
            name:'Gin tonic'
          },
          {
            name: 'Cosmopolitan',
          },
          {
            name: 'Bloody Mary',
          },
          {
            name: "Americano",
          },
          {
            name: "Aperol Spritz",
          },
          {
            name: "Bellini",
          },
          {
            name: "Caipirinha",
          },
          {
            name: "Daiquiri",
          },
          {
            name: "Dry Martini",
          },
          {
            name: "Espresso Martini",
          },
          {
            name: "French 75",
          },
          {
            name: "Gin Fizz",
          },
          {
            name: "Gin and Tonic",
          },
          {
            name: "Harvey Wallbanger",
          },
          {
            name: "Irish Coffee",
          },
          {
            name: "Kahlúa Martini",
          },
          {
            name: "Kir Royale",
          },
          {
            name: "Mai Tai",
          },
          {
            name: "Manhattan",
          },
          {
            name: "Martini",
          },
          {
            name: "Mojito",
          },
          {
            name: "Negroni",
          },
          {
            name: "Old Fashioned",
          },
          {
            name: "Piña Colada",
          },
          {
            name: "Pisco Sour",
          },
          {
            name: "Screwdriver",
          },
          {
            name: "Sidecar",
          },
          {
            name: "Tequila Sunrise",
          },
          {
            name: "Vodka Martini",
          },
          {
            name: "Whiskey Sour",
          },
          {
            name: "Zombie",
          }, 
        ],
        cocktailSelezionato:'',
        search: '',
        cocktailInput: ''
    }
)