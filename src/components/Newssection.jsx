import React from 'react'
import news from '../assets/News.png'
 const Newssection = () => {
  return (
    <div className='pt-12 pb-10 px-5'>
    <h1 className="text-center uppercase text-4xl font-bold">news</h1>
    <div className='flex flex-col px-5  md:flex-row items-center md:px-10 md:gap-3'>
      <div className="flex-col space-y-6 w-1/2">
      <section className=" border-gray-300 border-b">
            <h1 className="text-md font-semibold font-figtree w-[325px] pb-3">
              Nothing raises $100 million to build the apple of android.
            </h1>
            <h1 className="text-xs underline font-semibold text-gray-400 pb-3">Read more</h1>
          </section>
          <section className="space-y-6 border-gray-300 border-b pb-3">
            <h1 className="text-md font-semibold font-figtree w-[325px]">
            Nothing has teamed up with electronic music
             titans Swedish House Mafia to bring exclusive
              sounds to the Glyph Composer.
            </h1>
          </section>

          <section className="space-y-6 border-gray-300 border-b pb-3">
            <h1 className="text-md font-semibold font-figtree w-[325px]">
            Introducing Phone (2) ft. Casey Neistat           
             </h1>
          </section>

          <section className="space-y-6 border-gray-300 border-b pb-3">
            <h1 className="text-md font-semibold font-figtree w-[325px]">
            We’re proud to have won three Red Dot Design
             Awards for Phone (1), Ear (stick) & Ear (2).            
             </h1>
          </section>

      </div>
          
      <div className="flex-col w-1/2">
        <img src={news} alt="" />
      </div>

    </div>
    </div>
      
  )
}
export default Newssection