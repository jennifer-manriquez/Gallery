import React from "react";
import Paper from '@mui/material/Paper';
import Image from "next/dist/client/image";
import { Typography } from "@mui/material";
import styles from './ArtworkPaper.module.css'

const ArtworkPaper = () => {
  return (
    // <div>Hello World </div>
    <div>
      {/* <Paper elevation={3}> 
        <img src='https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg' width='300' />
      </Paper> */}
      {/* <Paper className={styles.paper}> */}
      <Paper
        style={{
          width: 300,
          // height: 190,
          backgroundImage: `url(${('https://images.metmuseum.org/CRDImages/ep/original/DT1562.jpg')})`,
          backgroundSize: 'cover',
        }}>
        Text in Paper
      </Paper>
    </div>
    
  )
}

export default ArtworkPaper;