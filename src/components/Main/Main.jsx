import React, { useEffect, useState } from "react";
import Sitebar from "../Sitebar/Sitebar";
import RightBox from "../RightBox/RightBox"
import Header from "./Header";
import Hero from "./Hero";

import obj from '../../foods.js'

function Main(){

    const [ordersArr, setOrdersArr] = useState([])
    const [cardArr, setCardArr] = useState([])

    useEffect(() => {
        setCardArr(obj)
    }, [])

    const ordersHandler = (food) => {
        let counte = ordersArr.filter(item => item.id === food.id);
        food.counte = counte.length + 1;
        setOrdersArr([...ordersArr, food]);
    }

    return(
        <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <Header setCardArr = {setCardArr} />
                <Hero 
                    setCardArr = {setCardArr}
                    cardArr = {cardArr}
                    ordersHandler = {ordersHandler}
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