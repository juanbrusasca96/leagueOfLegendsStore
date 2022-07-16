import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../helpers/CartContext'
import Dificultad from './Dificultad'
import ItemCount from './ItemCount';

export default function ItemDetail({ campeon }) {
  const [itemsCart, addItem, removeItem, clear, isInCart] = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className='itemDetail'>
      <h1 className='text-center'>{campeon.nombre}</h1>
      <div className='imagenPosicionDificultadPrecioBiografia'>
        <div className='imagenPosicionDificultadPrecio'>
          <img src={campeon.foto} alt="" />
          <div className='posicionDificultadPrecio'>
            <h3 className='text-center posicion'> <div className='fw-bolder'>Posicion</div> <div>{campeon.posicion.split(',').map(pos => <h3>{pos}</h3>)}</div></h3>
            <div className='dificultadPadre'>
              <h3 className='fw-bolder'>Dificultad</h3>
              <div className='dificultad'>
                <Dificultad active={'active'} />
                {
                  campeon.dificultad > 1 ?
                    <Dificultad active={'active'} />
                    :
                    <Dificultad active={'no-active'} />}
                {campeon.dificultad > 2 ?
                  <Dificultad active={'active'} />
                  :
                  <Dificultad active={'no-active'} />
                }
              </div>
              <h3>{
                campeon.dificultad === 1 ?
                  "Baja"
                  :
                  campeon.dificultad === 2 ?
                    "Moderada"
                    :
                    "Alta"
              }
              </h3>
            </div>
            <h3 className='text-center precio'><div className='fw-bolder'>Precio</div><div>${campeon.precio}</div></h3>
          </div>
        </div>
        <div className='biografia'>
          <h3>{campeon.biografia}</h3>
          {
            isInCart(campeon.id) > 0 ?
              <Link to='/cart'>
                <div className='botonComprar'><button>TERMINAR MI COMPRA</button></div>
              </Link>
              :
              <ItemCount setCantidad={setCantidad} addItem={() => addItem(campeon, cantidad)} />
          }

        </div>
      </div>
    </div>
  )
}
