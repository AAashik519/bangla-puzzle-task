import React, { createContext, useState } from 'react'
import Product from './../Product';


 export const CartContext = createContext(null)
const CartProvider = ({children}) => {

  const [cart , setCart]= useState([])
  const [isNavOpen , setIsNavOpen]= useState(false)
  

  const  allState = {
    cart,
    setCart,
    isNavOpen,
    setIsNavOpen,
    
  }

  return (
    <CartContext.Provider value={allState}>{children}</CartContext.Provider>
  )
}

export default CartProvider