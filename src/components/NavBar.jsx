import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function NavBar() {

  //function to invoke styles inside NavLink className
  const assignClassName = (navInfo) => {
    if (navInfo.isActive === true) {
      return "nav-active"
    } else {
      return "nav-inactive"
    }
  }

  const {changeThemeBtn, toggleTheme, darkMode} = useContext(ThemeContext)
  
   

  return (
    <nav className='navbar'>
    <div>

      <NavLink  to="/" className={assignClassName}><button>Home</button></NavLink>
      <NavLink to="/job-experience" className={assignClassName}><button>Job Experience</button></NavLink>
      <NavLink to="/projects" className={assignClassName}><button>Projects</button></NavLink>
      {/* <NavLink to="/contact-me" className={assignClassName}><button>Contact me</button></NavLink> */}
    </div>

    {/* this will be toggled between them*/}
    <div>
      {/* <button className="theme-btn">Dark mode</button>
      <button className="theme-btn">Light mode</button> */}

        {darkMode 
          ? <button style={changeThemeBtn()} onClick={toggleTheme}>Light theme</button>
          : <button style={changeThemeBtn()} onClick={toggleTheme}>Dark theme</button>
        }

        {/* https://www.instagram.com/p/Cd96I0Xq9xD/ */}

    </div>
    </nav>
  )
}

export default NavBar