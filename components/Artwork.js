import { useState, useEffect } from "react";
import styles from './Artwork.module.css';
import { fetchData } from '../lib/artworks';


const Artwork = (props) => {
  const [imageSource, getImageSource] = useState('https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/gray_smoke_sq1_800p.jpg')

  useEffect(() => {
  fetchData(parseInt(props.object)).then(data => {
    getImageSource(data.primaryImage)
  })
  }, [])

  return (
    <div className={styles.container}>
      <img src={`${imageSource}`}/>
      <div className={styles.bottomLeft}>Display the title of the work</div>
    </div>
  )
}

export default Artwork;