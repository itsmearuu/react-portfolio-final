import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image1 from "../img/valorant.jpg";
import image2 from "../img/unitconvrter.webp";
import image3 from "../img/weatherapi.webp";
import image4 from "../img/wallapaperbg1.webp";
const Projects = () => {
    return ( 
        <>
        
        <div id="projects" className='container my-5 py-5'>
            <div className='row'>
                <h1 className='text-center text-white my-3 py-3'>
                    My Projects:
                </h1>
                <div className='col-3'>
                <Card style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={image1} style={{ height: "175px"}}/>
                <Card.Body>
                    <Card.Title>Valorant Website Front-End</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-3'>
                <Card style={{ maxWidth: '18rem'  }}>
                <Card.Img variant="top" src={image2} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Unit Convrter</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-3'>
                <Card style={{ maxWidth: '18rem'  }}>
                <Card.Img variant="top" src={image3} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Weather Api</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
                <div className='col-3'>
                <Card style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={image4} style={{ height: "175px"}} />
                <Card.Body>
                    <Card.Title>Animerch</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="btn btn-dark">Github Link</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
            
        </>
    );
}
 
export default Projects;