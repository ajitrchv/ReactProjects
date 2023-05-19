import React from 'react'
import logo from '../images/logo.svg' 
import { pageLinks } from '../data';
import { socialLinks } from '../data';
function NavBar() {
  return (
    <div>

        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map((item)=>{
                            return(
                            <li>
                                <a href={item.href} className="nav-link" key={item.id}>{item.text}</a>
                            </li>
                            );
                        })
                    }
                {/* <li>
                    <a href="#home" className="nav-link"> home </a>
                </li>

                <li>
                    <a href="#about" className="nav-link"> about </a>
                </li>

                <li>
                    <a href="#services" className="nav-link"> services </a>
                </li>

                <li>
                    <a href="#tours" className="nav-link"> tours</a>
                </li>*/}
                </ul> 

                <ul className="nav-icons">
                {
                    socialLinks.map((item)=>{
                        console.log(item.href)
                        return(
                            <li>
                            <a href={item.href} target="_blank" className="nav-icon" key={item.id} rel="noreferrer">
                                <i className={item.iClass}></i>
                            </a>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </nav>

    </div>
  );
}

export default NavBar;