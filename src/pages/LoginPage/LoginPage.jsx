import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setCredentials } from "../../redux/user/userSlice";
import {routes} from '../../App'
import { Routes } from "react-router-dom";
import styles from './LoginPage.module.scss';
const users = [
  {
    login: 'login',
    password: 'password'
  }
]

const LoginPage = () => {
  let navigate = useNavigate();
  const {isAuth} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExist = users.find(user => user.login == login && user.password == password);
    if (userExist) {
      dispatch(setIsAuth(true))
      dispatch(setCredentials(userExist))
      localStorage.setItem('login', login)
      localStorage.setItem('password', password)
      return navigate(routes.menu)
    }
    if (!userExist) {
      alert('нет такого пользователя')
      dispatch(setIsAuth(false))
      return
    }
  }

  if (isAuth) {
    navigate(routes.menu)
    return null
  }

  return (
    <section className={styles.login}>

      <form onSubmit={handleSubmit} className={`${styles.login__form} ${styles.form}`}>
        <h2 className={styles.form__title}>вход</h2>
        <input
          type="text"
          className={styles.form__input}
          value={login}
          placeholder={'Логин'}
          required={true}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          className={styles.form__input}
          value={password}
          placeholder={'Пароль'}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.form__cbox}>
          <input
            type="checkbox"
            className={styles.form__checkbox}
            id="agree"
          />
          <label for="agree"></label><span className={styles.likeLabel}>Я согласен получать обновления на почту</span>
        </div>
        <button type='submit' className={styles.form__btn}>Войти</button>
      </form>
    </section>
  )

}

export default LoginPage;
