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
            <h1 className='text-center text-white'>Professional Skillset and About Me:</h1><br/>
                <div className='row text-center'>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faJs} size='6x' /></a>
                    </div>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faHtml5} size='6x' /></a>
                    </div>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faPython} size='6x' /></a>
                    </div>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faJava} size='6x'/></a>
                    </div>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faNode} size='6x'/></a>
                    </div>
                    <div className='col-lg-2 col-md-4 my-3 text-white'>
                    <a><FontAwesomeIcon className='skillIcon' icon={faCss3Alt} size='6x'/></a>
                    </div>
                    <div className='col-md-12'>
                        <h5 className='text-white my-4'>
                        I'm <span style={{color: "violet"}}>John Lesther A. Miranda</span>, a passionate web developer with a knack for crafting digital experiences. With 2 years of hands-on experience in web development, I've had the privilege of bringing countless projects to life. My expertise spans front-end and back-end technologies, and I thrive on turning ideas into interactive, user-friendly websites and web applications.
                        </h5>
                    </div>
                    <div className='col-md-12'>
                        <h5 className='text-white my-4'>
                        I'm an avid enthusiast of both basketball and gaming, finding joy in the fast-paced action on the court and the immersive worlds created by video games.
                        </h5>
                    </div>
                </div>      
        </div>
        </>
    );
}
 
export default MySkills;