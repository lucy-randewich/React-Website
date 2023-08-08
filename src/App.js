import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: 'TypoSquareBold',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'TypoSquareBold'; /* Choose a name for your font */
          src: url('./typo-square-font/TypoSquareBoldDemo-JMwo.ttf') format('truetype');
        }
      `,
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header id='header'/>
        <Intro id='intro'/>
        <About id='about'/>
        <Contact id='contact'/>
      </ThemeProvider>
    </div>
  );
}

export default App;
