/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Notification from '../components/notifications';
import Price from '../components/price';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';

export default function Violin() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.container__img}>
      </div>
      <div className={styles.main}>
        <p className={styles.main__titleCourse}>APRENDE ALGO NUEVO CADA DÍA</p>
        <p className={styles.main__title2}>Violin</p>
        <div className={styles.main__text}>
          <div className={styles.main__text_txt}>
            <p>
              Antes que nada querido estudiante quiero felicitarte por la de decisión de estudiar música, espero de todo 
              corazón que esta experiencia se de una total satisfacción para tu desarrollo como persona y como estudiante.
            </p>
            <p>
              Es así que te presento este método de violín que te ayudara a desarrollar tu instrumento con una técnica fácil y sencilla; 
              el violín querido estudiante es uno de los instrumentos más bellos que existen en el encontraremos experiencias increíbles y 
              maravillosas que llenaran tu vida de muchas satisfacciones.
            </p>
            <p>
              En este método desarrollaremos de una forma sencilla la técnica básica para comenzar a tocar el violín, pero recuerda algo 
              muy importante la música y el instrumento son amantes celosos que requieren de tu parte mucha atención y constancia, si bien 
              en este método hare lo posible porque tu estudio se fácil y sencillo también es importante mencionar que si de tu parte no hay 
              estudio personal y constancia en tus clases entonces será imposible que puedas aprende a tocar este bello instrumento.
            </p>
            <p>
              Aprender música a mi parecer no es dificil siempre y cuando le dediques tiempo, pasión y estudio personal, entonces se constante 
              y enamórate de tan bella actividad.
            </p>
            <p>
              Deseo de todo corazón que logres todos tus objetivos y juntos aprovechemos esta aventura al máximo, pero sobre todo espero que 
              llegues a enamorarte de la música tanto como yo lo estoy sin más comencemos pues esta fantástica aventuras.
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