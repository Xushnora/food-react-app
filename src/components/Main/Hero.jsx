import Container from "../../UI/Container";
import { useTranslation } from "react-i18next";
import '../../components/i18n'

function Hero({ 
    ordersHandler, 
    cardArr, 
    handlerClick, 
    typeBtn, 
    categoryBtn,
    changeLanguage
}){    
    
    const {t, i18n} = useTranslation();

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
                    <h2 className="foods__title">{t('Choose Dishes')}</h2>
                    <select className="foods__langSelect" onClick={changeLanguage}>
                        <option value="eng">Eng</option>
                        <option value="ru">Ru</option>
                        <option value="uz">Uz</option>
                    </select>
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