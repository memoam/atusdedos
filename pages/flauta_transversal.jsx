/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Notification from '../components/notifications';
import Price from '../components/price';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';

export default function Flute() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.container__img}>
      </div>
      <div className={styles.main}>
        <p className={styles.main__titleCourse}>APRENDE ALGO NUEVO CADA DÍA</p>
        <p className={styles.main__title2}>Flauta Transversal</p>
        <div className={styles.main__text}>
          <div className={styles.main__text_txt}>
            <p>
              Hola querido estudiante espero que estés emocionado como yo por el proceso que vas a comenzar en este momento, 
              te felicito por la decisión de tomar clases de música, ya que esta experiencia será muy enriquecedora para tu vida y 
              para tu desarrollo como persona y como estudiante.
            </p>
            <p>
              La música es una de las bellas artes que son naturales en el ser humano, todo mundo puede aprender música si lo desea de corazón, 
              es así que con toda la alegría de mi corazón te presento este método de saxofón que te ayudara y facilitara el proceso de aprender 
              este maravilloso instrumento, recuerda algo muy importante la música no se aprende sola tienes que esforzarte y dedicarle el tiempo 
              necesario con la calidad necesaria para aprender de manera rápida y eficaz.
            </p>
            <p>
              En este método adoptaras las herramientas necesarias para poder tocar la música que más te guste, pero enfatizando en el 
              desarrollo de la técnica adecuada para que te facilite aprender lo más rápido posible.
            </p>
            <p>
              Espero de todo corazón que juntos hagamos de esta aventura una experiencia extraordinaria puesto que te esperan por delante 
              maravillosas experiencias que no pensaste serias capaz de hacerlo, una vez más te felicito por iniciar este arduo camino, 
              sin más te deseo éxito en tus metas y de todo corazón que logres tus objetivo personales.
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