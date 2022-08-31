import React,{useEffect, useContext} from 'react'

import { ErrorContext } from "../RegistrationForm";
import useFormError from "../../../hooks/useFormError";

function Form3({ password,confirmpassword,phonenumber,handleOnSubmit }) {
  const {errors} = useContext(ErrorContext);
    const {phonenumberErr,passwordErr,showErrors} = useFormError();

    useEffect(()=>{
      showErrors(errors)

      return ()=>{
        showErrors()
    }
  },[errors])

  return (
    <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
      <input type="number" name="phonenumber" value={phonenumber}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Phone Number" onChange={(e)=> handleOnSubmit(e)}/>
      <p className="my-4 text-red-800 font-bold">{phonenumberErr === null ? "" : phonenumberErr}</p>
        <input type="password" name="password" value={password}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Pasword" onChange={(e)=> handleOnSubmit(e)}/>
      <p className="my-4 text-red-800 font-bold">{passwordErr === null ? "" : passwordErr}</p>
        <input type="password" name="confirmpassword" value={confirmpassword} className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your ConfirmPassword" onChange={(e)=> handleOnSubmit(e)}/>
        </div>
  )
}

export default React.memo(Form3)