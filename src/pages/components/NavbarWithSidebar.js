import React,{ useState, useEffect } from "react";
import logo from '../../logoWhite.svg';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useNavigate } from 'react-router-dom';
function NavbarWithSidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    function Proceed(){
        const navigate = useNavigate();
        navigate('/home');
    }
    return (
        <>
        <div className="navbar">
            <ul className="ulStyle">
            <li className="navLogo"><a href="/"><img className="image2" src={logo} alt = "logo" height="80px" width="125px"/></a></li>
            </ul>
            <li className="colorWhite"><WidgetsIcon/>&nbsp;<br/></li>
            
        </div>
        </>
    );
}

export default NavbarWithSidebar;
                                
                            