import { Component } from "react";

import './contacts.css';

class Contacts extends Component {
    render() {
        return(
            <div className="contacts">
                <h1 id="contactsH">Contacts</h1>
                <p id="contactsP" className="under-text">Want to know or discuss something? Welcome!</p>
                {/* <a href="" rel="noreferrer noopener" target="_blank" className="under-text">
                    <button id="sendMessage" className="under-text">Send message</button></a> */}
                <div className="links-icons">
                    <a href="https://github.com/ForestPe" rel="noreferrer noopener" target="_blank">
                        <i className="fa-brands fa-github fa-2xl"></i></a>
                    <a href="https://t.me/forestPe" rel="noreferrer noopener" target="_blank">
                        <i className="fa-brands fa-telegram fa-2xl"></i></a>
                    <a href="mailto:psychedelicadmiral@gmail.com" rel="noreferrer noopener" target="_blank">
                        <i className="fa-regular fa-envelope fa-2xl"></i></a>
                    <a href="https://open.spotify.com/user/31nzy5el2py3vyfot3yjkooiacku?si=4384c92009174e57" rel="noreferrer noopener" target="_blank">
                        <i className="fa-brands fa-spotify fa-2xl"></i></a>
                </div>
            </div>
        )
    }
}

export default Contacts;