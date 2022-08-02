import React,{useState} from 'react'

function Searchbar({handleOnchange}) {
    const [size,setSize] = useState("50px");

    function handleMouseOver(){
        setSize ("400px")
    }
    function handleMouseOut(){
        setSize("100px")
    }
   

   
  return (
    <div className="relative top-5 flex justify-center">
        <i className="fa-brands fa-searchengin relative text-white left-10 top-2 text-2xl cursor-pointer "></i>
        <input type="text" className={`p-1 sm:p-2 outline-none bg-[#ED1C24] rounded-full text-white text-2xl w-[${size}] text-center transition-all duration-500 text-xs`}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onChange={handleOnchange}/>
        
    </div>
  )
}

export default Searchbar