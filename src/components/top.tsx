import React from "react";

import sun from "../img/icon-sun.svg";
import moon from "../img/icon-moon.svg";

interface Props{
    lightMode:boolean;
    modeChng:()=>void;
}

const Top:React.FC<Props>=({lightMode, modeChng})=>{
    console.log("loaded", lightMode)
    return(
        <div className="top">
            <div className="logo">TODO</div>
            <img className="modeChng" src={lightMode?moon:sun} alt="content" onClick={()=>modeChng()} />
        </div>
    )
}

export default Top;