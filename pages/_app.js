// import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../components/Theme';

function MyApp({ Component, pageProps }) {
  const { value : isDark } = useDarkMode(true);
  const themeConfig = isDark ? darkTheme : lightTheme; 

  return (
  <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Component {...pageProps} />
  </ThemeProvider>
  )
  
}

export default MyApp
