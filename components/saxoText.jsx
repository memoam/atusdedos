/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function SaxoText() {
  return (
    <div className={styles.dashboard}>
      {/* Inicio de ejemplo ---------------------------------*/}
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Titulo</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_subTitle}>Subtitulo</p>


          {/* parrafo ---------------------------------*/}
          <p className={styles.dashboard__text_txt}>
            texto ejemplo
            <span className={styles.dashboard__text_bold}>negritas</span>
            mas texto
          </p>
          {/* fin parrafo ---------------------------------*/}


          {/* Bloque de imgd ---------------------------------*/}
          <div className={styles.dashboard__text_imgs}>
            <Image src="/images/g_a1.png" alt="play" width={550} height={250} />
            <Image src="/images/nice.svg" alt="play" width={150} height={150} />
          </div>
          {/* Bloque de imgd ---------------------------------*/}

        </div>
      </details>
      {/* fin de ejemplo ---------------------------------*/}
    </div>
  );
}

