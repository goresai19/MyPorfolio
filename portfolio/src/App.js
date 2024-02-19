
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Container/about';
import Home from './Container/home';
import Achievements from './Container/achievements';
import Contact from './Container/contact';
import Skills from './Container/skills';
import Navbar from './Components/navbar';
import Projects from './Container/projects';
// import PageHeader from './Components/pageHeaderContainer';
function App(){
  return (
    <>
     {/* <h1>Portfolio Website Design</h1> */}
  <div className="App">
    {/* particle js */}
    
    {/* navabar */}
    <Navbar />
    
 {/* main page content  */}
  <Routes>
     <Route index path='/' element={<Home />} />
     <Route index path='/about' element={<About />} />
     <Route index path='/achievements' element={<Achievements />} />
     <Route index path='/contact' element={<Contact />} />
     <Route index path='/skills' element={<Skills />} />
     </Routes>
     <Routes>
      <Route index path='/Projects' element={<Projects />}/>
     </Routes>
  </div>
  
   
    </>
    
  );
}

export default App;
