import './style.css'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CustomersContext } from '../../providers/customers'

function Auth () {

    const { updateCustomerList } = useContext(CustomersContext)

    const navigate = useNavigate();

    

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('E-mail obrigatório!')
            .email('E-mail inválido!'),
        password: yup.string().required("Senha obrigatória!")

    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {

        axios
        .post("http://localhost:4000/users/login", data)
        .then((res) => loginSuccess(res))
        .catch((err) => loginFailed());
    }

    const loginSuccess = (data) => {

        toast.success("Logado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        console.log(data)
        localStorage.setItem("token", data.data.token)
        updateCustomerList()
        setTimeout(() => {
            navigate("/home");
            
          }, 2000);
    }

    const loginFailed = () => {
        toast.error("E-mail ou senha inválidos", {
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

        <div className='auth-container'>

            <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form-login-h2'>Kenzie CRM</h2>

                <input {...register('email')} placeholder='E-mail'/>
                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                <input {...register('password')} placeholder='Senha' type="password"/>
                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                <button type='submit'>Entrar</button>
            </form>
            <div>
                <p onClick={() => navigate('/register')} className='btn-register'>Criar conta</p>
            </div>
        
        </div>
    )
}

export default Auth