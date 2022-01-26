import React, { createContext, useEffect, useReducer } from 'react';
import "./Cart.css"
import SubCart from './SubCart';
import products from './Products';
import { reducer } from './Reducer';


export const CartContext = createContext();
const initalState = {
    item: products,
    totalAmount: 0,
    totalItem: 0
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initalState); // state= initialstate
    //dispatch = to give action
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }

    const clearCart = () => {
        return dispatch({
            type: "CLEAR_CART"
        })
    }

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT_ITEM",
            payload: id
        })
    }

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT_ITEM",
            payload: id
        })
    }


    useEffect(() => {
        dispatch({ type: "TOTAL_ITEM" });
    
    }, [state.item]);

    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
                <SubCart />
            </CartContext.Provider>


        </>
    )
}

export default Cart;

