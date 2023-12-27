import image1 from '../assets/glyphs.png'
import image2 from '../assets/widgets.png'
import image3 from '../assets/camera.png'
import image4 from '../assets/premium.png'
import { useState } from 'react'

const divContents =[
    {heading:'glyphs',
    text:"Assign different light and sound differences for each contact and notification be one step ahead of who's getting in touch.Key information in a flash",
     image:image1},
    {heading:'widgets',
    text:"Taking inspiration from phone's iconic hardware design, we've given our software a new visual identity that feels unmistakably nothing",
     image:image2},
    {heading:'camera',
    text:"Phone (2) effortlessy captures real life events.With an 18-bit image signal processor, it is capable of capturing 4,000 times of data than phone(1). ",
    image:image3},
    {heading:'premium',
    text:"With a Snapdragon 8+ Gen 1, chipset, Phone (2) boosts an 80% of performance over its predecessor.",
     image:image4},
];
const Phonesection =()=>{
     const [hoveredIndex, setHoveredIndex] = useState(null);

     const handleHover =(index) =>{
        setHoveredIndex(index);
     };

     const handleUnhover =()=>{
        setHoveredIndex(null);
     };
    return(
        <div className="relative z-10" style={{backgroundColor:'black'}}>
           <div className='flex flex-wrap py-12 md:py-16 lg:py-20' >
            <div className="grid w-full h-full px-5 md:grid-cols-2 md:px-10 gap-10">
                {divContents.map((content, index)=>(
                    <div key={index}className=" relative rounded-2xl h-screen w-full p-4 bg-cover bg-center transition-all duration-3000 ease-in-out mb-4 " style={{backgroundImage:`url("${content.image}")`}}
                    onMouseEnter={()=> handleHover(index)}
                    onMouseLeave={handleUnhover}>
                    
                            <div className='absolute bottom-0 left-0 py-4 px-4 md:px-8  text-white text-container bg-opacity-75'>
                                <h2 className="text-4xl font-raleway font-black mb-2 text-white uppercase">{content.heading}</h2>
                                {hoveredIndex === index && <p className='text-lg font-figtree'>{content.text}</p>}
                            </div>     
                    </div>
                ))}

            </div>
        </div>
        </div>
        
    )
}
export default Phonesection;
