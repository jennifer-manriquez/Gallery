import { useState, useEffect } from "react";
import styles from './Artwork.module.css';
import { fetchData } from '../../lib/artworks';
import Link from 'next/link';


const Artwork = (props) => {
  const [imageSource, setImageSource] = useState('https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/gray_smoke_sq1_800p.jpg');
  const [title, setTitle] = useState("Display title of the work");

  useEffect(() => {
  fetchData(parseInt(props.object)).then(data => {
    console.log('props.object is', parseInt(props.object))
    // console.log('work data is', data)
    setImageSource(data.primaryImage);
    setTitle(data.title);

  }).catch(err => console.error(err))
  }, [])

  return (
    <div className={styles.container}>
      <Link href={`/artworks/${parseInt(props.object)}`}>
        <img src={`${imageSource}`} />
      </Link>
      <div className={styles.bottomLeft}>{title}</div>
    </div>
  )
}

export default Artwork;