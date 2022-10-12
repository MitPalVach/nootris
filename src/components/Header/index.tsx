import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
import basket from '../../../public/assets/images/basket.svg';
import Nav from "../Nav/index";
import NavMobile from "../../components/NavMobile";
import Basket from "../../components/Modal/Basket";

const Header: React.FC = () => {
  const [ showMenu, setShowMenu ] = useState( false );
  const [ activeBasket, setActiveBasket ] = useState( false );

  return (
    <header className={ styles.header }>
      <button className={ styles.menuBtn } onClick={ () => setShowMenu( !showMenu ) }>
        <div className={ styles.menuBtnLine }/>
        <div className={ styles.menuBtnLine }/>
      </button>
      <div className={ styles.logo }>
        <Image src={ logo } alt="Nootris"/>
      </div>
      <Nav/>
      { showMenu && <NavMobile showMenu={ showMenu }/> }
      <button className={ styles.btnBasket } onClick={ () => setActiveBasket( !activeBasket ) }>
        <Image src={ basket } alt="Basket"/>
        <span className={ styles.count }>1</span>
      </button>
      <Basket activeBasket={ activeBasket } setActiveBasket={ setActiveBasket }/>
    </header>
  );
};

export default Header;
