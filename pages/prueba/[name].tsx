import { pokeApi } from "</api>";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "</components/layouts>";
import { Pokemmon } from "</interfaces>";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { log } from "console";

interface Props{
  pokemon: Pokemmon
  
}

const PokemonPageName: NextPage<Props> = ({ pokemon }) => {
    return(
      <h1>{pokemon.name}</h1>
    )
  // return (
  //   <Layout title={pokemon.name}>
  //     <Grid.Container css={{marginTop: '5px'}} gap={2}>
  //       <Grid xs={12} sm={4}>
  //         <Card hoverable css={{padding: '30px'}}>
  //           <Card.Body>
  //             <Card.Image
  //               src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
  //               alt={pokemon.name}
  //               width='100%'
  //               height={200}
  //             />
  //           </Card.Body>
  //         </Card>
  //       </Grid>

  //       <Grid xs={ 12 } sm={8}>
  //         <Card>
  //           <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
  //             <Text h1 transform="capitalize">{pokemon.name}</Text>

  //             <Button
  //               color='gradient'
  //               ghost
  //             >
  //               Guardar en favoritos
  //             </Button>
  //           </Card.Header>
            
  //           <Card.Body>
  //             <Text size={30}>Sprites:</Text>

  //             <Container direction="row" display="flex" gap={0}>
  //               <Image
  //                 src={pokemon.sprites.front_default}
  //                 alt={pokemon.name}
  //                 width={100}
  //                 height={100}
  //               />
  //               <Image
  //                 src={pokemon.sprites.back_default}
  //                 alt={pokemon.name}
  //                 width={100}
  //                 height={100}
  //               />
  //               <Image
  //                 src={pokemon.sprites.front_shiny}
  //                 alt={pokemon.name}
  //                 width={100}
  //                 height={100}
  //               />
  //               <Image
  //                 src={pokemon.sprites.back_shiny}
  //                 alt={pokemon.name}
  //                 width={100}
  //                 height={100}
  //               />
  //             </Container>
  //           </Card.Body>

  //         </Card>
  //       </Grid>

  //     </Grid.Container>
  //   </Layout>
  // )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}` )
  
  return {
    paths: [
      {
        params : { name : 'bulbasaur'}
      },
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  
  const { name } = params as { name : string};
  const { data } = await pokeApi.get<Pokemmon>(`pokemon/${name}`)

  

  return{
    props: {
      pokemon: data
    }
  }
}


export default PokemonPageName;
