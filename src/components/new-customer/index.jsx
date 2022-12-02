import './style.css'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { CustomersContext } from '../../providers/customers';
import { v4 as uuidv4 } from 'uuid';

function NewCustomer() {

  

    const { setAllCustomers, allCustomers } = useContext(CustomersContext)

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
            .required('Telefone obrigatório')
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors },
      } = useForm({
          resolver: yupResolver(formSchema)
      })

    const onSubmit = (data) => {
        console.log(data)
        console.log(allCustomers)
        
        
        const newData = {
            id: uuidv4(),
            name: data.name,
            email: data.email,
            phone: data.phone
        }
        
        const updatedList = [...allCustomers, newData]
        
        setAllCustomers(updatedList)
        
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