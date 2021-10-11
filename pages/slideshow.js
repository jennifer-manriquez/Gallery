import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";

export default function Slideshow() {
  return (
    <Layout>
      <Head>
        <title>Gallery-Slideshow</title>
      </Head>
      <h1>Slideshow things go here</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}