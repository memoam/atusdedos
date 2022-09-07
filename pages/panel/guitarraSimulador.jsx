/* eslint-disable linebreak-style */
import React, { useContext, useMemo, useState } from 'react';
import Guitar, {
  getRenderFingerRelative,
  getRenderFingerSpn,
  spanishTheme,
} from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Dashboard.module.scss';

export default function GuitarSimulator() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0]);
  const { play } = useSound({ fretting: strings, tuning: standard });

  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <Guitar
          renderFinger={getRenderFingerSpn(standard)}
          frets={{
            from: 0,
            amount: 22,
          }}
          playOnHover
          strings={strings}
          onChange={setStrings}
          onPlay={play}
        />
      </div>
    </div>
  );
}