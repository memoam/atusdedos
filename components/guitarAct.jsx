/* eslint-disable linebreak-style */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Guitar, { getRenderFingerSpn } from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import styles from '../styles/Dashboard.module.scss';

export default function GuitarAct() {
  // status
  const [modal, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  // guitar
  const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0]);
  const { play } = useSound({ fretting: strings, tuning: standard });
  // timer
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }
  const startTimer = (e) => {
    let { total, hours, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      setModal(false)
      setPlaying(true)
      clearInterval(Ref.current);
    }
  }
  const clearTimer = (e) => {
    setTimer('00:00:07'); // seconds representation
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => { // counter
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 7); // seconds
    return deadline;
  }
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }
  // exercise

  return (
    <>
      {
        !playing ? (
          <div className={styles.courseGuitar__exercise}>
            <div className={styles.courseGuitar__actFalse}>
              <div>
                <p>Las actividades te ayudaran mejorar tus Habilidades</p>
                <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
                <div className={styles.courseGuitar__actFalse_atc}>
                  <p>Visualisa la imagen y trata de compreneder la nota que representa</p>
                  <Image src="/images/g_a1.png" alt="play" width={550} height={250} />
                  <span className={styles.courseGuitar__actFalse_note}>Do</span>
                </div>
              </div>
              <button className={styles.courseGuitar__exercise_play} type="button" onClick={() => { setModal(true); onClickReset(); }}>
                <Image src="/images/play.svg" alt="play" width={150} height={150} />
                Iniciar
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.courseGuitar__exercise}>
            <p>Reprecenta Do</p>
            <div className={styles.courseGuitar__exercise}>
              <Guitar
                renderFinger={getRenderFingerSpn(standard)}
                frets={{ from: 0, amount: 22 }}
                playOnHover
                strings={strings}
                onChange={setStrings}
                onPlay={play}
              />
            </div>
            <button type="button">Responder</button>
          </div>
        )
      }
      <ReactModal
        isOpen={modal}
        className={styles.modal2}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <div className={styles.modal2__atc}>
          <p className={styles.modal2__time}>{timer}</p>
          <Image src="/images/g_a1.png" alt="play" width={550} height={250} />
          <span className={styles.modal2__note}>Do</span>
          <p className={styles.modal2__time}>Visualiza la reprecentacion de la nota</p>
        </div>
      </ReactModal>
    </>
  );
}

