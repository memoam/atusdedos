/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import { fiddleNotes } from '../helpers/fiddleNotes';
import styles from '../styles/Dashboard.module.scss';

export default function FiddleNotes() {
  const [note, setNote] = useState('');
  return (
    <div className={styles.dashboard}>
      <div className={styles.fiddleNote}>
        <div className={styles.fiddleNote__notes}>
          <p className={styles.fiddleNote__notes_title}>Escucha y visualiza las notas</p>
          {fiddleNotes.map((value, index) => {
            const keyIndex = index + 1;
            return (
              <div className={styles.fiddleNote__notes_note} key={keyIndex}>
                <p>{value.name}</p>
                <ReactAudioPlayer
                className={styles.fiddleNote__notes_audio}
                  src={value.audio}
                  controls
                  onPlay={() => setNote(value.value)}
                  onEnded={() => setNote('')}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.fiddleNote__div}>
          <div className={styles.fiddleNote__img}>
            <Image src="/images/violinFondo.png" alt="violinNotes" width={334} height={480} />
            {fiddleNotes.map((value, index) => {
              const keyIndex = index + 1;
              return (
                <p className={note === value.value ? styles.fiddleNote__notes_active : styles.fiddleNote__notes_inActive} key={keyIndex}>{value.data}</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

