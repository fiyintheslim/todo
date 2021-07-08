import {createContext} from "react";

interface Context{
    dark?:boolean;
    setDark?:(a:boolean)=>void
}
const Mode=createContext<Context>({})

export default Mode;