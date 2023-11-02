"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const toggleHandler = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <div className={` flex  justify-between items-center w-full sm:px-16 px-6    navbar`}>
      <div className={` flex items-center cursor-pointer`}>
         <Link href={"/"} className="flex items-center">
        <Image src={"/techno.jpg"} alt="logo" width={160} height={20} />
      </Link>
      </div>
     <div>
       
     
        <nav className="sm:flex hidden  items-center text-base">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home Page
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            All Products
          </Link>
          <Link href={"/contacts"} className="mr-5 hover:text-gray-900">
            Contacts
          </Link>
          <Link href={"/shoppingcard"}>
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600">
            My Bag
          </button>
        </Link>
        </nav>
     </div>
        

      {/* navigation btn*/}
      <div className="sm:hidden flex flex-1 justify-end items-end">
        <div
          className=" text-[20px] cursor-pointer flex items-center justify-end gap-4"
          onClick={toggleHandler}
        > <Link href={"/shoppingcard"} className=" mb-1  " >
         <Image 
          src={"/shopping.jpg"} 
          alt="shop-card"
          width={50}
          height={20} />
      </Link>
          {toggleNav ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </div>
        
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-5 bg-slate-200 rounded
             `}
        >
         
            <nav className="flex flex-col  text-base p-0">
          <Link href={"/"} >
            Home Page
          </Link>
          <Link href={"/products"} >
            All Products
          </Link>
          <Link href={"/contacts"} >
            Contacts
          </Link>
            
        </nav>
        
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;