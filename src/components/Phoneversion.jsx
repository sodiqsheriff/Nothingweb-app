import currentversion from '../assets/android 14.png'
const Phoneversion=()=>{
    return(
       <div className="bg-blue-50 flex justify-center items-center mt-8 py-12 md:py-20">
        <section className="space-y-8 md:space-y-16">
            <span className="flex flex-row justify-center">
            <h1 className="text-center uppercase text-3xl md:text-4xl lg:text-4xl font-black font-raleway tracking-wider">android 14 beta 3</h1>
            </span>
        <div className="flex flex-row justify-center items-center w-full md:ps-16 lg:ps-20">
        <div className='border-dotted border-black border-r-4 px-5 md:px-7 lg:px-10'>
            <h1 className="font-raleway text-xl font-black md:text-3xl lg:text-4xl uppercase">nothing (r)</h1>
        </div>
        <div className='flex items-center gap-3 ps-5 md:ps-7 lg:ps-10 '>
            <img src={currentversion} alt="android version of the phone" className='bg-gray-200 w-24 md:w-1/2' />
            <h1 className="font-figtree text-lg md:text-2xl capitalize">beta</h1>
        </div>
        </div>
        <div className="w-full flex justify-center">
        <h1 className=' text-sm w-[345px] text-center font-figtree md:px-0 md:text-md  md:w-3/5 lg:w-2/5'>We're giving Phone (1) users access to Android 14 Beta 3 as part of
             the Developer Preview Program. Follow the link below to be one of
              the first to experience the latest updates.</h1>
        </div>
        
        </section>
        
       </div>
    )
}
export default Phoneversion