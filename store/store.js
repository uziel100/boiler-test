import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './states/counter'
import uiReducer from './states/ui'
import cartReducer from './states/cart'

export default configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer,
    cart: cartReducer
  }
})
