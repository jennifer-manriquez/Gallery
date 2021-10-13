import styles from './Artwork.module.css'

const Artwork = (props) => {
  return (
    <div className={styles.container}>
      <img src={`${props.imageSource}`}/>
      <div className={styles.bottomLeft}>Display the title of the work</div>
    </div>
  )
}

export default Artwork;