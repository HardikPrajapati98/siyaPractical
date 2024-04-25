import { createSlice } from "@reduxjs/toolkit";


const countryInfoSlice = createSlice({
    name: 'CountryInfo',
    initialState: {
        country: [],
    
    },
    reducers: {
        storeCountry: (state, action) => {
            state.country = action.payload   
        }
    }
})

export const { storeCountry } = countryInfoSlice.actions
export default countryInfoSlice.reducer
