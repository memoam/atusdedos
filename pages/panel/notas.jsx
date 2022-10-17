/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import UkeleleNotes from '../../components/ukeleleNotes';
import FiddleNotes from '../../components/fiddleNotes';
import FiddleNotesAct from '../../components/fiddleNotesAct';
import SaxoNotes from '../../components/saxofonNotes';
import PianoNotes from '../../components/pianoNotes';
import GuitarNotes from '../../components/guitarNotes';
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

export default function Notes() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [course, setCourse] = useState(true)
  const [instrument, setInstrument] = useState(1)
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <p className={styles.main__title}>Identificar notas</p>
        <div className={styles.notes__controls}>
          <button type="button" className={instrument === 1 ? styles.notes__controls_active : null} onClick={() => setInstrument(1)}>Guitarra</button>
          <button type="button" className={instrument === 2 ? styles.notes__controls_active : null} onClick={() => setInstrument(2)}>Violin</button>
          <button type="button" className={instrument === 3 ? styles.notes__controls_active : null} onClick={() => setInstrument(3)}>Ukelele</button>
          <button type="button" className={instrument === 4 ? styles.notes__controls_active : null} onClick={() => setInstrument(4)}>Saxofon alto</button>
          <button type="button" className={instrument === 5 ? styles.notes__controls_active : null} onClick={() => setInstrument(5)}>Piano</button>
        </div>
        <div className={styles.course__controls}>
          <button type="button" className={course ? styles.course__controls_active : null} onClick={() => setCourse(true)}>Escuchar</button>
          <button type="button" className={!course ? styles.course__controls_active : null} onClick={() => setCourse(false)}>Actividades</button>
        </div>
        {
          instrument === 1 ? course ? (<GuitarNotes />) : (<p>algo</p>)
            : instrument === 2 ? course ? (<FiddleNotes />) : (<FiddleNotesAct />)
              : instrument === 3 ? course ? (<UkeleleNotes />) : (<p>algo</p>)
                : instrument === 4 ? course ? (<SaxoNotes />) : (<p>algo</p>)
                  : instrument === 5 ? course ? (<PianoNotes />) : (<p>algo</p>)
                    : null
        }
      </div>
    </div>
  );
} 