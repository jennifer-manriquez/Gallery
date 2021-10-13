import React, { useState, useEffect } from "react";
import { fetchData } from "../lib/artworks";
import ArtworkPaper from "./ArtworkPaper";
import styles from './Gallery.module.css'
import Artwork from "./Artwork";

const Gallery = (props) => {
  // useEffect(() => {
  //   fetchData(parseInt(props.objects[0])).then(data => console.log('data source', data.primaryImage))
  // }, [])
    // const [objectsState, setObjectsState] = useState(
    // {
    //   firstColumn: [],
    //   secondColumn: [],
    //   thirdColumn: [],
    //   fourthColumn: [],
    // })

    // function defineColumn


    // let ObjsFirstColumn = [];
    // let ObjsSecondColumn = [];
    // let ObjsThirdColumn = [];
    // let ObjsFourthColumn = []; 

    // props.objects.map((object, index) => {
    //   if (index % 4 == 0) {
    //     // fetchData(parseInt(object)).then(data => {
    //     //   ObjsFirstColumn.push(data.primaryImage);
    //     // })
    //     setObjectsState(prevState => ({
    //       ...prevState,
    //       firstColumn: object
    //     }));
    //     // console.log(objectsState.firstColumn)
    //     // ObjsFirstColumn.push(object);
    //   } else if (index % 4 == 1) {
    //     setObjectsState(prevState => ({
    //       ...prevState,
    //       secondColumn: object
    //     }));
    //     // ObjsSecondColumn.push(object);
    //   } else if (index % 4 == 2) {
    //     // ObjsThirdColumn.push(object);
    //     setObjectsState(prevState => ({
    //       ...prevState,
    //       thirdColumn: object
    //     }));
    //   } else if (index % 4 == 3) {
    //     // ObjsFourthColumn.push(object);
    //     setObjectsState(prevState => ({
    //       ...prevState,
    //       fourthColumn: object
    //     }));

    //   }
    // })

    

  return (
    // <div>
    //   <div className={styles.row}>
    //     <div className={styles.column}>
    //       {/* {objectsState.firstColumn.map((object, index) => {
    //       fetchData(parseInt(object)).then(data => {
    //         console.log(data.primaryImage)
    //         return (
    //           <Artwork key={index} imageSource={data.primaryImage} />
    //         )
    //       })
    //     }
    //     )} */}
    //     </div>
    //   </div>
    // </div>


      <div className={styles.row}>
        <div className={styles.column}>
          {/* {ObjsFirstColumn.map((object, index) => (
            <Artwork key={index} imageSource={object}/>
          ))
        } */}
          <div className={styles.container}>
            <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg" />
            <div className={styles.bottomLeft}>Display the title of the work</div>
          </div>
          <Artwork imageSource={'https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg'} />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg" />
        </div>
        <div className={styles.column}>
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg" />
        </div>
        <div className={styles.column}>
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg" />
        </div>
        <div className={styles.column}>
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP-20613-001.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DP338851.jpg" />
          <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg" />
        </div>
      </div>
      )
}

export default Gallery;