import React from "react";
import ReactTyped from "react-typed";


const Header = () => {
    return <div id="home" className="header-wrapper">
                <div className="main-info">
                    <h1> Full Stack Web Developer </h1>

                    <ReactTyped 
                        className="typed-text"
                        strings={["React", "MongoDB", "NodeJS", "JavaScript"]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                
                <a href="#" className="btn-main-offer">contact me</a>

                    
                </div>
        
    </div>;
};

export default Header;
