import React, {useContext} from "react";
import mode from "../context/mode"
import {Logo, Switch, Top} from "../styles"
import light from "../images/icon-sun.svg";
import dark from "../images/icon-moon.svg";



const Head:React.FC = ()=>{
    let context=useContext(mode);
    return(
        <Top>
           <Logo >todo</Logo>
           <Switch onClick={()=>context.setDark!(!context.dark)} src={context.dark ? light : dark} />
        </Top>
    )
}
export default Head;