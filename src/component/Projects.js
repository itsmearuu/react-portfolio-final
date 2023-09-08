import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image1 from "../img/valorant.jpg";
import image2 from "../img/baguioterrace.jpg";
import image3 from "../img/weatherapi.webp";
import image4 from "../img/ai.jpg";
const Projects = () => {
    return ( 
        <>
        
        <div id="projects" className='container my-5 py-5'>
            <div className='row'>
                <h1 className='text-center text-white my-3 py-3'>
                    Projects Published:
                </h1>
                <div className='col-lg-3 col-md-6 my-3'>
                <Card style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={image1} style={{ height: "175px"}}/>
                <Card.Body>
                    <Card.Title>Valorant Website</Card.Title>
                    <Card.Text>
                        <span className='html'>HTML</span>,
                        <span className='css'> CSS</span>
                    </Card.Text>
                    <Button href="" className='btn' variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-lg-3 col-md-6 my-3'>
                <Card style={{ maxWidth: '18rem'  }}>
                <Card.Img variant="top" src={image2} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Baguio City Visits</Card.Title>
                    <Card.Text>
                        <span className='html'>HTML</span>, 
                        <span className='css'> CSS</span>, 
                        <span className='bs'> BS</span>
                    </Card.Text>
                    <Button href="https://itsmearuu.github.io/MP1_MIRANDA/" className='btn' variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-lg-3 col-md-6 my-3'>
                <Card style={{ maxWidth: '18rem'  }}>
                <Card.Img variant="top" src={image3} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Weather Api</Card.Title>
                    <Card.Text>
                        <span className='html'>HTML</span>, 
                        <span className='css'> CSS</span>, 
                        <span className='rjs'> REACT JS</span>
                    </Card.Text>
                    <Button href=""  className='btn' variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-lg-3 col-md-6 my-3'>
                <Card style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={image4} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Animerch</Card.Title>
                    <Card.Text>
                        <span className='html'>HTML</span>, 
                        <span className='css'> CSS</span>, 
                        <span className='rjs'> REACT JS</span>
                    </Card.Text>
                    <Button href="https://elemelooon.github.io/ANIMERCH/"  className='btn' variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
            
        </>
    );
}
 
export default Projects;