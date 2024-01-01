import React from 'react'
import { useState } from 'react';
import news from '../assets/News.png'
 const Newssection = () => {
  const[isExpanded, setIsExpanded]= useState(false);

  const toggleMenu =()=>{
    setIsExpanded(!isExpanded);
};

  return (
    <div className='pt-12 pb-5 md:pb-10 '>
    <h1 className="text-center uppercase text-4xl font-black font-raleway pb-10">news</h1>
    <div className='flex flex-col-reverse px-5  md:flex-row items-center md:px-10 md:gap-3 lg:px-20'>
      <div className="flex-col space-y-6 w-full md:space-y-3 md:w-1/2 lg:space-y-8">
      <section className=" border-gray-300 border-b">
            <h1 className="text-lg font-figtree w-[325px] pb-4 md:text-md md:pb-2 lg:pb-4 lg:text-lg">
              Nothing raises $100 million to build the apple of android.
            </h1>
            <div className="cursor-pointer" onClick={toggleMenu}>
              {isExpanded ? <h1 className='text-xs underline font-semibold text-gray-400 pb-4'>Read less</h1> : <h1 className='text-xs underline font-semibold text-gray-400 pb-4'>Read more</h1>}
             </div>
            
          </section>
          {isExpanded &&(

          <div className="">
          <section className=" border-gray-300 border-b pb-4 md:pb-2 text-gray-500 lg:pb-4">
            <h1 className="text-lg  font-figtree w-[325px] md:text-md lg:text-lg">
            Nothing has teamed up with electronic music
             titans Swedish House Mafia to bring exclusive
              sounds to the Glyph Composer.
            </h1>
          </section>

          <section className=" border-gray-300 border-b pb-4 md:pb-2 text-gray-500 lg:pb-4">
            <h1 className="text-lg  font-figtree w-[325px] md:tezt-md lg:text-lg">
            Introducing Phone (2) ft. Casey Neistat           
             </h1>
          </section>

          <section className=" text-gray-500">
            <h1 className="text-lg pb-4 font-figtree w-[325px] md:pb-2 md:text-sm lg:text-lg lg:pb-4">
            We’re proud to have won three Red Dot Design
             Awards for Phone (1), Ear (stick) & Ear (2).            
             </h1>
          </section>
          </div>
                   )}

          <h1 className="text-sm text-center md:text-xs underline font-bold text-black pb-5 md:text-left md:pb-0">More news</h1>

      </div>
          
      <div className="flex-col pb-5 w-full md:pb-0 md:w-1/2">
        <img src={news} alt="" />
      </div>

    </div>
    </div>
      
  )
}
export default Newssection