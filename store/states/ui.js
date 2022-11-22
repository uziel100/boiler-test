/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openDrawer: false,
  openMenuShoppingCart: false,
  openSearch: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDrawer: state => {
      state.openDrawer = true
    },
    closeDrawer: state => {
      state.openDrawer = false
    },
    openDrawerShoppingCart: state => {
      state.openMenuShoppingCart = true
    },
    closeDrawerShoppingCart: state => {
      state.openMenuShoppingCart = false
    },
    openOptionSearch: state => {
      state.openSearch = true
    },
    closeOptionSearch: state => {
      state.openSearch = false
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  openDrawer,
  closeDrawer,
  openDrawerShoppingCart,
  closeDrawerShoppingCart,
  openOptionSearch,
  closeOptionSearch
} = uiSlice.actions

export default uiSlice.reducer
