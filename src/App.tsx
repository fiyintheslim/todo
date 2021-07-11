import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import Mode from "./context/mode";
import {Container, Item} from "./styles";
import {v4 as uuid} from "uuid";

import cross from "./images/icon-cross.svg";

import Head from "./components/head"

function App () {
  const [isDark, setDark]=useState(true);
  const [todo, addTodo]=useState([{todo:"say hello to the new neighbours", id:uuid()}]);

  function getItem(e:any){
    
    if(e.which === 13 && e.target.value !==""){
      addTodo([...todo, {todo:e.target.value, id:uuid()}])
      e.target.value="";
      console.log(uuid())
      
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
        <input type="text" onKeyUp={(e)=>getItem(e)} placeholder="Create a new todo" />
        <ul className="todos">
          {todo.map(i=>{
            return(
              <Item isDark={isDark}>
                <div key={i.id}>{i.todo}</div>
                <img alt="cross" src={cross} />
              </Item>
            )
          })}
          <li className="last"><span>{todo.length} {todo.length<=1 ? "item":"items"} left</span><span></span></li>
        </ul>
        
      </div>
        
      </Container>
    </Mode.Provider>
    </>
  )
}

export default App;
