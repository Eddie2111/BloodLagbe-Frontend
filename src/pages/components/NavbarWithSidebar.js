import logo from '../../logoWhite.svg';
import WidgetsIcon from '@mui/icons-material/Widgets';

function NavbarWithSidebar() {
    

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
                                
                            