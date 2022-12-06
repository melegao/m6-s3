import './style.css'
import { useNavigate } from "react-router-dom";

function Header () {

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();
        navigate("/");
    }


    return (
        <div className='header'>
            <h1>Kenzie CRM</h1>
            <div className='header-search'>
                <button onClick={() => logoutUser()} className="btn-logout">Logout</button>
            </div>
        </div>
    )
}

export default Header