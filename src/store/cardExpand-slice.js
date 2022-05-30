import { createSlice } from "@reduxjs/toolkit";

const cardExpand= createSlice({
    name:'cardExpand',
    initialState:{cardExpand:false},
    reducers:{
        closeCardExpand(state){
            state.cardExpand = false
        },
        clickCard(state){
            state.cardExpand = !state.cardExpand
        }
    }
})
export const cardExpandActions = cardExpand.actions
export default cardExpand