import './style.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NewCustomer from '../new-customer';
import { useState } from 'react';

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

export default function ActionMenu() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='action-menu'>
        <h3>Clientes</h3>
        <button onClick={handleOpen} className='btn-new-customer'>Novo Cliente</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <NewCustomer />
            </Box>
        </Modal>
    </div>
  );
}