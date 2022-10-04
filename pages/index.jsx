/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Cards from '../components/cards';
import Notification from '../components/notifications';
import styles from '../styles/Home.module.scss';
import { dataIndex, libraryMusic, skills } from '../helpers/homemMeans';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.topHome}>
        <div className={styles.topHome__info}>
          <Image src="/images/logoAtril.png" alt="Logo" width={75} height={135} />
          <div className={styles.topHome__text}>
            <p className={styles.topHome__text_title}>¿que instrumento suena en ti?</p>
            <p className={styles.topHome__text_txt}>dale sonido, dale ritmo... dale vida </p>
          </div>
        </div>
        <Image src="/images/saxoPeople.jpg" alt="Logo" width={248} height={482} />
      </div>
      <div className={styles.main}>
        <p className={styles.main__title}>APRENDE ALGO NUEVO CADA DÍA</p>
        <div className={styles.section}>
          <p className={styles.section__title}>Para aprender</p>
          <div className={styles.section__cards}>
            <Cards data={dataIndex} />
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.section__title}>Inspiracion</p>
          <div className={styles.section__cards}>
            <Cards data={libraryMusic} />
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.section__title}>Habilidades</p>
          <div className={styles.section__cards}>
            <Cards data={skills} />
          </div>
        </div>
        <p className={styles.main__title}>Accede a TODOS los cursos las veces que quieras</p>
        <div className={styles.prices}>
          <div className={styles.prices__price}>
            <p className={styles.prices__price_txt}>1 Mes</p>
            <p className={styles.prices__price_price}>$80.00 MXN</p>
            <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
            <button type="button">Suscribete</button>
          </div>
          <div className={styles.prices__price}>
            <p className={styles.prices__price_txt}>3 Meses</p>
            <p className={styles.prices__price_price}>$225.00 MXN</p>
            <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
            <p className={styles.prices__price_txt}>$75.00 MXN /mes</p>
            <button type="button">Suscribete</button>
          </div>
          <div className={styles.prices__price}>
            <p className={styles.prices__price_txt}>12 Meses</p>
            <p className={styles.prices__price_price}>$870.00 MXN</p>
            <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
            <p className={styles.prices__price_txt}>$72.50 MXN /mes</p>
            <button type="button">Suscribete</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
