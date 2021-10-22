import styles from './ArtworkView.module.css';
import Layout from '../Layout/Layout';
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import Modal from '../Modal/Modal';
import Image from 'next/image';

const ArtworkView = (
  { 
      object,  
      modal, 
      setModal,
      extract,
      ClickHandler,
      position, 
      objects
    }
    ) => {
  const title = object.title;
  const imageSource = object.primaryImage;
  const artistName = object.artistDisplayName;
  const year = object.objectDate;
  
  let previousLink;
  if (position !== 0) {
    previousLink = `/artworks/${objects[position - 1]}`
  } else {
    previousLink = `/artworks/${objects[objects.length - 1]}`
  }

  let nextLink;
  if (position !== objects.length - 1) {
    nextLink = `/artworks/${objects[position + 1]}`
  } else {
    nextLink = `/artworks/${objects[0]}`
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <article className={styles.container}>
          <div className={styles.imageContainer}>
            <img alt={`artwork ${object.objectID}`} className={styles.image} src={`${imageSource}`} />
            <button className={styles.button} onClick={() => setModal(true)}>
              <div className={styles.expand}>
                <Image alt='expand' src='/images/Expand.png' width='20' height='20'/>
              </div>
              View Image
            </button>
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
          <div className={styles.controllers}>
            <Link href={nextLink}>
              <a>
                <div className={styles.linkImg}>
                  <Image alt='next' src='/images/next.png' width='30' height='30'/>
                </div>               
              </a>             
            </Link>
            <Link href={previousLink}>
              <a>
                <div className={styles.linkImg}>
                  <Image alt='previous' src='/images/previous.png' width='30' height='30' />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        {modal && <Modal imageSource={imageSource} caption={title} ClickHandler={ClickHandler} />}
      </div>
    </Layout>
  )
}

export default ArtworkView;