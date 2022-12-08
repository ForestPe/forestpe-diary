import { Component } from "react";

import './portfolio-card.css';

class PortfolioCard extends Component {
    render() {

        const {title, img, link, text} = this.props;

        return(
            <div className="portfolio-card">
                <h1 className="title">{title}</h1>
            <div className="imgs">
            <img src={img} alt="portfoliopicture" className="image"/>
            </div>
                <a href={link} rel="noreferrer noopener" target="_blank"><button className="btn-links">{text}</button></a>
            </div>
        )
    }
}

export default PortfolioCard;