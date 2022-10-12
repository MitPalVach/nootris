import Image from 'next/image';
import React from 'react';
import mainImg from '../../assets/images/mainImg.png';
import styles from './styles.module.scss';

const Top: React.FC = () => {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Активируй иммунитет!</h1>
      <p className={ styles.descr }>
        Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
      </p>
      <h2 className={ styles.subTitle }>Nootris помогает</h2>
      <p className={ styles.subDescr }>Вашему организму во время пандемии и сезонных простуд</p>
      <div className={ styles.bgImg }>
        <Image src={ mainImg } alt="Nootris"/>
      </div>
    </div>
  );
};

export default Top;