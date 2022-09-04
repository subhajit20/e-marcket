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
        <div>
            <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0"><i className="fa-solid fa-id-badge text-white sm:text-black"></i></span>
            <input type="text" name="username" value={username}  className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 w-[14rem] sm:w-[15rem] bg-[#16213E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Username" onChange={(e)=> handleOnChange(e)}/>
        </div>
        <p className="my-4 text-red-800 font-bold">{usernameErr === null ? "" : usernameErr}</p>

        <div>
            <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0 text-white sm:text-black"><i className="fa-regular fa-envelope"></i></span>
        <input type="email" name="u_email" value={u_email} className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-4 w-[14rem] sm:w-[15rem] bg-[#16213E]    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Email" onChange={(e)=> handleOnChange(e)}/>

        </div>
        <p className="my-4 text-red-800 font-bold">{u_emailErr === null ? "" : u_emailErr}</p>
    </div>
}

export default React.memo(Form2);