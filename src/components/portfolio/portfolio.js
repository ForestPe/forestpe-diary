import { Component } from "react";
import PortfolioCard from "../portfolio-card/portfolio-card";

import './portfolio.css';
import dudesportf2 from "../../img/dudesportf2.jpg";
import marvelportf2 from "../../img/marvelportf2.jpg"
import tool from '../../img/tool.jpg';
import toolmulti from '../../img/toolmulti.jpg';

class Portfolio extends Component {
    render() {
        return(
            <div id="portfolio">
                <h5 id="portfolioH">Portfolio</h5>
                <div className="portfolio-cards under-text">
                    <PortfolioCard title="Like Todos" img={dudesportf2} link='https://dudes-list.netlify.app' text='Click Here!'/>
                    <PortfolioCard title="Marvel API" img={marvelportf2} link='https://forestpe.github.io/forestpemarvel/' text='Click Here!'/>
                    <PortfolioCard title="Coming soon" img={tool} link='https://www.alexgrey.com/' text='Alex Grey'/>
                    <PortfolioCard title="Coming soon" img={toolmulti} link='https://www.alexgrey.com/' text='Alex Grey'/>
                </div>
            </div>
        )
    }
}

export default Portfolio;