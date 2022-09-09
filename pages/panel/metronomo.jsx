/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Metronome from '../../components/metronome';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Dashboard.module.scss';

export default function Value() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu metronome />
      <div className={styles.main}>
        <div className={styles.dashboard}>
          <div className={styles.dashboard__header}>
            <p>Mi metronomo</p>
          </div>
          <Metronome />
        </div>
      </div>
    </div>
  );
}