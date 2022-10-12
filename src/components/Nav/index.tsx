import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className={ styles.menu }>
        <li>
          <Link href={ '/' }>
            <a>
              FAQ
            </a>
          </Link>
        </li>
        <li>
          <Link href={ '/' }>
            <a>
              Оплата и доставка
            </a>
          </Link>
        </li>
        <li>
          <Link href={ '/' }>
            <a>
              Возврат
            </a>
          </Link>
        </li>
        <li>
          <Link href={ '/' }>
            <a>
              Исследования
            </a>
          </Link>
        </li>
        <li>
          <Link href={ '/' }>
            <a>
              Личный кабинет
            </a>
          </Link>
        </li>
        <li>
          <Link href={ '/' }>
            <a>
              8 8 (800) 600-09-90
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
