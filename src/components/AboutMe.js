import React from "react";

import author from"../profileimage.PNG";

const AboutMe = () => {
return <div id="about" className="container py-5">
    <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
            <img className="profile-img" src= {author} alt="author..."/>

            </div>

            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                <p>Hi, my name is Tony. I am a Full Stack Web Developer. Technologies I use is MERN(MongoDB, Express, ReactJS, and NodeJS).
                </p>
                <p>I have always was curious about web development and have been wanting to make a career change for some time now. </p>
                <p> I was in car sales for a few years and decided that this was not for me. I felt like I have learned the company and car sales doesn't require </p>

            </div>
        </div>
    </div>
};

export default AboutMe;
