/* eslint-disable linebreak-style */
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import { guitarNotes } from '../../helpers/guitarExercises';
import { fiddleNotes } from '../../helpers/fiddleNotes';
import { ukeleleNotes } from '../../helpers/ukeleleNotes';
import { saxoNotes } from '../../helpers/saxoNotes';
import { pianoNotes } from '../../helpers/pianoNotes';
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

export default function Memory() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [instrument, setInstrument] = useState(1)
  const [isNormal, setIsNormal] = useState(true);
  const [memory, setMemory] = useState([]);
  const [memorySelec, setMemorySelec] = useState(null);
  const [playing, setPlaying] = useState(false)
  const [copy, setCopy] = useState(null)
  const [restart, setRestart] = useState(null)
  const [answersModal, setAnswersModal] = useState(false);

  useEffect(() => {
    const memoryRan = [...guitarNotes, ...guitarNotes].sort(function () { return Math.random() - 0.5 })
    setMemory(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })));
    setRestart(guitarNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const [dataMemory, setDataMemory] = useState([])
  const updateMemory = (dataMemory) => {
    const memoryRan = [...dataMemory, ...dataMemory].sort(function () { return Math.random() - 0.5 })
    setMemory(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })));
    setCopy(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })))
    setRestart(dataMemory);
  }
  const cardClick = (memoData, i) => {
    const memoAudio = new Audio(memoData.audio);
    memoAudio.play();
    // copy the data to restore
    if (memorySelec === null)
      setCopy(memory)
    // if the card is flipped just play the sound
    if (!memoData.flipped) {
      //updates the status of the clicked card
      const flippedMemory = { ...memoData, flipped: true };
      const prevStateEdit = [
        ...memory.slice(0, i - 1),
        flippedMemory,
        ...memory.slice(i, memory.length)
      ];
      setMemory(prevStateEdit)
      if (memorySelec === null)
        setMemorySelec(memoData)
      else if (memorySelec.name === memoData.name) {
        setMemorySelec(null)
        setCopy(null)
        let cont = 0;
        for (let i = 0; i < memory.length; i++) {
          if (memory[i].flipped)
            cont += 1;
        }
        if (cont === memory.length - 1)
          setAnswersModal(true);
      }
      else {
        setPlaying(true)
        setTimeout(() => {
          setMemory(copy);
          setMemorySelec(null)
          setPlaying(false)
        }, 1000);
      }
    }
  }
  const level = (value) => {
    setIsNormal(value);
  }
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu memory />
      <div className={styles.main}>
        <p className={styles.main__title}>Memorama</p>
        <div className={styles.notes__controls}>
          <button type="button" className={instrument === 1 ? styles.notes__controls_active : null} onClick={() => { setInstrument(1); updateMemory(guitarNotes) }}>Guitarra</button>
          <button type="button" className={instrument === 2 ? styles.notes__controls_active : null} onClick={() => { setInstrument(2); updateMemory(fiddleNotes) }}>Violín</button>
          <button type="button" className={instrument === 3 ? styles.notes__controls_active : null} onClick={() => { setInstrument(3); updateMemory(ukeleleNotes) }}>Ukelele</button>
          <button type="button" className={instrument === 4 ? styles.notes__controls_active : null} onClick={() => { setInstrument(4); updateMemory(saxoNotes) }}>Saxofón alto</button>
          <button type="button" className={instrument === 5 ? styles.notes__controls_active : null} onClick={() => { setInstrument(5); updateMemory(pianoNotes) }}>Piano</button>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.memoryAct}>
            <div className={styles.notes__controls}>
              <p>Dificultad</p>
              <button type="button" className={isNormal ? styles.notes__controls_active : null} onClick={() => level(true)}>Normal</button>
              <button type="button" className={!isNormal ? styles.notes__controls_active : null} onClick={() => level(false)}>Dificil</button>
            </div>
            <div className={styles.memoryAct__dash} style={instrument === 2 ? { width: '80%' } : null}>
              {memory.map((memo, index) => {
                const keyIndex = index + 1;
                return (
                  <button type="button" key={keyIndex} className={memo.flipped ? styles.memoryAct__memoryOn : styles.memoryAct__memoryOff} onClick={() => cardClick(memo, keyIndex)} disabled={playing}>
                    <p>{(memo.flipped && isNormal) && (memo.name)}</p>
                  </button>
                );
              })}
            </div>
            <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => updateMemory(restart)}>Reiniciar</button>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={answersModal}
        className={styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <p>Felicidades</p>
        <p>Reto completado</p>
        <Image src="/images/nice.svg" alt="play" width={150} height={150} />
        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_cancel} type="button" onClick={() => setAnswersModal(false)}>Terminar</button>
          <button type="button" onClick={() => { updateMemory(restart); setAnswersModal(false) }}>Reiniciar</button>
        </div>
      </ReactModal>
    </div >
  );
} 
