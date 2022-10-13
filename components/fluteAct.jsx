/* eslint-disable linebreak-style */
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import FluterExercises, { Validate } from '../helpers/fluteExercises';
import styles from '../styles/Dashboard.module.scss';

export default function FluteAct() {
  // status
  const [modal, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  const initAsw = {
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false, a10: false, a11: false, a12: false, a13: false, a14: false, a15: false
  }
  const [asw, setAsw] = useState(initAsw);
  //
  const changeInput = (value, field) => {
    const prevState = asw;
    prevState[field] = value;
    setAsw(prevState);
  };
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
    setTimer('00:00:05'); // seconds representation
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => { // counter
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5); // seconds
    return deadline;
  }
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }
  // exercise
  const [answersModal, setAnswersModal] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [exercise, setExercise] = useState({});
  const [numRan, setNumRan] = useState(Math.floor(Math.random() * 1));

  const start = () => {
    setExercise(FluterExercises(numRan));
    setModal(true);
    onClickReset();
  }
  // answers
  const isItOk = () => {
    setAnswersModal(true);
    setIsRight(Validate(asw, numRan));// aqui responde 
  }
  const nextExercise = () => {
    setAsw(initAsw);
    setAnswersModal(false);
    setNumRan(Math.floor(Math.random() * 1));
    start();
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setAsw(initAsw);
  }
  return (
    <div className={styles.courseFlute}>
      {!playing ? (
        <div className={styles.courseFlute__predata}>
          <Image src="/images/flauta.png" alt="flauta" width={183} height={600} />
          <div className={styles.courseFlute__data}>
            <div className={styles.courseFlute__data_data}>
              <p>Las actividades te ayudaran mejorar tus Habilidades</p>
              <Image src="/images/mano.png" alt="mano" width={210} height={173} />
              <div className={styles.courseFlute__data_ej}>
                <strong>Ejemplo:</strong>
                <p>Visualisa la imagen y trata de compreneder el acorde que representa</p>
              </div>
            </div>
            <div className={styles.courseFlute__data_act}>
              <Image src="/images/fluteact1.png" alt="flautaAct" width={187} height={304} />
              <button className={styles.courseFlute__exercise_play} type="button" onClick={() => start()}>
                <Image src="/images/play.svg" alt="play" width={150} height={150} />
                Iniciar
              </button>
            </div>
          </div>

        </div>
      ) : (
        <div className={styles.courseFlute__exercise}>
          <p className={styles.courseFlute__exercise_exercise}>Identifica:<span>{exercise.name}</span></p>
          <div className={styles.courseFlute__actFalse}>
            <div className={styles.courseFlute__actFalse_imgFlute}>
              <Image src="/images/flauta.png" alt="flauta" width={183} height={600} />
            </div>
            <form name="fluteForm" className={styles.courseFlute__actFalse_act}>
              <div>
                <Image src="/images/flautaAct.png" alt="flautaAct" width={187} height={304} />
              </div>
              <input type="checkbox" name="a1" id="a1" onChange={() => changeInput(document.fluteForm.a1.checked, 'a1')} />
              <input type="checkbox" name="a2" id="a2" onChange={() => changeInput(document.fluteForm.a2.checked, 'a2')} />
              <input type="checkbox" name="a3" id="a3" onChange={() => changeInput(document.fluteForm.a3.checked, 'a3')} />
              <input type="checkbox" name="a4" id="a4" onChange={() => changeInput(document.fluteForm.a4.checked, 'a4')} />
              <input type="checkbox" name="a5" id="a5" onChange={() => changeInput(document.fluteForm.a5.checked, 'a5')} />
              <input type="checkbox" name="a6" id="a6" onChange={() => changeInput(document.fluteForm.a6.checked, 'a6')} />
              <input type="checkbox" name="a7" id="a7" onChange={() => changeInput(document.fluteForm.a7.checked, 'a7')} />
              <input type="checkbox" name="a8" id="a8" onChange={() => changeInput(document.fluteForm.a8.checked, 'a8')} />
              <input type="checkbox" name="a9" id="a9" onChange={() => changeInput(document.fluteForm.a9.checked, 'a9')} />
              <input type="checkbox" name="a10" id="a10" onChange={() => changeInput(document.fluteForm.a10.checked, 'a10')} />
              <input type="checkbox" name="a11" id="a11" onChange={() => changeInput(document.fluteForm.a11.checked, 'a11')} />
              <input type="checkbox" name="a12" id="a12" onChange={() => changeInput(document.fluteForm.a12.checked, 'a12')} />
              <input type="checkbox" name="a13" id="a13" onChange={() => changeInput(document.fluteForm.a13.checked, 'a13')} />
              <input type="checkbox" name="a14" id="a14" onChange={() => changeInput(document.fluteForm.a14.checked, 'a14')} />
              <input type="checkbox" name="a15" id="a15" onChange={() => changeInput(document.fluteForm.a15.checked, 'a15')} />
              <button type="button" onClick={() => isItOk()}>Responder</button>

            </form>
            {/* <div>
              <Image src="/images/mano.png" alt="mano" width={210} height={173} />
            </div> */}
          </div>
        </div>
      )}
      <ReactModal
        isOpen={modal}
        className={styles.modal2}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <div className={styles.modal2__atc2}>
          <p className={styles.modal2__time2}>{timer}</p>
          <Image src={exercise.img} alt="play" width={187} height={304} />
          <span className={styles.modal2__note}>{exercise.name}</span>
          <p className={styles.modal2__time}>Visualiza la reprecentacion de la nota</p>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={answersModal}
        className={styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <p>{`Respuesta ${isRight ? 'correcta' : 'incorrecta'}`}</p>
        <Image src={isRight ? '/images/nice.svg' : '/images/fail.svg'} alt="play" width={150} height={150} />
        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_cancel} type="button" onClick={() => finalize()}>Terminar</button>
          {isRight ? (<button type="button" onClick={() => nextExercise()}>Siguiente</button>)
            : (<button type="button" onClick={() => { setAnswersModal(false), setModal(true); onClickReset(); }}>Repetir</button>)}
        </div>
      </ReactModal>
    </div>
  );
}
