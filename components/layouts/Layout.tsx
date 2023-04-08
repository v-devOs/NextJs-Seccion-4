import Head from "next/head"
import { FC, ReactNode } from "react"

interface PropsLayout {
  children: ReactNode,
  title?: string
}

export const Layout: FC<PropsLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Uriel Emiliano"/>
        <meta name="description" content={`Informacion sobre el pokémon ${title}`}/>
        <meta name="keywords" content="xxxx, pokemon, pokedex"/>
      </Head>

      {/* <Navbar/> */}

      <main>
        { children }
      </main>
    </>
  )
}
