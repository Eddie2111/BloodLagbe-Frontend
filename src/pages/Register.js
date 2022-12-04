import React from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import NavbarWithSidebar from "./components/NavbarWithSidebar";
import {motion} from "framer-motion";
import axios from "axios";
import { useState } from "react";
import backend from "./components/backend";

const Register = ()=>{
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();
    const options = [
        {
          label: "A+",
          value: "A+",
        },
        {
          label: "A-",
          value: "A-",
        },
        {
          label: "B+",
          value: "B+",
        },
        {
          label: "AB+",
          value: "AB+",
        },
        {
          label: "AB-",
          value: "AB-",
        },
            {
          label: "O+",
          value: "O+",
        },
        {
            label: "O-",
            value: "O-",
        }
      ];
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(backend+"testSignup",{
            name: e.target.name.value,
            phoneNumber: e.target.phoneNumber.value,
            bloodGroup: e.target.bloodGroup.value,
    },{ withCredentials: true }).then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    
        setMsg("Thanks for registering");
        setInterval(() => {setMsg("");navigate("/home");}, 4000)
    }

    return (
        <>
        <NavbarWithSidebar/>
        <motion.div
                initial={{ y:300 ,opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ duration: 1 }}>
        <div className="DashboardContainer">
            <center><h3>Register Now</h3></center>
            <br/><br/>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <span><AccountCircleIcon/></span>
                <input className="form-field" type="text" name="name" placeholder="John Doe"/>
            </div>
            <br/>
            <div className="form-group">
            <span><LocalPhoneIcon/></span>
                <input className="form-field" type="text" name="phoneNumber" placeholder="012xxxxxxxxx"/>
            </div>
            <br/>
            <div className="form-group">
            <span><BloodtypeIcon/></span>
            <select className="form-select" name="bloodGroup" >
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>))}
            </select>
            </div>
            <br/><br/>
            <center>
                <button className="button" type="submit">Register</button>
            </center>
            </form>
            <center><p>&nbsp; {msg} &nbsp;</p></center>
        </div>

                    </motion.div>
        </>
    )
}
export default Register;