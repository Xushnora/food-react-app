import React from "react";
import MaterialUIPickers from "./Calendar";

function Offcanvas(){
    return(
        <>
            <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-body">
                    <div>
                        <div className="paymentBox">
                            <h2>Payment</h2>
                            <p>3 payment method available</p>
                        </div>
                        <div className="method">
                            <h3 className="method__title">Payment Method</h3>
                            <div className="method__cardGr">
                                <button className="method__card">
                                    <i className='bx bx-credit-card'></i>
                                    <p>Credit Card</p>
                                </button>
                                <button className="method__card">
                                    <i className='bx bxl-paypal'></i>
                                    <p>Paypal</p>
                                </button>
                                <button className="method__card">
                                    <i className='bx bx-credit-card-alt'></i>
                                    <p>Cash</p>
                                </button>
                            </div>
                        </div>
                        <form className="inputCard">
                            <label className="inputCard__label" htmlFor="Cardholder Name">Cardholder Name</label>
                            <input className="inputCard__input" type="text" name="CardholderName" id="CardholderName" placeholder="Cardholder Name" />
                            <label className="inputCard__label" htmlFor="Card Number">Card Number</label>
                            <input className="inputCard__input" type="number" name="CardNumber" placeholder="2564 1421 0897 1244" />
                            <div className="inputCard__inputBox firster">
                                <div className="inputCard__rowsInput">
                                    <label className="inputCard__label" htmlFor="Expiration Date">Expiration Date</label>
                                    <input className="inputCard__input" type="date" />
                                </div>
                                <div className="inputCard__rowsInput">
                                    <label className="inputCard__label" htmlFor="CVV">CVV</label>
                                    <input className="inputCard__input" type="password" defaultValue={123}/>
                                </div>
                            </div>
                            <div className="inputCard__inputBox">
                                <div className="inputCard__rowsInput">
                                    <label className="inputCard__label" htmlFor="Expiration Date">Order Type</label>
                                    <select className="inputCard__input">
                                        <option value="Dine in">Dine in</option>
                                        <option value="To Go">To Go</option>
                                        <option value="Delivery">Delivery</option>
                                    </select>
                                </div>
                                <div className="inputCard__rowsInput">
                                    <label className="inputCard__label" htmlFor="CVV">Table no.</label>
                                    <input className="inputCard__input" type="number" defaultValue={140}/>
                                </div>
                            </div>
                            <div className="inputCard__btns">
                                <button className="inputCard__cancel">Cancel</button>
                                <button className="inputCard__confirm">Confirm Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offcanvas;