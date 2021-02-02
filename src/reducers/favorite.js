import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: {
        name: 'List',
        items: []
    }
};

export const favorite = createSlice({
    name: 'favorite',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {
            const itemInfo = action.payload;
            state.list.items.push(itemInfo);
        }
    },

      removeFavorite: (state, action) => { 
        
    },
    
      clearAll: () => {
        return initialState // Does not need a state or action(payload)
      }

    
});
