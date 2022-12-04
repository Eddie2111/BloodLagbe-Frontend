
import logo from '../logo.svg';
import './styles/app.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
function App() {
    function Proceed(){
        const navigate = useNavigate();
        navigate('/home');
    }
  return (
    <>
        
            <div className="logo">
                <img className="image1" src={logo} alt = "logo" height="100%" width="100%"/>
            </div>

            <div className="description">
                <p>Streamlining Searching and Finding Donors </p><p>With Targeted Mapped and Optimized Searching.</p>
            </div>
            <div className="proceed">
                <a href="/home"><button className="button">Proceed</button></a>
            </div>
        
    </>
  );
}

export default App;
