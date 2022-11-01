/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function GuitarText() {
  return (
    <div className={styles.dashboard}>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Introduccion a la Guitarra</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_subTitle}>Para empezar, hay que fijar varios puntos:</p>
          <p className={styles.dashboard__text_txt}>
            1. Lo más conveniente es que utilices una guitarra acústica con cuerdas de nylon (tipo clásica) 
            para aprender. No importa si lo vas a hacer con una eléctrica (si vas a practicar con amplificador 
            siempre en tono limpio) o con una acústica con cuerdas de acero, pero es mejor con la que te recomiendo. 
          </p>
          <p className={styles.dashboard__text_txt}>
            2. Consigue una púa (plumilla) ya que con ella vas a realizar varios de los ejercicios que 
            se encuentran en éste curso. Sería muy conveniente que compraras varias ya que es muy 
            común que se pierdan. Estas las compras en cualquier tienda de accesorios para músicos.
          </p>
          <p className={styles.dashboard__text_txt}>
            3. No trates de ir demasiado rápido, El hecho de que puedas avanzar de una lección a otra de una 
            manera rápida no significa que estás listo para la siguiente. Trata de entender y dominar cada lección que tomes antes de avanzar. 
          </p>
          <p className={styles.dashboard__text_txt}>
            4. "Todo ejercicio debe estudiarse muy lentamente, y una vez dominado puede acelerarse, pero 
            nunca a un tiempo que impida el control de los movimientos". Esta frase es ya muy conocida, es 
            importante que entiendas que cuando se aprende a tocar un instrumento lo más que debes darle 
            importancia es la calidad del sonido que produces, no a la velocidad en que tocas. 
          </p>
          <p className={styles.dashboard__text_txt}>
            5. Y por último, paciencia y constancia. Toma un tiempo determinado cada día (aunque sea 
            corto) y trata de ser consistente. No se vale desanimarse, toma tu propio paso, poco a poco. Trataré 
            de ser lo más motivante posible, pero si no te comprometes contigo mismo a aprender entonces 
            estaremos perdiendo el tiempo. 
          </p>
          <p className={styles.dashboard__text_subTitle}>Estructura y Partes de la Guitarra</p>
          <p className={styles.dashboard__text_txt}>
            Bueno, si queremos aprender a tocar la guitarra tenemos que conocer las partes o elementos que 
            constan de ella. Voy a poner las partes de los dos tipos de guitarras, acústica y eléctrica, al primer 
            tipo es la que recomiendo para aprender.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/partes-modified_fjkzuj.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Cuerdas:</span>
            La guitarra consta de seis cuerdas que toman su nombre según el sonido que producen cuando se 
            tocan al aire (sueltas) y se enumeran de abajo hacia arriba, tomando como referencia la posición 
            normal en que se toma la guitarra para tocar. La cuerda más delgada es la número 1 y la más 
            gruesa es la 6ta. En las clásicas o flamencas, las tres agudas son de nylon monofilamento y las 
            graves tienen un núcleo multifilamento y un entorchado de cobre (plateado, cobre u otra aleación). 
            En las eléctricas las cuerdas tienen núcleo de acero, el entorchado es de aleación níquel/hierro, 
            acero niquelado u otro metal o aleación. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Clavijero:</span>
            Su función es la de sostener y tensar las cuerdas, para ello consta de un mecanismo compuesto por 
            tornillos sinfín que hacen girar un eje donde van enrolladas las cuerdas (estas son las clavijas), 
            estos ejes poseen un agujero central por el que se introduce la cuerda. Algunos constructores 
            utilizan diseños personales que permiten distinguir sus instrumentos. La parte frontal es de madera laminada. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Cejuela:</span>
            Es una pieza de forma alargada que va incrustada en la parte superior del diapasón, entre éste y el 
            clavijero. Normalmente es de hueso o materiales sintéticos duros (tales como el grafito). La 
            cejuela controla la altura de las cuerdas al aire sobre el primer traste y permite la separación de las 
            cuerdas, fijándolas gracias a unas ranuras que lleva en su parte frontal.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Mastil:</span>
            El Diapasón es una pieza de ébano alargada de forma aplanada que cubre el Mástil, éste tiene una 
            o dos ranuras en las que encajan en la caja y es de madera dura de arce, por la parte frontal. Esta 
            dividido en espacios delimitados por unas barras de metal incrustadas llamadas Trastes, 
            generalmente a éstos espacios se les llama igual. Cada espacio (o traste) representa una nota musical. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Cuerpo:</span>
            El Cuerpo o Caja de Resonancia es la parte principal y fundamental de las guitarras acústicas, está 
            formado por la Tapa Superior o Tapa Armónica, la Tapa Inferior y los Costados. Es el encargado 
            de amplificar los sonidos que se producen al tocar las cuerdas, cuando estas se golpean se produce 
            una vibración que es recogida por el puente y se transmite a la tapa del cuerpo, la vibración que 
            produce esta tapa es recogida y amplificada por el cuerpo de la guitarra, sonido que sale a través de la Boca. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Puente:</span>
            El Puente es una pieza alargada y estrecha situada sobre la Tapa Superior a cierta distancia de la 
            Boca. Es donde se fijan las cuerdas antes de colocarlas y tensarlas en el clavijero. El sistema de 
            colocación es similar al del clavijero. Para graduar la altura de las cuerdas en las acústicas en la 
            parte superior del puente nos encontramos con la Selleta (cejuela inferior) y en las eléctricas el 
            mismo puente puede graduarlas, existen 2 principales tipos de puentes: el Tune-O-Matic (usado en 
            las Les Paul) y el de las selletas individuales (usado en las Stratocaster - el que se puede controlar 
            la altura de las cuerdas por separado). Algunas guitarras eléctricas, como las Les Paul, llevan un 
            soporte llamado Cordal que es el que sujeta las cuerdas a la caja de la guitarra. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Pastilla:</span>
            Dispositivo con un bobinado (puede ser de bobina única como en la Strato o de dos como la Les 
            Paul) de alambre delgado que transforma el sonido en señales eléctricas. Las pastillas se controlan 
            mediante un Selector (o conmutador) de dos o tres vías, que permite usar una u otra, o dos a la 
            vez. También tienen un control de volumen y otro de tono. 
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Alma del Mastil:</span>
            Esta las llevan todas las guitarras de cuerdas de acero y se encuentra a lo largo del Mástil, debajo 
            del Diapasón. Esta compensa la curvatura provocada por la tensión de las cuerdas. La varilla se 
            ajusta por medio de una tuerca hexagonal que se encuentra en el extremo más próximo a la caja o 
            del otro extremo del Mástil (en el clavijero - este extremo es ocultado por la Tapa del Alma, que 
            es de madreperla o de algún material sintético). 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/partes1-modified_hculty.png" alt="play" width={650} height={350} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Posicion de Manos</p>

          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Mano Izquierda:</span>
            El dedo pulgar lo colocas detrás del mástil, dejando a los demás 
            dedos libres para pisar las cuerdas. La presión del pulgar se suma a 
            la fuerza de los dedos. La presión la aflojas después de tocar alguna 
            nota o acorde, dejando a la mano moverse con libertad por el mástil. 
            Procura que el dedo pulgar no se cuelgue del brazo de la guitarra. La 
            palma de la mano no debe tocar el mástil de la guitarra, esto es para 
            dejar más libremente a los demás dedos hacer bien su trabajo; de 
            ésta manera le das a tus dedos mucha fuerza para presionar las cuerdas.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/izquierda-removebg-preview_utxjvn.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Mano Derecha:</span>
            Mientras la mano izquierda se encarga de pulsar las notas, la derecha es la que produce directamente el sonido. 
            De ella depende la calidad, el volumen, el timbre y la variedad de sonoridades que el guitarrista puede extraer del instrumento.
            Los dedos tienen que mantener una curvatura flexible. El dedo índice, medio y anular tienen que 
            estar en el mismo plano, manteniendo la misma distancia hacia las cuerdas.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/derecha-removebg-preview_iyftg6.png" alt="play" width={450} height={350} />
          </div>
          <p className={styles.dashboard__text_txt}>

          </p>

        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Afinacion de Guitarra</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            Este es uno de los aspectos más difíciles e importantes para el que comienza a estudiar la guitarra, 
            la afinación. Es importante que tu guitarra este afinada, por el simple hecho de que te será 
            imposible aprender a tocarla sino lo esta. 
          </p>
          <p className={styles.dashboard__text_subTitle}>Notas que Debe de dar Cada Nota de la Guitarra</p>
          <p className={styles.dashboard__text_txt}>
            Antes de empezar a aprender los diferentes métodos de afinar la guitarra, tenemos que conocer 
            que nota debe dar cada cuerda: La cuerda superior (la más gruesa de todas, también llamada 6ta. 
            cuerda) debe dar la nota Mi, las notas de las cuerdas siguientes son La, Re, Sol, Si y la cuerda 
            inferior (la más delgada de todas, también llamada 1ra. cuerda) también al igual que la sexta 
            cuerda debe dar la nota de Mi, pero más aguda claro está.
          </p>
          <p className={styles.dashboard__text_txt}>
            Esa afinación es la estándar, ya que una guitarra puede estar afinada de diferentes formas. 
          </p>
          <p className={styles.dashboard__text_subTitle}>Metodo Basico de Afinacion</p>
          <p className={styles.dashboard__text_txt}>
            Aflojas la sexta cuerda hasta que no dé ningún sonido, y luego la irás subiendo (apretando) muy 
            despacio hasta que dé un sonido claro sin subirla mucho; en ésta disposición se considerará ya 
            afinada la sexta, pasamos entonces a afinar la 5ta. cuerda que después de aflojarla como se hizo 
            con la anterior la irás subiendo muy poco a poco hasta que ésta cuerda tocada al aire (es decir, sin 
            que la pise la mano izquierda) produzca el mismo sonido que el de la sexta cuerda pisada en el 
            5to. traste. Ya afinada la quinta se procederá sucesivamente a la afinación de las demás cuerdas de 
            acuerdo a la tabla siguiente:
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/afinacion1-removebg-preview_xrkoht.png" alt="play" width={650} height={250} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Este método puede ser utilizado en cuanto se tenga un oído musical o un oído entrenado, ya que 
            no teniéndolo puede resultar tardado o incluso molesto, o en todo caso en cuando lo hagamos por entrenamiento de nuestro oído. 
          </p>
          <p className={styles.dashboard__text_subTitle}>Afinacion de una Nota como Referencia</p>
          <p className={styles.dashboard__text_txt}>
            Una de las formas comunes de afinar la guitarra es tratando de igualar las notas equivalentes que 
            debe producir cada cuerda de tu guitarra con otro instrumento afinado, ya sea un piano u otra 
            guitarra. Antes de empezar a afinar una cuerda aflójala y luego la vas apretando hasta que el 
            sonido sea el mismo a del archivo de sonido. El sonido de cada cuerda lo escuchas pasando 
            simplemente la flecha del ratón encima de las viñetas azules (la primera vez tarda un poco). 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/afinacion2-removebg-preview_tjbhh5.png" alt="play" width={750} height={250} />
          </div>
          <p className={styles.dashboard__text_subTitle}>Afinador Electrico</p>
          <p className={styles.dashboard__text_txt}>
            Existen varias formas o métodos de afinar la guitarra, el que yo recomiendo 
            para una persona que esta dando sus primeros pasos, es afinando con un 
            afinador eléctrico. El cual te cuesta un poco más de 300 pesos mexicanos (25 
            dólares). Afinando con él podrás tener más adelante un afinado absoluto (o 
            exacto) sin tener que usarlo cada vez que tu guitarra se desafine
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/afinacion3-removebg-preview_fbjtdr.png" alt="play" width={350} height={250} />
          </div>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Notas y Acordes</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_subTitle}>¿Porque Usar Letras para Nombrar a las Notas y Acordes?</p>
          <p className={styles.dashboard__text_txt}>
            Por que utilizamos el sistema americano que es el que se usa internacionalmente para nombrar las 
            notas y acordes. Aprendiendo éste sistema podremos leer cualquier música escrita para cualquier 
            instrumento. Además, todas las canciones que podamos hallar en la Web se manejan por éste método. 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317756/guitarra/nota1-removebg-preview_1_m9djzf.png" alt="play" width={350} height={150} />
          </div>
          <p className={styles.dashboard__text_txt}>
            En el sistema americano de notación éstas 7 notas toman el nombre de las 7 primeras letras del 
            alfabeto, pero empezando por la nota LA que es la que sirve de base para la afinación de todos los instrumentos. 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317756/guitarra/nota2-removebg-preview_mpkfzn.png" alt="play" width={350} height={250} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317756/guitarra/nota3-removebg-preview_uwtpfe.png" alt="play" width={650} height={200} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Por el momento sólo debes saber que todos estos tipos de cifrados (m, 7, m7, b y #) son 
            simplemente acordes diferentes pero todos sobre la base de un acorde, en este ejemplo de Sol
          </p>
          <p className={styles.dashboard__text_subTitle}>Estructura de la Tablatura</p>
          <p className={styles.dashboard__text_txt}>
            Está integrada por 6 líneas que representa las seis cuerdas de la Guitarra. La línea de arriba 
            representa la primera cuerda, o la más delgada de la Guitarra, mientras que la línea de abajo 
            representa la sexta, o la más gruesa de la Guitarra. Una línea vertical indica el principio o final de 
            un compás y la doble línea vertical indica el final de la tablatura. Como se puede ver en el ejemplo: 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317756/guitarra/nota4-removebg-preview_czg5qd.png" alt="play" width={750} height={200} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Las letras e, B, G, D, A y E indican el nombre de la nota que produce la cuerda tocada al 
            aire, de la más delgada a la más gruesa. La 'e' minúscula es la nota de Mi pero más aguda 
            (dos octavas más). A veces se ven éstas letras en las tablaturas y otras veces no. La razón 
            de que no las lleva es que esta es la afinación estándar y se da por entendido que es de esta 
            forma. 
          </p>
          <p className={styles.dashboard__text_subTitle}>Formas de Agarrar la Pua</p>
          <p className={styles.dashboard__text_txt}>
            Toma tu púa y sostenla entre tus dedos pulgar e índice de tu mano derecha (izquierda si eres 
            zurdo), coloca el lado puntiagudo de la púa enfrente de las cuerdas. Los otros tres dedos deben 
            estar curvados hacia adentro. Esa es la manera estándar y la más lógica para sostener la púa. 
            Algunos guitarristas lo hacen diferente: unos las sostienen entre los dedos pulgar y medio, otros 
            usan los dedos pulgar, índice y medio. Si tu tienes una manera más cómoda de agarrarla, entonces adelante.
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/pua1-removebg-preview_c5abvt.png" alt="play" width={350} height={250} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/pua2_bxchgy.png" alt="play" width={350} height={250} />
          </div>
          <p className={styles.dashboard__text_txt}>
            Existen cuatro formas de ataque (golpes) de la púa: Golpe Ascendente, Descendente, Alternado y 
            el Económico. El plumilleo (golpe o ataque) hacia arriba se representa en la tablatura así (v), y el 
            plumilleo hacia abajo así (^). Mueve tu muñeca cada vez que des un plumilleo, debes tener tu 
            muñeca relajada. 
          </p>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/pua3-removebg-preview_ikhqry.png" alt="play" width={650} height={250} />
          </div>
          <p className={styles.dashboard__text_txt}>
            A la vez que toques con ella podrás eliminar la tensión que produce el tener que agarrala
            fuertemente para que no cambie de posición mientras punteas las cuerdas, y controlar esa 
            relajación para que no se te vaya de la mano. 
          </p>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Circulo Armonico</summary>
        <div className={styles.dashboard__text_body}>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/do-removebg-preview_iz2fyy.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/re-removebg-preview_zwxpdu.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/mi-removebg-preview_aflkuu.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/fa-removebg-preview_hunr5k.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/sol-removebg-preview_pfadtt.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317019/guitarra/la-removebg-preview_dm44wx.png" alt="play" width={450} height={350} />
          </div>
          <div className={styles.dashboard__text_imgs}>
            <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1667317020/guitarra/si-removebg-preview_astquy.png" alt="play" width={450} height={350} />
          </div>
        </div>
      </details>
    </div>
  );
}

