import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';


const MySkills = () => {
    return ( 
        <>
        <div id="aboutme" className="container my-5 py-5">
            <h1 className='text-center text-white'>My Skills:</h1><br/>
                <div className='row text-center'>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faJs} size='6x' /></a>
                    </div>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faHtml5} size='6x' /></a>
                    </div>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faPython} size='6x' /></a>
                    </div>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faJava} size='6x'/></a>
                    </div>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faNode} size='6x'/></a>
                    </div>
                    <div className='col-2 text-white'>
                    <a><FontAwesomeIcon icon={faCss3Alt} size='6x'/></a>
                    </div>
                    <div className='col-12'>
                    <h5 className='text-white my-4'>I'm John Lesther A. Miranda, a passionate web developer with a knack for crafting digital experiences. With 2 years of hands-on experience in web development, I've had the privilege of bringing countless projects to life. My expertise spans front-end and back-end technologies, and I thrive on turning ideas into interactive, user-friendly websites and web applications.</h5>
                    </div>
                </div>      
        </div>
        </>
    );
}
 
export default MySkills;