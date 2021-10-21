import React, { useState, useEffect } from "react";
import styles from './Gallery.module.css'
import Artwork from "../Artwork/Artwork";

const Gallery = ({objects, objectsData}) => {
  console.log('gallery objects are ', objects);
  console.log('gallery objectsData are ', objectsData);
  const results = chunkArray(objectsData);
  const columns = {
    firstColumn: results[0],
    secondColumn: results[1],
    thirdColumn: results[2],
    fourthColumn: results[3],
  } 

  console.log('columsn are ', columns)
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
        {columns.firstColumn.map((object, index) => {
            return (
              <Artwork key={index} object={object} />
            )
        }
        )}
      </div>
      <div className={styles.column}>
        {columns.secondColumn.map((object, index) => {
          return (
            <Artwork key={index} object={object} />
          )
        }
        )}
      </div>
      <div className={styles.column}>
        {columns.thirdColumn.map((object, index) => {
          return (
            <Artwork key={index} object={object} />
          )
        }
        )}
      </div>
      <div className={styles.column}>
        {columns.fourthColumn.map((object, index) => {
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