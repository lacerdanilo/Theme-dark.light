import React from "react";
import useStayState from "./utils/useStayState";

import { ThemeProvider } from "styled-components";

import {light} from "./styles/themes/light";
import { dark } from "./styles/themes/dark";

import { ResetCss } from "./styles/global";

import Header from "./components/Header";
function App() {
  const [theme, setTheme] = useStayState('theme', light)

  const toggleTheme = ( ) => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Header toggleTheme={toggleTheme}/>
        <div><h1>Olha a escolha do clima</h1><span>@clima/Tempo</span></div>
      </>
    </ThemeProvider>


  );
}

export default App;
