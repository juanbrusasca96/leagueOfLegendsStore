import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let index = itemsCart.indexOf(find(item.id))
            let i = itemsCart.find(i => i.item.id === item.id)
            i.quantity = quantity;
            let firstHalf = itemsCart.slice(0, index)
            firstHalf.push(i)
            let secondHalf = itemsCart.slice(index + 1)
            setItemsCart(firstHalf.concat(secondHalf))
        }
        else {
            setItemsCart(oldItems => [...oldItems, { item: item, quantity: quantity }]);
        }
    };

    const removeItem = (id) => {
        let item = find(id);
        setItemsCart(items => items.filter(i => i.item.id !== id));
        return item;
    };

    const clear = () => {
        setItemsCart([]);
    };

    const isInCart = (id) => {
        return !!find(id);
    };

    const getQuantity = (id) => {
        return isInCart(id) ? find(id).quantity : 1;
    }

    const find = (id) => {
        return itemsCart.find(i => i.item.id === id);
    }

    const getTotal = () => {
        return itemsCart.reduce((prev, current) => prev + current.item.price * current.quantity, 0)
    }

    return (
        <CartContext.Provider value={[itemsCart, addItem, removeItem, clear, isInCart, getQuantity, find, getTotal]}>
            {children}
        </CartContext.Provider>
    )
};