import React, { useReducer } from 'react'

let initialState = {
    darkmode: {
        background: "bg-[#fbecfb]",
        individuaTemplateBackground:"bg-[#fbecfb]",
        text_color: "black",
        carttext: "text-white",
        cartTemplateColor:"bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800"
    },
}

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME_CHANGE":
            return { darkmode: { background: action.background, text_color: action.textcolor, carttext: action.carttextcolor,individuaTemplateBackground:action.indivisualColor,cartTemplateColor:action.cartColor } }
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