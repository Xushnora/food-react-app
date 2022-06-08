import React from "react";
import RightBox from "../RightBox/RightBox";
import Sitebar from "../Sitebar/Sitebar";

function Settings(){
    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <h1>Settings</h1>
            </div>
            <div>
                <RightBox />
            </div>
        </div>
    )
}

export default Settings;