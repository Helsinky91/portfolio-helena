import React from 'react'

function TourismJobs(props) {
  
  let data = props.data

  return (
    <div >
        
      {data.tourismJobs.map((el) => {
          return (
           <div >
            <li key={el.jobTitle} >
            <div className="job-list" >
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
                    <li key={item.task} className="tasks">{item.task}</li>
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
  )
}

export default TourismJobs