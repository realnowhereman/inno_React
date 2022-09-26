import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import MenuPage from './pages/MenuPage/MenuPage';
import CartPage from './pages/CartPage/CartPage';
import DishPage from "./pages/DishPage/DishPage";
import LoginPage from './pages/LoginPage/LoginPage';
import './App.scss';

export const routes = {
  login: '/',
  menu: '/menu',
  cart: '/cart',
  dish: '/dish'
}


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={routes.login} exact={true} element={<LoginPage/>}/>
                <Route path={routes.menu} exact={true} element={<MenuPage/>}/>
                <Route path={routes.cart} exact={true} element={<CartPage/>}/>
                <Route path='dish/:id' exact={true} element={<DishPage/>}/>
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>
        </>
    );
}

export default App;
