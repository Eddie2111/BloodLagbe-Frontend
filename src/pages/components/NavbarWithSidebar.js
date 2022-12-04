import React,{ useState, useEffect } from "react";
import logo from '../../logo.svg';
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
            <a href="/"><img className="image1" src={logo} alt = "logo" height="30%" width="30%"/></a>

        </div>
        </>
    );
}

export default NavbarWithSidebar;
                                
                            