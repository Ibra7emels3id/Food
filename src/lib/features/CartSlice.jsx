import React, { useEffect } from "react";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    cart: typeof window !== "undefined" ? localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] : null,
    CartTotal: 0,
    cartquantity: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.cart.findIndex((product) => product.id === action.payload.id)
            if (cartItem >= 0) {
                state.cart[cartItem].cartquantity += 1
            } else {
                const tempProduct = { ...action.payload, cartquantity: 1 }
                state.cart.push(tempProduct);
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeItem: (state, action) => {
            const miunsCart = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = miunsCart
            state.cart.splice(miunsCart, 1)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        gettotal: (state, action) => {
            state.CartTotal = state.cart.reduce((total, item) => total + (item.attributes.price * item.cartquantity), 0);
            state.cartquantity = state.cart.reduce((quantity, item) => quantity + item.cartquantity, 0);
        },
        CleareCart: (state, action) => {
            state.cart = []
            state.CartTotal = 0
            state.cartquantity = 0
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export const { addItem, removeItem, clearCart, gettotal, CleareCart } = CartSlice.actions;
export default CartSlice.reducer;