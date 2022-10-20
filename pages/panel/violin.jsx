/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import FiddleText from '../../components/fiddleText';
import FiddleNotes from '../../components/fiddleNotes';
import FiddleAct from '../../components/fiddleAct';
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
      <Menu fiddle />
      <div className={styles.main}>
        <p className={styles.main__title}>Violín</p>
        <div className={styles.course__controls}>
          <button type="button" className={course ? styles.course__controls_active : null} onClick={() => setCourse(true)}>Teoría</button>
          <button type="button" className={!course ? styles.course__controls_active : null} onClick={() => setCourse(false)}>Actividades</button>
        </div>
        {course ? (<FiddleText />) : (<FiddleAct />)}
      </div>
    </div>
  );
}