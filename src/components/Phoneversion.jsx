import symbol from '../assets/badge.png'
const Phoneversion=()=>{
    return(
       <div className="bg-blue-50 flex justify-center items-center py-20 ">
        <section className="">
        <h1 className="text-center uppercase text-4xl font-bold">android 14 beta 3</h1>
        <div className="flex  w-4/5">
        <img src={symbol} alt="beta badge" className='' />
        </div>
        <div className="w-full text-center">
        <h1 className='text-center'>We're giving Phone (1) users access to Android 14 Beta 3 as part of
             the Developer Preview Program. Follow the link below to be one of
              the first to experience the latest updates.</h1>
        </div>
        
        </section>
        
       </div>
    )
}
export default Phoneversion