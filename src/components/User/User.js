import React,{useContext} from "react";
import {Link,Outlet} from 'react-router-dom';
import MultistepFormContext from '../../FormReducer/MultistepFormReducer';
import {AuthContext} from '../../context/AuthProvider';
import UserProfile from "./UserProfile";

function User(){
    const {authorize} = useContext(AuthContext);
    console.log(authorize)
    return <div className="relative top-20">
            {
                authorize ? "": <div className="flex justify-between sm:justify-evenly  p-2 font-mono">
                <Link to='/user/registration' className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-[#FCF8E8] text-black rounded-md transition-all duration-300 hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white font-sans font-bold text-base sm:text-lg ">Registration</Link>
                <Link to='/user/login' className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-[#FCF8E8] text-black rounded-md transition-all duration-300 hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white font-sans font-bold text-base sm:text-lg">Login</Link>
            </div>
            }
           {
            !authorize ? <MultistepFormContext>
                                            <Outlet/>
                                          </MultistepFormContext> : <UserProfile/>   
           }
        </div>
    
}

export default User;