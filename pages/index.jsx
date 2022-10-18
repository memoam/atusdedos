/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Cards from '../components/cards';
import Notification from '../components/notifications';
import AuthContext from '../context/authContext';
import Price from '../components/price';
import styles from '../styles/Home.module.scss';
import { dataIndex, libraryMusic, skills, dataIndexInit, libraryMusicInit, skillsInit } from '../helpers/homemMeans';
import Footer from '../components/footer';

export default function Home() {
  const { authData } = useContext(AuthContext);
  const courses = [
    { name: 'Para aprender', value: dataIndex, valueInit: dataIndexInit },
    { name: 'Inspiración', value: libraryMusic, valueInit: libraryMusicInit },
    { name: 'Habilidades', value: skills, valueInit: skillsInit },
  ]
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.topHome}>
        <div className={styles.topHome__info}>
          <Image src="/images/logoAtril.png" alt="Logo" width={75} height={135} />
          <div className={styles.topHome__text}>
            <p className={styles.topHome__text_title}>¿qué instrumento suena en ti?</p>
            <p className={styles.topHome__text_txt}>dale sonido, dale ritmo... dale vida</p>
          </div>
        </div>
        <Image src="/images/saxoPeople.png" alt="Logo" width={248} height={482} />
      </div>
      <div className={styles.main}>
        <p className={styles.main__title}>APRENDE ALGO NUEVO CADA DÍA</p>
        {courses.map((course, index) => {
          const keyIndex = index + 1;
          return (
            <div className={styles.section} key={keyIndex}>
              <p className={styles.section__title}>{course.name}</p>
              <div className={styles.section__cards}>
                <Cards data={ authData.token === null ? course.value: course.valueInit} />
              </div>
            </div>
          );
        })}
        <p className={styles.main__title}>Accede a TODOS los cursos las veces que quieras</p>
        <Price />
      </div >
      <Footer />
    </div >
  );
}
