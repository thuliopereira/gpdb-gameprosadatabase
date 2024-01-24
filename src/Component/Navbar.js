import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="nav">
            <div>
                <p className="nav-update">Ultima atualização em 23/01/2024</p>  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div className="nav-links">
                    <p> Links uteis </p> <a className='link' href="https://www.youtube.com/@JoGANdo1/videos" target="blank">| Canal Jogando |</a> <a className='link' href="https://www.twitch.tv/joaog4n" target="blank"> | Twitch | </a> <a className='link' href="https://joaog4n.wixsite.com/central-jogando" target="blank"> | Central Jogando | </a>
                </div>
                <img
                    alt="GPDB Logo"
                    src="https://i.scdn.co/image/85eea969ebda5be0d52d74276927b9a92093b7f3"
                    className="nav-logo"
                />
                <h1 className="nav-title"> GAME & PROSA DATABASE</h1>
            </div>
        </nav>
    )
}


export default Navbar;