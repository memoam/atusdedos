/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function Metronome() {
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const adu1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
  const adu2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

  let isPlaying = null;
  let count = 0;
  const playClick = () => {
    const click1 = new Audio(adu1);
    const click2 = new Audio(adu2);
    if (count % beatsPerMeasure === 0) {
      click2.play();
    } else {
      click1.play();
    }
    if (count === beatsPerMeasure - 1)
      count = 0
    else
      count += 1;
  };
  const playing = () => {
    if (!isPlaying) {
      isPlaying = setInterval(playClick, (60 / bpm) * 1000);
    }
  }
  const stop = () => {
    clearInterval(isPlaying);
    isPlaying = null;
    count = 0;
  }
  return (
    <div className={styles.metronome}>
      <div className={styles.controls}>
        <button className={styles.controls__cancel} type="button" onClick={() => stop()}>detener</button>
        <button type="button" onClick={() => playing()}>Iniciar</button>
      </div>
      <div >
        <p>{`${bpm} BPM`}</p>
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={(e) => setBpm(e.target.value)}
        />
      </div>
      <div className={styles.metronome__controls}>
        <button type="button" className={beatsPerMeasure === 4 ? styles.metronome__controls_active : null} onClick={() => setBeatsPerMeasure(4)}>
          <Image src="/images/4Times.png" alt="4Times" width={224} height={224} />
        </button>
        <button type="button" className={beatsPerMeasure === 3 ? styles.metronome__controls_active : null} onClick={() => setBeatsPerMeasure(3)}>
          <Image src="/images/3Times.png" alt="3Times" width={200} height={224} />
        </button>
        <button type="button" className={beatsPerMeasure === 2 ? styles.metronome__controls_active : null} onClick={() => setBeatsPerMeasure(2)}>
          <Image src="/images/2Times.png" alt="2Times" width={124} height={224} />
        </button>
      </div>
    </div>
  );
}