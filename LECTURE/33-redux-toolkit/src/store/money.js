import { createSlice } from '@reduxjs/toolkit'

const moneySlice = createSlice({
  name : 'money',
  initialState:{cash : 0},
  reducers:{
    plus : (state,action)=>{
       state.cash += action.payload
    },
    minus : (state,action)=>{
      state.cash -= action.payload
    },
  }
});

export const {plus, minus} = moneySlice.actions;
export default moneySlice.reducer;