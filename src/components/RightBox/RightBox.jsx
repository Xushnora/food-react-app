import React from "react";
import obj from '../../foods.js'

function RightBox({ordersArr, counter}){
    return(
        <div className="rightbox">
            <div className="orders">
                <h2 className="orders__title">Orders #34562</h2>
                <div className="orders__btnGroup">
                    <button className="orders__btn--active">Dine in</button>
                    <button className="orders__btn">To Go</button>
                    <button className="orders__btn">Delivery</button>
                </div>
                <div className="orders__textBox">
                    <p className="orders__text">Item</p>
                    <div className="orders__text-row">
                        <p className="orders__text">Qty</p>
                        <p className="orders__text--price">Price</p>
                    </div>
                </div>
            </div>
            <div className="ordersCreate">
                <ul className="ordersCreate__list">
                    {ordersArr && ordersArr.map((item, i) => {
                        return (
                            <li className="ordersCreate__item kind">
                                <div className="kind__bigBox">
                                    <div className="kind__box">
                                        <img className="kind__img" src={item.img} alt="food" />
                                        <div className="kind__textBox">
                                            <h4 className="kind__text">{item.title}</h4>
                                            <p className="kind__price">$ {item.money}</p>
                                        </div>
                                    </div>
                                    <div className="kind__counter">
                                        <div className="kind__count">{item.count}</div>
                                        <p className="kind__allPrice">$ {item.money}</p>
                                    </div>
                                </div>
                                <div className="kind__delBox">
                                    <input className="kind__input" type="text" name="food" placeholder="Order Note..." />
                                    <button className="kind__deleteBnt">
                                        <i className='bx bx-trash-alt'></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RightBox