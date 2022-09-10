import React,{useReducer} from 'react';

const initialstate = {
    iaAuthenticated:false,
    flag:false,
    loading:false
}

async function CallLoginApi(username,password){
    const loginapicall = await fetch("https://e-marcket.onrender.com/u1/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password
        })
    });

    const result = await loginapicall.json();

    if(loginapicall.status === 200){
        // console.log(result);
        return {flag:true,result:result}
    }else{
        // console.log(result);
        return {flag:false,result}
    }
}

const loginreducer = (state=initialstate,action) =>{
    switch(action.type){
        case "AUTHECTICATED USER":
            return {
                ...state,
                iaAuthenticated:true,
                flag:true,
                loading:false
            }
        case "UNAUTHECTICATED USER":
            return {
                ...state,
                iaAuthenticated:false,
                flag:false,
                loading:true
            }
        default:
            return state;
    }
}

export const LoginContextProvider = React.createContext();

function UseAuthContext({children}){
    const [state,dispatch] = useReducer(loginreducer,initialstate);
    return <LoginContextProvider.Provider value = {{mystate:state,auth:dispatch,login:CallLoginApi}}>
        {children}
    </LoginContextProvider.Provider>
}

export default UseAuthContext;