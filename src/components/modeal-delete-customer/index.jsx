import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CustomersContext } from '../../providers/customers';

const ModalDeleteCustomer = ({customer, handleClose}) => {

    const token = localStorage.getItem("token");

    const { updateCustomerList } = useContext(CustomersContext)

    const deleteCustomer = (id) =>{

        axios
        .delete(`http://localhost:4000/users/contact/${id}`, {
            headers: {
            Authorization: token,
            },
        })
        .then((response) => successDelete())
        .catch((err) => failedDelete());
    }

    const successDelete = () => {
        toast.success("Deletado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            updateCustomerList()
            handleClose();
          }, 1000);

    }

    const failedDelete = () => {
        toast.error("Algo deu errado, tente mais tarde!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }


    return (
        <>
            <DialogTitle>Deletar {customer.name}?</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Ao confirmar, essa ação não poderá ser revertida, e o cliente {customer.name} será excluído definitivamente.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => handleClose()}>Desistir</Button>
            <Button onClick={() => deleteCustomer(customer.id)}>Deletar</Button>
            </DialogActions>
        </>
    )
}

export default ModalDeleteCustomer