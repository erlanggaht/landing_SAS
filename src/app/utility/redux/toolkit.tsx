import toolkit from '@reduxjs/toolkit'

const {configureStore, createSlice} = toolkit

const cartSlice =  createSlice({
    name : "cart",
    initialState : {
        title : "",
        name : ""
    },
    reducers : {
        updateCart (state,action) {
          state.title = action.payload.title,
          state.name = action.payload.name
        }
    }
})

const store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})

console.log("oncreate store :",store.getState())
store.subscribe(() => {
    console.log('STORE CHANGE : ',store.getState())
})

store.dispatch(cartSlice.actions.updateCart({title : "webs",name : "erlangga"}))