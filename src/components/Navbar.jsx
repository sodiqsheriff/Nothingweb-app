import { useState } from 'react';
import {FiSearch, FiUser} from 'react-icons/fi';
import {RiShoppingBasketLine} from 'react-icons/ri';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
const Navbar =()=>{
    const [isActive, setIsActive] =useState(false);
    
    const [menuOpen, menuClose] = useState(false);

    const toggleMenu =()=>{
        menuClose(!menuOpen);
    };

    return(
        <>
<div className="fixed z-50 w-full bg-white flex items-center justify-between px-5 py-2 md:py-4 md:px-16 lg:px-24"> 
<div className="">
    <h1 className="text-2xl font-black font-raleway uppercase md:text-3xl lg:text-4xl">nothing</h1>
</div>
  {/* nav-links for small screens */}
  <div className=" top-0 r-0 p-4 md:hidden">
    <div className="cursor-pointer" onClick={toggleMenu}>
        {menuOpen? <IoMdClose size={24}/> : <AiOutlineMenu size={24}/>}
    </div>
{menuOpen && (
<div className="flex flex-col w-full h-screen space-y-6 absolute top-16 right-0 p-5 bg-blue-50 shadow">
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">phone</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">audio</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">store</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">community</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">support</a>
  </span>
        </div>
    )}
</div>
{/* nav-links for medium screen and up */}
<div className="hidden md:flex space-x-8 items-center font-200">
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">phone</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">audio</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">store</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">community</a>
  </span>
  <span className="capitalize hover:opacity-50 font-figtree">
    <a href="">support</a>
  </span>
</div>       
{/* nav-icons */}
<div className="hidden md:flex items-center space-x-12">
    <div className="relative">
        <div className={`cursor-pointer p-2 ${isActive ? 'hidden':''}`} onClick={()=> setIsActive(true)}>
        <FiSearch className='text-xl' />
        </div>
      <input type="text"className={`transition-transform duration-300 absolute -top-4 left-0 w-40 p-1 -ml-36 border rounded focus:outline-none ${
      isActive ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-full'}`}placeholder="Search" onBlur={() => setIsActive(false)}/>
    </div>
    <RiShoppingBasketLine className='text-xl'/>
    <FiUser className='text-xl' />
</div>
</div>
        </>
    
    )
}
export default Navbar;