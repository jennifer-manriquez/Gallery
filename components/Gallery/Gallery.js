import React, { useState, useEffect } from "react";
import styles from './Gallery.module.css'
import Artwork from "../Artwork/Artwork";

const Gallery = (props) => {

  const [objectsState, setObjectsState] = useState(
    {
      columns: {
        firstColumn: [],
        secondColumn: [],
        thirdColumn: [],
        fourthColumn: [],
      }
    })

  useEffect(() => {
    let resultsObj = chunkArray(props.objects);
    setObjectsState({
      ...objectsState, columns: {
        firstColumn: resultsObj[0],
        secondColumn: resultsObj[1],
        thirdColumn: resultsObj[2],
        fourthColumn: resultsObj[3],
      },
    })
  }, [])

  function chunkArray(myArray) {
    let results = []

    let ObjsFirstColumn = [];
    let ObjsSecondColumn = [];
    let ObjsThirdColumn = [];
    let ObjsFourthColumn = [];

    myArray.map((object, index) => {
      if (index % 4 == 0) {
        ObjsFirstColumn.push(object);
      } else if (index % 4 == 1) {
        ObjsSecondColumn.push(object);
      } else if (index % 4 == 2) {
        ObjsThirdColumn.push(object);
      } else if (index % 4 == 3) {
        ObjsFourthColumn.push(object);
      }
    })
    results.push(ObjsFirstColumn, ObjsSecondColumn, ObjsThirdColumn, ObjsFourthColumn)
    return results
  }

  return (
    <div className={styles.row}>
      <div className={styles.column}>
        {objectsState.columns.firstColumn.map((object, index) => {
            return (
              <Artwork key={index} object={object} />
            )
        }
        )}
      </div>
      <div className={styles.column}>
        {objectsState.columns.secondColumn.map((object, index) => {
          return (
            <Artwork key={index} object={object} />
          )
        }
        )}
      </div>
      <div className={styles.column}>
        {objectsState.columns.thirdColumn.map((object, index) => {
          return (
            <Artwork key={index} object={object} />
          )
        }
        )}
      </div>
      <div className={styles.column}>
        {objectsState.columns.fourthColumn.map((object, index) => {
          return (
            <Artwork key={index} object={object} />
          )
        }
        )}
      </div>
    </div>
      )
}

export default Gallery;