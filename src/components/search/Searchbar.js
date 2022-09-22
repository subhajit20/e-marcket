import React from 'react'

function Searchbar({handleOnchange}) {
  return (
    <div className="relative top-5 flex justify-center">
        <i className="fa-brands fa-searchengin relative text-black left-10 top-2 text-xl cursor-pointer"></i>
        <input type="text" className={`p-1 sm:p-2 sm:px-14 outline-none bg-slate-300 hover:bg-white  rounded-2xl text-base sm:text-2xl w-[220px] sm:w-[300px]  text-center transition-all duration-500 text-black font-bold`}   onChange={handleOnchange}/>
        
    </div>
  )
}

export default Searchbar