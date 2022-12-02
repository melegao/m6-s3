import './style.css'
import CustomerCard from '../customer-card'
import { useContext } from 'react'
import { CustomersContext } from '../../providers/customers'

function CustomerContainer () {

    const { allCustomers } = useContext(CustomersContext)
    
    return (
        <div className='customer-container'>
            {allCustomers?.map((elem) => <CustomerCard key={elem.id} customer={elem}/>)}
        </div>
    )
}

export default CustomerContainer