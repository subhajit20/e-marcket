import React,{useState} from "react";
import ScreenLoader from '../ScreenLoader';
import useLoginHook from "../../hooks/useLoginHook";

function Login(){
    window.document.title=`Buy Karo - Login`;
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    let {CallLoginApi,msg,sign,mystate} = useLoginHook();

    const callLogin = async (e) =>{
        e.preventDefault();
        CallLoginApi(username,password)
       
    }
    return  <div className="flex justify-center h-screen">
        <form method="POST" >
            <div className="flex-col justify-evenly mt-7">
                <div className='flex justify-center'><h1>Login Form</h1></div>
                {
                    !mystate.flag ? <p className="text-2xl text-red-600 font-medium">{msg}</p> : ""
                }
                {
                    sign && <p className="text-2xl text-green-700 font-medium">Please Wait a Moment</p>
                }
                <div><i className="fa-regular fa-user text-white sm:text-black ml-6"></i><input name="username" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 bg-[#16213E]  w-[14rem] sm:w-[15rem]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onChange={(e)=> setUsername(e.target.value)} placeholder="Enter Your username"/></div>
                
                <div ><i className="fa-regular fa-user text-white sm:text-black ml-6"></i><input name="username" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 bg-[#16213E]  w-[14rem] sm:w-[15rem]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password"/></div>
                <div className=" flex justify-center"> 
                   {
                    !sign ? <button className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-[#FCF8E8] text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg visited:bg-orange-600" type="submit" onClick={(e)=> callLogin(e)}>Login</button> : <ScreenLoader/>
                   }
                </div>
            </div>
        </form>
    </div>
}

export default Login;