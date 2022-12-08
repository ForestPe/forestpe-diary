import { Component } from "react";
import Nav from "../nav/nav";
import About from "../about/about";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Contacts from "../contacts/contacts";

import "./app.css";

class App extends Component {
        render() {
                return(
                        <div className="app">
                             <Nav/>  
                             <About/>
                             <Skills/>
                             <Portfolio/>
                             <Contacts/>
                        </div>
                )
        }
}

export default App;