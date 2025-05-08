"use client"
import Link from "next/link"
import { useCart } from "../context/cartcontext";

export const Navbar = ()=>{
    const {cart} = useCart();
    return (
     <nav className="sticky top-0 z-50 bg-white shadow"> 
       <div className="container mx-auoto flex items-center justify-between px-4 py-4"> 
            <Link href={"/"} className="hover:text-blue-600">My Store</Link>
      
         <div className="hidden md:flex space-x-6">
         <Link href={"/"} className="hover:text-blue-600" >Home</Link>

         <Link href={"/products"} className="hover:text-blue-600">Products</Link>
         <Link href={"/checkout"} className="hover:text-blue-600" >Checkout</Link>
         </div>
         <div className="flex items-center space-x-4"></div>
    
         <Link href="/checkout" >Cart ({cart.length})</Link>
         </div>
    </nav>
    );
}
