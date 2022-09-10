import React,{useState,useEffect,useContext, useCallback} from "react";
import {LoginContextProvider} from '../../context/UseAuthContext';

function Login(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const {login,auth,mystate} = useContext(LoginContextProvider);
    const callLogin = async (e) =>{
        e.preventDefault();
        const {flag,result} = await login(username,password);
        if(flag){
            console.log(mystate.flag);
            auth({type:"AUTHECTICATED USER"});
        }else if(flag === false){
            console.log(mystate.flag);
            auth({type:"UNAUTHECTICATED USER"});
        }
    }
    const HandleLogin = useCallback(()=>{
        callLogin();
    },[])

    useEffect(()=>{
        HandleLogin();
        
    },[HandleLogin])
    return  <div className="flex justify-center h-screen">
        <form method="POST" >
            <div className="flex-col justify-evenly mt-7">
                <div className='flex justify-center'><h1>Login Form</h1></div>
                <div><i className="fa-regular fa-user text-white sm:text-black ml-6"></i><input name="username" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 bg-[#16213E]  w-[14rem] sm:w-[15rem]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onChange={(e)=> setUsername(e.target.value)}/></div>
                
                <div ><i className="fa-regular fa-user text-white sm:text-black ml-6"></i><input name="username" className="text-white font-semibold text-lg placeholder-white  p-2 rounded-lg outline-none text-center my-2 bg-[#16213E]  w-[14rem] sm:w-[15rem]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onChange={(e)=> setPassword(e.target.value)}/></div>
                <div className=" flex justify-center"> 
                    <span><button type="submit" onClick={(e)=> callLogin(e)}>Login</button></span>
                </div>
            </div>
        </form>
    </div>
}

export default Login;