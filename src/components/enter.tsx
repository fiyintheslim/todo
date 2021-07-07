import React, {useState} from "react";
interface Props{
    getTodo:(e:any, i:string, c:React.Dispatch<React.SetStateAction<string>>)=>void;
}
const Enter:React.FC<Props> = ({getTodo}) =>{
    const [input, chngInput]=useState("");
    const change=(e:any)=>{
        chngInput(e.target.value)
    }
    
    return(
        <div className="input" >
            <input type="text" value={input} onKeyUp={(e)=>getTodo(e, input, chngInput)} onChange={(e)=>change(e)} />
        </div>
    )
}

export default Enter;