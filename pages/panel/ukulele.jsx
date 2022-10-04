/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import UkeleleText from '../../components/ukeleleText';
import styles from '../../styles/Dashboard.module.scss';

export default function Ukelele() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <p className={styles.main__title}>Ukelele</p>
        <UkeleleText />
      </div>
    </div>
  );
}