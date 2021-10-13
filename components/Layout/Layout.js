import styles from './layout.module.css';
import Link from 'next/dist/client/link';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Head from 'next/head'

const name = 'Jennifer Manriquez'
export const siteTitle = 'My Blog'

export default function Layout({children}) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gallery
            </Typography>
            <Link href="/slideshow">
              <a>START SLIDESHOW</a>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}