import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
    name: 'item',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
    ],
   reducers: {
    addCount(state, action) {
        let idNum = state.findIndex((a)=>{ return a.id === action.payload })
        state[idNum].count++
    },
    addItem(state, action){
        state.push(action.payload)
    }
   }
})

export let { addCount, addItem } = cart.actions

export default cart;