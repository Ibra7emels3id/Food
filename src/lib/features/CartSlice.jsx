const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] ,
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
            if (miunsCart >= 0) {
                state.cart[miunsCart].cartquantity -= 1
                if (state.cart[miunsCart].cartquantity <= 0) {
                    state.cart.splice(miunsCart, 1)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clearCart: (state) => {
            state.cart = [];
        },
        gettotal: (state, action) => {
            state.CartTotal = state.cart.reduce((total, item) => total + (item.attributes.price * item.cartquantity), 0);
            state.cartquantity = state.cart.reduce((quantity, item) => quantity + item.cartquantity, 0);
        },
    }
})

export const { addItem, removeItem, clearCart, gettotal } = CartSlice.actions;
export default CartSlice.reducer;