import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register() {
    const naviagte = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        country: "",
        img: "",
        city: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to register user
            await axios.post("https://hotel-booking-backend-2c5g.onrender.com/api/user/register", userData);
            alert("User registered successfully!");
            naviagte("/");
             
        } catch (error) {
            console.error("Registration failed:", error.message);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <h2 className="heading">Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                className="reg-input"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleChange}
                />
                <input
                className="reg-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <input
                className="reg-input"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={userData.country}
                    onChange={handleChange}
                />
                <input
                className="reg-input"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={userData.city}
                    onChange={handleChange}
                />
                <input
                className="reg-input"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={userData.phone}
                    onChange={handleChange}
                />
                <input
                className="reg-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <button className="reg-btn" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
