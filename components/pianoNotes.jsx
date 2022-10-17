/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import { pianoNotes } from '../helpers/pianoNotes';
import styles from '../styles/Dashboard.module.scss';

export default function PianoNotes() {
  const imgInit = 'https://res.cloudinary.com/atusdedos/image/upload/v1665986506/piano/piano_mjrvum.png';
  const [noteImg, setNoteImg] = useState(imgInit);
  return (
    <div className={styles.dashboard}>
      <p className={styles.ukeleleNote__notes_title}>Escucha y visualiza las notas</p>
      <div className={styles.ukeleleNote__img}>
        <Image unoptimized loader={({ src }) => src} src={noteImg} alt="play" width={586} height={202} />
      </div>
      <div className={styles.ukeleleNote}>
        <div className={styles.ukeleleNote__notes}>
          {pianoNotes.map((value, index) => {
            const keyIndex = index + 1;
            return (
              <div className={styles.ukeleleNote__notes_note} key={keyIndex}>
                <p>{value.name}</p>
                <ReactAudioPlayer
                  src={value.audio}
                  controls
                  onPlay={() => setNoteImg(value.img)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
