/* eslint-disable linebreak-style */
import React, { useState } from 'react';
// import Guitar, { getRenderFingerSpn } from 'react-guitar'
import Guitar, { getRenderFingerRelative } from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import styles from '../styles/Dashboard.module.scss';

export default function GuitarCom() {
  const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0]);
  const { play } = useSound({ fretting: strings, tuning: standard });
  return (
    <div className={styles.courseGuitar__exercise}>
      <Guitar
        renderFinger={getRenderFingerRelative(standard)}
        frets={{ from: 0, amount: 22, }}
        playOnHover
        strings={strings}
        onChange={setStrings}
        onPlay={play}
      />
    </div>
  );
}

