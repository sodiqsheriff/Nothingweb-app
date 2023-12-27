import earpods from '../assets/pods.png'
import {TbMathGreater} from 'react-icons/tb';

const Podsection =()=>{
    const headings = [
        {id:1, xtra:'up to', large:'6hrs', small:'of listening time' },
        {id:2, xtra:'up to', large:'40db', small:'with adaptive ANC' },
        {id:3, xtra:'up to', large:'2.5w' , small:'Q1 certified'},
        {id:4,  xtra:'up to', large:'24bit', small:'HI-RES audio' }
    ];
    return(
        <div className="white-shades-bg pt-5">
            <section className='space-y-3 text-center text-white font-figtree'>
            <h1 className="text-2xl uppercase font-black font-raleway md:text-5xl">ear (2) black</h1>
            <h1 className="text-xs font-thin tracking-widest">Shaped for comfort</h1>
            <span className="flex items-center justify-center text-center gap-2 font-thin">
                <h1 className="text-xs tracking-wider">Pre order</h1>
                <TbMathGreater className='text-xs'/>
            </span>
            </section>
            <div className="grid grid-cols-2 px-5 py-5 md:grid-cols-2 md:px-16 lg:grid-cols-4">
            {headings.map((heading)=>(
                    <div key={heading.id}className="space-y-3 text-center text-white">
                        <h1 className="text-sm font-thin font-figtree"> {heading.xtra}</h1>
                        <h1 className="text-2xl font-black uppercase font-raleway md:text-5xl">{heading.large}</h1>
                        <h1 className="text-sm font-figtree"> {heading.small}</h1>  
                    </div>
                ))}
            </div>
            <div className="bg-black border-black outline-none">
                    <img src={earpods} alt="earpods diplay"  />
                </div>
        </div>

    )
}

export default Podsection;
