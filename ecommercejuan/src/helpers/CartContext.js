import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let i = removeItem(item.id);
            i.quantity += quantity;
            setItemsCart(oldItems => [...oldItems, i]);
        }
        else {
            setItemsCart(oldItems => [...oldItems, { item: item, quantity: quantity }]);
        }
    };

    const removeItem = (id) => {
        let item = itemsCart.find(i => i.item.id === id);
        setItemsCart(items => items.filter(i => i.item.id !== id));
        return item;
    };

    const clear = () => {
        setItemsCart([]);
    };

    const isInCart = (id) => {
        return !!itemsCart.find(i => i.item.id === id);
    };

    console.log(itemsCart);
    return (
        <CartContext.Provider value={[itemsCart, addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
};