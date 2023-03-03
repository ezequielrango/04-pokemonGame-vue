import { describe, expect, test } from "vitest";
import getPokemonsOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonsOptions'

describe('getPokemonsOptions helpers', () => {

    test('debe regresar un arreglo de números', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect (pokemons[0]).toBe(1)
    })

    test('debe retornar un array de 4 elementos con nombres de pokemons', async() =>{
        const pokemons = await getPokemonNames([1,2,3,4])
        expect(pokemons.length).toBe(4)

    })
    test(' getPokemonsOptions debe retornar un array mezclado', async() => {
        const pokemons = await getPokemonsOptions()
        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    })
})