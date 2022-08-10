import React, { useContext } from 'react'
import { CartContext } from '../helpers/CartContext';
import { convert } from '../helpers/getConvert';
import PlusMinus from './PlusMinus';

export default function ItemCart({ champion }) {
    const [itemsCart, addItem, removeItem, clear, isInCart, getQuantity] = useContext(CartContext);

    return (
        <div className='itemCart'>
            <div className='breakdown'>
                <img src={champion.photo} />
                <div className='name'>
                    <h3>{champion.name} </h3>
                    <h5>{champion.position}</h5>
                </div>
                <div className='plusMinus'>
                    <PlusMinus value={getQuantity(champion.id)} setValue={(value) => addItem(champion, value)} />
                </div>
                <div className='price'>
                    <h3>${convert(getQuantity(champion.id) * champion.price)}</h3>
                </div>
                <div className='remove'>
                    <button className="noselect" onClick={() => removeItem(champion.id)}>
                        <span className="text">Borrar</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
