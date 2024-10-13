import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/pages/slices/cartSlice'
import optionSlice  from './src/pages/slices/optionSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    option: optionSlice, 

  },
})