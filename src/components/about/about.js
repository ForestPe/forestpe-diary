import { Component } from 'react';

import './about.css';
import Petya from "../../img/ya.png";

class About extends Component {
    render() {
        return(
            <div id="about">
                <h3 id="myName">Petr McLOVIN</h3>
                <p id="myProf" className='under-text'>JS/Frontend Developer, Earth</p>
                <img src={Petya} alt="petya" className="petya"/>
                    <h4 id="aboutH">About me</h4>
                    <p id="aboutP" className='under-text'>Hello dear people, my name is Petya 
                    <br/>Open to interesting suggestions.</p>
            </div>
        )
    }
}

export default About;