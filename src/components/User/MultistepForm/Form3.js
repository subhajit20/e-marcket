import React from 'react'

function Form3({ password,confirmpassword,phonenumber,handleOnSubmit }) {
  return (
    <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
      <input type="number" name="phonenumber" value={phonenumber}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Phone Number" onChange={(e)=> handleOnSubmit(e)}/>
        <input type="password" name="password" value={password}  className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your Pasword" onChange={(e)=> handleOnSubmit(e)}/>
        <input type="password" name="confirmpassword" value={confirmpassword} className="p-2 rounded-lg outline-none text-center" placeholder="Enter Your ConfirmPassword" onChange={(e)=> handleOnSubmit(e)}/>
        </div>
  )
}

export default Form3