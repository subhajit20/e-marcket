import React,{useReducer,createContext} from "react";

let initialstate = {
    firstname:"",
    lastname:"",
    middlename:"",
    username:"",
    u_email:"",
    password:"",
    confirmpassword:"",
    address:"",
}

const MultistepFormReducer = (state,action) =>{
    switch(action.type){
        case "HANDLE INPUT":
            return {
                ...state,
                [action.field]:[action.payload]
            }
        default :
            return state;
    }
}

export const useMultistepFormContext = createContext();
const MultistepFormContext = ({children}) =>{
    const [state,dispatch] = useReducer(MultistepFormReducer,initialstate); 
    return <useMultistepFormContext.Provider value={{mystate:state,dispatcher:dispatch}}>
        {children}
    </useMultistepFormContext.Provider>
}

export default MultistepFormContext;