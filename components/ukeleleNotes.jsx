/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import { ukeleleNotes } from '../helpers/ukeleleNotes';
import styles from '../styles/Dashboard.module.scss';

export default function UkeleleNotes() {
  const imgInit = 'https://res.cloudinary.com/atusdedos/image/upload/v1665863887/ukeleleExercises/ukeleleNotes_lpgsm1.png';
  const [noteImg, setNoteImg] = useState(imgInit);
  return (
    <div className={styles.dashboard}>
      <p className={styles.ukeleleNote__notes_title}>Escucha y visualiza las notas</p>

      <div className={styles.ukeleleNote__img}>
        <Image unoptimized loader={({ src }) => src} src={noteImg} alt="play" width={1008} height={253} />
      </div>
      <div className={styles.ukeleleNote}>
        <div className={styles.ukeleleNote__notes}>
          {ukeleleNotes.map((value, index) => {
            const keyIndex = index + 1;
            return (
              <div className={styles.ukeleleNote__notes_note} key={keyIndex}>
                <p>{value.name}</p>
                <ReactAudioPlayer
                  src={value.audio}
                  controls
                  onPlay={() => setNoteImg(value.img)}
                // onEnded={() => setNote('')}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
