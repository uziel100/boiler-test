/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openDrawer: false
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = uiSlice.actions

export default uiSlice.reducer
