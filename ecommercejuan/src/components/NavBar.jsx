import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../helpers/CartContext'
import CartWidget from './CartWidget'

export default function NavBar() {
    const [itemsCart] = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to='/' className='NavLink navbar-brand fw-bolder'>
                    <img src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png" alt="" className="d-inline-block align-text-center" />
                    Store
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-expand-xl" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/position/Superior' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} aria-current="page">Superior</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/position/Central' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} aria-current="page">Central</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/position/Jungla' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} aria-current="page">Jungla</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/position/Inferior' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} aria-current="page">Inferior</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/position/Soporte' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} aria-current="page" >Soporte</NavLink>
                        </li>

                    </ul>
                    <div className='cartWidget'>
                        {itemsCart.length === 0 ?
                            <div></div>
                            :
                            <Link to='/cart' style={{ textDecoration: 'none' }}>
                                <CartWidget />
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
