import React, { useEffect, useState } from "react";
import Product from "./Product";
import useCart from "./Hooks/useCart";
import Sidebar from "./Sidebar";
 
const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart ,isNavOpen } = useCart();


  const handleIncrease=(product)=>{
     const existproduct = cart.find((item)=> item.id === product.id)
     if(existproduct){
     setCart(cart.map((item) => (item.id === product.id ? { ...existproduct, qty: existproduct.qty + 1 } : item)))
     }
  }
  const handleDecrease=(product)=>{
     const existproduct = cart.find((item)=> item.id === product.id)
     if(existproduct.qty > 1 ){
     setCart(cart.map((item) => (item.id === product.id ? { ...existproduct, qty: existproduct.qty - 1 } : item)))
     }
  }

  const handleDelete =(product)=>{
    const removeCart = cart.filter(item => item.id !== product.id);

    setCart(removeCart)
   
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[]);
  return (
    <div className="container mx-auto flex gap-5 my-10">
      <div className={`grid grid-cols-3 gap-5 ${isNavOpen ? "max-w-2/3" : 'max-w-full  '}  `   }>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className={`${isNavOpen ? "w-1/3" : " hidden"}`}>
        
      <Sidebar />
      </div>
    </div>
  );
};

export default Products;
