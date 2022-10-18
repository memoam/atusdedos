/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function FiddleText() {
  return (
    <div className={styles.dashboard}>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Partes del Violin</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            A continuacion vamos a conocer las partes que conforman el violin, es muy importante que conozcamos a fondo el instrumento que vamos a tocar. 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666058874/Violin/partesViolin-removebg-preview_byj3e9.png" alt="play" width={550} height={260} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Partes del Arco</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666059475/Violin/arco-partes-removebg-preview0111_v7fljr.png" alt="play" width={600} height={230} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Posicion Para Agarrar el Violin</p>
          <p className={styles.dashboard__text_txt}>
            La manera de sostener el violín y de igual forma el arco es una parte importante en la enseñanza del instrumento ya que crea un rango de posibilidades para tener un buena o mala técnica, 
            por lo tanto debe de tener una primordial consideración al empezar el estudio del instrumento. Lo primero que se debe de tomar en cuenta en la posición del violín, es que este debe de 
            sostenerse de tal manera de que los ojos de puedan fijar en la cabeza del violín; y a su vez el brazo izquierdo de debe de acomodar ligeramente hacia adelante para que los dedos se pongan 
            de manera natural y perpendicular en el diapasón. 
          </p>
          <p className={styles.dashboard__text_txt}>
            De mismo modo, es importante que el violín de manera certeza en el cuello, y sea sostenido con el hombro, ya que de lo contrario puede crear desastrosos efectos en su sonido. Debe de ser 
            colocado lo más alto posible, para que el brazo tenga toda la libertad de movimiento y por consiguiente la mano pueda tener libre movimiento en los dedos para poder cambiar de posición con facilidad.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666059975/Violin/posicionviolin-removebg-preview_jg0ub4.png" alt="play" width={500} height={260} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Posicion de la Mano Para el Arco del Violin</p>
          <p className={styles.dashboard__text_txt}>
            Para colocar la mano en el arco es muy sencillo en la parte baja del arco para sostenerlo, después colocar el dedo meñique, el anular, el medio y el indice como se muestra en la imagen. 
            <span className={styles.dashboard__text_bold}>Aplica la postura con la ayuda de un lapiz</span>  
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666060901/Violin/posicionagarre-removebg-preview_sq84zm.png" alt="play" width={550} height={240} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Cuerdas del Violin</p>
          <p className={styles.dashboard__text_txt}>
            Las cuerdas se cuentas de abajo hacia arriba de la más delgada a la más gruesa y tambien tienen su nombre.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666061868/Violin/cuerdas-removebg-preview_cwakyl.png" alt="play" width={350} height={450} />
          </div>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Tecnicas de Arqueo</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            Una vez que hemos aprendido la posición de agarre del violín y del arco así como también las cuerdas
            ahora comenzaremos con los primeros pasos (recuerda ponerle brea a tu arco si no lo haces entonces el arco no producirá el sonido en la cuerda).
          </p>
          <p className={styles.dashboard__text_txt}>
            Iniciaremos tocando la segunda cuerda del violín. Para esto realizaremos los siguientes pasos:
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Colocaremos el talón del arco sobre la segunda cuerda (recuerda agarrar el violín y el arco de manera adecuada).
          </p>
          <p className={styles.dashboard__text_txt}>
            2.- Deslizaremos de manera suave el arco desde el talón hasta la punta del mismo.
          </p>
          <p className={styles.dashboard__text_txt}>
            3.- El movimiento solo debe realizarse con el brazo y la muñeca (no tenses demasiado la muñeca ya que esto producirá ruidos inadecuados al sonido de las cuerdas).
          </p>
          <p className={styles.dashboard__text_txt}>
            4.- Observa que el arco se deslice derecho no debe moverse hacia los lados (procura que el arco no llegue al puente ni al diapasón ya que sino el sonido no será de manera adecuada).
          </p>
          <p className={styles.dashboard__text_txt}>
            Para tocar las demás cuerdas lo que tienes que hacer es colocar el codo a cierta altura por ejemplo:
          </p>
          <p className={styles.dashboard__text_txt}>
            El codo a la altura del hombro a 70 grados nos dará la posición para la cuerda de SOL, al bajarlo un poco aproximadamente a 
            unos 50 grados nos dará la cuerda de RE, al posicionar el codo a unos 30 grados nos dará la cuerda de LA, al posicionar el codo a unos 10 
            grados nos dará la cuerda de MI, esto es muy importante hacerlo bien ya que de ello dependerá que evitemos rosar otras cuerdas que no se estén tocando.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666062517/Violin/tecnica-removebg-preview_oqkepq.png" alt="play" width={450} height={350} />
          </div>
        </div>
      </details>
    </div>
  );
}

