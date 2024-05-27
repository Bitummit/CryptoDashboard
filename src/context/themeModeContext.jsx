import { createContext, useReducer } from "react"
import themeModeReducer from "./themeModeReducer"

const INITIAL_STATE = {
    mode: 'light'
}

export const ThemeModeContext = createContext(INITIAL_STATE)


export const ThemeModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeModeReducer, INITIAL_STATE)
    return (
    <ThemeModeContext.Provider value={{mode:state.mode, dispatch}}>
        {children}
    </ThemeModeContext.Provider>
    );
}
