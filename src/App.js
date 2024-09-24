import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Hero/hero';
import Features from './Components/Features/Features';
import Newcollection from './Components/New Collection/Newcollection';
import TrendingProducts from './Components/Trending products/Trendingproducts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Features/>
     <Newcollection/>
     <TrendingProducts/>
     <Footer/>
    </div>
  );
}

export default App;
