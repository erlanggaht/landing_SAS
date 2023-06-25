import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import GetKaryawan from '@/app/pages/admin/API/getKaryawan'

export const getAdmin = createAsyncThunk('admin/getAdmin',async () => {
    const response = await GetKaryawan()
    return response.data
})

const adminEntity = createEntityAdapter({
    selectId : (admin) => admin.id
})

const adminSlice = createSlice({
    name : "admin",
    initialState : adminEntity.getInitialState(),
    extraReducers: (builder) => {
        builder
        .addCase(getAdmin.pending,(state,{payload}) => {
            state.loading = true
        })  
        .addCase(getAdmin.fulfilled, (state, { payload }) => {
            state.response = payload
            state.loading = false
        })
        .addCase(getAdmin.rejected,(state,{payload}) => {
            state.reject = true
        })
    }, 
})


// state.admin harus sama dengan nama di store
export const adminSelector = adminEntity.getSelectors(state => state.admin)

// Untuk disimpan di store
export default adminSlice.reducer;