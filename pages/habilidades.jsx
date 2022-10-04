/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Notification from '../components/notifications';
import Price from '../components/price';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';

export default function Inspiration() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.container__img}>
      </div>
      <div className={styles.main}>
        <p className={styles.main__titleCourse}>APRENDE ALGO NUEVO CADA DÍA</p>
        <p className={styles.main__title2}>Habilidades</p>
        <div className={styles.main__text}>
          <div className={styles.main__text_txt}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptate quos voluptatibus nemo dicta aperiam corrupti est recusandae harum error aspernatur veniam autem, maiores soluta. Officiis dolorum consequatur est quasi!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptate quos voluptatibus nemo dicta aperiam corrupti est recusandae harum error aspernatur veniam autem, maiores soluta. Officiis dolorum consequatur est quasi!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptate quos voluptatibus nemo dicta aperiam corrupti est recusandae harum error aspernatur veniam autem, maiores soluta. Officiis dolorum consequatur est quasi!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptate quos voluptatibus nemo dicta aperiam corrupti est recusandae harum error aspernatur veniam autem, maiores soluta. Officiis dolorum consequatur est quasi!</p>
          </div>
          <Image src="/images/saxoPeople.jpg" alt="Logo" width={248} height={482} />
        </div>
        <p className={styles.main__title}>Accede a TODOS los cursos las veces que quieras</p>
        <Price />
      </div>
      <Footer />
    </div>
  );
}