import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, setTotalPrice} from '../../redux/cart/cartSlice';
import styles from './CartPage.module.scss'


const CartPage = () => {
    const {cart, totalPrice} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const removeBtn = (idx) => {
        dispatch(removeFromCart(idx))
        dispatch(setTotalPrice())
    }

    let navigate = useNavigate()

    return (
        <div className={styles.cart}>
            <div className={`${styles.container_l} ${styles.cart__row}`}>
                <button className={styles.cart__return} onClick={() => navigate(-1)}>
                  <img src="images/icons/arrowBaсk.svg" alt="back"/>
                </button>
                <h1 className={styles.cart__title}>Корзина с выбранными товарами</h1>
                <button className={styles.cart__exit} onClick={() => navigate('/')}>Выйти</button>
            </div>

            <main>
                <ul className={`${styles.cartCards} ${styles.container}`}>
                    {
                        cart.map((item, index) =>
                            <li key={index} className={styles.cartCard}>
                                <div className={styles.left}>
                                    <img src={item.url} className={styles.cartCard__img} alt=""/>
                                    <h3 className={styles.cartCard__title}>{item.title}</h3>
                                </div>
                                <div className={styles.cartCard__column_right}>
                                    <p className={styles.cartCard__price}>{item.price} &#8381;</p>
                                    <button className={styles.cartCard__button}
                                            onClick={() => removeBtn(item.idx)}>&#10006;</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <hr className={styles.separate}/>
            </main>

            <footer className={`${styles.container} ${styles.footer}`}>
                <h2 className={styles.footer__data}>Заказ на сумму: <span
                    className={styles.footer__total}>{totalPrice} &#8381;</span></h2>
                <button className={styles.footer__btn} onClick={sendOrder}>Оформить заказ</button>
            </footer>

        </div>
    )
}

const sendOrder = () => {
    console.log('send order');
}


export default CartPage;
