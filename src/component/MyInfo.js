import { TypeAnimation } from 'react-type-animation';
import rightimage1 from "../img/rightimage.svg";

const Myinfo = () => {
    return ( 
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="txt col-lg-6 text-white text-align-center">
                        <h1>Welcome to my Portfolio!</h1>
                        <br />
                        <h1><TypeAnimation
                            sequence={[
                                'Im a Web Developer.',
                                1500,
                                'Im a Designer.',
                                1500,
                                'Im a Gamer.',
                                1500,
                                'Im a Baller.',
                                1500,
                                'Im a Lover.',
                                1500,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}/>
                        </h1>
                        <br />
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={rightimage1} alt="" style={{width: "450px", marginLeft: "40px"}}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Myinfo;
