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
        <input type="text" name="firstname" className="p-2 rounded-lg outline-none text-center my-2" placeholder="Enter Your Firstname" value={firstname} onChange={(e) => handleChange(e)} />
        <p className="text-red-500 transition-all duration-150 my-2 font-bold">{
            firstnameErr === null ? "" : firstnameErr
        }</p>
        <input type="text" name="middlename" className="p-2 rounded-lg outline-none text-center my-2" placeholder="Enter Your Middlename" value={middlename} onChange={(e) => handleChange(e)} />
        <input type="text" name="lastname" className="p-2 rounded-lg outline-none text-center my-4" placeholder="Enter Your Lastname" value={lastname} onChange={(e) => handleChange(e)} />
        <p className="text-red-500 transition-all duration-150 my-2 font-bold">{
            lastnameErr === null ? "" : lastnameErr
        }</p>
    </div>
}

export default React.memo(Form1);