import './style.css'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register () {

    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Nome obrigatório!")
            .matches(
                "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
                "Digite letras somente"
            ),
        email: yup
            .string()
            .required('E-mail obrigatório!')
            .email('E-mail inválido!'),
        phone: yup
            .string()
            .required("Telefone obrigatório")
            .matches("^([0-9]{11})$", "Ex.: 11966554433"),
        password: yup
            .string()
            .required("Senha obrigatória!")
            .matches(
                "^(?=.*[A-Z])(?=.*[!#@$%&?])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
                "Use uma senha forte"
            ),
        passwordConfirmation: yup
            .string()
            .required("Confirmação obrigatória!")
            .oneOf([yup.ref("password"), null], "A senha deve ser igual"),
    })


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })


    const onSubmit = (data) => {
        console.log(data)

        axios
        .post("http://localhost:4000/users", data)
        .then((res) => registerSuccess())
        .catch((err) => registerFailed());
    }

    const registerSuccess = () => {
        toast.success("Cadastrado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        navigate('/')
    }

    const registerFailed = () => {
        toast.error("Usuário já cadastrado", {
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

        <div className='register-container'>

            <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form-register-h2'>Kenzie CRM</h2>
                <input {...register('name')} placeholder='Nome'/>
                {errors.name && <p className='error-message'>{errors.name.message}</p>}
                <input {...register('phone')} placeholder='Telefone'/>
                {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                <input {...register('email')} placeholder='E-mail'/>
                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                <input {...register('password')} placeholder='Senha' type="password"/>
                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                <input {...register("passwordConfirmation")} placeholder='Confirme a senha' type='password'/>
                {errors.passwordConfirmation && <p className='error-message'>{errors.passwordConfirmation.message}</p>}
                <button type='submit'>Cadastrar</button>
            </form>
            <div>
                <p onClick={() => navigate('/')} className="btn-register">Fazer login</p>
            </div>
        
        </div>
    )
}

export default Register