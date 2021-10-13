import { useState, useEffect } from "react";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import Layout from "../../components/Layout/Layout";
import { fetchData } from "../../lib/artworks";

export async function getServerSideProps({params}) {
  const worksData = await fetchData(params.id);
  console.log('worksData', worksData)
  return {
    props: {
      objects: worksData
    }
  }
}

export default function ViewbyID(props) {
  // const title = 'title'
  // console.log('props.objectss', props.objectss)
  const title = props.objects.title

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <main>
        
      </main>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}