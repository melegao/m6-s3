import { createContext, useState } from "react";
import axios from "axios";

export const CustomersContext = createContext([]);

export const CustomerProvider = ({children}) => {

    const [allCustomers, setAllCustomers] = useState([]);
    const [updateList, setUpdateList] = useState(false)

    const token = localStorage.getItem("token");

    const updateCustomerList = () => {

        axios
        .get(`http://localhost:4000/users/contact`, {
            headers: {
            Authorization: token,
            },
        })
        .then((response) => {
            setAllCustomers(response.data.contact);
        })
        .catch((err) => console.log(err));

    }

    return (
        <CustomersContext.Provider value={{allCustomers, setAllCustomers, updateCustomerList, updateList, setUpdateList}}>
            {children}
        </CustomersContext.Provider>
    )
}