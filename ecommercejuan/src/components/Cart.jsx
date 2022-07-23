import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../helpers/CartContext';
import { convertir } from '../helpers/getFetch';

export default function Cart() {
  const [itemsCart, addItem, removeItem, clear, isInCart] = useContext(CartContext);
  return (
    <div className='cart'>
      {itemsCart.length === 0 ?
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to='/'><h3>Volver a la tienda</h3></Link>
        </div>
        :
        <div>
          {itemsCart.map(i => <div className='desglose'><img src={i.item.foto} /><h3>{`${i.item.nombre}, ${i.quantity} `}<button onClick={() => removeItem(i.item.id)}>X</button></h3></div>)}
          <div className='precio'>
            <h4>Total: ${convertir(itemsCart.reduce((prev, current) => prev + current.item.precio * current.quantity, 0))}</h4>
          </div>
          <button onClick={() => clear()}>Borrar todos</button>
        </div>
      }
    </div>
  )
}
