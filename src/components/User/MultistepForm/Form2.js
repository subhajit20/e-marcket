import React,{useContext,useEffect} from "react";
import { ErrorContext } from "../RegistrationForm";
import useFormError from "../../../hooks/useFormError";


function Form2({username,u_email,handleOnChange}){
    const {errors} = useContext(ErrorContext);
    const {usernameErr,u_emailErr,showErrors} = useFormError();
    
    useEffect(()=>{
        showErrors(errors);

        return ()=>{
            showErrors()
        }
    },[errors])

    return <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
        <input type="text" name="username" value={username}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Username" onChange={(e)=> handleOnChange(e)}/>
        <p className="my-4 text-red-800 font-bold">{usernameErr === null ? "" : usernameErr}</p>
        <input type="email" name="u_email" value={u_email} className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Email" onChange={(e)=> handleOnChange(e)}/>
        <p className="my-4 text-red-800 font-bold">{u_emailErr === null ? "" : u_emailErr}</p>
    </div>
}

export default React.memo(Form2);