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
        <h1 className="text-4xl text-center tracking-wider py-7 uppercase">
            designed for you
        </h1>
         <div className="flex flex-col px-5 py-8 md:px-10 md:flex-row gap-5">
            {earbuds.map((earbud)=>
            (
              <div key={earbud.id} className="bg-blue-50 pt-5">
                <h1 className="font-bold text-3xl text-center uppercase">{earbud.heading} </h1>
                <h1 className="text-center text-sm pb-10">{earbud.subheading}</h1>
                <div className="">
                    <img src={earbud.image} alt="budsimage" className='w-full h-screen' />
                    </div>
              </div>  
            ))}
         </div>
       </>
    )
}
export default Battery