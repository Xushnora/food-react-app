import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Login/Login';
import Mail from './components/Mail/Mail';
import Main from './components/Main/Main';
import Notification from './components/Notification/Notification';
import Portion from './components/Portion/Portion';
import NewSettings from './components/Settings/NewSettings';
import Foods from './foods';
import { useTranslation } from "react-i18next";
import './components/i18n'

function App() {

  const [ordersArr, setOrdersArr] = useState([])
  const [cardArr, setCardArr] = useState([])
  const [food, setFood] = useState(Foods)
  const [newFood, setNewFood] = useState(food)

  const categoryBtn = ['Hot dishes', 'Cold dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
  const typeBtn = ['hot-dishes', 'cold-dishes', 'soup', 'grill', 'appetizer', 'dessert']

  useEffect(() => {
    setNewFood(food)
  }, [food])

  useEffect(() => {
    setCardArr(Foods)
}, [])

  const {t, i18n} = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  const handlerClick = (e) => {
    const filteredArr = Foods.filter((item) => {
        return item.foodType === e.target.id
    })
    setCardArr(filteredArr);
}

  return (
    <div className="App">

        <Routes >
          <Route path='/' element = {<Main 
                handlerClick = {handlerClick}
                ordersArr = {ordersArr}
                setOrdersArr = {setOrdersArr}
                cardArr = {cardArr}
                setCardArr = {setCardArr}
                categoryBtn = {categoryBtn}
                typeBtn = {typeBtn}
                changeLanguage = {changeLanguage}
            />}
          />
          <Route path='settings' element = {<NewSettings
              food={food}
              setFood={setFood}
              newFood={newFood}
              setNewFood={setNewFood}
              handlerClick = {handlerClick}
              categoryBtn = {categoryBtn}
              typeBtn = {typeBtn}
            />} 
          />
          <Route path='notification' element = {<Notification />} />
          <Route path='about' element = {<About />} />
          <Route path='mail' element = {<Mail />} />
          <Route path='portion' element = {<Portion />} />
          <Route path='login' element = {<Login />} />
        </Routes>
    </div>
  );
}

export default App;
