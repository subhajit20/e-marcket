import React,{useEffect, useState} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const AuthContext = React.createContext();

function AuthContextProvider({children}){
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        function Authorization(){
            const refres_token = cookies.get('e-marcket-refresh-token');
        
            if(refres_token){
                setFlag(true)
                return true
            }else if(!refres_token){
                setFlag(false)
                return false
            }
        }
        Authorization()
    },[])
    return <AuthContext.Provider value={{authorize:flag}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;