import { createContext, useState, useEffect } from "react";
import { customers } from "../db/customers";

export const CustomersContext = createContext([]);

export const CustomerProvider = ({children}) => {

    const [allCustomers, setAllCustomers] = useState([]);

    useEffect(() => {
        setAllCustomers(customers)
    },[])

    
    

    return (
        <CustomersContext.Provider value={{allCustomers, setAllCustomers}}>
            {children}
        </CustomersContext.Provider>
    )
}