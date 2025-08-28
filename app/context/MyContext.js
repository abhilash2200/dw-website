'use client'
import { useContext, useState, createContext } from "react"

const MyContext = createContext()

export function ContextProvider({children}){
    const [popup, openPopup] = useState(false)

    const api = 'https://dwapi.thenoncoders.in/api/v1/insert_lead_data'
    
    return(
        <MyContext.Provider value={{popup, openPopup,api}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext);