/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Notification from '../components/notifications';
import Price from '../components/price';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';

export default function guitar() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.container__img}>
      </div>
      <div className={styles.main}>
        <p className={styles.main__titleCourse}>APRENDE ALGO NUEVO CADA DÍA</p>
        <p className={styles.main__title2}>Guitarra</p>
        <div className={styles.main__text}>
          <div className={styles.main__text_txt}>
            <p>
              Pregúntale a cualquier persona que quiere ser músico qué instrumento le gustaría tocar y cerca del 90 % de ellas señalaría la 
              guitarra que está en un rincón de la sala de estar. Además de tener un uso extendido en todos los estilos y géneros musicales, 
              también suele ser el primer instrumento que cualquier músico nuevo quiere tener (o por el que pasa las vacaciones rogándoles a sus padres).
            </p>
            <p>
              Todo lo que necesitas para tocar un puñado de canciones populares es aprender algunos acordes básicos y ejercitar un poco el ritmo. 
              Lo que hace que la guitarra sea más llamativa aun es su historia rica y compleja.
            </p>
            <p>
              Si bien las raíces de la guitarra son un tanto conocidas, es probable que te sorprendas con otros aspectos de la evolución del instrumento.
            </p>
          </div>
          <Image src="/images/saxoPeople.png" alt="saxoPeople" width={248} height={482} />
        </div>
        <p className={styles.main__title}>Accede a TODOS los cursos las veces que quieras</p>
        <Price />
      </div>
      <Footer />
    </div>
  );
}