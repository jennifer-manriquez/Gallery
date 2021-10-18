import styles from './ArtworkView.module.css';
import Layout from '../Layout/Layout';
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import Modal from '../Modal/Modal';

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
            <img className={styles.image} src={`${imageSource}`} />
            <button className={styles.button} onClick={() => setModal(true)}>
              <img className={styles.expand} src='/images/Expand.png' width='20' /> View Image
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
              <img className={styles.linkImg} src='/images/next.png' width='30' />
            </Link>
            <Link href={previousLink}>
              <img className={styles.linkImg} src='/images/previous.png' width='30' />
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