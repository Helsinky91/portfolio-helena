import React from 'react'
import AboutMe from '../components/AboutMe';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
// import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaWordpress, FaGitSquare, FaGithub } from 'react-icons/fa'


function Home(props) {

  let data = props.data
  const {darkMode} = useContext(ThemeContext)

// console.log(darkMode)

  const assingHomeClass = () => {
    if (darkMode === true) {
      return "home-dark"
    } else {
      return "home-light"
    }
  }

  return (
    <div>
      <div >
        <div className={assingHomeClass()}>
        
        <h1>Welcome to {data.name}'s portfolio</h1>
        </div>
        <p> {data.myDescription}</p>
      
      </div>
        <AboutMe data={data}/> 
    
    </div>
  )
}

export default Home