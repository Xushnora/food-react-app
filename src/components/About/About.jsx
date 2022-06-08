import React from "react";
import Header from "../Main/Header";
import RightBox from "../RightBox/RightBox";
import Sitebar from "../Sitebar/Sitebar";

function About(){
    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <Header />
                <h1>About</h1>
            </div>
            <div>
                <RightBox />
            </div>
        </div>
    )
}

export default About