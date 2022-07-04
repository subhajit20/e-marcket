import React, { useReducer } from 'react'

const initialState = {
    prod:[],
    flag:'',
    message:'',
}

/* Destructuring the initial object in the parameter of the reducer function */
const reducer = ({prod,flag,message,totalPrice}, action) => {
    switch (action.type) {
        /*
        *@ This is add functionality of Cart 
        *@ If prod length is greater than 3 then futyjer user can not add any product to the cart
        *@ O Upto length cart will keep added
        */
        case "ADD":
            if(prod.length >= 3){
                return {
                    prod,
                    message:"Cart is overloaded",
                    flag:false
                }
            }
            return{
                    prod:[...prod,action.items],
                    flag:true,
                }
         /*
        *@ This is delete functionality of Cart 
        *@ If prod length is less than or equal to 9 then delete option will not be visible
        */
        case "DELETE":
                prod.splice(action.element,1)
                return {
                    prod,
            }
        default:
            return {prod,flag,message,totalPrice}
            
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

