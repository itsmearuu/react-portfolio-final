import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    return ( 
        <>
            <div className="container text-center my-5 py-5">
                <div className="socials">
                    <h1 className='text-white'>Feel Free to Conact Me:</h1>

                    <FontAwesomeIcon className='text-white' icon={faGithub} />
                    <FontAwesomeIcon className='text-white' icon={faFacebook} />
                    <FontAwesomeIcon className='text-white' icon={faInstagram} />
                    <FontAwesomeIcon className='text-white' icon={faEnvelope} />

                    <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    </Form>

                </div>
            </div>
        </>
     );
}
 
export default ContactMe;