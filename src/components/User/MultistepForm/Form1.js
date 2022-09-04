import React,{useContext ,useEffect} from "react";
import { ErrorContext } from "../RegistrationForm";
import useFormError from "../../../hooks/useFormError";

function Form1({ firstname, middlename, lastname, handleChange}) {
    const {errors} = useContext(ErrorContext);
    const {firstnameErr,lastnameErr,showErrors} = useFormError();
    
    useEffect(()=>{
        showErrors(errors);

        return ()=>{
            showErrors()
        }
    },[errors])


    return <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
        <div>
        <span className="sm:mx-8 relative top-10 left-3 sm:top-0 sm:left-0"><i className="fa-regular fa-user text-white sm:text-black"></i></span>
        <span><input  type="text" name="firstname" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 bg-[#16213E]  w-[14rem] sm:w-[15rem]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Firstname" value={firstname} onChange={(e) => handleChange(e)}/></span>
        </div>
        <p className="text-red-500 transition-all duration-150 my-2 font-bold">{
            firstnameErr === null ? "" : firstnameErr
        }</p>
        <div>
            <span className="mx-0 sm:mx-20">
            <input type="text" name="middlename" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 w-[14rem] sm:w-[15rem] bg-[#16213E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Middlename" value={middlename} onChange={(e) => handleChange(e)} />
            </span>
        </div>
        <div>
            <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0"><i className="fa-solid fa-user text-white sm:text-black"></i></span>
            <span>
            <input type="text" name="lastname" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 sm:my-4 w-[14rem] sm:w-[15rem] bg-[#16213E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Lastname" value={lastname} onChange={(e) => handleChange(e)} />
            </span>
        </div>
        <p className="text-red-500 transition-all duration-150 my-2 font-bold">{
            lastnameErr === null ? "" : lastnameErr
        }</p>
    </div>
}

export default React.memo(Form1);