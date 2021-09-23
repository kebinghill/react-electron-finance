//DUCKS pattern
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 5,
};

//redux toolkit uses immer, immer wraps state updates and tracks all mutations. Allows for us to use the increment function syntax of state.value++. Normal redux wouldn't like that, it seems we are attempting to update an immutable object.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment
    incremented(state) {
      state.value++;
    },

    amountAdded(state, action) {
      state.value += action.payload;
    },
    //decrement

    //reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
