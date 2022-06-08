import React from "react";
import RightBox from "../RightBox/RightBox";
import Sitebar from "../Sitebar/Sitebar";
function Portion(){
    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <h1>Mail</h1>
            </div>
            <div>
                <RightBox />
            </div>
        </div>
    )
}

export default Portion