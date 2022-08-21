import React from "react";

function Form1({ firstname, middlename, lastname, handleChange }) {
    return <div className="flex flex-col w-[13rem] sm:w-[20rem] h-28 justify-evenly mb-5">
        <input type="text" name="firstname" className="p-2 rounded-lg outline-none text-center my-2" placeholder="Enter Your Firstname" value={firstname} onChange={(e) => handleChange(e)} />
        <input type="text" name="middlename" className="p-2 rounded-lg outline-none text-center my-2" placeholder="Enter Your Middlename" value={middlename} onChange={(e) => handleChange(e)} />
        <input type="text" name="lastname" className="p-2 rounded-lg outline-none text-center my-2" placeholder="Enter Your Lastname" value={lastname} onChange={(e) => handleChange(e)} />
    </div>
}

export default Form1;