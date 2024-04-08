import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
    name: 'item',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
    ],
   reducers: {
    addCount(state, action) {
        state[action.payload].count++
    }
   }
})

export let { addCount } = cart.actions

export default cart;