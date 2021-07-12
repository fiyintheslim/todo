import React, {useContext} from "react";
import mode from "../context/mode";

interface Props{
className?:string,
isDark?:boolean,
id:string,
comp:boolean
}
const IndItem:React.FC<Props>=(props)=>{
    const context=useContext(mode);
    const  completed=(e:any)=>{
        let change=context.todo!.map(ind=>{
            if(ind.id === props.id){
                return {
                    ...ind,
                    completed: !ind.completed
                }
            }
            
                return ind
        })
        if(context.addTodo !== undefined){
            context.addTodo(change);
        }
        
        console.log(context)
    }
    return(
        <li key={props.id} onClick={(e)=>completed(e)} className={props.className}>
            {props.children}
        </li>
    )
}
export default IndItem