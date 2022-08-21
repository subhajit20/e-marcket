import React from "react";

function Form2({username,u_email,handleOnChange}){
    return <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
        <input type="text" name="username" value={username}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Username" onChange={(e)=> handleOnChange(e)}/>
        <input type="email" name="u_email" value={u_email} className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Password" onChange={(e)=> handleOnChange(e)}/>
    </div>
}

export default Form2;