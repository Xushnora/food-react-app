import React, { useState } from "react";
import Sitebar from "../Sitebar/Sitebar";
import RightBox from "../RightBox/RightBox"
import Header from "./Header";
import Hero from "./Hero";

import obj from '../../foods.js'

function Main(){

    const [ordersArr, setOrdersArr] = useState([])
    const [count, setCount] = useState(1)

    const handlerList = (item) => {

        if(ordersArr.indexOf(item) !== -1) return 
            setOrdersArr([...ordersArr, item])

    } 


    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <Header />
                <Hero 
                    ordersArr = {ordersArr}
                    setOrdersArr = {setOrdersArr}
                    handlerList = {handlerList}
                />
            </div>
            <div>
                <RightBox 
                    ordersArr = {ordersArr}
                    setOrdersArr = {setOrdersArr}
                />
            </div>
        </div>
    )
}

export default Main