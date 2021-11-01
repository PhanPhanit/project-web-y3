import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import '../styles/components/navbars.css';
import {NavbarData} from './utils/NavbarData';

function Navbar() {
    return (
        <nav>
            <div className="wrapper-global wrapper-menu font-khmer">
                <div className="left-menu">
                    <div className="logo">
                        <Link to="/"><font>W</font><font>s</font><font>book</font> </Link>
                    </div>
                    <form className="frm-search">
                        <div>
                            <input type="text" placeholder="Explore" />
                            <AiOutlineSearch className="icon" />
                        </div>
                    </form>
                </div>
                <div className="center-menu">
                    <ul>
                        {
                            NavbarData.map((menu)=>{
                                const {id, title, link} = menu;
                                if(link==='dropbox'){
                                    return (
                                        <li key={id}>
                                            <a>{title}</a>
                                            <div className="dropbox">
                                                <span>English</span>
                                                <span>Khmerកខសដថឹេ</span>
                                            </div>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={id}>
                                        <a href={link}>{title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="right-menu">
                    <div className="user-wrapper">
                        <FaUserAlt />
                    </div>
                    <div className="cart-wrapper">
                        <AiOutlineShopping />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
