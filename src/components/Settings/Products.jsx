
import React, { useState } from "react";
// import Categories from "../Hero/HeroBasic/Categories/Categories";
import AddProduct from "./Add";
import EditProduct from "./Edit";



export default function Products({
    food, 
    setFood,
    newFood, 
    setNewFood, 
    categoryBtn, 
    typeBtn,
    handlerClick
}) {

  let [addOpen, setAddOpen] = useState(false)
  let [editOpen, setEditOpen] = useState(false)
  let [element, setElement] = useState([])

  let addHandler = () => {
    setAddOpen(! addOpen)
  }

  let editHandler = (id) => {
    setElement(id)
    setEditOpen(! editOpen)
  }

  return(
    <div className="settings__main">
      <div className="settings__header-box">
        <h2 className="settings__main-title">Products Management</h2>
        <button className="settings__mangebtn"><i className='bx bx-slider-alt'></i> Manage Categories</button>
      </div>

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

      <ul className="settings__list d-flex">
      <li onClick={addHandler} className="settings__item settings__item-doshed">
        <button onClick={addHandler} className="settings__add">
          <i className='bx bx-plus' ></i>
          Add new dish
        </button>
      </li>

      {newFood.map((item, key) => {
        return(
          <li key={key+324} className="settings__item">
            <div className="settings__imgbox">
              <img className="settings__img" src={item.img} alt={item.title} />
            </div>
            <div className="settings__infobox">
              <h3 className="settings__name">{item.title}</h3>
              <p className="settings__price">
                ${item.price} ∙ {item.theRest} Bowls
              </p>
            </div>
            <button onClick={() => editHandler(item)} className="settings__editbtn"><i className='bx bx-edit-alt'></i> Edit dish</button>
          </li>
        )
      })
      }
      </ul>
      <div className="settings__btnbox d-flex">
        <button className="settings__discardbtn">Discard Changes</button>
        <button className="settings__savebtn">Save Changes</button>
      </div>
      <EditProduct
        element={element}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        newFood={newFood}
        setNewFood={setNewFood}
      />

      <AddProduct
        food={food}
        setFood={setFood}
        addOpen={addOpen}
        setAddOpen={setAddOpen}
      />
    </div>
  )
}