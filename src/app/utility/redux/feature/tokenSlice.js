import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name : "token",
    initialState : '',
    reducers : {
        updateToken : (state,action) => {
            return (state = action.payload)
        }
    }
})

// Untuk dispatch
export const {updateToken} = tokenSlice.actions

// Untuk disimpan di store
export default tokenSlice.reducer