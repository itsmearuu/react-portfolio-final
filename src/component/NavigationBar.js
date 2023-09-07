import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    return ( 
        <>
        <Navbar expand="lg" className="bg-dark sticky-top">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link id="" className="text-white" href="/">
            <FontAwesomeIcon icon={faHouse} />
                Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#aboutme">
            <FontAwesomeIcon icon={faPerson} />
                About Me
            </Nav.Link>
            <Nav.Link className="text-white" href="#projects">
            <FontAwesomeIcon className="" icon={faListCheck} />
                Projects
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
     );
}
 
export default NavigationBar;