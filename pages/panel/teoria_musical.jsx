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
          {/* Inicio de ejemplo ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Elementos de la Partitura</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Pentagrama</p>
              <p className={styles.dashboard__text_txt}>
                Es el lugar en el que se escriben las notas, se conforma de 5 lineas horizontales paralelas. 
                Las lineas se cuentan de abajo hacia arriba.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665284266/teoria_musical/1_1_yvwedk.png" alt="play" width={576} height={175} />  
              </div>
              <p className={styles.dashboard__text_subTitle}>Barra Inicial</p>
              <p className={styles.dashboard__text_txt}>
              Se coloca antes de la clave al inicio de la partitura y 
              es el elemento que sirve para dividir el pentagrama en compases (un compas es una serie de segundos).
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665284266/teoria_musical/1_2_vrwj6c.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Barra Punteada</p>
              <p className={styles.dashboard__text_txt}>
                Subdivide los compases largos de ritmo complicado en segmentos mas pequenos para facilitar la lectura de la partitura.            
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/barras_punteada-removebg-preview_lqvrcp.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Doble Barra Divisoria y Fin</p>
              <p className={styles.dashboard__text_txt}>
                La doble barra a diferencia de la linea divisoria este elemento se utiliza para dividir o separar ideas o frases musicales, 
                asi como hacer cambios de ritmo, armadura, clave y compas.            
              </p>
              <p className={styles.dashboard__text_txt}>
                El fin se utiliza para indicar el término de una obra, pieza o canción. En la interpretación musical, se coloca al final del pentagrama.         
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665335939/teoria_musical/barras_doblefin-removebg-preview_pfpguj.png" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_txt}>
                Nos damos cuenta que el fin es la misma figura de la doble barra divisoria, para poder diferenciarlas, el secreto esta en distinguir su posición en la partitura:
                El fin se coloca al final de la partitura y la doble barra divisoria se coloca en cualquier posición de la partitura.
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
          {/* fin de ejemplo ---------------------------------*/}
          {/* Inicio de ejemplo 2 ---------------------------------*/}
          <details className={styles.dashboard__text}>
            <summary className={styles.dashboard__text_title}>Sección de Notas</summary>
            <div className={styles.dashboard__text_body}>
              <p className={styles.dashboard__text_subTitle}>Notas</p>
              <p className={styles.dashboard__text_txt}>
                Son las figuras que representan los sonidos en el pentagrama.
              </p>
              <div className={styles.dashboard__text_imgs}>
                <Image unoptimized loader={({ src }) => src} src="" alt="play" width={701} height={201} />
              </div>
              <p className={styles.dashboard__text_subTitle}>Notas Musicales</p>
              <p className={styles.dashboard__text_txt}>
                Son el nombre que reciben los sonidos segün su altura o gravedad.
                Los nombres son:
              </p>
              <span className={styles.dashboard__text_bold}>DO RE MI FA SOL LA SI DO</span>  
              <p className={styles.dashboard__text_txt}></p>
              <p className={styles.dashboard__text_txt}>

                Esto quiere decir que do es mas grave que re y mi es mas agudo que re etc.
                Entonces para diferenciar las notas de las notas musicales, se hace de la siguiente manera:
                Las notas son las figuras que representan los sonidos y las notas musicales son los
                Nombres de los sonidos.  
              </p>
            </div>
          </details>
          {/* fin de ejemplo 2---------------------------------*/}
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
                Las claves definen el rango tonal o tesitura del pentagrama. La clave es normalmente el símbolo que se representa mas a la izquierda del pentagrama.
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
                las tesituras de registro medio corresponden a la clave de do, y las tesituras o registros mas agudos corresponden a la clave de sol.
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
                En la música tenemos escalas, 2 básicas: la natural y la cromática (que mas adelante estudiaremos) 
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
        </div>
      </div>
    </div>
  );
}