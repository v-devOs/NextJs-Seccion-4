import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { NextPage, GetStaticProps } from "next";

const HomePage: NextPage = (props) => {
  
  console.log({props});
  

  return (
    <Layout title="Listado de Pokémons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
    
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get('/pokemon?limit=151')
  
  return{
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
