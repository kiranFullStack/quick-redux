import { configureStore } from '@reduxjs/toolkit'
//rename this acc to your slice name
import counterSlice from './counterSlice'
import cartSlice from './cartSlice'
// remove below 1 line if you don't have API slice
import { productApi } from './APISlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    // remove below 1 line if you don't have API slice
    [productApi.reducerPath]: productApi.reducer,
  },
  // remove below 2 lines if you don't have API slice
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)
