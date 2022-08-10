import React from 'react'

export default function Button({ text, onClick }) {
    return (
        <div className='button'>
            <button className='fw-bold' onClick={onClick} > {text} </button>
        </div>
    )
}
