import React from 'react';
import { useState } from 'react';
import Hobbies from './Hobbies';
import { SiReact, SiJavascript, SiExpress, SiHandlebarsdotjs, SiMongodb, SiTailwindcss, SiPrestashop, SiTypescript, SiBabel, SiWhitesource } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaWordpress, FaGitSquare, FaGithub } from 'react-icons/fa'

function AboutMe(props) {
  
  let allData = props.data;

  const [listIsShowing, setListIsShowing] = useState(false);
  
  const toggleList= () => setListIsShowing(!listIsShowing)

  // const studies = {
  //   backgroundColor: "rgba(84, 90, 115, 0.764)",
  //   color: "white",
  //   margin: 20,
  //   // width: 800,
  //   position: "center"
  // }
  const skillTheme = {
    // backgroundColor: "rgb(17, 201, 158)",
    backgroundColor: "rgba(84, 90, 115, 0.764)",

    // margin: "7px",
    borderRadius: "7px",
    padding: "4px",
    color: "white",
  }

  const profilePic = {
    width: "180px",
    borderRadius: "50%",
  }
  
  return (
    <div>
      <div className="about">
        
        {/* <p>To hide this section OR to show as a pop up</p> */}
        <ul className="social">
                {allData.socialLinks.map((el) => {
                    return (
                      <li key={el.name}>
                        <a href={el.url} target="_blank"><i className={el.className}><img src={el.icon} alt={el.name}/></i></a>
                      </li>
                    );
                  })}
        </ul>
        <div>

          <section className="personal-info">
           
            <div>
              <img src={allData.profilePic} alt="Helena's profile pic" style={profilePic}/>

            </div>
            <div className="about-me">
              <h2>ABOUT ME</h2>
              <p>{allData.aboutMe}</p>

            </div>
                         
          </section>
        </div>
      </div> 
    <div className="about-else">
  
      <div className="blue-color" >
        <section> 
          <h3>SOFT SKILLS</h3>
          {allData.softSkills.map((el) => {
            return (
              <div  className='skill-name' key={el.skillName}>
                <li ><span style={skillTheme}>{el.skillName}</span></li>
              </div>
            
            )})
          }
        </section>
        <br />
        
        <section>
          <h3>HARD SKILLS</h3>
  
          <div> 
          {/* <div className="twelve columns"> */}
            <ul className="hard-list">
              <li className="hard-li" title="Html5"><FaHtml5 style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Css3"><FaCss3Alt style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="JavaScript"><SiJavascript style={{fontSize: "45px"}}/></li>
              {/* <li className="hard-li" title="TypeScript"><SiTypescript style={{fontSize: "45px"}}/></li> */}
              <li className="hard-li" title="React"><SiReact style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="NodeJS"><FaNodeJs style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="ExpressJS"><SiExpress style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="MongoDB / Mongoose"><SiMongodb style={{fontSize: "45px"}}/></li>
              {/* <li className="hard-li" title="Tailwinds"><SiTailwindcss style={{fontSize: "45px"}}/></li> */}
              <li className="hard-li" title="Handlebars"><SiHandlebarsdotjs style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Bootstrap"><FaBootstrap style={{fontSize: "45px"}}/></li>
              {/* <li className="hard-li" title="Git"><SiBabel style={{fontSize: "45px"}}/></li> */}
              <li className="hard-li" title="Github"><FaGithub style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Git"><FaGitSquare style={{fontSize: "45px"}}/></li>
              {/* <li className="hard-li" title="Wordpress"><FaWordpress style={{fontSize: "45px"}}/></li>
              <li className="hard-li" title="Prestashop"><SiPrestashop style={{fontSize: "45px"}}/></li> */}
            </ul>
          </div>
        </section>

        
      </div>
        
        <div className="blue-color studies">
          <section > 
          <h3>STUDIES</h3>
          {allData.studies.map((el) => {
            return (
              <div key={el.major}  >
             
                <li className='dark-blue-color'>
                <div className="studies-title">
                <p><b>{el.major}</b> at <i>{el.school}</i></p>
                </div>
                <div className='studies-descrp'>
                <p className='dates'><i>Finished on {el.finishedAt}</i></p>

                <p>{el.achivements}</p>
                {el.certificate === "" 
                ? <p></p>
                : <p><a href={el.certificate} target="_blank">Show Certificate 🔗 </a> </p>
                }
                </div>
                </li>
              </div>
            
            )})
          }
          
          </section>
          <br />
          <section > 
          <h3>LANGUAGES</h3>
          {allData.languages.map((el) => {
            return (
              <div key={el.languageName} className="languages"  >
                <li ><b>{el.languageName}</b> <img src={el.arrow} alt={el.languageName} width={50}/> <i>{el.level}</i></li>
              </div>
            
            )})
          }
        </section>
        </div>
          {/* <div>
          {listIsShowing === false
            ? <button className="hide-btn" onClick={toggleList} >Hobbies</button>
            : <div><button className="hide-btn" onClick={toggleList}>Hide Hobbies</button>
            <Hobbies data={allData} hideForm={toggleList} />
            </div>
        }
          </div> */}
        

    </div>
      
    </div>
  )
}

export default AboutMe 