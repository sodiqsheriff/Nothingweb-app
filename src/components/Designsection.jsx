import  slide from '../assets/stripes.png'
const Designsection =()=>{
    return(
        <div className="bg-gray-50 pt-16 md:pt-5">
           <div className="flex flex-col px-5 md:flex-row justify-center items-center md:ps-16 md:pr-0">
            <div className="w-full space-y-0 md:w-1/2 md:space-y-6 lg:w-2/5">
              <h1 className="text-3xl pb-3 text-center w-full space-y-0 md:text-3xl md:text-left md:pb-0 font-figtree font-bold md:w-full leading-20 uppercase lg:w-3/5 lg:text-[45px]">
                nothing phone (1)
              </h1>
              <h1 className="w-full text-md pb-3 md:w-full text-center text-gray-700 md:text-xl font-figtree font-thin tracking widest lg:w-4/5 md:text-left lg:text-[20px]">
                Design with instinct,to bring joy back
                to the everyday.Through the Glyph
                interface,a perfected OS and exceptional
                dual camera.All startlingly fast.
              </h1>
              <span className="flex gap-3 justify-center pb-5 text-md md:justify-left md:text-left md:text-xl font-bold font-figtree lg:text-[20px]">
                <h1>Learn more</h1>
                <h1>View models</h1>
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 h-full bg-gray-100">
                <img src={slide} alt="phone camera" className='w-full h-full' />
            </div>
           </div>
        </div>
    )
}
export default Designsection