import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../helpers/CartContext';
import Button from './Button';
import PlusMinus from './PlusMinus';

export default function ItemCount({ champion }) {
    const [itemsCart, addItem, removeItem, clear, isInCart, getQuantity] = useContext(CartContext);
    const [value, setValue] = useState(getQuantity(champion.id));
    return (
        <div className='itemCount'>
            <div className='buttonBuy'>
                <Button text={'COMPRAR'} onClick={() => addItem(champion, value)} />
                <PlusMinus value={value} setValue={setValue} />
            </div>
            {
                isInCart(champion.id) ?
                    <Link to='/cart'>
                        <Button text={'TERMINAR COMPRA'} />
                    </Link>
                    :
                    <div></div>
            }
        </div>
    )
}
