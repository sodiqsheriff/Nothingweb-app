import { useState } from 'react'
import '../style.css'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Phonesection from './components/Phonesection'
import Podsection from './components/Podsection'
import Imageswitcher from './components/Imageswitcher'
import Designsection from './components/Designsection'
import Aboutcamera from './components/Aboutcamera'
import Preview from './components/Previewsection'
import Battery from './components/Batterysection'
import Phoneversion from './components/Phoneversion'
import Newssection  from './components/Newssection'
import {Footer} from './components/Footer'
function App() {
 

  return (
    <>
    <Navbar />
    <Herosection />
    <Phonesection  />
    <Podsection />
    <Imageswitcher />
    <Designsection />
    <Aboutcamera />
    <Preview />
    <Battery />
    <Phoneversion />
    <Newssection />
    <Footer />
    </>
  )
}

export default App
