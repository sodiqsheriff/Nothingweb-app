import phone from '../assets/lightphone.png'
import horizontal from '../assets/Mob11.png'
const Aboutcamera =()=>{
    return(
     <div className="w-full h-full px-5 pt-10 pb-0 md:px-8 md:py-16">
        <div className="w-full flex flex-col gap-0 md:flex-row md:gap-5">
            <div className="w-full pb-7 md:w-2/5 h-full bg-gray-100 px-5 md:pb-0">
                <section className="text-4xl font-bold uppercase pt-5 pb-2 font-figtree">
                <h1>50mp</h1>
                <h1>dual camera</h1>
                </section>
              <h1 className="w-1/2 text-sm text-gray-700 font-figtree pb-5 md:pb-0">
              This extraordinary dual camera has two advanced 50 MP sensors.
              </h1>
              <div className="">
              <img src={phone} alt="nothingphone" className='' />
              </div>
            </div>
            <div className="w-full h-full md:w-3/5 bg-black text-white pt-5 mb-10">
                <section className="ps-7">
                    <h1 className="text-4xl font-figtree font-bold tracking-wide uppercase">glyph interface</h1>
                    <h1 className="font-figtree pt-5 pb-24">
                    Meet the Glyph Interface. A new way to communicate. Unique
                     light patterns indicate who’s calling. Signals app notifications,
                      charging status and more. Everyday interactions, made joyful.
                    </h1>
                </section>
                <div className="w-full">
                <img src={horizontal} alt="layingphone" className='w-full'/>
                </div>
            </div>
        </div>
     </div>
    )
}
export default Aboutcamera