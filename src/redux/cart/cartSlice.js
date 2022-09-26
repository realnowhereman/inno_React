import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalPrice(state) {
            state.totalPrice = state.cart.reduce((sum, current) => sum + current.price, 0)
        },
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter((item) => item.idx !== action.payload
            )
        }
    }
})

export const {addToCart, removeFromCart, setTotalPrice} = cartSlice.actions

export default cartSlice.reducer