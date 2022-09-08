/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Dashboard.module.scss';
import { Keyboard } from '../../components/piano/keyboard';


export default function Value() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);

  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <div>
          <Keyboard />
        </div>
      </div>
    </div>
  );
}