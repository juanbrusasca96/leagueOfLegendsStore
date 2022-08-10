import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../helpers/CartContext';
import { convert } from '../helpers/getConvert';
import Button from './Button';
import ButtonReturnStore from './ButtonReturnStore';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Loading from './Loading';

export default function Form() {
    const [itemsCart, addItem, removeItem, clear, isInCart, getQuantity, find, getTotal] = useContext(CartContext);
    const [id, setId] = useState()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        nickname: '',
        server: 'NA',
        level: ''
    })
    const [flag, setFlag] = useState(false);
    const [submit, setSubmit] = useState(false);

    const validateInput = (input) => {
        let errors = {}
        if (!/\S+@\S+\.\S+/.test(input.email) && input.email !== '') {
            errors.email = 'Email invalido'
        }
        if (parseInt(input.phoneNumber) < 0) {
            errors.phoneNumber = 'Numero de telefono invalido'
        }
        if (parseInt(input.level) < 0) {
            errors.level = 'Nivel invalido'
        }

        return errors;
    }

    const validateSubmit = (input) => {
        let errors = {}
        if (!input.name) {
            errors.name = 'Nombre requerido'
        }
        if (!input.surname) {
            errors.surname = 'Apellido requerido'
        }
        if (!input.email) {
            errors.email = 'Email requerido'
        }
        if (!input.phoneNumber) {
            errors.phoneNumber = 'Numero de telefono requerido'
        }
        if (!input.nickname) {
            errors.nickname = 'Nickname requerido'
        }
        if (!input.level) {
            errors.level = 'Nivel requerido'
        }

        return errors;
    }

    const validateAfterSubmit = (input) => {
        let error = validateInput(input)
        error = { ...error, ...validateSubmit(input) }

        return error;
    }

    const handleInputChange = (e) => {
        let inp = {
            ...input,
            [e.target.name]: e.target.value
        }
        setInput(inp)
        setErrors(flag ? validateAfterSubmit(inp) : validateInput(inp))
    }

    const handleSubmit = () => {
        setFlag(true)
        let error = validateSubmit(input)
        setErrors(error)
        if (Object.keys(error).length === 0) {
            setSubmit(true)
            generateOrder()
        }
    }


    const generateOrder = () => {
        const order = {}
        order.buyer = { name: `${input.name}, ${input.surname}`, email: input.email, phoneNumber: input.phoneNumber, account: `${input.nickname}, #${input.server}, ${input.level}` }
        order.items = itemsCart.map(i => {
            const id = i.item.id
            const price = convert(i.item.price)
            const name = i.item.name
            const quantity = i.quantity

            return { id, price, name, quantity }
        })
        order.total = convert(getTotal())

        const db = getFirestore()
        const queryInsertCollection = collection(db, 'orders')
        addDoc(queryInsertCollection, order).then(resp => setId(resp.id)).catch(err => err).finally(() => clear())
    }

    return (
        <div className='form'>
            {id ?
                <div className='generatedOrder'>
                    <h1>Su orden fue generada exitosamente!</h1>
                    <h3>ID de orden: {id}</h3>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <ButtonReturnStore />
                    </Link>
                </div>
                :
                submit ?
                    <Loading />
                    :
                    <form className="row g-3" onSubmit={e => e.preventDefault()}>
                        <div className="col-md-6">
                            <label className="form-label">Nombre</label>
                            <input type="text" className={errors.name ? 'form-control danger' : 'form-control'} name='name' onChange={handleInputChange} />
                            {errors.name && (
                                <p className="danger">{errors.name}</p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Apellido</label>
                            <input type="text" className={errors.surname ? 'form-control danger' : 'form-control'} name='surname' onChange={handleInputChange} />
                            {errors.surname && (
                                <p className="danger">{errors.surname}</p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className={errors.email ? 'form-control danger' : 'form-control'} name='email' onChange={handleInputChange} />
                            {errors.email && (
                                <p className="danger">{errors.email}</p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Teléfono</label>
                            <input type="number" className={errors.phoneNumber ? 'form-control danger' : 'form-control'} name='phoneNumber' onChange={handleInputChange} />
                            {errors.phoneNumber && (
                                <p className="danger">{errors.phoneNumber}</p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Nickname</label>
                            <input type="text" className={errors.nickname ? 'form-control danger' : 'form-control'} name='nickname' onChange={handleInputChange} />
                            {errors.nickname && (
                                <p className="danger">{errors.nickname}</p>
                            )}
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Servidor</label>
                            <select class="form-select" name='server' onChange={handleInputChange}>
                                <option>NA</option>
                                <option>EUW</option>
                                <option>EUNE</option>
                                <option>OCE</option>
                                <option>RU</option>
                                <option>TR</option>
                                <option>BR</option>
                                <option>LAN</option>
                                <option>LAS</option>
                                <option>JP</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Nivel</label>
                            <input type="number" className={errors.level ? 'form-control danger' : 'form-control'} name='level' onChange={handleInputChange} />
                            {errors.level && (
                                <p className="danger">{errors.level}</p>
                            )}
                        </div>
                        <div className='generateReturn'>
                            <div className='returnStore'>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <ButtonReturnStore />
                                </Link>
                            </div>
                            <div className='generate'>
                                <Button text={'GENERAR ORDEN'} onClick={() => handleSubmit()} />
                            </div>
                        </div>
                    </form>
            }

        </div>
    )
}
