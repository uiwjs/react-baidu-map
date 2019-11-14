import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { menus } from '../../router';
import styles from './index.module.less';

export default function SideMenu() {
  let { pathname } = useLocation();
  return (
    <div className={styles.side}>
      {menus.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          exact
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}