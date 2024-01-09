import React from 'react'
import useCart from './Hooks/useCart'

const Product = ({product}) => {
  const {cart , setCart}= useCart()

  console.log(cart);

  const addtoCart =async (product)=>{
    const existproduct = cart.find(item =>item.id === product.id)
    if(!existproduct){
      await setCart([
        ...cart ,  { ...product, qty: 1 , addedToCart: true  }
      ])
    } 
  }
  return (
    <div>
          <div className="bg-white rounded-xl shadow-md   ">
          <img
            className="w-full h-48 object-cover object-center"
            src={product.image}
            //   alt={name}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800"> {product.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h2 className="text-xl font-semibold text-red-500"> ${product.price}</h2>
            <p className="text-gray-600">{product.description}</p>
            <button
              onClick={() => addtoCart(product)}
              disabled={product.addedToCart}
              className=  'bg-red-500 px-2 py-2 text-white rounded w-full mt-5'
            >
              {product.addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        
          </div>
        </div>
    </div>
  )
}

export default Product