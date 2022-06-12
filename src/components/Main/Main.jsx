import React, { useEffect, useState } from "react";
import Sitebar from "../Sitebar/Sitebar";
import RightBox from "../RightBox/RightBox"
import Header from "./Header";
import Hero from "./Hero";


function Main({
    handlerClick, 
    ordersArr, 
    setOrdersArr, 
    cardArr, 
    setCardArr,
    categoryBtn,
    typeBtn,
    changeLanguage
}){



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
                    handlerClick = {handlerClick}
                    categoryBtn = {categoryBtn}
                    typeBtn = {typeBtn}
                    changeLanguage = {changeLanguage}
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