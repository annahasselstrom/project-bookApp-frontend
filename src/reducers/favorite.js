import { createSlice } from "@reduxjs/toolkit";


// initialState

export const favorite = createSlice({
    name: 'favorite',
    initialState: {
        all: []
    }, 
    reducers: {
        setFavorites: (state, action) => {
        }
    }
    
});
