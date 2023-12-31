import videoUrl from '../assets/gif.mp4'

const Preview=()=>{
    return(
     <div className="bg-black text-white py-7">
        <section className="text-center">
            <h1 className="text-2xl font-raleway uppercase pb-3 md:text- lg:text-4xl">ear (stick)</h1>
            <span className="w-full flex justify-center text-center pb-3">
            <h1 className="hidden md:flex flex-col text-md font-figtree font-light">
            Tech you can’t feel. Leaving just space for sound to come to life. Powered by 
            <br />custom sound technology. Beautifully authentic, at any frequency.
            </h1>
            <h1 className="w-4/5 flex-col text-sm font-figtree font-light md:hidden">
            Tech you can’t feel. Leaving just space for sound 
            <br />to come to life. Powered by 
            custom sound technology. Beautifully authentic, at any frequency.
            </h1>
            </span>
            
            <h1 className="text-sm md:text-md font-bold">Learn more</h1>
            {/* video section */}
          
        </section>
        <div className="">
                <video autoPlay loop muted className="w-full h-auto">
                    <source src={videoUrl} type="video/mp4" />
                    your browser does not support this video tag
                </video>
            </div>
     </div>
    )
}
export default Preview