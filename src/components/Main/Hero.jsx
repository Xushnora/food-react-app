import React, { useEffect, useState } from "react";
import Container from "../../UI/Container";

import obj from '../../foods.js'

const categoryBtn = ['Hot dishes', 'Cold dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
const typeBtn = ['hot-dishes', 'cold-dishes', 'soup', 'grill', 'appetizer', 'dessert']

function Hero({ ordersHandler}){

const [cardArr, setCardArr] = useState([])

useEffect(() => {
    setCardArr(obj)
}, [])
                                                                                                        

const handlerClick = (e) => {
        const filteredArr = obj.filter((item) => {
            return item.foodType === e.target.id
        })
        setCardArr(filteredArr);
}


    return(
        <Container>
            <div className="category">
               <div className="category__btnBox">
                   {categoryBtn.map((btn, i) => {
                       return <button 
                        id={`${typeBtn[i]}`} 
                        key={i + 'btn'} 
                        className="category__btn activeBtn"
                        onClick={handlerClick}>
                        {btn}
                    </button>
                   })}
               </div>
            </div>
            <div className="foods">
                <div className="foods__titleBox">
                    <h2 className="foods__title">Choose Dishes</h2>
                    <button className="foods__btn">
                        <i className='bx bx-chevron-down'></i>
                        <span>Dine In</span>
                    </button>
                </div>
                <ul className="foods__list">
                    {cardArr.map((item) => {
                        return (
                            <li key={item.id + 'keys'}
                                onClick = {() => ordersHandler(item)}
                                id = {item.id}
                                 className="foods__item">
                                <img className="foods__img" src={item.img} alt="foods" />
                                <p className="foods__name">{item.title}</p>
                                <p className="foods__price">$ {item.money}</p>
                                <p className="foods__desc">{item.theRest} {item.foodType}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
    
        </Container>
    )
}

export default Hero