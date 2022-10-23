/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function UkeleleText() {
  return (
    <div className={styles.dashboard}>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Partes del Ukelele</summary>
        <div className={styles.dashboard__text_body}>
        <p className={styles.dashboard__text_subTitle}></p>
          <p className={styles.dashboard__text_txt}>
          Es importante que para nuestro estudio conocer también todos los elementos que conforman un ukulele es importante que 
          las sepas para que tu avance sea cada vez más efectivo, entonces te presento este maravilloso instrumento.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/partesukele-modified_o7igbn.png" alt="play" width={400} height={450} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Teoria del Ukelele</p>
          <p className={styles.dashboard__text_txt}>
            A continuación se van a mostrar los símbolos que nos ayudaran a entender e interpretar los elementos que componen el ukulele.
          </p>
          <p className={styles.dashboard__text_subTitle}>Simbologia</p>

          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/image-removebg-preview_tqi3fz.png" alt="play" width={300} height={300} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Tenemos los nombres de los sonidos, también se les conoce como notas musicales que son: 
            DO, RE, MI, FA, SOL, LA, SI, DO, estos se aplican y combinan con los símbolos por ejemplo:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/simbo2-removebg-preview_pzmocz.png" alt="play" width={220} height={200} />
          </div>
          <span className={styles.dashboard__text_bold}></span>
          <p className={styles.dashboard__text_subTitle}>SIMBOLOGIA INGLESA</p>
          <p className={styles.dashboard__text_txt}>
            Esta simbología nos ayudara a memorizar más fácil todos los acordes y las combinaciones que haremos con cada uno de los símbolos. Se descifra de la siguiente manera:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/simbo3-removebg-preview_sbt2hm.png" alt="play" width={300} height={250} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Es muy importante que todo esto lo sepas de memoria, ya que esto te facilitara todo a la hora de estar ejecutando ya el instrumento, repásalo constantemente es muy importante.
          </p>
          <p className={styles.dashboard__text_subTitle}>CUERDAS</p>
          <p className={styles.dashboard__text_txt}>
            Las cuerdas en el ukulele se cuentan de abajo hacia arriba, de la más delgada hasta la más gruesa, como se muestra en el ejemplo siguiente:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553138/Ukelele/cuerdas-modified_jzghmv.png" alt="play" width={600} height={230} />
          </div>
          <p className={styles.dashboard__text_txt}>
          Pero también cada cuerda tiene su propio nombre como lo muestra el anterior ejemplo, 
          esto nos sirve para poder ubicar también las notas en el diapasón, así como facilitar la técnica de la tablatura, 
          también nos facilitara hacer escalas, así como tocar también e interpretar una partitura.
          </p>
          <p className={styles.dashboard__text_subTitle}>MANOS</p>
          <p className={styles.dashboard__text_txt}>
            Las manos son nuestras principales herramientas para poder tocar la Ukulele, debes cuidarlas, un consejo muy valioso es: 
            después de ensayar no debes mojártelas ya que pueden dañar tu capacidad y rapidez a la hora de ensayar.
          </p>
          <p className={styles.dashboard__text_txt}>
            Entonces vamos a conocer la interpretación de las manos El ukulele, será de la siguiente manera: 
            Las manos las vamos a dividir en 2 partes como se muestra el siguiente ejemplo:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/rasgueo-removebg-preview_vfuqld.png" alt="play" width={550} height={300} />
          </div>
          <p className={styles.dashboard__text_txt}>
            A la mano derecha le vamos a llamar rasgueo, porque es la mano con la que vamos a tocar las cuerdas del ukulele, así como se muestra en la imagen.
          </p>
          <p className={styles.dashboard__text_txt}>
            A la mano izquierda a cada uno de los dedos le vamos a poner un número y su respectivo nombre a cada dedo, como se muestra en la imagen.
          </p>
          <p className={styles.dashboard__text_txt}>
            En este manual vamos a conocer básicamente todos los elemento básicos que nos ayudaran a comenzar a tocar, por lo tanto comenzaremos con los 
            círculos mayores, la razón de esto en mi humilde opinión, nos ayudaran a mejorar de una manera más completa y rápida la técnica para tocar 
            el ukulele, esto es tanto como acostumbrarnos a coordinar las dos manos al mismo tiempo, así como ver una tablatura, letra de alguna canción, 
            y sobre todo a tocar y cantar al mismo tiempo.
            Entonces vamos a conocer algunas definiciones que nos ayudaran a entender mejor los elementos que vamos a interpretar.
          </p>
          <p className={styles.dashboard__text_subTitle}>DEFINICIONES</p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Ciculo:</span>
            Es el conjunto de 4 acordes que se repiten constantemente, su estructura es: 1 tono mayor, 2 tonos menores, 1 tono séptimo.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Acorde:</span>
            Es una figura que representa un sonido o nota musical, se forma con 2 o más sonido (también se le conoce como armonía).
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Escala:</span>
            Las escalas son la base de toda la música a continuación conocerás las dos principales.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Natural:</span>
            DO RE MI FA SOL LA SI DO
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Cromatica:</span>
            DO, DO#, RE, Mib, MI, FA, FA#, SOL, SOL#, LA, Sib, SI DO
          </p>
          <p className={styles.dashboard__text_txt}>
            Muy bien felicidades por tu avance, ahora una vez terminados y conocidos todos los elementos básicos para comenzar a 
            interpretar la teoría del ukulele por fin ahora ya vamos a comenzar a ejecutar todo lo aprendido.
          </p>
          <span className={styles.dashboard__text_bold}></span>
          <p className={styles.dashboard__text_txt}>
            
          </p>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Indroduccion a los Circulos Mayores</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
          <p className={styles.dashboard__text_txt}>
            El ukulele es uno de los instrumentos más fáciles de aprender, muchos maestros de música así lo consideran, 
            pero también hay que tomar en cuenta que para poder aprender música y cualquier instrumento es muy importante la constancia, 
            la paciencia, y la perseverancia, si alguno de estos elementos falta, tu aprendizaje se volverá muy frustrante y complicado, 
            entonces mejor vamos a disfrutar el universo tan maravilloso que compone este hermoso instrumento.
          </p>
          <p className={styles.dashboard__text_txt}>
            Muy bien, una vez dicho todo esto comencemos pues con la primera parte de tu estudio que serán los círculos mayores.
          </p>
            Antes de comenzar con este círculo explicare la manera correcta de cómo se debe sujetar el ukulele, para esto toma en cuenta los siguientes pasos:
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Siéntate de preferencia en una silla que no tenga respaldos para las manos, y colócate al borde de la misma.
          </p>
          <p className={styles.dashboard__text_txt}>
            2.- Coloca el ukulele en tu pierna derecha descansándola en la parte inferior de la misma.
          </p>
          <p className={styles.dashboard__text_txt}>
            3.- Coloca la mano derecha (rasgueo) por encima del ukulele colocando el dedo pulgar unido al índice y colocando los 3 dedeos 
            restantes unidos al mismo y estos a la altura de la boca del mismo.
          </p>
          <p className={styles.dashboard__text_txt}>
            4.- Coloca la mano izquierda en la parte ondulada del mástil, colocando el dedo pulgar en la parte superior del mismo y los otros 4 
            dedos por la parte inferior del mismo, de tal manera que queden de frente con el diapasón, es importante entender que el ukulele está 
            diseñado de tal manera que nuestra mano amolde perfectamente con la parte curveada del mástil.
          </p>
          <p className={styles.dashboard__text_txt}>
            5.- Recuerda no inclinar el ukulele para que sea más sencillo sujetarlo.
          </p>
          <p className={styles.dashboard__text_txt}>
            Muy bien estamos listos para comenzar. A continuación te voy a mostrar un ejemplo de las figuras que vamos a utilizar para interpretar los círculos.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666553139/Ukelele/c_-removebg-preview_fzgzxh.png" alt="play" width={580} height={250} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Esta figura representa el ukulele, entonces vamos a tomar en cuenta lo siguiente:
          </p>
          <p className={styles.dashboard__text_txt}>
            • Los trastes se cuentan de la cabeza del ukulele hacia adentro como lo muestra la figura.
          </p>
          <p className={styles.dashboard__text_txt}>
            • Recuerda que las cuerdas se cuentan de abajo hacia arriba de la más delgada a la más gruesa como lo muestra la figura.
          </p>
          <p className={styles.dashboard__text_txt}>
            • Para interpretar los acordes vamos a colocar un punto, en el número de traste, en el número de cuerda, con el número de 
            dedo con el que tienes que pisar como lo muestra la imagen.
          </p>
          <p className={styles.dashboard__text_txt}>
            • Y también vamos a colocar el nombre del acorde que se está tocando como lo muestra la imagen.
          </p>
          <p className={styles.dashboard__text_txt}>
            Ahora si vamos a comenzar con los círculos.
          </p>
          <p className={styles.dashboard__text_subTitle}>Circulo de Do Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555862/Ukelele/doMay-removebg-preview_znilap.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Re Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555868/Ukelele/reMay-removebg-preview-removebg-preview_h2odqi.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Mi Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555862/Ukelele/miMay-removebg-preview_jyw8rr.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Fa Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555868/Ukelele/faaMay-removebg-preview-removebg-preview_sxztww.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Sol Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555868/Ukelele/solMay-removebg-preview-removebg-preview_n6ownp.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de La Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555862/Ukelele/laMay-removebg-preview_ukgjct.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Si Mayor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666555862/Ukelele/siMay-removebg-preview_vasbxm.png" alt="play" width={450} height={350} />
          </div>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Introduccion a los Circulo Menores</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            En esta parte de tu estudio ya deberíamos ir muy avanzado, felicidades si has hecho todo con las indicaciones adecuadas, 
            en dado caso de que tú consideres que no estás listo para avanzar entonces repasa las veces que sea necesario.
          </p>
          <p className={styles.dashboard__text_txt}>
            En esta parte de los círculos menores, ya solo reafirmaremos la técnica y esos pequeños detalles que hemos en dado caso olvidado, 
            lo importante es que después de esta sección vamos ya a poder tocar canciones de una manera fluida.
          </p>
          <p className={styles.dashboard__text_txt}>
            Es importante recordar que la técnica la da la práctica, la constancia en tu estudio es mucho muy importante, entonces aprovecharemos 
            este espacio antes de comenzar con los círculos menores, con un pequeño cuestionario que nos ayudara a checar y evaluar, que tanto hemos aprendido hasta el momento.
          </p>
          <p className={styles.dashboard__text_subTitle}>Circulo de Do Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/doMenor-removebg-preview_ieedby.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Re Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/reMenor-removebg-preview_lpzdqw.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Mi Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/miMenor-removebg-preview_eqpp8n.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Fa Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/faMenor-removebg-preview_lvmgxn.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Sol Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/solMenor-removebg-preview_okdmn2.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de La Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556811/Ukelele/laMenor-removebg-preview_xfhpp8.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Circulo de Si Menor</p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666556812/Ukelele/siMenor-removebg-preview_crz2p7.png" alt="play" width={450} height={350} />
          </div>
        </div>
      </details>
    </div>
  );
}

