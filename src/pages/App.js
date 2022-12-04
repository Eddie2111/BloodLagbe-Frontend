
import logo from '../logo.svg';
import './styles/app.css';
import React from "react";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
function App() {
    function Proceed(){
        const navigate = useNavigate();
        navigate('/home');
    }
  return (
    <>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 1.5 }}>
        
            <div className="logo">
                <img className="image1" src={logo} alt = "logo" height="100%" width="100%"/>
            </div>

            <div className="description">
                <p className="descriptionText">Streamlining Blood Donation </p>
                <p className="descriptionText">with Targeted and Optimized Searching</p>
            </div>
            <div className="proceed">
                <a href="/home"><button className="button">Proceed</button></a>
            </div>
            
            </motion.div>
    </>
  );
}

export default App;
