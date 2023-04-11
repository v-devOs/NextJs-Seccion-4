import { pokeApi } from "</api>"
import { Pokemmon } from "</interfaces>"

export const getPokemonInfo = async( keyPokemon: string ) => {
  const { data } = await pokeApi.get<Pokemmon>(`pokemon/${keyPokemon}`)

  return  {
    name: data.name,
    id: data.id,
    sprites: data.sprites
  }
 
}