import { Component } from "react";

import './skills.css';
import Js from "../../img/js.png";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Reac from "../../img/react.png";

class Skills extends Component {
    render() {
        return(
            <div id="skills">
                <h5 id="skillsH">Skills</h5>
                <p id="skillsP" className="under-text">I work with such things as:</p>
                <div id="logos">
                    <img src={Html} alt="jsLogo" className="logo"/>
                    <img src={Css} alt="jsLogo" className="logo"/>
                    <img src={Js} alt="jsLogo" className="logo"/>
                    <img src={Reac} alt="jsLogo" className="logo"/>
                </div>
            </div>
        )
    }
}

export default Skills;