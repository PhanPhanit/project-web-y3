import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {FiLogOut, FiMenu} from 'react-icons/fi';
import {FaUserAlt} from 'react-icons/fa';
import '../styles/components/navbars.css';
import {NavbarData} from './utils/NavbarData';
import {Link as LinkScroll} from 'react-scroll';
import {useActionContext} from '../context/action_context'

function Navbar() {
    const {openSidebar} = useActionContext(); 
    return (
        <header>
            {/* Header */}
            <div className="wrapper-global wrapper-menu font-khmer">
                <div className="left-menu">
                    <div className="logo">
                        <Link to="/"><font>W</font><font>s</font><font>book</font> </Link>
                    </div>
                    {/* form search */}
                    <form className="frm-search">
                        <div>
                            <input type="text" placeholder="Explore" />
                            <button type="submit">
                                <AiOutlineSearch className="icon" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Center menu */}

                <nav className="center-menu">
                    <ul>
                        {
                            NavbarData.map((menu)=>{
                                const {id, title, link} = menu;
                                if(link==='dropbox'){
                                    return (
                                        <li key={id} className="m-hover">
                                            <a>{title}</a>
                                            <div className="dropbox">
                                                <div className="arrow-top"></div>
                                                <span>English</span>
                                                <span>Khmer</span>
                                            </div>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={id}>
                                        <LinkScroll to={link} spy={true} smooth={true} duration={1000}>
                                            {title}
                                        </LinkScroll>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>

                {/* right menu */}

                <div className="right-menu">
                    <ul>
                        <li>
                            <div className="user-icon">
                                <FaUserAlt />

                                {/* user hover */}

                                <div className="user-hower">
                                    <div className="arrow-top"></div>
                                    <div className="header">
                                        <h4>Phan Phanit</h4>
                                        <span>phanit12@gmail.com</span>
                                    </div>
                                    <div className="body">
                                        <Link className="link" to="/profile">My Profile</Link>
                                        <Link className="link" to="/profile">History</Link>
                                    </div>
                                    <div className="footer">
                                        <Link to="/" className="logout-txt">Logout</Link>
                                        <FiLogOut className="logout-txt" />
                                    </div>
                                </div>

                                {/* end user hover */}

                            </div>
                        </li>
                        <li>
                            <Link className="link-cart" to="/cart">
                                <AiOutlineShopping />
                                <span>0</span>
                            </Link>
                        </li>
                        <li>
                            <FiMenu className="btn-menu" onClick={openSidebar} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
