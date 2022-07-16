import React, { useContext } from 'react'
import { CartContext } from '../helpers/CartContext';

export default function Cart() {
  const [itemsCart, addItem, removeItem, clear, isInCart] = useContext(CartContext);
  return (
    <div>
      {itemsCart.map(i => <h3>{`${i.item.nombre}, ${i.quantity} `}<button onClick={() => removeItem(i.item.id)}>X</button></h3>)}
    </div>
  )
}
