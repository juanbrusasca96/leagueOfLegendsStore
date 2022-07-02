import React, { useEffect, useState } from 'react'
import { gFetch } from '../helpers/getFetch';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [campeones, setCampeones] = useState([]);

  useEffect(() => {
    gFetch.then(resp => setCampeones(resp)).catch(err => console.log(err))
  }, [])

  return (
    <div className='itemListContainer'>
      <ItemList campeones={campeones} />
    </div>
  )
}
