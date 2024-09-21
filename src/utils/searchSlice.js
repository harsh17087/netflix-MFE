import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        showSearchView:false,
    },
    reducers:{
        toggleSearchView:(state,action)=>{
            state.showSearchView=!state.showSearchView
        },
    }
})

export const {toggleSearchView} = searchSlice.actions
export default searchSlice.reducer