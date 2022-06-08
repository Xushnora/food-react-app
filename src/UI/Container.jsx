import React from "react";
function Container(props){
    return(
        <div className="mini-container">
            {props.children}
        </div>
    )
}

export default Container