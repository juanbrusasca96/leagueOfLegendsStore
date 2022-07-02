import React from 'react'
import Item from './Item'

export default function ItemList({campeones}) {
  return (
    <div className='itemList'>
        {campeones.map(camp => <Item key={camp.id} posicion={camp.posicion} nombre={camp.nombre} precio={camp.precio} foto={camp.foto}/>)}
    </div>
  )
}