import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contacts from'./Components/Contacts';
import Footer from './Components/Footer';
function App() {
  return <div className='App'>
    <Home/>
    <About/>
    <Work/>
    <Testimonial/>
    <Contacts/>
    <Footer/>
  </div>
}

export default App;
