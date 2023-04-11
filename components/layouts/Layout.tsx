import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface PropsLayout {
  children: ReactNode,
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<PropsLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Uriel Emiliano"/>
        <meta name="description" content={`Informacion sobre el pokémon ${title}`}/>
        <meta name="keywords" content="xxxx, pokemon, pokedex"/>
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar/>

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
