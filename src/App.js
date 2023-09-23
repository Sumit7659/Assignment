import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router  } from 'react-router-dom';
import Section01 from './component/Section01';
import Section04 from './component/Section04';
import Footer from './component/Footer';
import Section02 from './component/Section02';
import Section03 from './component/Section03';
function App() {
  return (
    <Router>
      <Navbar/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Footer/>
    </Router>
  );
}

export default App;
