import React, {useState} from 'react';
import "./styles/app.css";
import Top from "./components/top";
import Enter from "./components/enter"
import Todo from "./components/todo";

function App () {
  const [lightMode, setMode]=useState(true);
  const [todo, addTodo]=useState<string[]>([]);
  console.log(lightMode ? "light":"dark")

  const modeChng=()=>{
    console.log("clicked")
    setMode(!lightMode);
  }

  const getTodo=(e:any, curr:string, comp:React.Dispatch<React.SetStateAction<string>>)=>{
    if(e.which ===13){
      console.log(curr)
        addTodo([...todo, curr]);
        comp("");
        console.log(todo)
    }
}
  return (
    <div className={`App ${lightMode ? "light":"dark"}`}>
      <div className="top-design"></div>
      <div className="todo">
        <Top lightMode={lightMode} modeChng={modeChng} />
        <Enter getTodo={getTodo} />
        <div className="todo-cont">
          {todo.map((ind)=><Todo content={ind} />)
          }
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
