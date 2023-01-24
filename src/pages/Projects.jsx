import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

function Projects(props) {

  let data = props.data

  return (
    <div>

      <section>
        <h1>Live Projects</h1>
        <div >
          {data.projects.map((el) => {
            return (
              <div className="project-list">
                <li key={el.name} >
                  <img src={el.imgurl} alt={el.name} width={440} />
                  <p><b>{el.name}</b></p>
                  <p className='hide-description proj-description'>{el.description} </p>
                  <p><i><a href={el.gitHubUrl}  target="_blank">Check out the code</a></i> </p>
                  <button><a href={el.url} target="_blank">See Website</a></button>
                  <p></p>
                 
                </li>
              </div>
            )
          })}
        </div>
      </section>
      <hr />
      
      {/* {data.projects.map((el) => {
            return (
              <div className="project-list">
      <Card style={{ width: '25rem' }}>
      <li key={el.name}>
        <Card.Img variant="top" src={el.imgurl} />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>
              {el.description} <br/>
             <Card.Link href={el.gitHubUrl} target="_blank">Check out the code</Card.Link>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> 
            <button><a href={el.url} target="_blank">See Website</a></button>

      </Card.Body>
      </li>
    </Card>
    </div> 
    )})} */}
    

      <section>
        <h1>Ongoing Projects</h1>
        <div>
          {data.onWorkingProjects.map((el) => {
            return (
              <div className="project-list">
                <li key={el.name}>
                  <img src={el.imgurl} alt={el.name} width={450} />
                  <p><b>{el.name}</b></p>
                  <p className='hide-description proj-description'>{el.description} </p> 
                  <p> 
                    {el.gitHubUrl === ""
                    ? <p></p>
                    : <p><a href={el.gitHubUrl}  target="_blank">Check out the code</a></p>
                    }
                  </p>

                    {el.url === "" 
                    ? <p><i>Working on the website</i></p>
                    : <button><a href={el.url} target="_blank">See Website</a></button>
                    }
                  
                  
                  
                </li>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default Projects