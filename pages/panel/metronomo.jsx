/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Metronome from '../../components/metronome';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Dashboard.module.scss';

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || null;
  if (token === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { token } };
}

export default function Value() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu />
      <div className={styles.people}>
        <Image src="/images/metronomo.svg" alt="metronomo" width={300} height={204} />
      </div>
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