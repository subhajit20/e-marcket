import React,{useState} from 'react'

function Searchbar({handleOnchange,text,bg}) {
    const [size,setSize] = useState("100px");

    function handleMouseOver(){
        setSize ("400px")
    }
    function handleMouseOut(){
        setSize("100px")
    }
   

   
  return (
    <div className="relative top-5 flex justify-center">
        <i className="fa-brands fa-searchengin relative left-10 top-0 text-xl cursor-pointer "></i>
        <input type="text" className={`p-2 outline-none ${bg} rounded-md w-[${size}] text-center transition-all duration-300 ${text} text-xs`}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onChange={handleOnchange}/>
        
    </div>
  )
}

export default Searchbar