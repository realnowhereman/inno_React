import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {addToCart, setTotalPrice} from '../../redux/cart/cartSlice.js';
import styles from './Card.module.scss';
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const navigate = useNavigate()
    const {id, imgUrl, title, description, price, portion} = card;

    const dispatch = useDispatch()

    const addBtn = (e) => {
        e.stopPropagation()
        let item = {
            id: id,
            idx: uuidv4(),
            title: title,
            url: imgUrl,
            price: price
        }
        console.log('item', item)
        dispatch(addToCart(item))
        dispatch(setTotalPrice())
    }

    return (
        <div className={styles.card} onClick={()=>navigate('/dish/' + id )}>
            <img className={styles.card__preview} src={imgUrl} alt={`image ${title}`}
                 title={`изображение ${title}`}/>
            <div className={styles.card__center}>
                <h2 className={styles.card__title}>{title}</h2>

                <p className={styles.card__description}>{description}</p>
            </div>

            <div className={styles.card__bottom}>
          <span className={styles.card__price}>
              {price} &#8381; / {portion}
          </span>

                <button className={styles.card__btn} onClick={addBtn}>
                    <img src="images/icons/plusBtn.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;
