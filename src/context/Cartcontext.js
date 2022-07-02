import React, { useReducer } from 'react'

const initialState = {
    prod:[],
    flag:'',
    message:''
}

/* Destructuring the initial object in the parameter of the reducer function */
const reducer = ({prod}, action) => {
    switch (action.type) {
        case "ADD":
            if(prod.length >= 3){
                return {
                    prod,
                    message:"Cart is overloaded",
                    flag:false
                }
            }
            return {
                prod:[...prod,action.items],
                flag:true
            }
        default:
            return prod
            
    }
}
export const MyCartcontext = React.createContext();

function Cartcontext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <MyCartcontext.Provider value={{ mystate: state, mycart: dispatch }}>
            {children}
        </MyCartcontext.Provider>
    )
}

export default Cartcontext

