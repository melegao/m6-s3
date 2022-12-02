import './style.css'

function Header () {


    return (
        <div className='header'>
            <h1>Kenzie CRM</h1>
            <div className='header-search'>
                <input placeholder='Faça uma pesquisa'/>
                <button>Pesquisar</button>
            </div>
        </div>
    )
}

export default Header