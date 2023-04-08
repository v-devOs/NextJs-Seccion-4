import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { NextPage, GetStaticProps } from "next";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  

  return (
    <Layout title="Listado de Pokémons">
      <ul>
        {
          pokemons.map( pokemon => (
            <li key={pokemon.id}>#{pokemon.id} - {pokemon.name}</li>
          ))
        }
      </ul>
    </Layout>
    
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map( ( pokemon, id ) => ({
    ...pokemon,
    id: id + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id + 1}.svg`
  }))


  return{
    props: {
      pokemons
    }
  }
}

export default HomePage;
