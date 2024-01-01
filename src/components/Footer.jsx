import React, { useState } from 'react'
import instagram from '../assets/instgram.png'
import xt from '../assets/x.png'
import youtube from '../assets/youtube.png'
import tiktok from '../assets/tiktok.png'
import discord from '../assets/discord.png'
export const Footer = () => {
  return (
    <div className='bg-black text-gray-400 pt-16'>
        <div className="grid grid-cols-2  px-5 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:space-x-0 lg:px-20 pb-32 ">
            <div className="">
            <h1 className="text-2xl capitalize pb-7 font-raleway font-black">products</h1>
           <ul className="space-y-3 capitalize text-sm font-figtree">
            <li className='hover:opacity-50 cursor-pointer'>phone (2)</li>
            <li className='hover:opacity-50 cursor-pointer'>phone (1)</li>
            <li className='hover:opacity-50 cursor-pointer'>ear (2)</li>
            <li className='hover:opacity-50 cursor-pointer'>ear (stick)</li>
            <li className='hover:opacity-50 cursor-pointer'>accessories</li>
           </ul>
            </div>
            <div className="">
            <h1 className="text-2xl capitalize pb-7 font-raleway font-black">company</h1>
           <ul className="space-y-3 capitalize text-sm font-figtree ">
            <li className='hover:opacity-50 cursor-pointer'>about us</li>
            <li className='hover:opacity-50 cursor-pointer'>careers</li>
            <li className='hover:opacity-50 cursor-pointer'>community</li>
            <li className='hover:opacity-50 cursor-pointer'>newsroom</li>
            <li className='hover:opacity-50 cursor-pointer'>sustanability</li>
            <li className='hover:opacity-50 cursor-pointer'>businedd enquiry</li>
            <li className='hover:opacity-50 cursor-pointer'>press contact</li>
           </ul>
            </div>
            <div className="">
            <h1 className="text-2xl capitalize pb-7 font-raleway font-black">support</h1>
           <ul className="space-y-3 capitalize text-sm font-figtree">
            <li className='hover:opacity-50 cursor-pointer'>support center</li>
            <li className='hover:opacity-50 cursor-pointer'>contact us</li>
            <li className='hover:opacity-50 cursor-pointer'>find a store</li>
           </ul>
            </div>
            <div className="hidden md:hidden lg:flex flex-col">
            <h1 className="text-2xl pb-5 font-raleway font-black">Join our mailing list</h1>
             <div className="flex flex-row  ps-2 mb-3 rounded border border-gray-300">
              <input type="text" placeholder='Email address' className='font-raleway text-sm bg-black border-none outline-none placeholder-gray-300' />
              <div className="flex justify-end w-full space-x-12">
              <a href="" className='cursor-pointer font-raleway capitalize bg-gray-800 font-black shadow-xl  text-400 flex px-5  py-4 hover:opacity-50'>join us</a>
              </div>
             </div>
             <span className="flex gap-5 items-center pb-3">
              <input type="checkbox" name="" id="" className='accent-gray-600' checked />
              <h1 className="text-gray-300 text-sm font-figtree">You have read and agree to the terms in our
              <b className="text-sm font-normal pl-1 underline">Privacy Policy</b>.</h1>
             </span>
             <span className="flex gap-5 items-center">
              <input type="checkbox" name="" id="" className='accent-gray-600' checked />
              <h1 className="text-gray-300 text-sm font-figtree">You consent to receiving NOTHING marketing communications.
              .</h1>
             </span>
            </div>
            
            
        </div>
        {/* mailing for mobile and medium screens */}
        <div className="flex flex-col px-5 pb-16 md:flex-col lg:hidden">
            <h1 className="text-2xl pb-5 font-raleway font-black tracking-widest">Join our mailing list</h1>
             <div className="flex flex-row  ps-2 mb-2 rounded-xl border border-gray-300">
              <input type="text" placeholder='Email address' className='font-raleway bg-black border-none outline-none placeholder-gray-300' />
              <span className="flex justify-end w-full">
              <a href="" className='text-right rounded-tr-xl rounded-br-xl cursor-pointer font-raleway capitalize bg-gray-800 font-black shadow-xl  text-400 px-5 py-3 hover:opacity-50'>join us</a>
              </span>
             </div>
             <span className="flex gap-5 items-center pb-3">
              <input type="checkbox" name="" id="" className='accent-gray-600' checked />
              <h1 className="text-gray-300 text-sm font-figtree">You have read and agree to the terms in our
              <b className="text-sm font-normal pl-1 underline">Privacy Policy</b>.</h1>
             </span>
             <span className="flex gap-5 items-center">
              <input type="checkbox" name="" id="" className='accent-gray-600' checked />
              <h1 className="text-gray-300 text-sm font-figtree">You consent to receiving NOTHING marketing communications.
              .</h1>
             </span>
            </div>
    <div className="flex flex-col justify-center md:flex flex-row md:justify-evenly py-8  md:px-5 lg:flex-row lg:justify-between lg:px-16 border-t border-gray-400 ">
      <div className="flex flex-col space-y-10 space-x-0 md:flex-row items-center md:space-y-0 md:space-x-6 md:pb-3 lg:flex-row lg:pb-0 lg:space-x-8">
        <h1 className="text-4xl md:text-4xl lg:text-3xl uppercase font-raleway font-black">nothing</h1>
        <a href="" className='text-md hover:opacity-50 md:text-sm font-figtree'>Privacy Policy</a>
        <a href="" className='text-md hover:opacity-50 md:text-sm font-figtree'>Terms of sale</a>
        <a href="" className='text-md hover:opacity-50 md:text-sm font-figtree'>Acceptable use policy</a>
        <a href="" className='text-md hover:opacity-50 md:text-sm font-figtree'>User agreement</a>
      </div>
     <div className="flex flex-col py-9 md:flex-row items-center md:py-0 md:gap-7 lg:gap-10">
     <div className="flex space-x-4 md:space-x-3 items-center ">
       <img src={instagram} alt="" />
       <img src={youtube} alt="" />
       <img src={xt} alt="" />
       <img src={tiktok} alt="" />
       <img src={discord} alt="" />
      </div>
      <div className="pt-8 md:pt-0">
        <h2 className="text-lg md:text-sm underline font-figtree font-semibold">Viet Nam</h2>
      </div>
     </div>
    </div>
    </div>
  )
}

