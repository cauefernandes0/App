import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  option: null,
}

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.option = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOption } = optionSlice.actions

export const selectOption = state=> state.option.option;

export default optionSlice.reducer