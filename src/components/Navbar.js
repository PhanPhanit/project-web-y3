import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import '../styles/components/navbars.css';
import {NavbarData} from './utils/NavbarData';

function Navbar() {
    return (
        <header>
            <div className="wrapper-global wrapper-menu font-khmer">
                <div className="left-menu">
                    <div className="logo">
                        <Link to="/"><font>W</font><font>s</font><font>book</font> </Link>
                    </div>
                    <form className="frm-search">
                        <div>
                            <input type="text" placeholder="Explore" />
                            <button type="submit">
                                <AiOutlineSearch className="icon" />
                            </button>
                        </div>
                    </form>
                </div>
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
                                        <a href={link}>{title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <div className="right-menu">
                    <ul>
                        <li>
                            <div>
                                <FaUserAlt />
                            </div>
                        </li>
                        <li>
                            <AiOutlineShopping />
                            <span>0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
