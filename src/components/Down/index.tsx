import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './styles.module.scss';
import ginger from '../../../public/assets/images/ginger.png';
import tablets from '../../../public/assets/images/tablets.png';
import virus from '../../../public/assets/images/virus.png';

const Down: React.FC = () => {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Получи защиту иммунитета
        <div> со скидкой -15% первым!</div>
      </h1>
      <div className={ styles.prices }>
        <div className={ styles.oldPrice }>750₽</div>
        <div className={ styles.newPrice }>690₽</div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.images }>
          <Image src={ ginger } alt="Nootris"/>
          <div className={ styles.tablets }>
            <Image src={ tablets } alt="Nootris"/>
          </div>
          <Image src={ virus } alt="Nootris"/>
        </div>
      </div>
      <div className={ styles.items }>
        <div className={ styles.itemWrapper }>
          <div className={ styles.mini }>Содержит</div>
          <div className={ styles.orange }>имбирь</div>
        </div>
        <div className={ cn( styles.itemWrapper, styles.middleWrapper ) }>
          <div className={ styles.middle }><span>&#43;</span> Бесплатная доставка</div>
          <div className={ styles.orange }>Специальная цена</div>
        </div>
        <div className={ styles.itemWrapper }>
          <div className={ styles.mini }>Нейтрализует</div>
          <div className={ styles.orange }>вирусы</div>
        </div>
      </div>

      {/*Mobile 724px*/ }
      <div className={ styles.wrapperM }>
        <div className={ styles.itemM }>
          <Image src={ ginger } width={ 200 } height={ 130 } alt="Nootris"/>
          <div className={ styles.itemDescrM }>
            <div className={ styles.miniM }>Содержит</div>
            <div className={ styles.orangeM }>имбирь</div>
          </div>
        </div>
        <div className={ styles.itemM }>
          <Image src={ tablets } width={ 300 } height={ 100 } alt="Nootris"/>
          <div className={ styles.itemDescrM }>
            <div className={ styles.middleM }>Бесплатная доставка</div>
            <div className={ styles.orangeM }>Специальная цена</div>
          </div>
        </div>
        <div className={ styles.itemM }>
          <Image src={ virus } width={ 150 } height={ 130 } alt="Nootris"/>
          <div className={ styles.itemDescrM }>
            <div className={ styles.miniM }>Нейтрализует</div>
            <div className={ styles.orangeM }>вирусы</div>
          </div>
        </div>
      </div>
      <button className={ styles.btn }>Оформить заказ!</button>
    </div>
  );
};

export default Down;