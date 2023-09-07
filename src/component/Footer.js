import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return ( 
        <>
            <div className="bg-dark text-white my-5 py-5 text-center">
                Copyright 2023 <FontAwesomeIcon icon={faCopyright} /> John Lesther Miranda
            </div>
        </>
     );
}
 
export default Footer;