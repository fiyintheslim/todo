import React from "react";

interface Props{
    className?:string;
    isDark?:boolean
}

const Container:React.FC<Props>=({children, className, isDark})=>{
    return(
        <div className={className}>
            {children}
        </div>
    )
}
export default Container;