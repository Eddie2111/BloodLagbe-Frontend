import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import image1 from '../statics/image1.jpg';
import image2 from '../statics/image2.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Person4Icon from '@mui/icons-material/Person4';
import NavbarWithSidebar from "./components/NavbarWithSidebar";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
const Home = ()=>{
    const navigate = useNavigate();
    return (
        <div>
            <NavbarWithSidebar/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 1.5 }}>
            <div className="DashboardContainer">
                <br/>
                <center>
                    <a href="/register"><button className="buttonRegister">Register Now</button></a>
                </center>
                <br/>

            <div className="container">

                <div className="row">
                    
                    <div className="col bordering">
                        <a href="/error" className="linkers">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <OpacityIcon/></p>
                            <li className="dashButtonText">Find Donor</li>
                        </div>
                    </ul>
                        </a>
                    </div>
                    
                    
                    <div className="col bordering">
                        <a href="/error" className="linkers">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <HourglassBottomIcon/></p>
                            <li className="dashButtonText">Your History</li>
                        </div>
                    </ul>
                        </a>
                    </div>
                    
                </div>
                <div className="row">
                    
                    <div className="col bordering">
                        <a href="/error" className="linkers">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <HandshakeIcon/></p>
                            <li className="dashButtonText">Our Partner</li>
                        </div>
                    </ul>
                    </a>
                    </div>
                    
                    
                    <div className="col bordering">
                        <a href="/error" className="linkers">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <Person4Icon/></p>
                            <li className="dashButtonText">Our Heroes</li>
                        </div>
                    </ul>
                        </a>
                    </div>
                    
                </div>

            </div>
                <a className="linkers" href="/error">
            <div className="donationBordering">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;    

                    <font className="buttonIcons"> <VolunteerActivismIcon/></font>
                    &nbsp;&nbsp;&nbsp;
                    <p className="centering dashButtonText"> Donation Requests</p>
                    
            </div>
            </a>
            </div>
            
            <div className="DashboardContainer">
            <p className = "facts">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Did you know...?</p>
                <div className="container">
                    <div className="row">
                        <div className="col bordering1">
                            <img src={image1} alt="Blood Donation Facts" height="80px" width="80px"/>
                        </div>
                        
                        <div className="col bordering1">
                        <img src={image2} alt="Blood Donation Facts" height="100px" width="95px"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <p className="factLink"> Are you eligible for blood donation | Learn the baselines</p>
                        </div>
                        
                        <div className="col">
                        <p className="factLink">How blood donation is changing lives | You can too</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </motion.div>
        </div>
    )
}
export default Home;