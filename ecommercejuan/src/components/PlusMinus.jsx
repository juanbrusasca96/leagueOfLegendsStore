import React from 'react'

export default function PlusMinus({ value, setValue }) {
    return (
        <div className='plusMinus'>
            <button className='fw-bolder plus' onClick={() => setValue(value + 1)}>
                +
            </button>
            <input type="text" value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <button className='fw-bolder minus' onClick={() => value > 1 ? setValue(value - 1) : setValue(value)}>
                -
            </button>
        </div>
    )
}
