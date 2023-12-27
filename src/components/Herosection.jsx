import heroimage from '../assets/hero-image.png'

const Herosection =()=> {
    return(
      <div className="bg-blue-100 px-5">
        <main>
            <section className="">
                <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-black uppercase pt-24 pb-5 font-raleway">nothing phone (2)</h1>
                <h1 className="text-sm font-figtree md:text-lg text-center pb-2">
                    A new era. Where iconic design meets premium performance. Come to the bright side.
                    <br />Phone(2) available in select drops on 15 July 2023.
                </h1>
                <h1 className="text-sm text-center font-bold font-figtree pb-5 md:text-lg">View models</h1>
            </section>
            <div className="flex bg-blue-300 justify-center w-full">
                <img src={heroimage} alt="nothing phone"  className='w-full'/>
                </div>

            
        </main>

      </div>
    )
    
}
export default Herosection