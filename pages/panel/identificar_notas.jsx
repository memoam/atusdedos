/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import GuitarNotes from '../../components/guitarNotes';
import GuitarNotesAct from '../../components/guitarNotesAct';
import GuitarNotesActH from '../../components/guitarNotesActH';
import UkeleleNotes from '../../components/ukeleleNotes';
import UkeleleNotesAct from '../../components/ukeleleNotesAct';
import UkeleleNotesActH from '../../components/ukeleleNotesActH';
import FiddleNotes from '../../components/fiddleNotes';
import FiddleNotesAct from '../../components/fiddleNotesAct';
import SaxoNotes from '../../components/saxofonNotes';
import SaxoNotesAct from '../../components/saxoNotesAct';
import SaxoNotesAtcH from '../../components/saxoNotesActH';
import PianoNotes from '../../components/pianoNotes';
import PianoNotesAct from '../../components/pianoNotesAct';
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
  const [isHard, setIsHard] = useState(false);
  const btn = (
    <div className={styles.notes__controls}>
      <button type="button" className={!isHard ? styles.notes__controls_active : null} onClick={() => setIsHard(false)}>Normal</button>
      <button type="button" className={isHard ? styles.notes__controls_active : null} onClick={() => setIsHard(true)}>Extremo</button>
    </div>
  );
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu notes />
      <div className={styles.main}>
        <p className={styles.main__title}>Identificar notas</p>
        <div className={styles.notes__controls}>
          <button type="button" className={instrument === 1 ? styles.notes__controls_active : null} onClick={() => setInstrument(1)}>Guitarra</button>
          <button type="button" className={instrument === 2 ? styles.notes__controls_active : null} onClick={() => setInstrument(2)}>Violín</button>
          <button type="button" className={instrument === 3 ? styles.notes__controls_active : null} onClick={() => setInstrument(3)}>Ukelele</button>
          <button type="button" className={instrument === 4 ? styles.notes__controls_active : null} onClick={() => setInstrument(4)}>Saxofón alto</button>
          <button type="button" className={instrument === 5 ? styles.notes__controls_active : null} onClick={() => setInstrument(5)}>Piano</button>
        </div>
        <div className={styles.course__controls}>
          <button type="button" className={course ? styles.course__controls_active : null} onClick={() => setCourse(true)}>Escuchar</button>
          <button type="button" className={!course ? styles.course__controls_active : null} onClick={() => setCourse(false)}>Actividades</button>
        </div>
        {
          instrument === 1 ? course ? (<GuitarNotes />) : (
            <>
              {btn}
              {isHard ? <GuitarNotesActH /> : (<GuitarNotesAct />)}
            </>
          ) : instrument === 2 ? course ? (<FiddleNotes />) : (<FiddleNotesAct />)
            : instrument === 3 ? course ? (<UkeleleNotes />) : (
              <>
                {btn}
                {isHard ? <UkeleleNotesActH /> : <UkeleleNotesAct />}
              </>
            ) : instrument === 4 ? course ? (<SaxoNotes />) : (
              <>
                {btn}
                {isHard ? <SaxoNotesAtcH /> : (<SaxoNotesAct />)}
              </>
            )
              : instrument === 5 ? course ? (<PianoNotes />) : (<PianoNotesAct />)
                : null
        }
      </div>
    </div>
  );
} 