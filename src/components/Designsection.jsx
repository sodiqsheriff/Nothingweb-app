import  slide from '../assets/stripes.png'
const Designsection =()=>{
    return(
        <div className="bg-blue-50 py-5">
           <div className="flex flex-col px-5 md:flex-row justify-center items-center md:px-16">
            <div className="w-full md:w-1/2 md:space-y-6">
              <h1 className="text-4xl font-figtree font-bold w-1/2 leading-20 uppercase">
                nothing phone (1)
              </h1>
              <h1 className="w-full md:w-4/5 text-center text-gray-700 text-sm font-figtree font-thin tracking widest md:text-left">
                Design with instinct,to bring joy back
                to the everyday.Through the Glyph
                interface,a perfected OS and exceptional
                dual camera.All startlingly fast.
              </h1>
              <span className="flex gap-3 text-sm font-bold font-figtree">
                <h1>Learn more</h1>
                <h1>View models</h1>
              </span>
            </div>
            <div className="w-full md:w-4/5">
                <img src={slide} alt="phone camera" className='w-' />
            </div>
           </div>
        </div>
    )
}
export default Designsection