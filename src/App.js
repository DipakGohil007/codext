import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/HomePage/Home';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
