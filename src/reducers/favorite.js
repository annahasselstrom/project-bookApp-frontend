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
      console.log(action)
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
   
    deleteFavorite: (state, action) => {
      const { bookId } = action.payload;
      console.log(action)

      state.list.items = state.list.items.filter(
        (item) => item.id !== bookId
      );
    },

    clearAll: () => {
      return initialState // Does not need a state or action(payload)
    }
  }
});
