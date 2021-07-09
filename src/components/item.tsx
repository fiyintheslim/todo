import React from "react";
interface Props{
className?:string,
isDark?:boolean
}
const IndItem:React.FC<Props>=(props)=>{

    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}
export default IndItem