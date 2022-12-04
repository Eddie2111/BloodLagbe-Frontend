import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import NavbarWithSidebar from "./components/NavbarWithSidebar";
import axios from "axios";
import { useState,useEffect } from "react";

const Register = ()=>{
    const [msg,setMsg] = useState("");
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
        setMsg("Thanks for registering");
        setInterval(() => {setMsg("");}, 4000)
    }

    return (
        <>
        <NavbarWithSidebar/>
        <div className="DashboardContainer">
            <center><h3>Register Now</h3></center>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <span><AccountCircleIcon/></span>
                <input className="form-field" type="text" name="email" placeholder="example@email.com"/>
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
            <br/>
            <center>
                <button className="button" type="submit">Register</button>
            </center>
            </form>

            <center><p>&nbsp; {msg} &nbsp;</p></center>
        </div>


        </>
    )
}
export default Register;