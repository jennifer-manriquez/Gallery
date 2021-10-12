import React, {useEffect} from "react";
import { fetchData } from "../lib/artworks";
import ArtworkPaper from "./ArtworkPaper";
import styles from './Gallery.module.css'

const Gallery = () => {
  // return(
  //   <div> 
  //     <ArtworkPaper/>
  //   </div>
  // )

  const objects = [436965, 435882, 438738, 671456, 436085, 669033, 494772]
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.container}>
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg"/>
          <div className ={styles.bottomLeft}>Display the title of the work</div>
        </div>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg"/>
      </div>
      <div className={styles.column}>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg"/>
      </div>
      <div className={styles.column}>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg"/>
      </div>
      <div className={styles.column}>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg"/>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg"/>     
      </div>
    </div>
  )


}

export default Gallery;