import React from 'react'

export default function ItemCount({ setCantidad, addItem }) {
    return (
        <div className='itemCount'>
            <div className='botonComprar'>
                <button className='fw-bold' onClick={addItem}> COMPRAR </button>
                <input type="text"
                    placeholder='cantidad'
                    onChange={e => setCantidad(parseInt(e.target.value))} />
            </div>
        </div>
    )
}
