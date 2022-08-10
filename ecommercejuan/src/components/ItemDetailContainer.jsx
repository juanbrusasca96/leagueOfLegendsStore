import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import Loading from './Loading';

export default function ItemDetailContainer() {
  const [champion, setChampion] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore();
    const queryCampeon = doc(db, 'campeones', id);
    getDoc(queryCampeon).then(resp => setChampion({ id: resp.id, ...resp.data() })).catch(err => console.log(err)).finally(() => setLoading(false));
  }, [])

  return (
    <div className='itemDetailContainer'>
      {loading ?
        <Loading />
        :
        <ItemDetail champion={champion} />
      }
    </div>
  )
}
