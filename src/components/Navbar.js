import React from 'react';
// import banner from '../banner.jpg';

import profileimage from '../profileimage.PNG';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

            <a className="navbar-brand" href="#">
            {/* <img className="banner"src={profileimage} alt="profileimage..." /> */}
                {/* <img className="banner"src={banner} alt="banner..." /> */}
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} stye={{ color: "#0000FF"}} />
            </button>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">about me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">experience</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">contacts</a>
                    </li>
                </ul>
        </div> */}
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
