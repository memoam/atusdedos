/* eslint-disable linebreak-style */
import React, { useState } from 'react';

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
    if (count === beatsPerMeasure - 1) {
      console.log(count, 'puto');
      count = 0
    }
    else {
      count += 1;
      console.log(count, 'puto1');
    }
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
    <div>
      <p>{bpm} BPM</p>
      <input
        type="range"
        min="60"
        max="240"
        value={bpm}
        onChange={(e) => setBpm(e.target.value)}
      />
      <button type="button" onClick={() => playing()}>Start</button>
      <button type="button" onClick={() => stop()}>Stop</button>
    </div>
  );
}