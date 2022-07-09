import React from 'react'

export default function ItemDetail({campeon}) {
  return (
    <div className='itemDetail'>
      <h1>{campeon.nombre}</h1>
      <img src={campeon.foto} alt="" />
      <h3>{campeon.posicion}</h3>
      <h4>{campeon.precio}</h4>
      </div>
  )
}
