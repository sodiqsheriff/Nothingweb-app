import React, { useState } from 'react';
import image1 from '../assets/Enhanced.png'
import image2 from '../assets/Press.png'
import image3 from '../assets/Water.png'
import defaultimage from '../assets/Enhanced.png'

const Imageswitcher = () => {
    const [selectedImage, setSelectedImage] = useState('Enhanced performance'); // Initial selection

  const handleTextClick = (image) => {
    setSelectedImage(image);
  };
  const getImage = () => {
    switch (selectedImage) {
      case 'Enhanced performance':
        return image1;
      case 'Press control':
        return image2;
      case 'Water resistance':
        return image3;
      default:
        return defaultimage; 
    }
  };
  const contents = [
    {
      image: image1,
      header: 'Header 1',
      text: 'Text 1',
      label: 'Image 1',
    },
    {
      image: 'image2',
      header: 'Header 2',
      text: 'Text 2',
      label: 'Image 2',
    },
    {
      image: 'image3',
      header: 'Header 3',
      text: 'Text 3',
      label: 'Image 3',
    },
  ];


  return (
    
    <div className="relative h-screen ">
    <div
      className="h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${getImage()})` }}
    >
      <div className="absolute inset-0  flex px-16 pt-16 text-lg font-figtree">
        <div className="flex-col">
          <div
            className={`text-column relative ${selectedImage === 'Enhanced performance' ? 'selected' : ''}`}
            onClick={() => handleTextClick('Enhanced performance')}
          >
            Enhanced performance
            <div className={`toggle-line ${selectedImage === 'Enhanced performance' ? 'selected' : ''}`} />
          </div>
          <div
            className={`text-column relative ${selectedImage === 'Water resistance' ? 'selected' : ''}`}
            onClick={() => handleTextClick('Water resistance')}
          >
            Water resistance
            <div className={`toggle-line ${selectedImage === 'Water resistance' ? 'selected' : ''}`} />
          </div>
          <div
            className={`text-column relative ${selectedImage === 'Press control' ? 'selected' : ''}`}
            onClick={() => handleTextClick('Press control')}
          >
            Press control
            <div className={`toggle-line ${selectedImage === 'Press control' ? 'selected' : ''}`} />
            
          </div>
        </div>
      </div>
       {/* Header and text for each image */}
        <div className="absolute bottom-0 right-0 text-white p-4">
          {selectedImage === 'Enhanced performance' && (
            <div className='py-7 pr-5 md:py-10 md:pr-10 '>
              <h2 className="flex justify-end text-right text-xl md:text-3xl lg:text-[50px] font-black font-raleway uppercase pb-10">enhanced performance</h2>
              <span className="flex justify-end w-full">
              <p className='text-right text-sm md:text-lg text-gray-400 font-figtree'>Always by your side. We optimised Ear (2) so you can enjoy up to 36 hours of music 
               <br /> playback with the case. And 8 hours after just 10 minutes of charge. With Low Lag
                <br /> Mode for seamless gaming. Water and sweat resistance. In-ear detection. And so
                <br /> much more.</p>
              </span>
              
            </div>
          )}
          {selectedImage === 'Water resistance' && (
             <div className='py-7 pr-5 md:py-10 md:pr-10 '>
             <h2 className="flex justify-end text-right  text-xl md:text-3xl lg:text-[50px] font-black font-raleway uppercase pb-10">water resistance</h2>
             <span className="flex justify-end w-full">
             <p className='text-right text-sm md:text-lg text-gray-400 font-figtree'>Made to keep up with you.Ear (2)  has an IP54 sweat and dust-resistance
              <br /> rating so performance is protected in any environment.With a charging case
               <br />that's even more durable.IP55 rated for extra peace of mind.</p>
             </span>
             
           </div>
          )}
          {selectedImage === 'Press control' && (
           <div className='py-7 pr-5 md:py-10 md:pr-10 '>
           <h2 className="flex justify-end text-right text-xl md:text-3xl lg:text-[50px] font-black font-raleway uppercase pb-10">water resistance</h2>
           <span className="flex justify-end w-full">
           <p className='text-right text-sm md:text-lg text-gray-400 font-figtree'>Every action, accurately controlled.Skips tracks.Switch between noise
            <br /> cancellation modes.And adjust volume.All in a press.Customised for your 
             <br />needs in the Nothing X app.
             </p>
           </span>
           
         </div>
          )}
        </div>
    </div>
  </div>
  );
};


export default Imageswitcher;