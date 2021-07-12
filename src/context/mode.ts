import {createContext} from "react";

interface Context{
    dark?:boolean;
    setDark?:(a:boolean)=>void,
    todo?:{todo:string, id:string, completed:boolean}[],
    addTodo?:(a:{todo:string, id:string, completed:boolean}[])=>void
}
const Mode=createContext<Context>({})

export default Mode;