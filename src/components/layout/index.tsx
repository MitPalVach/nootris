import React from 'react';
import styles from './styles.module.scss';

export interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LayoutProps> = ( { children } ) => {
  return <div className={ styles.container }>{ children }</div>;
};


export default Layout;
