/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import GuitarCom from '../../components/guitarCom';
import GuitarAct from '../../components/guitarAct';
import GuitarText from '../../components/guitarText';
import styles from '../../styles/Dashboard.module.scss';

export default function GuitarCourse() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [course, setCourse] = useState(1)
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.people}>
        <Image src="/images/guitarPeople.svg" alt="play" width={200} height={204} />
      </div>
      <div className={styles.main}>
        <p className={styles.main__title}>Guitarra</p>
        <div className={styles.courseGuitar__controls}>
          <button type="button" className={course === 1 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(1)}>Teoria</button>
          <button type="button" className={course === 2 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(2)}>Actividades</button>
          <button type="button" className={course === 3 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(3)}>Practica</button>
        </div>
        {
          course === 1 ? (<GuitarText />)
            : course === 2 ? (<GuitarAct />)
              : (<GuitarCom />)
        }
      </div>

    </div>
  );
}

