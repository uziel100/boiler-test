/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const initializateCart = () => {
  const data = typeof window !== 'undefined' ? localStorage.getItem('cart') : '[]'
  if (!data) return initialState

  // console.log({ products: JSON.parse(data) })
  return { products: JSON.parse(data) }
  // return initialState
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart: (state, { payload }) => {
      const { product, count } = payload
      // buscar si existe el producto

      const productInToCart = state.products.find(item => item.product.id === product.id)
      let productsUpdated = []

      if (!productInToCart) {
        productsUpdated = [{ product, count }, ...state.products]
      }

      if (productInToCart) {
        productsUpdated = state.products.map(item => {
          if (item.product.id === product.id) {
            item.count += count
          }

          return item
        })
      }

      localStorage.setItem('cart', JSON.stringify(productsUpdated))
      state.products = productsUpdated
    },
    removeProductCart: (state, { payload }) => {
      const { productId } = payload
      const filterProducts = state.products.filter(item => item.product.id !== productId)

      localStorage.setItem('cart', JSON.stringify(filterProducts))
      state.products = filterProducts
    },
    initializeCart: state => {
      const { products } = initializateCart()
      state.products = products
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProductCart, removeProductCart, initializeCart } = cartSlice.actions

export default cartSlice.reducer
