import React from 'react'
 
import { MdDelete } from "react-icons/md";
import useCart from './Hooks/useCart';

   
const Sidebar = () => {
    const { cart, setCart } = useCart();

    const totalPrice = cart.reduce((price, item) => price + item.qty * item.price, 0)

    const handleIncrease= async(product)=>{
        const existproduct =await cart.find((item)=> item.id === product.id)
        if(existproduct){
        setCart(cart.map((item) => (item.id === product.id ? { ...existproduct, qty: existproduct.qty + 1 } : item)))
        }
     }
     const handleDecrease=async(product)=>{
        const existproduct =await cart.find((item)=> item.id === product.id)
        if(existproduct.qty > 1 ){
        setCart(cart.map((item) => (item.id === product.id ? { ...existproduct, qty: existproduct.qty - 1 } : item)))
        }
     }
   
     const handleDelete = async (product)=>{
       const removeCart = await cart.filter(item => item.id !== product.id);
   
       setCart(removeCart)
      
     }
  return (
  
        
        <div className="bg-red-400 h-auto w-full  px-2 py-10">
          {cart.map((product) => (
            <div className="p-2 border-[2px] border-white mt-2 " key={product.id}>
              <div className="flex items-center gap-3 mb-5 ">
                <img
                  className="w-28 h-20 object-cover object-center"
                  src={product.image}
                  alt=""
                />
                <div className="">
                  <h2 className="text-white font-bold">{product.name}</h2>
                  <p className="text-white font-bold">${product.price}</p>

                  <div className="flex gap-2 ">
                  <button className="btn bg-white px-3 rounded text-2xl " onClick={()=> handleDecrease(product)}> - </button>
                   <p className=" bg-white px-2 rounded text-xl">{product.qty}</p>
                  <button className="btn bg-white px-3 rounded text-2xl" onClick={()=>handleIncrease(product)}>+</button>
                </div>
                  
                </div>

               
              </div>
              <div className="flex  justify-between items-center">
              <p className=" text-2xl text-white mt-1">Price : ${product.price * product.qty}</p>
                <button className="text-2xl text-red-400 bg-white px-2 py-2 rounded-full" onClick={()=> handleDelete(product)}><MdDelete /></button>
              </div>

            
            </div>
          ))}

          <h1 className="text-white text-2xl font-bold ml-2 my-5">Total Price : ${totalPrice}</h1>
        </div>
     
   
  )
}

export default Sidebar