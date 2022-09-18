import React, {createContext,useContext,useState} from "react";

const Context = createContext();

export const StateContext = ({children}) => {


    const [isAuthorised,setIsAuthorised] = useState(false);

    const [isBlur, setBlur] = useState(false);

    const [showAuth,setShowAuth] = useState(false);

    const toggleIsAuthorised = () => {
        setIsAuthorised(!isAuthorised);
    };

    const toggleBlur = () => {
    setBlur(!isBlur);
    };

    const toggleShowAuth = () => {
        setShowAuth(!showAuth);
        toggleBlur(isBlur);
    };

    return (
        <Context.Provider
        value={{
            isBlur,
            setBlur,
            toggleBlur,
            showAuth,
            setShowAuth,
            toggleShowAuth,
            isAuthorised,
            setIsAuthorised,
            toggleIsAuthorised
        }}>
        {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);