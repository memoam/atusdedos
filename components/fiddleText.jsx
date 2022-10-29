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
          <p className={styles.dashboard__text_subTitle}>Ejercicio de Arqueo #1</p>
          <p className={styles.dashboard__text_txt}>
            Lo primero que aremos será acostumbrarnos hacer los arqueo de manera correcta recuerda que siempre debe de ir derecho todo el tiempo el arqueo.
          </p>
          <p className={styles.dashboard__text_txt}>
            Comienza haciéndolo despacio hasta que te acostumbres a deslizar el arco de manera correcta, un buen consejo es práctica frente a un espejo todos los días.
          </p>
          <p className={styles.dashboard__text_txt}>
            Sigue estos sencillos pasos.
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Vamos a colocar el talón del arco en la segunda cuerda y vamos a comenzar con el arqueo de 4 tiempos. Esto quiere decir que del talón a la puta debe tener una duración de 4 segundos y de la punta al talón la misma duración. Hacer este ejercicio 15 minutos.
          </p>
          <p className={styles.dashboard__text_txt}>
            2.-De igual manera pero ahora con 2 tiempos y después el de 1, el de ½ etc...
          </p>
          <p className={styles.dashboard__text_txt}>
            Excelente vamos avanzando muy bien. Ahora vamos a conocer la ubicación de las notas en el diapasón del violín.
          </p>
          <p className={styles.dashboard__text_txt}>
            Posición de los sonidos en el diapasón del violín.
          </p>
          <p className={styles.dashboard__text_txt}>
            Muy bien para esto lo vamos a ubicar como primera, segunda, y tercera posición.
          </p>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Posiciones de las Notas en el Violin</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            Antes de comenzar vamos a facilitar la ubicación de las notas colocando dos cintas en el diapasón,
            para que sea más sencillo memorizar las posiciones de las notas así como facilitar que memorices los sonidos
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/posicionnotas-removebg-preview_zvpjm8.png" alt="play" width={500} height={100} /> 
          </div>
          <p className={styles.dashboard__text_txt}>
            Vamos a considerar la escala natural para facilitar la ubicación de las notas.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/doremi-removebg-preview_sbj9zx.png" alt="play" width={300} height={150} /> 
          </div>
          <p className={styles.dashboard__text_txt}>
            Esto mismo se aplica al diapasón del violín. También hay que considerar los dedos con los que vamos a tocar las notas, para lograr una mejor posición. Lo primero será saber los números que tienen los dedos.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/manos-removebg-preview_vpmaqq.png" alt="play" width={400} height={200} />
          </div>
          <p className={styles.dashboard__text_txt}>
            En la siguiente imagen podemos ver el rango de los dedos en el diapasón del violín.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069127/Violin/rango-removebg-preview_hnsd4g.png" alt="play" width={500} height={100} /> 
          </div>
          <p className={styles.dashboard__text_txt}>
            Notamos el rango que abarcan cada uno de los dedos; el dedo 1 abarca de la primera cinta hacia la parte de atrás,
            esto quiere decir que las notas que encontremos en la primera cinta y detrás de la misma se pisan con el dedo uno.
          </p>
          <p className={styles.dashboard__text_txt}>
            El dedo dos abarca las notas que se encuentran en medio de las dos cintas, y el dedo tres abarca las notas que se encuentran en la segunda cinta y fuera de la misma.
          </p>
          <p className={styles.dashboard__text_txt}>
            AHORA VAMOS YA A UBICAR LAS NOTAS EN EL VIOLIN. Toma en cuenta la escala natural para esta posición.
          </p>
          <p className={styles.dashboard__text_subTitle}>Posicion de las Notas en el Diapason del Violin</p>
          <span className={styles.dashboard__text_bold}>Primera Posicion</span>
          <p className={styles.dashboard__text_txt}>
            Notas Naturales:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/notas1-removebg-preview_1_jlkgvw.png" alt="play" width={500} height={100} /> 
          </div>
          <span className={styles.dashboard__text_bold}>Segunda Posicion</span>
          <p className={styles.dashboard__text_txt}>
            Notas Sostenidas:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/notas2-removebg-preview_1_xnckea.png" alt="play" width={500} height={100} /> 
          </div>
          <span className={styles.dashboard__text_bold}>Tercera Posicion</span>
          <p className={styles.dashboard__text_txt}>
            Notas Bemoles:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069126/Violin/notas3-removebg-preview_gupdoi.png" alt="play" width={500} height={100} /> 
          </div>
          <p className={styles.dashboard__text_txt}>
            Entonces estas son las posiciones de las notas en el violín. Una vez las hayas memorizado pasaremos ya a tocar ya las escalas.
          </p>
          <p className={styles.dashboard__text_subTitle}>Escalas. </p>
          <p className={styles.dashboard__text_txt}>
            Las escalas nos ayudaran ya a reforzar de manera concreta la memorización de las notas en el diapasón del violín,
            así como también afianzaremos la técnica para pisar en el mismo.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069127/Violin/escalas-removebg-preview_eihms4.png" alt="play" width={450} height={600} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Practica todos los días estas calas con la mayor velocidad posible para que puedas ir mejorando tu técnica en el violín,
            recuera la práctica hace al maestro. A continuación vamos a ver los arpegios esta técnica nos ayudara a mejorar la velocidad a
            la hora de tocar tu instrumento.
          </p>
          <p className={styles.dashboard__text_subTitle}>Arpegios. </p>
          <p className={styles.dashboard__text_txt}>
            Los arpegios son la técnica que nos ayudara a la velocidad y a la soltura de los dedos pues que en este ejercicio vamos a trabajar
            más aun la velocidad combinando las notas junto con los diversos números de dedos.
          </p>
          <p className={styles.dashboard__text_txt}>
            Enfócate en hacer este ejercicio de una manera muy consciente ya que este te ayudara a mejorar la técnica y la velocidad aunque continuemos
            avanzando te recomiendo seguirlo estudiando, también puede ser un excelente ejercicio de calentamiento antes de comenzar a tocar. Sin más comencemos.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667069127/Violin/arpe-removebg-preview_ijmtwu.png" alt="play" width={350} height={500} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Excelente vamos muy bien. Una vez terminados estos ejercicios estamos listos para continuar con nuestro proceso, ahora ya nos enfocaremos en perfeccionar
            la técnica que estamos utilizando, pero ahora, lo haremos estudiando solo con partituras, es importante tomar en cuenta que leer una partitura
            no es nada sencillo por lo tanto recuerda estar consultando tu manual de teoría musical para que puedas desarrollarte de una manera más eficaz.
          </p>
          <p className={styles.dashboard__text_txt}>
            Recuerda que la música necesita tiempo y constancia entonces nos adentraremos a este mundo fascinante de notas y sonidos. Comencemos pues.
          </p>
        </div>
      </details>
    </div>
  );
}

