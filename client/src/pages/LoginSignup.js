import React from 'react'
import Login from '../images/login.png';
import {FaEnvelope, FaLock} from 'react-icons/fa';
import '../styles/signinSignup.css';
const LoginSignup = () => {
    return (
        <section className="login-signup">
            <div className="container">

                {/* flip form */}

                <input type="checkbox" id="flip" />

                {/* cover img */}

                <div className="cover">
                    <div className="front">
                        <img src={Login} alt="login-img" />
                    </div>
                </div>
                <form action="#">
                    <div className="form-content">

                        {/* login form */}

                        <div className="login-form">
                            <div className="title">Sign in</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    {/* <i className="fas fa-envelope"></i> */}
                                    <FaEnvelope className="input-icon" />
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    {/* <i className="fas fa-lock"></i> */}
                                    <FaLock className="input-icon" />
                                    <input type="password" placeholder="Enter your password" />
                                </div>
                                <div className="text login-remember">
                                    <div className="remember"><input type="checkbox" />Remember me</div>
                                    <a>Forgot password</a>

                                </div>

                                {/* btn */}

                                <div className="btn input-box">
                                    <input type="submit" value="Get Started" />
                                </div>
                                <div className="text">Doesn't have an account? <label for="flip">Sign up</label></div>
                                <div className="login-media">
                                    <h2>Login</h2>
                                    <input type="submit" value= "Sign in with Google" />
                                    <input type="submit" value= "Sign in with Facebook" />
                                </div>
                            </div>
                        </div>

                        {/* sign up form */}

                        <div className="signup-form">
                            <div className="title">Sign up</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-envelope"></i>
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Enter your password" />
                                </div>

                                {/* btn */}

                                <div className="btn input-box">
                                    <input type="submit" value="Get Started" />
                                </div>
                                <div className="text">Already have an account? <label for="flip">Sign in</label></div>
                                <div className="login-media">
                                    <h2>Login</h2>
                                    <input type="submit" value= "Sign in with Google" id="login-google" />
                                    <input type="submit" value= "Sign in with Facebook" id="login-fb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginSignup;
