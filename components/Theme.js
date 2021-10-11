// import React, { useState } from "react";
import { createTheme } from '@mui/material/styles';
// import { ThemeProvider } from "@material-ui/styles";
// import { CssBaseline } from "@material-ui/core";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";


// export default function Theme() {

// }

const coreThemeObj = {
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"', 
      'Roboto', 
      '"Helvetica Neue"', 
    ].join(',')
  },
  palette: {
    primary: {
      main: '#e50914'
    },
    secondary: {
      main: '#fcfaf0'
    }
  }
}

export const darkTheme = createTheme({
  ...coreThemeObj, 
  palette: {
    ...coreThemeObj.palette,
    type: "dark",
  },
});

export const lightTheme = createTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: "light",
  },
});

export const exampleTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}