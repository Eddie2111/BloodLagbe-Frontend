import OpacityIcon from '@mui/icons-material/Opacity';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Person4Icon from '@mui/icons-material/Person4';
import NavbarWithSidebar from "./components/NavbarWithSidebar";
const Home = ()=>{
    return (
        <div>
            <NavbarWithSidebar/>
            <div className="DashboardContainer">
                <br/>
                <center>
                    <a href="/register"><button className="buttonRegister">Register Now</button></a>
                </center>
                <br/>

            <div class="container">
                <div class="row">
                    <div class="col bordering">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <OpacityIcon/></p>
                            <li>Search for blood banks</li>
                        </div>
                    </ul>
                    </div>
                    <div class="col bordering">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <HourglassBottomIcon/></p>
                            <li>Search for blood banks</li>
                        </div>
                    </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col bordering">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <HandshakeIcon/></p>
                            <li>Search for blood banks</li>
                        </div>
                    </ul>
                    </div>
                    <div class="col bordering">
                    <ul>
                        <div className="buttonTexts">
                            <p className="buttonIcons"> <Person4Icon/></p>
                            <li>Search for blood banks</li>
                        </div>
                    </ul>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home;