import React,{useContext} from "react";
import {useMultistepFormContext} from '../../../FormReducer/MultistepFormReducer';

function Form1(){
    const data = useContext(useMultistepFormContext);
    console.log(data)
    return <div className="flex flex-col w-52 h-28 justify-evenly">
        <input type="text" name="username"  className="p-2"/>
        <input type="text" name="u_email" className="p-2"/>
    </div>
}

export default Form1;