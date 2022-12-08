import { Component } from 'react';
import './nav.css';

class Nav extends Component {
        render() {
                return(
                        <div className="nav-header">
                                <div className="nav-brand">
                                        <h1>❂ForestPe Diary❂</h1>
                                </div>   
                                <nav>
                                        <ul className="nav-links">
                                                <li><a href="#about">About me</a></li>
                                                <li><a href="#skills">Skills</a></li> 
                                                <li><a href="#portfolio">Portfolio</a></li>
                                                <li><a href="#contactsH">Contacts</a></li>       
                                        </ul>  
                                </nav>
                        </div>
                )
        }
}

export default Nav;