import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

//images//
import listitimage from "../images/listitimage.png";
import AdoptPet from "../images/AdoptPet.PNG";


// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

//ListIt
const openPopupboxListit = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={listitimage} alt="List it Project..." />
        <p>Project Listit is a skinny version of Facebook Marketplace / Craigslist where users can buy and sell goods. Full-stack CRUD application built with MongoDB, Express, React, Node.js, and Google Maps Embed API.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dobbinsi/project_listit", "_blank")}>https://github.com/dobbinsi/project_listit</a>
        <br />
        </>
    )
    PopupboxManager.open({ content })
}

    const popupboxConfigListit = {
        titleBar: {
            enable: true,
            text: "Listit Project"
        },
        fadeIn: true,
        fadeInSpeed: 500


    }

//PetApp
const openPopupboxAdoptPet = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={AdoptPet} alt="AdoptPet..." />
        <p>Adopt Pet where you can find and adopt a pet that needs a new home. Full-stack CRUD application built with MongoDB, Express, React, Node.js.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tonyngoun/ipet", "_blank")}>https://github.com/tonyngoun/ipet</a>
        <br />
        </>
    )
    PopupboxManager.open({ content })
}
    const popupboxConfigAdoptPet = {
        titleBar: {
            enable: true,
            text: "iPet Project"
        },
        fadeIn: true,
        fadeInSpeed: 500


    }

    







    return(
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    {/*list it */}
                    <div className="portfolio-image-box" onClick={openPopupboxListit}>
                    <img className="portfolio-image" src={listitimage} alt="List it Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>
                {/*adopt pet */}
                <div className="portfolio-image-box" onClick={openPopupboxAdoptPet}>
                    <img className="portfolio-image" src={AdoptPet} alt="AdoptPet Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>


                </div>
            
            
            </div>

        <PopupboxContainer {...popupboxConfigListit}/>
        <PopupboxContainer {...popupboxConfigAdoptPet} />

        </div>
    )
}                                                                                                                                                                                                                                         
export default Portfolio;
