import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LinkComponent } from '../components/Link'
import ResponsiveAppBar from '../components/NavBar'
import MainLayout from '../layouts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Renats music-platforms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <MainLayout> 
       <div>Text my site</div>
      </MainLayout>
      </>
  )
}

export default Home;
