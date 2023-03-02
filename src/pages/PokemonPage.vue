<template>
    <div class="container">
        <h1 v-if="!pokemon">Espere por favor...</h1>
        <div v-else>
            <h1>¿Quién es este pokemon?</h1>
              <PokemonPicture
              :pokemon-id="pokemon.id"
              :show-pokemon="showPokemon" />        
              
              <PokemonOptions
              :pokemons="pokemonArr" 
              @selection-pokemon="checkAnswer($event)"
              />
    
                <div class="containerAnswer" v-if="showAnswer">
                    <h2 class="fade-in">{{ message }}</h2>
                    <button class="btn" @click="newGame()">
                      Nuevo juego
                    </button>
                </div>
        </div>

    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonsOptions.js';

console.log(getPokemonOptions());
export default{
    components: {PokemonOptions, PokemonPicture},
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
            isLoading : false
        }
    },
    methods: {
       async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor(Math.random()* 4)
            this.pokemon = this.pokemonArr[rndInt]
            console.log(this.pokemon);
        },
        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true
            if (selectedId === this.pokemon.id) {
                this.message = `Correcto, ${this.pokemon.name}`
            }else {
                this.message = `Incorrecto, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showAnswer = false
            this.showPokemon = false
            this.mixPokemonArray()
            this.pokemonArr = []
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn{
        background-color: blue;
    border-radius: 10px;
    width: 36%;
    height: 5vh;
    color: white;
    font-weight: bold;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    }
    .containerAnswer{
        display: flex;
        align-items: center;
        width: 100%;
    }
</style>