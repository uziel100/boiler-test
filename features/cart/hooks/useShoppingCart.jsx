import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, removeProductCart } from 'store/states/cart'

const useShoppingCart = () => {
  const { products } = useSelector(store => store.cart)
  const dispatcher = useDispatch()

  const calculateTotalByProduct = (price, count) => {
    const total = price * count
    return total
  }

  const calculateSubtotal = items =>
    items.reduce((prev, next) => {
      const subTotal = prev + calculateTotalByProduct(next.product.price, next.count)
      return subTotal
    }, 0)

  const handleRemoveOfCart = productId => {
    dispatcher(removeProductCart({ productId }))
  }

  const handleStockProduct = (product, count = 1) => {
    dispatcher(addProductCart({ product, count }))
  }

  return {
    calculateTotalByProduct,
    calculateSubtotal,
    handleRemoveOfCart,
    handleStockProduct,
    products,
    totalProducts: products?.length || 0
  }
}
export default useShoppingCart
