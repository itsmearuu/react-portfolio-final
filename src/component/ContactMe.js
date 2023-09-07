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

                    <a href="https://github.com/itsmearuu"><FontAwesomeIcon className='text-white p-2' icon={faGithub} size='3x' /></a>
                    <a href="https://www.facebook.com/Aleruzregtm1/"><FontAwesomeIcon className='text-white p-2' icon={faFacebook} size='3x'/></a>
                    <a href="https://www.instagram.com/jl_aru/"><FontAwesomeIcon className='text-white p-2' icon={faInstagram} size='3x'/></a>
                    <a href=""><FontAwesomeIcon className='text-white p-2' icon={faEnvelope} size='3x'/></a>
                    <div className='container my-5 py-5'>
                        <h1 className='text-white'>Email me:</h1>
                        <Form>
                            <div className='row'>
                                <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                                </div>
                                <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                </div>
                                <div className='col-12'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                                </div>
                                <div className='col-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type='Message' as="textarea" rows={3} placeholder='Message' />
                                </Form.Group>   
                                </div> 
                            </div>                   
                        </Form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ContactMe;