import React from "react";
interface Props{
    content:string
}
const Todo:React.FC<Props>=({content})=>{
    return(
        <div className="ind-todo" onClick={(e:any)=>console.log(e.target.textContent)}>{content}</div>
    )
}
export default Todo;