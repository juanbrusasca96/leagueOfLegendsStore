import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../helpers/getFetch';
import ItemDetail from './ItemDetail';
import Loading from './Loading';

export default function ItemDetailContainer() {
  const [campeon, setCampeon] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    getItems(id).then(resp => setCampeon(resp)).catch(err => console.log(err)).finally(() => setLoading(false));
  }, [])

  return (
    <div className='itemDetailContainer'>
      {loading ?
        <Loading />
        :
        <ItemDetail campeon={campeon} />
      }
    </div>
  )
}
