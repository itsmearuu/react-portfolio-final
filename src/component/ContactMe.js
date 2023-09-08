import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    return ( 
        <>
            <div className="container text-center my-5 py-5">
                <div className="socials">
                    <h1 className='text-white'>Feel Free To Conact Me:</h1>
                    <div className='my-3 py-3'>
                    <a href="https://github.com/itsmearuu"><FontAwesomeIcon className='icon text-white p-3' icon={faGithub} size='3x' /></a>
                    <a href="https://www.facebook.com/Aleruzregtm1/"><FontAwesomeIcon className='icon text-white p-3' icon={faFacebook} size='3x'/></a>
                    <a href="https://www.instagram.com/jl_aru/"><FontAwesomeIcon className='icon text-white p-3' icon={faInstagram} size='3x'/></a>
                    </div>
                    
                    <div className='container my-5 py-5'>
                        <h1 className='text-white'>Get Intouch With Me:</h1>
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