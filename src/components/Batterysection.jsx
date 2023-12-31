import img1 from '../assets/battery.png'
import img2 from '../assets/phone.png'
const Battery =()=>{
    const earbuds = [
        {id:1, 
        heading:'all day battery life', 
        subheading:'Compactly delivered.Up to 7 hours of listening time.Nearly 2 hours with just 10 minutes of charge. 12 hours of talk time with the case and 3 hours with the earbuds.', 
        image:img1
        },
        {id:2,
         heading:'optimized connectivity',
         subheading:'Maximum stability.Deeper experiences.Connect easily to any Android device with Fast Pair. Automatically switches to low lag mode when you game on Phone (1).',
         image:img2}
    ];
    return(
       <>
        <h1 className="text-2xl md:text-5xl font-raleway font-semibold text-center tracking-wider py-10 uppercase">
            designed for you
        </h1>
         <div className="grid px-5 md:grid-cols-2 md:px-8 gap-5 lg:px-12">
            {earbuds.map((earbud)=>
            (
              <div key={earbud.id} className="bg-gray-200 pt-5">
                <span className="w-full flex text-center pb-2 justify-center">
                <h1 className=" w-1/2 text-2xl font-black md:text-4xl md:w-60 text-center uppercase font-raleway">{earbud.heading} </h1>
                </span>
                <span className="flex justify-center w-full">
                <h1 className="text-center w-60 pb-5 text-xs md:text-lg md:w-[420px] md:pb-7">{earbud.subheading}</h1>
                </span>
                <div className="">
                    <img src={earbud.image} alt="budsimage" className='w-full' />
                    </div>
              </div>  
            ))}
         </div>
       </>
    )
}
export default Battery