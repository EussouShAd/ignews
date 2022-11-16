import Head from 'next/head';
import styles from '../styles/home.module.scss'  

export default function Home() {
  return (
    <>
    <Head>
      Início | in.news
    </Head>
    <h1 className={styles.title}>
      
      Hello <span>World!</span> 
    </h1>
    </>
  )
}