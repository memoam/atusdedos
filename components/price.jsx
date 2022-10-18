/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Price() {
  return (
    <div className={styles.prices}>
      <div className={styles.prices__price}>
        <p className={styles.prices__price_txt}>1 Mes</p>
        <p className={styles.prices__price_price}>$80.00 MXN</p>
        <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
        <button type="button">Suscríbete</button>
      </div>
      <div className={styles.prices__price}>
        <p className={styles.prices__price_txt}>3 Meses</p>
        <p className={styles.prices__price_price}>$225.00 MXN</p>
        <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
        <p className={styles.prices__price_txt}>$75.00 MXN/mes</p>
        <button type="button">Suscríbete</button>
      </div>
      <div className={styles.prices__price}>
        <p className={styles.prices__price_txt}>12 Meses</p>
        <p className={styles.prices__price_price}>$870.00 MXN</p>
        <p className={styles.prices__price_txt}>Acceso a todos los cursos</p>
        <p className={styles.prices__price_txt}>$72.50 MXN/mes</p>
        <button type="button">Suscríbete</button>
      </div>
    </div>
  );
}