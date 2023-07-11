import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
function App() {
  return (
    <div className='bg-slate-400'>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
