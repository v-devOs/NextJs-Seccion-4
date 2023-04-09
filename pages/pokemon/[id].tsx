import { Layout } from "</components/layouts>";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props{
  // pokemon: any
  id: string
  name: string
}

const PokemonPage: NextPage<Props> = ({ id , name }) => {

  const router = useRouter();
  console.log(router.query);
  
  return (
    <Layout>
      <h1>Hola mundo</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
 

  return{
    props: {
      id: 1,
      name: 'bulbasaur'
    }
  }
}


export default PokemonPage;
