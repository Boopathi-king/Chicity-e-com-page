import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Hero/hero';
import Features from './Components/Features/Features';
import Newcollection from './Components/New Collection/Newcollection';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Features/>
     <Newcollection/>
    </div>
  );
}

export default App;
