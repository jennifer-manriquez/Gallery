import styles from './layout.module.css';
import Link from 'next/dist/client/link';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Layout({ children, insideSlideshow}) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.gallery}>Gallery</div>
        <div>
          {insideSlideshow ?
            <Link href="/" >
              <a className={styles.slideshowLink}> STOP SLIDESHOW</a>
            </Link>
            :
            <Link href="/artworks/435817">
              <a className={styles.slideshowLink}> START SLIDESHOW</a>
            </Link>
          }
        </div>
      </header>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}