import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {addToCart, setTotalPrice} from '../../redux/cart/cartSlice.js';
import {getCardFromBackend} from "../../backend/menuData";
import {routes} from '../../App'
import styles from './DishPage.module.scss'

const DishPage = () => {
    const {id} = useParams()
    const [dish, setDish] = useState();
    const {totalPrice, cart} = useSelector(state => state.cart);
    const dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(()=>{
        if (id) {
            const aCard = getCardFromBackend(id)
            setDish(aCard)
        }
    },[id])

    if (!dish) {
        return (
            <div>
                Spinner
            </div>
        )
    }

    const addBtn = (e) => {
      e.stopPropagation()
      let item = {
          id: id,
          idx: uuidv4(),
          title: dish.title,
          url: dish.imgUrl,
          price: dish.price
      }
      console.log('item', item)
      dispatch(addToCart(item))
      dispatch(setTotalPrice())
  }
    
    return (
      <main className={styles.main}>
        <section className={`${styles.container} ${styles.dish}`}>
          <header className={styles.dishHeader}>
            <button className={styles.dishHeader__return} onClick={() => navigate(-1)}>
              <img src="../../../images/icons/arrowBaсk.svg" alt=""/>
            </button>
            <div className={styles.cartPreview}>
              <div className={styles.cartPreview__info}>
                <p>{`Количество: ${cart.length}`}</p>
                <p>{`Сумма: ${totalPrice} `} &#8381;</p>
              </div>
              <a onClick={() => navigate(routes.cart)} className={styles.cartPreview__btn}>
                  <img src="../../../images/icons/cartIcon.svg" alt=""/>
              </a>
                      <button className={styles.dish__exit} onClick={() => navigate('/')}>Выйти</button>
            </div>
          </header>
          <div className={styles.dish__row}>
            <div className={styles.dish__column}>
              <img src= {`../../${dish.imgUrl}`} alt="" className={styles.dish__img} />
            </div>
            <div className={styles.dish__column}>
              <h1 className={styles.dish__title}>{dish.title}</h1>
              <p className={styles.dish__description}>{dish.description}</p>
              <div className={styles.column__footer}>
                <p className={styles.price}>{dish.price}  &#8381; / <span className={styles.portion}>{dish.portion}</span></p>
                <button className={styles.dish__add} onClick={addBtn}>
                  В корзину
              </button>
              </div>
            </div>
          </div>
            
            
        </section>
      </main>
    );
};

export default DishPage;