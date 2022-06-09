import React from "react";
import Container from "../../UI/Container";

import obj from '../../foods.js'

function Header({setCardArr}){

    const searchArr = []

    const handlerSearch = (e) => {
        obj.forEach((item, i) => {
            if(item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                searchArr.push(item)
            }
        });
        setCardArr(searchArr)
    }

    return(
        <Container>
            <div className="header">
                <div className="header__titleBox">
                    <h1 className="header__title">Jaegar Resto</h1>
                    <p className="header__text">Tuesday, 2 Feb 2021</p>
                </div>
                <div className="header__inputBox">
                    <i className='bx bx-search'></i>
                    <input onChange={handlerSearch} type="text" placeholder="Search" />
                </div>
            </div>
        </Container>
    )
}

export default Header