import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './states/counter'
import uiReducer from './states/ui'

export default configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer
  }
})
