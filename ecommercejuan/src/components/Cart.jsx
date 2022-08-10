import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../helpers/CartContext';
import { convert } from '../helpers/getConvert';
import Button from './Button';
import ButtonReturnStore from './ButtonReturnStore';
import ItemCart from './ItemCart';

export default function Cart() {
  const [itemsCart, addItem, removeItem, clear, isInCart, getQuantity, find, getTotal] = useContext(CartContext);


  return (
    <div className='cart'>
      {itemsCart.length === 0 ?
        <div className='noItems'>
          <h1>No hay items en el carrito</h1>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <ButtonReturnStore />
          </Link>
        </div>
        :
        <div>
          {itemsCart.map(i =>
            <ItemCart champion={i.item} />
          )}
          <div className='price'>
            <h4>Total: ${convert(getTotal())}</h4>
            <div className='btns'>
              <div className='buttonDelete'>
                <Button text={'BORRAR TODOS'} onClick={() => clear()} />
              </div>
              <Link to='/form'>
                <Button text={'TERMINAR COMPRA'} />
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
