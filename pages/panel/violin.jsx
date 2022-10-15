/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import FiddleText from '../../components/fiddleText';
import FiddleNotes from '../../components/fiddleNotes';
import FiddleNotesAct from '../../components/fiddleNotesAct';
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

export default function Fiddle() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [course, setCourse] = useState(1)
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <p className={styles.main__title}>Violin</p>
        <div className={styles.courseGuitar__controls}>
          <button type="button" className={course === 1 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(1)}>Teoria</button>
          <button type="button" className={course === 2 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(2)}>Actividades</button>
          <button type="button" className={course === 3 ? styles.courseGuitar__controls_active : null} onClick={() => setCourse(3)}>Practica</button>
        </div>
        {
          course === 1 ? (<FiddleText />)
            : course === 2 ? (<FiddleNotesAct />)
              : (<FiddleNotes />)
        }
      </div>
    </div>
  );
}