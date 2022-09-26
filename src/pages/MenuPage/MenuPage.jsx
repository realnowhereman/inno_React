import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Card from '../../components/Card/Card';
import {getAllCardsFromBackend} from "../../backend/menuData";
import {routes} from '../../App'
import styles from './MenuPage.module.scss'



function MenuPage() {
    let navigate = useNavigate()
    const [cards, setCards] = useState([])

    useEffect(() => {
        const allCards = getAllCardsFromBackend()
        setCards(allCards)
    }, [])

    const {totalPrice, cart} = useSelector(state => state.cart)

    return (
        <main className={styles.menu}>
            <div className={styles.menu__container}>
                <div className={styles.menu__header}>
                    <h1>наша продукция</h1>
                    <div className={styles.cart__preview}>
                        <div className={styles.cart__info}>
                            <p>{`Количество: ${cart.length}`}</p>
                            <p>{`Сумма: ${totalPrice} `} &#8381;</p>
                        </div>
                        <a onClick={() => navigate(routes.cart)} className={styles.cart__btn}>
                            <img src="images/icons/cartIcon.svg" alt=""/>
                        </a>
                        <button className={styles.menuPage__exit} onClick={() => navigate('/')}>Выйти</button>
                    </div>
                </div>
                <ul className={styles.menu__list}>
                    {cards.map((card, index) =>
                        <li>
                            <Card
                                card={card}
                                key={index}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </main>
    );
}

export default MenuPage;
