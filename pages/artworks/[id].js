import { useState, useEffect } from "react";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import Layout from "../../components/Layout/Layout";
import { fetchData } from "../../lib/artworks";
import styles from './[id].module.css'
import { fetchWikiData } from "../../lib/wikidata";
import { fetchWikipediaExtract } from '../../lib/wikipedia';
import Modal from '../../components/Modal/Modal';

export async function getServerSideProps({params}) {
  const worksData = await fetchData(params.id);
  return {
    props: {
      objects: worksData
    }
  }
}

export default function ViewbyID(props) {
  const data = props.objects
  console.log('props.objects', props.objects)
  const title = data.title;
  const imageSource = data.primaryImage;
  const artistName= data.artistDisplayName;
  const year = data.objectDate;
  const text = "";
  const wikidata = data.objectWikidata_URL.match(/(\d+)/)[0];
  const [extract, setExtract] = useState(text);
  const [modal, setModal] = useState(false);

  const ClickHandler = (value) =>{
    setModal(value);
  }

 
  useEffect(() => {
    fetchWikiData(wikidata).then(response => {
      const wikipediaTitle = response.entities[`Q${wikidata}`].labels.en.value.split(' ').join('_')
      fetchWikipediaExtract(wikipediaTitle).then( data => {
        const queryData = data.query.pages;
        let pageid;
        for (var key in queryData) {
          pageid = key
        }
        const extractText = queryData[pageid].extract;
        setExtract(extractText)
      })
    })
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
        <div className={styles.wrapper}>
          <article className={styles.container}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={`${imageSource}`} />
              <button className={styles.button} onClick={() => setModal(true)}><img src='/images/Expand.png' width='20'/> View Image</button>
            </div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{title}</h1>
              <h4 className={styles.artistName}>{artistName}</h4>
            </div>
            <div className={styles.year}>{year}</div>
            <div className={styles.textContainer}>
              <h1 className={styles.text}>{extract}</h1>
            </div>
          </article>
          <div className={styles.slider}>
            <div className={styles.sliderCrendetials}>
              <h3 className={styles.sliderTitle}>{title}</h3>
              <h4 className={styles.sliderAuthor}>{artistName}</h4>
            </div>
          </div>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        {modal && <Modal imageSource={imageSource} caption={title} ClickHandler={ClickHandler}/>}
        </div>
    </Layout>
  )
}