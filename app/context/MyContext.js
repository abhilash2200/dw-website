'use client'
import { useContext, useState, createContext } from "react"

const MyContext = createContext()

export function ContextProvider({children}){
    const [popup, openPopup] = useState(false)

    const api = `/api/contact`
    
    return(
        <MyContext.Provider value={{popup, openPopup,api}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext);