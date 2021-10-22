import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import Gallery from '../components/Gallery/Gallery';
import { initialData } from '../lib/initial';
import { fetchData } from '../lib/artworks';

async function getObjectsData(objs) {
  const objectsData = await Promise.all(
    objs.map(async (obj) => {
      const res = await fetchData(obj)
      return res
    })
  )
  return objectsData
}

export async function getStaticProps() {
  const allWorksData = initialData();
  const objectsData = await getObjectsData(allWorksData)

  if (!allWorksData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      objects: allWorksData,
      // objectsAPIData: allWorksFetchedData,
      objectsData,
    }
  }
}

export default function Home({ objects, objectsData }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Gallery App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Gallery objects={objects} objectsData={objectsData}/>
        </main>

        <footer className={styles.footer}>
          Gallery | Copyright 2021
        </footer>
      </div>
    </Layout>
  )
}


