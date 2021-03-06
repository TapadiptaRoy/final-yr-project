import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';

import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
  
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
   
  );
}

export default App;
