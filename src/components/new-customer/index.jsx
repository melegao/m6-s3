import './style.css'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { CustomersContext } from '../../providers/customers';
import axios from "axios";
import { toast } from "react-toastify";


function NewCustomer({handleClose}) {

    const token = localStorage.getItem("token");

    const { updateCustomerList } = useContext(CustomersContext)


    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required('Nome obrigatório')
            .matches('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$', 'Digite letras somente'),
        email: yup
            .string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
        phone: yup
            .string()
            .required("Telefone obrigatório")
            .matches("^([0-9]{11})$", "Ex.: 11966554433"),
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors },
      } = useForm({
          resolver: yupResolver(formSchema)
      })

    const onSubmit = (data) => {
        axios
        .post("http://localhost:4000/users/contact", data, {
            headers: {
                Authorization: token,
              },
        })
        .then((res) => handleSuccess())
        .catch((err) => console.log(err));

        
        
    }

    const handleSuccess = () => {
        toast.success("Cadastrado com sucesso!", {
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
          }, 1500);
    }


    return (
        <div className='container-new-customer'>
            <h3>Novo Cliente</h3>
            <form className='form-new-customer' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder="Nome Completo*"/>
                {errors.name && <p className='error-message'>{errors.name.message}</p>}
                <input type="text" {...register('email')} placeholder="E-mail*"/>
                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                <input type="text" {...register('phone')} placeholder="Telefone*"/>
                {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default NewCustomer