import React from 'react';
// import banner from '../banner.jpg';

import profileimage from '../profileimage.PNG';

import {Link} from "react-scroll";

import {
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
    FacebookShareButton,


} from "react-share";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">

            <Link className="navbar-brand" href="#">
            <img className="banner"src={profileimage} alt="profileimage..." />
                {/* <img className="banner"src={banner} alt="banner..." /> */}
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} stye={{ color: "#0000FF"}} />
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" href="#">services</Link>
                    </li> */}
                    <li className="nav-item">
                    <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" href="#">contacts</Link>
                    </li> */}
                </ul>
        </div>
        <div className="share-buttons">
        <FacebookShareButton>
                <FacebookIcon className="mx-3" size={36} />
            </FacebookShareButton>

            
        <TwitterShareButton
                url={"https://twitter.com/usernametony_n"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
            >
                <TwitterIcon className="mx-3" size={36} />
            </TwitterShareButton>

            <LinkedinShareButton
            url={"https://www.linkedin.com/in/tony-ngoun/"}
            quote={"FullStack Developer"}
            hashtag="#javascript"
            >
                <LinkedinIcon className="mx-3" size="36" />
                </LinkedinShareButton>

            <TelegramShareButton
            url={"https://t.me/listeningonport8000"}>
                <TelegramIcon className="mx-3" size={36} />
            </TelegramShareButton>


        </div>




            </div>
</nav>
    )
}

export default Navbar;
