/* eslint-disable linebreak-style */
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
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
  

  useEffect(() => {
    const memoryRan = [...guitarNotes, ...guitarNotes].sort(function () { return Math.random() - 0.5 })
    setMemory(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const [dataMemory, setDataMemory] = useState([])
  const updateMemory = (dataMemory) => {
    const memoryRan = [...dataMemory, ...dataMemory].sort(function () { return Math.random() - 0.5 })
    setMemory(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })));
    setCopy(memoryRan.map((data, i) => ({ index: i, name: data.name, audio: data.audio, flipped: false })))
  }
  const cardClick = (memoData, i) => {
    const memoAudio = new Audio(memoData.audio);
    memoAudio.play();
    const flippedMemory = { ...memoData, flipped: true };
    const prevStateEdit = [
      ...memory.slice(0, i - 1),
      flippedMemory,
      ...memory.slice(i, memory.length)
    ];
    if (memorySelec === null)
      setCopy(memory)
    setMemory(prevStateEdit)

    if (memorySelec === null)
      setMemorySelec(memoData)
    else if (memorySelec.name === memoData.name) {
      setMemorySelec(null)
      setCopy(null)
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
  const level = (value) => {
    setIsNormal(value);
  }
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
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
            <div className={styles.memoryAct__dash}>
              {memory.map((memo, index) => {
                const keyIndex = index + 1;
                return (
                  <button type="button" key={keyIndex} className={memo.flipped ? styles.memoryAct__memoryOn : styles.memoryAct__memoryOff} onClick={() => cardClick(memo, keyIndex)} disabled={playing || memo.flipped}>
                    <p>{(memo.flipped && isNormal) && (memo.name)}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
} 
