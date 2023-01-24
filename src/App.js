import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import JobExp from './pages/JobExp';
import Projects from './pages/Projects';
// import Footer from './components/Footer';
import data from './data';
import { useContext } from 'react';
import { ThemeContext } from './context/theme.context';


function App() {

  const {changeTheme} = useContext(ThemeContext)
 
  
  return (
    <div className="App" style={changeTheme()}>
     {/* <div className="App"> */}
    
     {/* <button style={changeThemeBtn()} onClick={toggleTheme}>Canviar tema</button> */}
          
      <NavBar/>  

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/projects" element={<Projects data={data} />} />
        <Route path="/job-experience" element={<JobExp data={data}/>} />
        {/* <Route path="/contact-me" element={<Contact />} /> */}


        {/* rutas de errores */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
    
      </Routes>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
