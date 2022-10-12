import React, { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IBasket {
  activeBasket: boolean
  setActiveBasket: Dispatch<SetStateAction<boolean>>
}


const Basket = ( { activeBasket, setActiveBasket }: IBasket ): JSX.Element => {
  return (
    <div className={ activeBasket ? cn( styles.basketInner, styles.active ) : styles.basketInner }
         onClick={ () => setActiveBasket( !activeBasket ) }>
      <div className={ styles.basketContent } onClick={ e => e.stopPropagation() }>
        <p className={ styles.basketText }>Корзина пуста <i>😕</i></p>
      </div>
    </div>
  );
};

export default Basket;