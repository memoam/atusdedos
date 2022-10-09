/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Image from 'next/image';
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

export default function MusicalTheory() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <p className={styles.main__title}>Teoría musical</p>
        <div className={styles.dashboard}>
          {/* Inicio de ejemplo ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Titulo ejemplo</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Subtitulo ejemplo</p>
              <p className={styles.dashboard__text_txt}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Enim deleniti mollitia incidunt praesentium id error.
                <span className={styles.dashboard__text_bold}>Aut,</span>
                soluta veniam. Ducimus molestiae natus deleniti tempora.
                Corporis eaque est similique dolor iure vero?
              </p>
              <p className={styles.dashboard__text_txt}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Enim deleniti mollitia incidunt praesentium id error.
                <span className={styles.dashboard__text_bold}>Aut,</span>
                soluta veniam. Ducimus molestiae natus deleniti tempora.
                Corporis eaque est similique dolor iure vero?
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image src="/images/g_a1.png" alt="play" width={550} height={250} />
                <Image src="/images/nice.svg" alt="play" width={150} height={150} />
              </div>
            </div>
          </details>
          {/* fin de ejemplo ---------------------------------*/}
          {/* Inicio de ejemplo 2 ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Titulo ejemplo</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Subtitulo ejemplo</p>
              <p className={styles.dashboard__text_txt}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Enim deleniti mollitia incidunt praesentium id error.
                <span className={styles.dashboard__text_bold}>Aut,</span>
                soluta veniam. Ducimus molestiae natus deleniti tempora.
                Corporis eaque est similique dolor iure vero?
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image src="/images/nice.svg" alt="play" width={150} height={150} />
                <Image src="/images/fail.svg" alt="play" width={150} height={150} />
                <Image src="/images/nice.svg" alt="play" width={150} height={150} />
                <Image src="/images/fail.svg" alt="play" width={150} height={150} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Enim deleniti mollitia incidunt praesentium id error.
                <span className={styles.dashboard__text_bold}>Aut,</span>
                soluta veniam. Ducimus molestiae natus deleniti tempora.
                Corporis eaque est similique dolor iure vero?
              </p>
            </div>
          </details>
          {/* fin de ejemplo 2---------------------------------*/}
        </div>
      </div>
    </div>
  );
}