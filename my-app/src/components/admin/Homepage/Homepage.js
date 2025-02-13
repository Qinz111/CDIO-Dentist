import React, { useState } from 'react';
import './Homepage.scss';
import { FaUser, FaLock, FaAddressCard } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';
import s1 from "../../../assets/cdio-dentist.png";
import s2 from "../../../assets/hp2.png";
import s3 from "../../../assets/hp3.png";
import s4 from "../../../assets/hp4.png";

const Homepage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const GoAhead = (e) => {
        e.preventDefault(); // Ngăn form submit mặc định
        
        if (!username || !password || !employeeId) {
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        const testUsername = 'admin';
        const testPassword = 'admin';
        if (testUsername === username && testPassword === password) {
            navigate("/Doctors");
        } else {
            setError('Sai tên đăng nhập hoặc mật khẩu');
        }
    };

    return (
        <div className="login">
            <div className="home-page">
                <img src={s1} alt="" />
                <img src={s2} alt="" />
                <img src={s3} alt="" />
                <img src={s4} alt="" />
            </div>
            <div className="login__card">
                <h1 className="login__title">Sign in</h1>
                <p className="login__subtitle">Hey, Enter your details to login to your account</p>

                <form onSubmit={GoAhead}>
                    <div className="login__input-container">
                        <input 
                            type="text" 
                            placeholder="Enter Email / Phone No" 
                            className="login__input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <FaUser className="login__icon" />
                    </div>

                    <div className="login__input-container">
                        <input 
                            type="text" 
                            placeholder="Mã nhân viên" 
                            className="login__input"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            required
                        />
                        <FaAddressCard className="login__icon" />
                    </div>

                    <div className="login__input-container">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="login__icon" />
                    </div>

                    <div className="login__options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    
                    {error && <p className="login__error">{error}</p>}
                    
                    <button type="submit" className="login__button">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Homepage;