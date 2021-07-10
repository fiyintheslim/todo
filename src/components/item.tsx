import React from "react";
interface Props{
className?:string,
isDark?:boolean
}
const IndItem:React.FC<Props>=(props)=>{

    return(
        <li className={props.className}>
            {props.children}
        </li>
    )
}
export default IndItem