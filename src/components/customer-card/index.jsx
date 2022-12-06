import './style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import ModalDeleteCustomer from '../modeal-delete-customer';



function CustomerCard ({customer}) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className='container-customer-card'>
                       
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
                        <AiFillDelete onClick={handleClickOpen}/>
                    </button>
                </div>
                </div>
            </>

            <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <ModalDeleteCustomer customer={customer} handleClose={handleClose}/>
            </Dialog>
    </div>
            
        </div>
    )
}

export default CustomerCard