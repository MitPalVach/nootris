import React from 'react';
import styles from './styles.module.scss';
import cn from "classnames";
import Link from 'next/link';

interface IMenu {
  showMenu: boolean
}

const NavMobile = ( { showMenu }: IMenu ): JSX.Element => {
  return (
    <nav>
      <ul className={ showMenu ? cn( styles.menu, styles.menuActive ) : styles.menu }
          onClick={ e => e.stopPropagation() }>
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

export default NavMobile;
