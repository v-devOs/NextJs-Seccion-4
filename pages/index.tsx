import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={ 2 } justify="flex-start">
        {
          pokemons.map( (poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))
        }
      </Grid.Container>
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
