import React, { useContext } from 'react'
import { CartContext } from '../helpers/CartContext';

export default function CartWidget() {
    const [itemsCart] = useContext(CartContext);
    return (
        <div className='divBtn'>
            <a className="btn" href="#!" role="button"><i className="fas fa-shopping-cart fa-lg"></i></a>
            <p>{itemsCart.reduce((prev, current) => prev + current.quantity, 0)}</p>
        </div>
    )
}
