// import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Feature from './components/Feature';
import Featurecarslider from './components/Featurecarslider';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Ourpartner from './components/Ourpartner';
import Ourteam from './components/Ourteam';
import Pickanddropsection from './components/Pickanddropsection';
import Services from './components/Services';
import Wcu from './components/Wcu';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Pickanddropsection/>
   <Featurecarslider/>
   <Feature/>
   <Services/>
   <Ourteam/>
   <Wcu/>
   <Blog/>
   <Ourpartner/>
   <Footer/>
  
   </>
  );
}

export default App;
