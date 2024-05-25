import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './features/ProductSlice'
import CartSlice from './features/CartSlice'
import CheckTost from './features/AlertTost'



export const Store = configureStore({
    reducer: {
        product: ProductSlice ,
        cart : CartSlice ,
        Show : CheckTost
    }
})
