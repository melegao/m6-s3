import './style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

function ContactCard () {


    return (
        <div className="contact-card">
            <p>Nome do contato</p>
            <p>Telefone do contato</p>
            <p>E-mail do contato</p>
            <div>
                <button>
                    <AiFillEdit />
                </button>
                <button>
                    <AiFillDelete />
                </button>
            </div>
        </div>
    )
}

export default ContactCard