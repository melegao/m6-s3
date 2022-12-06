import './style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import ModalDeleteCustomer from '../modeal-delete-customer';
import UpdateCustomer from '../update-customer';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

function CustomerCard ({customer}) {

    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [openEdit, setOpenEdit] = useState(false)

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
      };
    
      const handleCloseEdit = () => {
        setOpenEdit(false);
      };

    return (
        <div className='container-customer-card'>
                       
            <>
                <div className='container-less-content'>
                    <div className='content-customer-card'>
                        <p className='customer-name'>{customer.name}</p>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                    </div>            
                    <div className='btns-customer-card'>
                        <button onClick={handleClickOpenEdit} className='btn-action'>
                            <AiFillEdit />
                        </button>
                        <button onClick={handleClickOpen} className='btn-action'>
                            <AiFillDelete/>
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
                <Modal
                    open={openEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <UpdateCustomer customer={customer} handleCloseEdit={handleCloseEdit}/>
                    </Box>
                </Modal>
            </div>
            
        </div>
    )
}

export default CustomerCard