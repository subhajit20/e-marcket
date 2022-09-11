import React,{useEffect, useContext,useState} from 'react';
// import Password_Generator from '../../../lib/password_generator';

import { ErrorContext } from "../RegistrationForm";
import useFormError from "../../../hooks/useFormError";

function Form3({ password,confirmpassword,phonenumber,handleOnSubmit }) {
  const {errors} = useContext(ErrorContext);
  const {phonenumberErr,passwordErr,showErrors} = useFormError();
  const [type,setType] = useState('password')
  const [flag,setFlag] = useState(false);

  const onChangePasswordType = (e) =>{
    if(e.target.checked === true && e.target.name === "passwordcheckbox"){
      setFlag(true)
      setType("text")
    }else if(e.target.checked === false){
      setFlag(false)
      setType("password")
    }
  }

  useEffect(()=>{
    if(errors === undefined){
        return 
    }else{
        showErrors(errors)
    }
},[errors,showErrors])

  return (
    <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
      <div>
        <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0"><i className="fa-solid fa-mobile text-white sm:text-black"></i></span>
      <input type="number" name="phonenumber" value={phonenumber}  className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 w-[14rem] sm:w-[15rem] bg-[#16213E]      shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Phone Number" onChange={(e)=> handleOnSubmit(e)}/>
      </div>
      <p className="my-4 text-red-800 font-bold">{phonenumberErr === null ? "" : phonenumberErr}</p>

      <div>
        <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0"><i className="fa-sharp fa-solid fa-key text-white sm:text-black"></i></span>
        <input type={flag ? type : type} name="password" value={password} className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 w-[14rem] sm:w-[15rem] bg-[#16213E]    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Enter Your Pasword" onChange={(e)=> handleOnSubmit(e)} />
        <input type='checkbox' className=" text-center my-2 w-[5rem] sm:w-[10rem] bg-[#16213E] " onChange={(e) => onChangePasswordType(e)} name="passwordcheckbox"/>
        <span >Show Password</span><br></br>
        {/* <span className="sm:mx-8 relative top-12 left-[30px] sm:top-0 sm:left-0 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 p-2 rounded-lg cursor-pointer" onClick={Generate_Password}>Generate Password</span> */}
      </div>
      <p className="my-4 text-red-800 font-bold">{passwordErr === null ? "" : passwordErr}</p>
      <div>
        <span className="sm:mx-8 relative top-12 left-3 sm:top-0 sm:left-0"><i className="fa-solid fa-lock text-white sm:text-black"></i></span>
        <input type={flag ? type : type} name="confirmpassword" value={confirmpassword} className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 w-[14rem] sm:w-[15rem] bg-[#16213E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"  placeholder="ConfirmPassword" onChange={(e)=> handleOnSubmit(e)}/>
        </div>
      </div>
  )
}

export default React.memo(Form3)