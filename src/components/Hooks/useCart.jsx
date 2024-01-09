import React, { useContext } from 'react'
import { CartContext } from '../Context/CartProvider'

const useCart = () => {
   const cartUtils = useContext(CartContext)
   return cartUtils;
}

export default useCart