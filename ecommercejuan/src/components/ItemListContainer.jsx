import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading';

export default function ItemListContainer() {
  const [campeones, setCampeones] = useState([]);
  const [loading, setLoading] = useState(true);
  const { posicionId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'campeones')
    if (posicionId) {
      getDocs(queryCollection).then(resp => setCampeones(resp.docs.map(camp => ({ id: camp.id, ...camp.data() })).filter(camp => camp.posicion.includes(posicionId)))).catch(err => console.log(err)).finally(() => setLoading(false));
    } else {
      getDocs(queryCollection).then(resp => setCampeones(resp.docs.map(camp => ({ id: camp.id, ...camp.data() })))).catch(err => console.log(err)).finally(() => setLoading(false));
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
