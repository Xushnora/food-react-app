import React from "react";
import RightBox from "../RightBox/RightBox";
import Sitebar from "../Sitebar/Sitebar";

function Notification(){
    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <h1>Notification</h1>
            </div>
            <div>
                <RightBox />
            </div>
        </div>
    )
}

export default Notification