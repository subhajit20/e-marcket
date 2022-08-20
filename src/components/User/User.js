import React from "react";
import {Link,Outlet,} from 'react-router-dom';
function User(){
    return <div className="relative top-20">
            <div className="flex justify-between sm:justify-evenly bg-[#D61C4E] p-2 font-mono">
                <Link to='/user/registration' className="text-white text-2xl">Registration</Link>
                <Link to='/user/login' className="text-white text-2xl">Login</Link>
            </div>

            <Outlet/>
    </div>
}

export default User;