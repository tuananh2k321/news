import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    const [isLogin, setLogin] = useState(false)
    const [password, setPassword1] = useState('')
    const [dataUser, setDataUser] = useState({})
    return (
        <AppContext.Provider value = {{isLogin, setLogin, dataUser, setDataUser, password, setPassword1}}>

            {children}
        </AppContext.Provider>
    )
}