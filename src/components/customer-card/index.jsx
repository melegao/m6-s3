import './style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { TfiAgenda } from 'react-icons/tfi'
import { useState } from 'react'

function CustomerCard ({customer}) {

    const [viewResume, setViewResume] = useState(true)

    const handleClick = () => {
        setViewResume(!viewResume)
        
    }

    return (
        <div className='container-customer-card'>
            {viewResume?            
            <>
                <div className='container-less-content'>
                <div className='content-customer-card'>
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                    <p>{customer.phone}</p>
                </div>            
                <div className='btns-customer-card'>
                    <button>
                        <AiFillEdit />
                    </button>
                    <button>
                        <AiFillDelete />
                    </button>
                    <button onClick={handleClick}>
                        <TfiAgenda />
                    </button>
                </div>
                </div>
            </>
            :
            <>
                <div className='container-full-content'>
                    <div className='container-full-content-2'>
                        <div className='content-customer-card'>
                            <p>{customer.name}</p>
                            <p>{customer.email}</p>
                            <p>{customer.phone}</p>
                        </div>            
                        <div className='btns-customer-card'>
                            <button>
                                <AiFillEdit />
                            </button>
                            <button>
                                <AiFillDelete />
                            </button>
                            <button onClick={handleClick}>
                                <TfiAgenda />
                            </button>
                        </div>
                    </div>
                    <div>MIAU</div>
                </div>
            </>
            }
        </div>
    )
}

export default CustomerCard