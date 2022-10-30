import './App.css';
import Footer from './Componants/Footer';
import Hero from './Componants/Hero';
import Join from './Componants/Join';
import Plans from './Componants/Plans';
import Programs from './Componants/Programs';
import Reasons from './Componants/Reasons';
import Testimonials from './Componants/Testimonials';

function App() {
  return (
    <div className="App">
     <Hero />
     <Programs />
     <Reasons />
     <Plans />
     <Testimonials />
     <Join />
     <Footer />
    </div>
  );
}

export default App;
