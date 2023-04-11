import { useState, useEffect } from 'react';
import { NextPage } from 'next'
import { Card, Grid } from '@nextui-org/react';
import { Layout } from '</components/layouts>';
import { FavoritePokemons, NoFavorites } from '</components/ui>';
import { localFavorites } from '</utils>';

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  return (
    <Layout title='Pokémons - Favoritos'>

      {
        favoritePokemons.length === 0 
          ? <NoFavorites/>
          : <FavoritePokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default FavoritesPage;
