import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import Mode from "./context/mode";
import {Container} from "./styles"

import Head from "./components/head"

function App () {
  const [isDark, setDark]=useState(true);
  

  return(
    <>
    <GlobalStyle />
    <Mode.Provider value={{dark:isDark, setDark}}>
      <Container isDark={isDark}>
      <div className="background"></div>
      <div className="not-bg">
        <Head />
        <input type="text" onKeyUp={(e)=>console.log(e.which)}/>
      </div>
        
      </Container>
    </Mode.Provider>
    </>
  )
}

export default App;
