const toggleFavorite = ( id: number ) => {

  let favorites: number[] = getArrayPokemons()
  
  if( favorites.includes(id) ){
    favorites = favorites.filter( pokeId => pokeId !== id);
  }
  else{
    favorites.push( id );
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))

}

const existInFavorites = ( id: number ): boolean => {

  const favorites: number[] = getArrayPokemons();

  return favorites.includes( id );
}

const getArrayPokemons = () => {
  return JSON.parse( localStorage.getItem('favorites') || '[]')
}


export default {
  toggleFavorite,
  existInFavorites
}