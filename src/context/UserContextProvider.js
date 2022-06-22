import React, { useReducer } from 'react'

let initialState = {
    darkmode: {
        background: "bg-[#fbecfb]",
        text_color: "black",
        carttext: "text-white"
    },
}

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME_CHANGE":
            return { darkmode: { background: action.background, text_color: action.textcolor, carttext: action.carttextcolor } }
        default:
            return state
    }
}

export const Storecontext = React.createContext();
const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Storecontext.Provider value={{ state: state, myFunc: dispatch }} >
        {children}
    </Storecontext.Provider>
}

export default UserContextProvider