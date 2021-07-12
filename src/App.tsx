import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import Mode from "./context/mode";
import {Container, Item} from "./styles";
import {v4 as uuid} from "uuid";

import cross from "./images/icon-cross.svg";

import Head from "./components/head"

function App () {
  const [isDark, setDark]=useState(true);
  const [todo, addTodo]=useState([{id:uuid(), todo:"say hello to the new neighbours", completed:false}]);

  function getItem(e:any){
    
    if(e.which === 13 && e.target.value !==""){
      addTodo([...todo, {id:uuid(), todo:e.target.value, completed:false}])
      e.target.value="";
      console.log(uuid())
      
    }
  }
  function clear(){
    if(todo.length>0){
      let rem=todo.filter(i=>{
        return i.completed === false
      })
      addTodo(rem)
    }
    
  }
  function x (e:any){
    console.log(e.target.parent)
  }
  return(
    <>
    <GlobalStyle />
    <Mode.Provider value={{dark:isDark, setDark, todo, addTodo}}>
      <Container isDark={isDark}>
      <div className="background"></div>
      <div className="not-bg">
        <Head />
        <input type="text" onKeyUp={(e)=>getItem(e)} placeholder="Create a new todo" />
        <ul className="todos">
          {todo.map(i=>{
            return(
              <Item isDark={isDark} id={i.id} comp={i.completed}>
                <div >{i.todo}</div>
                <img alt="cross" src={cross} onClick={(e)=>x(e)} />
              </Item>
            )
          })}
          <li className="last"><span id="remain">{todo.length} {todo.length<=1 ? "item":"items"} left</span><span id="clear" onClick={()=>clear()} >clear completed</span></li>
        </ul>
        
      </div>
        
      </Container>
    </Mode.Provider>
    </>
  )
}

export default App;
