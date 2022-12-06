import './style.css'
import CustomerCard from '../customer-card'
import { useContext, useEffect } from 'react'
import { CustomersContext } from '../../providers/customers'
import axios from 'axios'

function CustomerContainer () {

    const { allCustomers, setAllCustomers, updateList } = useContext(CustomersContext)
    const token = localStorage.getItem("token");

    useEffect(() => {

        axios
        .get(`http://localhost:4000/users/contact`, {
            headers: {
            Authorization: token,
            },
        })
        .then((response) => {
            setAllCustomers(response.data);
            
        })
        .catch((err) => console.log(err));

    },[updateList])
    
    return (
        <div className='customer-container'>
            {allCustomers?.contact?.map((elem) => <CustomerCard key={elem.id} customer={elem}/>)}
        </div>
    )
}

export default CustomerContainer