/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import { saxoNotes } from '../helpers/saxoNotes';
import styles from '../styles/Dashboard.module.scss';

export default function SaxoNotes() {
  const noteImgInit = 'https://res.cloudinary.com/atusdedos/image/upload/v1665985278/saxofon/saxofon_pznin2.png'
  const [noteImg, setNoteImg] = useState(noteImgInit);
  return (
    <div className={styles.dashboard}>
      <div className={styles.fiddleNote}>
        <div className={styles.fiddleNote__notes}>
          <p className={styles.fiddleNote__notes_title}>Escucha y visualiza las notas.</p>
          {saxoNotes.map((value, index) => {
            const keyIndex = index + 1;
            return (
              <div className={styles.fiddleNote__notes_note} key={keyIndex}>
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
        <div className={styles.fiddleNote__div}>
          <div className={styles.fiddleNote__img}>
            <Image unoptimized loader={({ src }) => src} src={noteImg} alt="play" width={179} height={410} />
          </div>
        </div>
      </div>
    </div>
  );
}

