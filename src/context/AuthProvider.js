import React,{useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

export const AuthContext = React.createContext();

function AuthContextProvider({children}){
    const [flag,setFlag] = useState(false);
    const [userinfo,setUserInfo] = useState();
    useEffect(()=>{
        function Authorization(){
            const refres_token = cookies.get('e-marcket-refresh-token');
            if(refres_token){
                var decoded = jwt_decode(refres_token);
                setUserInfo(decoded)
                setFlag(true)
                return true
            }else if(!refres_token){
                setFlag(false)
                return false
            }
        }
        Authorization()
    },[])
    return <AuthContext.Provider value={{authorize:flag,userinfo:userinfo}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;