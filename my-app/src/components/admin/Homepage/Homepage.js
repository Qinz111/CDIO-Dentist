import React, { useState } from 'react';
import './Homepage.scss';
import { FaUser, FaLock, FaAddressCard } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';
import s1 from "../../../assets/cdio-dentist.png";
import s2 from "../../../assets/hp2.png";
import s3 from "../../../assets/hp3.png";
import s4 from "../../../assets/hp4.png";
import axios from 'axios';
const Homepage = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const GoAhead = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/v1/admin/login', { email, password });

            // If login is successful, save tokens or redirect
            const { accessToken, refreshToken } = response.data;
            
            // Example: You can store the token in localStorage or Context for use across the app
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            // Redirect to another page after successful login (for example: dashboard)
            navigate('/Doctors');
        } catch (error) {
            // Handle error in login
            if (error.response) {
                setErrorMessage(error.response.data.message);  // Show error message from the backend
            } 
        }
    }
    return (
        <div className="login">
            <div className="home-page">
                <img src={s1} alt="" />
                <img src={s2} alt="" />
                <img src={s3} alt="" />
                <img src={s4} alt="" />
            </div>
            <div className="login__card">
                <div className="login__custom">CIDO</div>
                <h1 className="login__title">Đăng nhập</h1>
              
                <form onSubmit={GoAhead}>
                    <div className="login__input-container">
                        <input 
                            type="email" 
                            placeholder="Nhập Email" 
                            className="login__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaUser className="login__icon" />
                    </div>
                    <div className="login__input-container">
                        <input 
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            className="login__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="login__icon" />
                    </div>
                    
           
                    {errorMessage}
                    <button type="submit" className="login__button">Xác nhận</button>
                </form>
            </div>
        </div>
    );
};

export default Homepage;