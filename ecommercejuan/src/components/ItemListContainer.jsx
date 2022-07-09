import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { gFetch } from '../helpers/getFetch';
import ItemList from './ItemList';
import Loading from './Loading';

export default function ItemListContainer() {
  const [campeones, setCampeones] = useState([]);
  const [loading, setLoading] = useState(true);
  const { posicionId } = useParams();

  useEffect(() => {
    if (posicionId) {
      gFetch.then(resp => setCampeones(resp.filter(camp => camp.posicion.includes(posicionId)))).catch(err => console.log(err)).finally(() => setLoading(false));
    } else {
      gFetch.then(resp => setCampeones(resp)).catch(err => console.log(err)).finally(() => setLoading(false));
    }
  }, [posicionId])

  return (
    <div className='itemListContainer'>
      {loading ?
        <Loading />
        :
        <ItemList campeones={campeones} />
      }
    </div>
  )
}
