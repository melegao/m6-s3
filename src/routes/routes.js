import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/auth'
import Home from '../pages/home'
import Register from '../pages/register'

function Ways () {

    return(
        <>
            <Routes>
                <Route path='/' element={<Auth />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </>
    )
}

export default Ways