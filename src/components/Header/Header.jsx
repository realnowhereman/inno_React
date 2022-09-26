import {Link} from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <ul>
                        <li>
                            <Link to={'/'}>Главная</Link>
                        </li>
                        <li>
                            <Link to={'/cart'}>Корзина</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;