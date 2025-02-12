import React, { useState } from 'react';
import './Homepage.scss';
// import {useNavigate} from 'react-router-dom';
import icon2 from "../../../assets/icon2.jpg";
import logo2 from "../../../assets/logo2.png";
import icon5 from "../../../assets/icon5.png";
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isClosing, setIsClosing] = useState(false);  // Thêm dòng này
    const handleLoginClick = () => {
        setShowLoginForm(true);
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleCloseLogin = () => {
        setIsClosing(true);
        // Đợi animation hoàn thành rồi mới ẩn form
        setTimeout(() => {
            setShowLoginForm(false);
            setIsClosing(false);
        }, 300);
    };
    const navigate = useNavigate();
    const GoAhead = () => {
        const testUsername = 'admin';
        const testPassword = 'admin';
       if(testUsername === username && testPassword === password){
        window.location.href =("/Doctors");
        } else if(testUsername !== username){
            setError('Sai tên đăng nhập');
        }else if(testPassword !== password){ 
            setError('Sai mật khẩu');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            GoAhead();
        }
    };
    return (
        <div className="homepage">
            <div className="homepage-header">
                <p>Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam</p>
            </div>
            <div className="homepage-content">
                    <div className="homepage-content-top">
                        <div className="homepage-content-top-right">
                            <img src={icon2} alt="icon2" />
                            <div className="homepage-content-top-right-text">
                                <ul>
                                    <li>
                                    Hỗ Trợ
                                    </li>
                                    <li>
                                    0935149084
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-content-bottom">
                        <div className="homepage-content-bottom-Cental">
                          <img src={logo2} alt="logo2" />

                        </div>
                        <div className="homepage-content-bottom-Loggin">
                            <div className="homepage-content-bottom-Loggin-top">
                                <div className="homepage-content-bottom-Loggin-icon-left">
                                    <img src={icon5} alt="icon5" />
                                    
                                </div>
                                <div className="homepage-content-bottom-Loggin-icon-right">
                                    <p>Đăng nhập</p>
                                </div>
                            </div>
                            <div className="homepage-content-bottom-Loggin-form">
                                <input className="homepage-content-bottom-Loggin-form-input-username"
                                 type="email"
                                placeholder="Nhập Email" 
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                                
                                <input className="homepage-content-bottom-Loggin-form-input-password" 
                                type="password" 
                                placeholder="Mật khẩu" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                onKeyDown={handleKeyDown}
                                />
                            </div>
                            {error && <div className="error">{error}</div>}
                            <div className="homepage-content-bottom-Loggin-button">
                                <button onClick={GoAhead}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Homepage;