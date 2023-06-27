
import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import API_getKaryawan from '../../../config/api_getKaryawan'

export const getDataKaryawan = createAsyncThunk('karyawan/getKaryawan',async () => {
    const response = await API_getKaryawan()

    return response.data
})

const karyawanEntity = createEntityAdapter({
    selectId : (karyawan) => karyawan.id
})

const karyawanSlice = createSlice({
    name : "karyawan",
    initialState : karyawanEntity.getInitialState(),
    extraReducers : (builder) => {
        builder
        .addCase(getDataKaryawan.pending,(state,{payload}) => {
            state.loading_karyawan = true
        })  
        .addCase(getDataKaryawan.fulfilled, (state, { payload }) => {
            state.response_karyawan = payload
            state.loading_karyawan = false
        })
        .addCase(getDataKaryawan.rejected,(state,{payload}) => {
            state.reject_karyawan = true
        })
    }
})


export const karyawanSelector = karyawanEntity.getSelectors(state => state.karyawan)

export default karyawanSlice.reducer