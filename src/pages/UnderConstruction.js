import React from "react";
import { useNavigate } from 'react-router-dom';
import NavbarWithSidebar from "./components/NavbarWithSidebar";
import { Button } from '@mui/material';

function UnderConstruction() {
    const navigate = useNavigate();
    const styleRed = {backgroundColor:"red"};
    return (
        <>
        <center>
            <NavbarWithSidebar/>
            <br/><br/>
            <h1>Under Construction</h1>
            <Button variant="contained" style={styleRed} className="button" onClick={() => navigate('/home')}>Go Back</Button>
        </center>
        </>
    )
}
export default UnderConstruction;