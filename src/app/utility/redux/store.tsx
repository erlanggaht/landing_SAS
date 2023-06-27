import { configureStore } from "@reduxjs/toolkit"
import tokenSlice from '@/app/utility/redux/feature/tokenSlice'
import adminSlice from '@/app/utility/redux/feature/adminSlice'
import karyawanSlice from '@/app/utility/redux/feature/consultant_data'
export const store = configureStore({
    reducer : {
        token : tokenSlice,
        admin : adminSlice,
        karyawan : karyawanSlice
    },

})