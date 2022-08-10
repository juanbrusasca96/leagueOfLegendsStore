import React from 'react'
import Item from './Item'

export default function ItemList({ champions }) {
  return (
    <div className='itemList'>
      {champions.map(champ => <Item key={champ.id} champion={champ} />)}
    </div>
  )
}