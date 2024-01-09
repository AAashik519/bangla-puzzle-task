import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import useCart from './Hooks/useCart';
const Navbar = () => {
  const {cart ,isNavOpen ,setIsNavOpen}= useCart()
  console.log(isNavOpen);
  return (
    <nav className="bg-gray-200 p-4">
    <div className=" max- mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-black text-lg font-bold">Your Logo</div>
        <div className="space-x-4 text-black">
          <a href="#" className=" ">Home</a>
          <a href="#" className=" ">About</a>
          <a href="#" className=" ">Services</a>
          <a href="#" className=" ">Contact</a>
        </div>

        <div className=" text-lg  flex items-center gap-8 ">
          <div className="relative">
          <button className="text-2xl  sidebar-toggle "
              onClick={()=>setIsNavOpen(!isNavOpen)}
          > <FaShoppingCart /></button>
          <span className="absolute -top-3 left-4 bg-white px-2 rounded-full text-red-500 font-bold">{cart.length}</span>
          </div>
          <button className="bg-red-500 text-white rounded px-4 py-2 ">Take Order</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar