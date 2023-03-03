import { describe, expect, test } from "vitest";
import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'
import { toMatchSnapshot } from 'jest-snapshot';

expect.extend({ toMatchSnapshot });


describe('PokemonPicture component', () => {

    test('debe hacer match con el snapshot ', () => {
      const wrapper =  shallowMount(PokemonPicture,{
        props: {
          pokemonId : 1,
          showPokemon: false
        }
      });

      expect( wrapper.html() ).toMatchSnapshot()

    });
    
    test('Debe mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
          props: {
            pokemonId: 100,
            showPokemon:false
          }
        })
        const [img1, img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy()
        expect(img1.classes('hidden-pokemon'))
        expect( img2.exists() ).toBe(true)

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    });
    
    test('Mostrar pokemon si el showPokemon está en true ', () => {
      const wrapper = shallowMount(PokemonPicture, {
        props: {
          pokemonId: 100,
          showPokemon:true
        }
      })
      const img1 = wrapper.find('img')

      expect( img1.exists() ).toBeTruthy()
      expect(img1.classes('hidden-pokemon')).toBe(false)
      expect( img1.classes('fade-in') ).toBe(true)
    });
    
});
