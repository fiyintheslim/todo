import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import Mode from "./context/mode";
import {Container, Item} from "./styles"

import Head from "./components/head"

function App () {
  const [isDark, setDark]=useState(true);
  const [todo, addTodo]=useState(["say hello to the new neighbours"]);

  function getItem(e:any){
    console.log(e.which)
    if(e.which === 13 && e.target.value !==""){
      addTodo([...todo, e.target.value])
      e.target.value="";
      console.log(todo)
    }
  }
  return(
    <>
    <GlobalStyle />
    <Mode.Provider value={{dark:isDark, setDark}}>
      <Container isDark={isDark}>
      <div className="background"></div>
      <div className="not-bg">
        <Head />
        <input type="text" onKeyUp={(e)=>getItem(e)}/>
        <div className="todos">
          {todo.map(i=>{
            return(
              <Item isDark={isDark}>
                <span>{i}</span>
              </Item>
            )
          })}
        </div>
        
      </div>
        
      </Container>
    </Mode.Provider>
    </>
  )
}

export default App;
