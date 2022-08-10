import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading';

export default function ItemListContainer() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { positionId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'campeones')
    if (positionId) {
      getDocs(queryCollection).then(resp => setChampions(resp.docs.map(champ => ({ id: champ.id, ...champ.data() })).filter(champ => champ.position.includes(positionId)))).catch(err => console.log(err)).finally(() => setLoading(false));
    } else {
      getDocs(queryCollection).then(resp => setChampions(resp.docs.map(champ => ({ id: champ.id, ...champ.data() })))).catch(err => console.log(err)).finally(() => setLoading(false));
    }
  }, [positionId])

  return (
    <div className='itemListContainer'>
      {loading ?
        <Loading />
        :
        <ItemList champions={champions} />
      }
    </div>
  )
}
