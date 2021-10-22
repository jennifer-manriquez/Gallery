import React, {forwardRef} from 'react';
import styles from './Artwork.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Artwork = ({object}) => {
  // const myLoader = ({ src, width, quality }) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <div className={styles.container}>
      <Link href={`/artworks/${parseInt(object.objectID)}`}>
        <a>
        {/* <Image loader={myLoader} alt={`artwork ${object.objectID}`} src={`${object.primaryImageSmall}`} width={500} height={500} layout='intrinsic'/> */}
        {/* <Image alt={`artwork ${object.objectID}`} src={`${object.primaryImageSmall}?&q=${75}`} layout="fill" /> */}
        <img alt={`artwork ${object.objectID}`} src={`${object.primaryImageSmall}`} />
        </a>
      </Link>
      <div className={styles.title}>{object.title}</div>
      <div className={styles.author}>{object.artistDisplayName}</div>
    </div>
  )
}

export default Artwork;