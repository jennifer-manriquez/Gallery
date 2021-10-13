import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import { fetchData } from '../lib/artworks';
import { fetchDataKeyword } from '../lib/keyword';
import { useEffect } from 'react';

// export async function getServerSideProps() {
//   const allWorksData = await fetchData();
//   console.log('allWorksData', allWorksData)
//   return {
//     props: {
//       allWorksData
//     }
//   }
// }

//`https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet`

// export async function getServerSideProps() {
//   const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=rembrandt`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props:  {
//       objects: data
//     } , // will be passed to the page component as props
//   }
// }

// export async function getServerSideProps() {
//   let data = []
//   const https = require('https');
//   const req = https.request('https://collectionapi.metmuseum.org/public/collection/v1/search?q=rembrandt', (res) => {
//     res.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`);
//       data = chunk;
//     });
//     res.on('end', () => {
//       console.log('FINISH');
//     });
//   });
//   req.on('error', (e) => {
//     console.error(`ERROR： ${e.message}`);
//   });
//   req.end();
//   return {
//     props: {
//       objects: data
//     },
//   }
// }


export async function getServerSideProps() {
  const allWorksData = await fetchDataKeyword();
  console.log('allWorksData', allWorksData)
  // data = allWorksData.splice(0,10)
  return {
    props: {
      objects: allWorksData
    }
  }
}



export default function Home(props) {
  console.log(props.objects.objectIDs)
  let objects = props.objects.objectIDs.splice(0,10)
  console.log('objects are', objects)

  // useEffect(() => {
  //   // console.log('inside use effect')
  //   // async () => {
  //   //   console.log('Before fecth')
  //   //   let response = await fetchDataKeyword('monet');
  //   //   console.log('After fetch')
  //   //   console.log('Monet', response)
  //   // }
  //   fetchDataKeyword('monet').then(data => {
  //     console.log('monet data', data)
  //     data.objectIDs.splice(0, 10).map(object => {
  //       objects.push(object)
  //     })
  //   })
  // // fetchData().then(data => console.log(data))
  // }, [])


  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Gallery App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Gallery objects={objects}/>
          {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
        </main>

        <footer className={styles.footer}>
          Gallery | Copyright 2021
          {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        </footer>
      </div>
    </Layout>
  )
}
