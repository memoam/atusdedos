/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Dashboard.module.scss';

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || null;
  if (token === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { token } };
}

export default function MusicalTheory() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu value />
      <div className={styles.main}>
        <p className={styles.main__title}>Teoría musical</p>
        <div className={styles.dashboard}>
          {/* Inicio de elementos de partitura ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Elementos de la Partitura</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Pentagrama</p>
              <p className={styles.dashboard__text_txt}>
                Es el lugar en el que se escriben las notas, se conforma de 5 líneas horizontales paralelas.
                Las líneas se cuentan de abajo hacia arriba.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665284266/teoria_musical/1_1_yvwedk.png" alt="play" width={576} height={175} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Barra Inicial</p>
              <p className={styles.dashboard__text_txt}>
                Se coloca antes de la clave al inicio de la partitura y
                es el elemento que sirve para dividir el pentagrama en compases (un compás es una serie de segundos).
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665284266/teoria_musical/1_2_vrwj6c.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Barra Punteada</p>
              <p className={styles.dashboard__text_txt}>
                Subdivide los compases largos de ritmo complicado en segmentos más pequeños para facilitar la lectura de la partitura.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/barras_punteada-removebg-preview_lqvrcp.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Doble Barra Divisoria y Fin</p>
              <p className={styles.dashboard__text_txt}>
                La doble barra, a diferencia de la linea divisoria, se utiliza para dividir o separar ideas o frases musicales,
                así como hacer cambios de ritmo, armadura, clave y compás.
              </p>
              <p className={styles.dashboard__text_txt}>
                El fin se utiliza para indicar el término de una obra, pieza o canción. En la interpretación musical, se coloca al final del pentagrama.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/barras_doblefin-removebg-preview_pfpguj.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Nos damos cuenta que el fin es la misma figura de la doble barra divisoria. Sin embargo, para poder diferenciarlas, el secreto está en distinguir su posición:
                el
                <span className={styles.dashboard__text_bold}>fin</span>
                se coloca al final de la partitura y la
                <span className={styles.dashboard__text_bold}>doble barra divisoria</span>
                se coloca en cualquier posición dentro de la partitura.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/barra_fin-removebg-preview_ksutx4.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Linea Adicional</p>
              <p className={styles.dashboard__text_txt}>
                Este elemento se utiliza cuando la nota ha rebasado el pentagrama.
                También se utiliza para conocer el nombre de la nota cuando ya no se encuentra en el pentagrama.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/linea_adicional-removebg-preview_zvlb46.png" alt="play" width={701} height={320} />
              </div>
            </div>
          </details>
          {/* fin de elementos de partitura ---------------------------------*/}
          {/* Inicio de seccion de notas ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Sección de Notas</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Notas</p>
              <p className={styles.dashboard__text_txt}>
                Son las figuras que representan los sonidos en el pentagrama.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665632095/teoria_musical/figutas-musicales_vlj2lp.png" alt="play" width={500} height={316} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Notas Musicales</p>
              <p className={styles.dashboard__text_txt}>
                Son el nombre que reciben los sonidos segün su altura o gravedad.
                Los nombres son:
              </p>
              <span className={styles.dashboard__text_bold}>DO RE MI FA SOL LA SI DO</span>
              <p className={styles.dashboard__text_txt}></p>
              <p className={styles.dashboard__text_txt}>
                Esto quiere decir que DO es más grave que RE y MI es más agudo que RE, etc.
                Entonces, la diferencia entre una nota y una nota musical es que las
                <span className={styles.dashboard__text_bold}>notas</span>
                son las
                <span className={styles.dashboard__text_bold}>figuras que representan los sonidos</span>
                y las
                <span className={styles.dashboard__text_bold}>notas musicales</span>
                son los
                <span className={styles.dashboard__text_bold}>nombres de los sonidos.</span>
              </p>
            </div>
          </details>
          {/* fin de seccion de notas---------------------------------*/}
          {/* Inicio de seccion de claves---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Sección de Claves</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Claves Musicales</p>
              <p className={styles.dashboard__text_txt}>
                Las claves son el elemento que le dará su nombre a las notas (figuras que representan
                los sonidos), en el pentagrama son tres principales:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665342138/teoria_musical/clave_musical-removebg-preview_tnqs8t.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Entonces explicado de otra forma:
              </p>
              <p className={styles.dashboard__text_txt}>
                Las claves definen el rango tonal o tesitura del pentagrama. La clave es normalmente el símbolo que se representa más a la izquierda del pentagrama.
                Puede haber claves adicionales en medio para indicar un cambio de registro para instrumentos con rango amplio.
                También existe una clave para los instrumentos de percusión, también se le conoce como llave.
              </p>
              <p className={styles.dashboard__text_subTitle}>Clave Neutral</p>
              <p className={styles.dashboard__text_txt}>
                Utilizado para instrumentos de percusión. Cada línea puede representar un instrumento de percusión dentro de un conjunto, como en una batería.
                Dos estilos diferentes de clave neutral aparecen en la imagen. también puede ser representada con una sola línea para cada instrumento de percusión.
                también tenemos alteraciones en las claves también se les conoce como claves de octavas.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665342846/teoria_musical/clave_neutral-removebg-preview_pmuzlr.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Clave de Octavas</p>
              <p className={styles.dashboard__text_txt}>
                Las claves de sol y fa también pueden ser modificadas por los números de octavas. Un número ocho o quince por encima de una clave eleva el rango de una a dos octavas, respectivamente.
                De igual manera, un numero ocho o quince por debajo de una clave reduce el rango de una a dos octavas, respectivamente.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665343203/teoria_musical/clave_octava-removebg-preview_oopmje.png" alt="play" width={201} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Estas son pues las claves que existen en la música.
              </p>
              <p className={styles.dashboard__text_txt}>
                Entonces continuemos explicando las tres principales, es importante poner mucha atención pues en este momento vamos a aprender como leer una partitura.
                Entonces se dice que sol va en segunda línea porque se comienza a formarse a partir de esta línea del pentagrama:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665343645/teoria_musical/clave_octavasol-removebg-preview_acnnoa.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Lo mismo seria con las demás claves para conocer los nombres en las posiciones.
              </p>
              <p className={styles.dashboard__text_txt}>
                Para la clave de do:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665343948/teoria_musical/clave_octavado-removebg-preview_cclek4.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Para la clave de fa:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665344112/teoria_musical/clave_octavafa-removebg-preview_ewcaqs.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                De esta manera es como vamos a ubicar las posiciones de las notas en cada una de las claves musicales.
                También se utilizan para distinguir la tesitura de cada instrumento o voz, por ejemplo: las voces o tesituras graves corresponde a la clave de fa,
                las tesituras de registro medio corresponden a la clave de do, y las tesituras o registros más agudos corresponden a la clave de sol.
              </p>
              <p className={styles.dashboard__text_txt}>
                Ahora vamos a ubicar las posiciones de las notas en el pentagrama hay que entender que las posiciones
                de las notas son las mismas para todas las claves solo que los nombres cambiaran dependiendo de la clave,
                ahora bien siempre encontraremos notas en medio de una línea y notas entre líneas y notas tocando la 5ta y 1era línea así como con líneas adicionales.
              </p>
              <p className={styles.dashboard__text_txt}>
                <span className={styles.dashboard__text_bold}>Ejemplo:</span>
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665344655/teoria_musical/clave_ascdes-removebg-preview_ggar4h.png" alt="play" width={701} height={251} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Entonces algo muy importante si escribes las notas en el pentagrama sin una clave,
                entonces estas notas no tendrán los nombres de los sonidos, sino solo sus nombres originales como redonda, corchea, etc.,
                por lo que es indispensable, para poder interpretar los nombres de los sonidos (notas musicales), utilizar una clave.
              </p>
              <p className={styles.dashboard__text_txt}>
                Ahora vamos a aprender como se ubican las notas en cada una de las claves.
              </p>
              <p className={styles.dashboard__text_txt}>
                <span className={styles.dashboard__text_bold}>Para realizar el ejercicio es importante tomar en cuenta.</span>
              </p>
              <p className={styles.dashboard__text_txt}>
                En la música tenemos escalas, 2 básicas: la natural y la cromática (que más adelante estudiaremos)
                en este caso utilizaremos solo la natural, do re mi fa sol la si do (se llama natural porque no tiene accidentes musicales).
              </p>
              <p className={styles.dashboard__text_txt}>
                Se le nombra escala a los sonidos conforme van subiendo de intensidad, tenemos la escala ascendente y descendente, las cuales son de la siguiente manera:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665345917/teoria_musical/escala-removebg-preview_ojp7ig.png" alt="play" width={551} height={151} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Esto mismo se aplica al pentagrama, ascendente y descendente, ejemplo:
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665347622/teoria_musical/escala11-removebg-preview_pqgcyn.png" alt="play" width={601} height={251} />
              </div>
              <p className={styles.dashboard__text_txt}>

              </p>
            </div>
          </details>
          {/* fin de seccion de claves---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Sección de Tiempos y Compás</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Compás</p>
              <p className={styles.dashboard__text_txt}>
                El compás es el elemento que nos indica el tiempo en segundos que dura una fracción de la partitura, tenemos 5 tipos basicos:
              </p>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666055083/teoria_musical/4x4-removebg-preview_rrumfu.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Compás 4/4</strong>
                  <p className={styles.dashboard__text_txt}>
                    El compás de 4/4 se define como aquel que divide la linea infinita del pulso en grupos de cuatro tiempos. Cada uno de estos tiempos se identifica con la
                    figura musical de la negra. Es decir, en un compás de 4/4 caben cuatro negras.
                  </p>
                </div>
              </div>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666055178/teoria_musical/4x44-removebg-preview_yjbn34.png" alt="play" width={501} height={231} />
              </div>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666055734/teoria_musical/3x4-removebg-preview_ipx1jr.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Compás 3/4</strong>
                  <p className={styles.dashboard__text_txt}>
                    El compás de 3/4 se define como el compás musical que contiene 3 tiempos, cada uno de los cuales esta formado por una negra.
                  </p>
                </div>
              </div>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666055734/teoria_musical/3x43-removebg-preview_aaanfr.png" alt="play" width={501} height={241} />
              </div>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666056329/teoria_musical/2x4-removebg-preview_vpuqcg.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Compás 2/4</strong>
                  <p className={styles.dashboard__text_txt}>
                    El compás de 2/4 es el que esta formado por dos tiempos, cada uno de ellos a su vez con capacidad para una negra.
                  </p>
                </div>
              </div>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666056329/teoria_musical/2x42-removebg-preview_h6h1iv.png" alt="play" width={501} height={231} />
              </div>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666056882/teoria_musical/compasillo-removebg-preview_ztibg6.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Cuaternario o Compasillo</strong>
                  <p className={styles.dashboard__text_txt}>
                    Es un compás de 4 tiempos, más frecuentemente utilizado para el solfeo.
                  </p>
                </div>
              </div>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666056882/teoria_musical/compdivi-removebg-preview_jyqmo4.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Compas Dividido o alla breve</strong>
                  <p className={styles.dashboard__text_txt}>
                    Todas las notas que sean afectadas por este compás disminuirán su valor en tiempos a la mitad.
                  </p>
                </div>
              </div>
              <div className={styles.dashboard__definitionImg}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666057289/teoria_musical/tempo-removebg-preview_nlxiy4.png" alt="play" width={75} height={75} />
                <div>
                  <strong>Marca del Metrónomo</strong>
                  <p className={styles.dashboard__text_txt}>
                    Escrita al principio de una partitura y en el momento de cualquier cambio significativo del tiempo, este símbolo precisamente determina el tempo
                    (tiempo) de la pieza musical asignando la duración absoluta de todas las notas en la partitura. En este ejemplo en particular, se le dice al intérprete que 120 negras caben en un minuto de tiempo.
                  </p>
                </div>
              </div>
              {/*
              <p className={styles.dashboard__text_subTitle}></p>
              <p className={styles.dashboard__text_txt}>
                
              </p>
              <span className={styles.dashboard__text_bold}></span>  
              <p className={styles.dashboard__text_txt}>

              </p>
                */}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
