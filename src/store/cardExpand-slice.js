import { createSlice } from "@reduxjs/toolkit";

const cardExpand= createSlice({
    name:'cardExpand',
    initialState:{cardExpand:false},
    reducers:{
        closeCardExpaned(state){
            state.cardExpand = false
        },
        openCardExpaned(state){
            state.cardExpand = false
        }
    }
})
export const cardExpandActions = cardExpand.actions
export default cardExpand