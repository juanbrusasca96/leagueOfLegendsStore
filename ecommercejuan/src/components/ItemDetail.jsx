import React from 'react'
import { convert } from '../helpers/getConvert';
import Difficult from './Difficult'
import ItemCount from './ItemCount';

export default function ItemDetail({ champion }) {

  return (
    <div className='itemDetail'>
      <h1 className='text-center'>{champion.name}</h1>
      <div className='imagePositionDifficultPriceBiography'>
        <div className='imagePositionDifficultPrice'>
          <img src={champion.photo} alt="" />
          <div className='positionDifficultPrice'>
            <h3 className='text-center position'> <div className='fw-bolder'>Posicion</div> <div>{champion.position.split(',').map(pos => <h3>{pos}</h3>)}</div></h3>
            <div className='difficultDad'>
              <h3 className='fw-bolder'>Dificultad</h3>
              <div className='difficult'>
                <Difficult active={'active'} />
                {
                  champion.difficult > 1 ?
                    <Difficult active={'active'} />
                    :
                    <Difficult active={'no-active'} />}
                {champion.difficult > 2 ?
                  <Difficult active={'active'} />
                  :
                  <Difficult active={'no-active'} />
                }
              </div>
              <h3>{
                champion.difficult === 1 ?
                  "Baja"
                  :
                  champion.difficult === 2 ?
                    "Moderada"
                    :
                    "Alta"
              }
              </h3>
            </div>
            <h3 className='text-center price'><div className='fw-bolder'>Precio</div><div>${convert(champion.price)}</div></h3>
          </div>
        </div>
        <div className='biography'>
          <h3>{champion.biography}</h3>
          <ItemCount champion={champion} />
        </div>
      </div>
    </div>
  )
}
