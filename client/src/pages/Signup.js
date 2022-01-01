import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import ReadBook from '../images/read-book.png'
import GoogleLogo from '../images/google.png';
import FacebookLogo from '../images/facebook.png';
import {FaRegEnvelope, FaEyeSlash, FaEye} from 'react-icons/fa';
import '../styles/signup-singin.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({...inputValue, [name]: value});
    }
    useEffect(()=>{
        const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const isEmailMatch = inputValue.email.match(emailRegex);
        const isPasswordMatch = inputValue.password.match(passwordRegex);
        if(isEmailMatch && isPasswordMatch && inputValue.fullName){
            setBtnDisable(false);
        }else{
            setBtnDisable(true);
        }
    }, [inputValue])


    return (
        <section id="signin-signup-section" className="font-poppin">
            <div className="line-top"></div>
            <div className="line-bottom"></div>
            <div className="sign-wrapper">
                <div className="left">
                    <img src={ReadBook} alt="Read Book" />
                </div>
                <div className="right">
                    <div className="header">
                        <div className="logo">
                            <font>Welcome to</font> <font>W</font><font>s</font><font>book</font>
                        </div>
                        <span>Let create your account and visit your favorite books!!</span>
                    </div>
                    <form className="frm">
                        <h3>Sign Up</h3>
                        <div className="frm-control">
                            <label htmlFor="full-name">Full Name</label>
                            <div className="input">
                                <input
                                    type="text"
                                    id="full-name"
                                    placeholder="Enter your name"
                                    name="fullName"
                                    onChange={handleInputChange}
                                    value={inputValue.fullName}
                                />
                                <span className="error-msg">message</span>
                            </div>
                        </div>
                        <div className="frm-control">
                            <label htmlFor="email">Email</label>
                            <div className="input">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={inputValue.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    onInvalid={()=>setBtnDisable(true)}
                                    pattern="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"
                                />
                                <span className="error-msg">Invalid email!</span>
                                <FaRegEnvelope className="icon" />
                            </div>

                        </div>
                        <div className="frm-control">
                            <label htmlFor="password">Password</label>
                            <div className="input">
                                <input
                                    type={`${showPassword?'text':'password'}`}
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    value={inputValue.password}
                                    onChange={handleInputChange}
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                                />
                                <span className="error-msg">Minimum eight characters, at least one letter, one number and one special character</span>
                                {
                                    showPassword? <FaEyeSlash className="icon" onClick={()=>setShowPassword(false)} />:<FaEye className="icon" onClick={()=>setShowPassword(true)} />
                                }
                            </div>
                        </div>
                        <div className="frm-control remember-me">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label htmlFor="remember-me">Remember Me</label>
                        </div>
                        <div className="frm-control btn-container">
                            <button
                                type="submit"
                                className="btn-submit"
                                style={{pointerEvents: btnDisable?"none":"auto", opacity: btnDisable?"0.6":"1"}}
                                >
                                    Get Started
                            </button>
                            <p><span>Alread have account?</span> <Link to="/signin">Sign in</Link></p>
                        </div>
                    </form>
                    <div className="social">
                        <h3>OR</h3>
                        <div className="social-btn">
                            <button type="button" className="btn-social-media">
                                <img src={GoogleLogo} alt="Google Logo" />
                                <span>Sign in with Google</span>
                            </button>
                            <button type="button" className="btn-social-media">
                                <img src={FacebookLogo} alt="Facebook Logo" />
                                <span>Sign in with Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
