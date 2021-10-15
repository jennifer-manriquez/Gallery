import { useState, useEffect } from "react";
import styles from './Artwork.module.css';
import { fetchData } from '../../lib/artworks';
import Link from 'next/link';


const Artwork = (props) => {
  const [imageSource, setImageSource] = useState('https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/gray_smoke_sq1_800p.jpg');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
  fetchData(parseInt(props.object)).then(data => {
    setImageSource(data.primaryImageSmall);
    setTitle(data.title);
    setAuthor(data.artistDisplayName.slice(0,33));

  }).catch(err => console.error(err))
  }, [])

  return (
    <div className={styles.container}>
      <Link href={`/artworks/${parseInt(props.object)}`}>
        <img src={`${imageSource}`} />
      </Link>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>{author}</div>
    </div>
  )
}

export default Artwork;