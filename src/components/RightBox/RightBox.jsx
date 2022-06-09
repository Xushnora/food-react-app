import React, { useEffect, useState } from "react";
import Offcanvas from "../Offcanvas/Offcanvas.jsx";

function RightBox({ordersArr, setOrdersArr}){

    const [changedArr, setChangedArr] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let counte = 0; 
        ordersArr && ordersArr.forEach(item => {
            counte += item.money;
        });
        setTotal(counte)
        let temp = [...new Set(ordersArr && ordersArr.map(item => item))];

        setChangedArr(temp)
    }, [ordersArr])


    const deleteBtn = (id) => {
        setOrdersArr(ordersArr.filter((item) => {
            if(item.id === id) {
                item.count = 0
            } else {
                return item
            }
        }))
    }

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
                    {changedArr && changedArr.map((item, i) => {
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
                                        <div className="kind__count">{item.counte}</div>
                                        <p className="kind__allPrice">$ {(item.money * item.counte).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="kind__delBox">
                                    <input className="kind__input" type="text" name="food" placeholder="Order Note..." />
                                    <button onClick={() => deleteBtn(item.id)} className="kind__deleteBnt">
                                        <i className='bx bx-trash-alt'></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="payment">
                <div className="payment__box">
                    <p className="payment__text">Discount</p>
                    <p className="payment__price">$0</p>
                </div>
                <div className="payment__box">
                    <p className="payment__text">Sub total</p>
                    <p className="payment__price">$ {total.toFixed(2)}</p>
                </div>
                <button className="payment__btn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Continue to Payment
                </button>
                <Offcanvas />
            </div>
        </div>
    )
}

export default RightBox