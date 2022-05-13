import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Goals from './Goals';
import Home from './Home';
import Projects from './Projects';
import Summarize from './Summarize';

function App() {
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: /**prefersDarkMode ? 'dark' : 'light'*/ "dark",
        },
      }),
    [/**prefersDarkMode*/],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Summarize/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="goals" element={<Goals/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
