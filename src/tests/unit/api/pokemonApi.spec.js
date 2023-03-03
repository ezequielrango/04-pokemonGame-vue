import {describe,test,expect} from 'vitest'
import pokemonApi from '@/api/pokemonApi'

// __tests__/index.test.js
describe('pokemonApi', () => {
   
  test('axios debe estar configurado con el api de pokemon', () => {
      expect(pokemonApi.defaults.baseURL)
        .toBe('https://pokeapi.co/api/v2/pokemon/')
    })
  })