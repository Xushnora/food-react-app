import React from "react";
import { NavLink } from "react-router-dom";
import Sitebar from "../Sitebar/Sitebar";
import Products from "./Products";


let category = [
  {
    title: 'Appereance',
    desc: 'Dark and Light mode, Font size',
    link: '/about',
    icon: 'bx bx-heart'
  },
  {
    title: 'Your Restaurant',
    desc: 'Dark and Light mode, Font size',
    link: '/portion',
    icon: 'bx bx-store-alt'
  },
  {
    title: 'Products Management',
    desc: 'Manage your product, pricing, etc',
    link: '/mail',
    icon: 'bx bxs-offer'
  },
  {
    title: 'Notifications',
    desc: 'Customize your notifications',
    link: '/notification',
    icon: 'bx bx-bell'
  },
  {
    title: 'Security',
    desc: 'Configure Password, PIN, etc',
    link: '/settings',
    icon: 'bx bx-lock-open'
  },
  {
    title: 'About Us',
    desc: 'Find out more about Posly',
    link: '/login',
    icon: 'bx bx-error-circle'
  },
]

function NewSettings({
    food, 
    setFood, 
    newFood, 
    setNewFood,
    categoryBtn,
    typeBtn,
    handlerClick
 }) {

  return(

    <div className="rower">
            <div>
                <Sitebar />
            </div>
            <div className="main">
                <h1 className="settings__title">Settings</h1>
                <div className="settings">
                    <div className="settings__categoryBox">
                        <ul className="settings__listbox">
                        {category.map((item, key) => {
                            return(
                            <NavLink key={key+329} className={`settings__links`} to={item.link}>
                                <li className="settings__itembox">
                                <h2 className="settings__subtitle d-flex">
                                    <i className={`settings__icons ${item.icon}`}></i> {item.title}
                                </h2>
                                <p className="settings__desc">{item.desc}</p>
                                </li>
                            </NavLink>
                            )
                        })
                        }
                        </ul>
                    </div>
                <div className="settings__productsBox">
                    <Products
                        food = {food}
                        setFood = {setFood}
                        newFood = {newFood}
                        setNewFood = {setNewFood}
                        categoryBtn = {categoryBtn}
                        typeBtn = {typeBtn}
                        handlerClick = {handlerClick}
                    />
                </div>
                </div>
            </div>
        </div>
  )
}


export default NewSettings;