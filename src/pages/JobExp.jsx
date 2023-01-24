import React from 'react'
import TourismJobs from '../components/TourismJobs'
import { useState } from 'react';


function JobExp(props) {

  let data = props.data 

  const [listIsShowing, setListIsShowing] = useState(false);

  const toggleList= () => setListIsShowing(!listIsShowing)


  return (
    <div>
      <h1>Job Experiences</h1>
      <section>
        {/* <p>Soft skills, hard skills, education (+certificados), job experience</p> */}
        
      <div >

        {data.jobs.map((el) => {
          return (
           <div >
            <li key={el.jobTitle}>
             <div className="job-list">

              <div className="job-left">
                <h5><b>{el.jobTitle} </b> </h5>
                <p>at <i>{el.companyName}</i>, {el.location}</p>
                <p className="dates">From {el.startDate} to {el.endDate}</p>
              </div>
              <div className="job-description">
              
                <h6>{el.jobDescription}</h6>
                <p key={el.jobTitle}>
                 {el.jobTasks.map((item) => {
                  return (
                    <li key={item.task}>{item.task}</li>
                  )
                })}
                </p>
              </div>
             </div>
            </li>
           </div>
          )
        })}
        
      </div>
        

      </section>
      
      <div >
        {listIsShowing === false
            ? <button className="hide-btn" onClick={toggleList} >Show more Tourism jobs</button>
            : <div><button className="hide-btn" onClick={toggleList}>Hide Tourism jobs</button><br /><br />
            <TourismJobs data={data} hideForm={toggleList} />
        </div>
        }
      </div>

    </div>
  )
}

export default JobExp