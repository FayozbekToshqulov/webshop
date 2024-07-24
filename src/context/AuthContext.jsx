import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReduser";


const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("sign")) || null
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        // localStorage.setItem('sign', JSON.stringify(state.currentUser))
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}