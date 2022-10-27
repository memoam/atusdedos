/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.scss';

export default function FluteText() {
  return (
    <div className={styles.dashboard}>
      
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Introduccion a la Flauta</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_subTitle}>Tipoas de Flauta</p>
          <p className={styles.dashboard__text_txt}>
            <span className={styles.dashboard__text_bold}>1.- La Flauta de Pico:</span>
            También denominada flauta dulce se usa para el inicio de la práctica musical estudiantil y para la ejecución de música renacentista y barroca.
            La flauta de pico común es un tubo con 8 o 9 orificios
          </p>
          <p className={styles.dashboard__text_txt}>
            Dentro de esta división tenemos una subdivisión que son las llamadas flautas con muesca. En el mundo entero tenemos 
            diversos tipos de flautas de pico, desde la quena usada en la región de los Andes hasta el shakuhachi japonés tallado en bambú.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>

          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>2.- Flautas Oblicuas:</span>
            Son las de más simple fabricación. Es un tubo con ambos extremos abiertos y dotado de orificios para los dedos. 
            En Europa tenemos una gran variedad de flautas oblicuas desde flautas rumanas hasta flautas griegas.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>3.- La Flauta Traversa</span>
            Es un tubo que se toca de forma horizontal sosteniendo la parte superior con la mano izquierda y la última parte con la mano derecha. 
            Existen flautas traversas de distintos materiales alrededor del mundo como la flauta india y el dae - gum (flauta coreana) que son talladas en bambú.
          </p>
          <p className={styles.dashboard__text_txt}>
            La flauta traversa tomó gran importancia entre los años 1650 y 1750 en la época barroca donde crearon bellísimas piezas especialmente para 
            este instrumento. En este periodo la flauta traversa lleva la delantera del restos de flautas y logra ocupar el puesto número uno.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Caracteristicas Generales del Instrumento: </span>
            A continuación detallaremos las generalidades más importantes de la flauta traversa que todo instrumentista debe conocer para la ejecución.
          </p>
          <p className={styles.dashboard__text_txt}>
            La flauta traversa es un instrumento de 71 cm de largo y con un peso aproximado, dependiendo de su material de construcción, de 680 g.
            De la amplia familia de las traversas, la más usada se encuentra en la afinación de C5 y su tesitura se encuentra entre un C4 hasta un D7, 
            pero su registro de uso más común se encuentra entre el D4 y el A6.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Calidades del Registro: </span>
           Dentro de la tesitura de la flauta traversa podemos encontrar varios colores los cuales se pueden explotar de mejor manera 
           si se tiene un conocimiento previo de lo que se está tocando. En el siguiente cuadro encontramos la tesitura de la flauta dividido por características del registro.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
            La flauta traversa estuvo elaborada de madera en sus inicios. Actualmente, el material más usado es el metal, pero también se usan materiales 
            como plata, platino, e inclusive oro, el cual le da mayor brillantez al timbre.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Partes del Instrumento: </span>
            Se divide principalmente en tres partes a ser armadas: cabeza, cuerpo y pie. A su vez estas partes grandes tienen sus subdivisiones como 
            observamos en el siguiente cuadro:
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Digitaciones: </span>
            Este instrumento funciona por un mecanismo de llaves. Cada dedo de la mano excepto el pulgar derecho acciona una llave en especial, 
            mientras que algunos dedos tienen a cargo el trabajar con más de una llave.
          </p>
          <p className={styles.dashboard__text_txt}>
            Al cerrar o abrir estas llaves en un determinado orden y con el soplo del aire a través de la embocadura es como se van produciendo 
            los sonidos. En el siguiente cuadro podremos observar cómo se producen todos los sonidos del registro de una flauta en DO:
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>La Respiracion</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            En este punto trataremos de manera general el proceso de la respiración ya que todo instrumentista de viento necesita conocer el pilar fundamental de su ejecución.
          </p>
          <p className={styles.dashboard__text_txt}>
            La respiración es el proceso fisiológico que realizamos todos los seres vivos en el cual inhalamos oxígeno y exhalamos dióxido de carbono. 
            A continuación se detallan las partes del sistema respiratorio:
          </p>
          <p className={styles.dashboard__text_subTitle}>Anatomia y Fidiologia del Sistema Respiratorio.</p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Cavidades Nasales: </span>
            Son dos orificios que se encuentran en medio del rostro por los cuales ingresa el aire en el momento de la inhalación.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Laringe: </span>
            Es un órgano con forma de pirámide triangular y que posee unos pliegues ventriculares debajo de los cuales se encuentran las cuerdas vocales.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Tráquea: </span>
            Tiene forma de tubo y está formado por una serie de semi-anillos cartilaginosos.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Bronquios: </span>
            La tráquea se bifurca en dos bronquios, derecho e izquierdo, los cuales penetran los pulmones.
          </p>
          <p className={styles.dashboard__text_txt}>
          <span className={styles.dashboard__text_bold}>Pulmones: </span>
            Son los órganos esenciales en el proceso de la respiración y ocupan las zonas laterales del tórax. Su función principal es la del intercambio de gases con la atmósfera.
            Aqui es donde el aire se purifica para llevar el oxígeno a la sangre.
          </p>
          <p className={styles.dashboard__text_subTitle}>La Respiracion en el Instrumento de Viento.</p>
          <p className={styles.dashboard__text_txt}>
            La respiración es fundamental en todo flautista, el buen control de ella será una base segura para una buena ejecución. 
            Este proceso en el instrumentista de viento es diferente de la que comúnmente realizamos casi de manera inconsciente.
          </p>
          <p className={styles.dashboard__text_txt}>
            En él este proceso debe tener consciencia y concentración total de lo que se está haciendo y de cómo se lo está haciendo. 
            Solo una respiración preparada es la que puede permitir al flautista explotar al máximo sus capacidades.
          </p>
          <p className={styles.dashboard__text_txt}>
            La inspiración debe ser corta, sin producir ningún sonido y debe ser efectuado por la nariz y por la boca; esto nos permitirá llenar de más aire nuestros pulmones en corto tiempo.
          </p>
          <p className={styles.dashboard__text_txt}>
            Una vez que los pulmones estén llenos de aire el diafragma deberá comprimirse para poder sostener este aire a lo largo de toda la frase 
            que se esté ejecutando. Al ir subiendo el diafragma a su posición normal ayudará a ejercer una presión en el aire al momento de ser expulsado. 
            El poder controlar bien esta presión del diafragma es lo que permitirá al flautista dosificar la cantidad necesaria de aire para cada nota.
          </p>
          <p className={styles.dashboard__text_txt}>
            En todo momento de la ejecución, la garganta y la cavidad bucal se deben encontrar expandidas similar al proceso de un bostezo; el mentón debe encontrarse relajado y el cuello y la cabeza rectos, nunca colocados hacia adentro.
            Esto permitirá la exhalación del aire sin obstáculos a través del sistema respiratorio para llegar de la manera más natural a través de nuestros labios hacia la embocadura del instrumento.
          </p>
          <p className={styles.dashboard__text_subTitle}>Desarrollo de las Aptitudes del Flautista.</p>
          <span className={styles.dashboard__text_bold}>1.- Objetivos del Estudiante. </span>
          <p className={styles.dashboard__text_txt}>
            El estudiante debe estar consciente de cuál es su nivel musical y cuales 505. las metas que desea alcanzar. El estudio girará en torno a sus 
            objetivos. Si su meta es ser un buen flautista de orquesta el tiempo de estudio y la dedicación al instrumento variará con relación a si usted desea ser un concertante.
          </p>
          <span className={styles.dashboard__text_bold}>2.- Relajacion, Respiracion y Postura.</span>
          <p className={styles.dashboard__text_txt}>
            La relajación es fundamental en todo instrumentista, un cuerpo tenso no ayuda en nada a la musicalidad; además un exceso de 
            tensión en los músculos puede causarnos daño, dolor y muchas molestias. En el caso específico de los instrumentistas de viento, 
            la rigidez es de mucha notoriedad en el sonido. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Cuando estamos tensos, la laringe y la tráquea se contraen de tal forma que el aire que sale de nuestros pulmones encuentra un camino 
            lleno de trabas musculares. La tensión también afecta a los músculos del rostro; sino estamos relajados las mejillas y los labios se 
            tensan y el sonido resultante será delgado, sin color y desafinado.
          </p>
          <p className={styles.dashboard__text_txt}>
            Sin una buena relajación el tiempo de estudio será corto, porque nos cansaremos muy rápido; así que realizar entre 5 y 10 minutos de relajación antes 
            de comenzar a estudiar se convierte en algo fundamental para todo instrumentista.
            De esta manera evitaremos molestias fisicas, podremos tener una mejor expresividad a la hora de tocar y abarcaremos más tiempo de estudio.
          </p>
          <p className={styles.dashboard__text_txt}>
            La respiración es uno de los pilares del instrumentista de viento, de ella depende el fraseo, la afinación y que logremos un bello 
            sonido. Al igual que la relajación, la respiración debe ser practicada a diario para ejercitar el diafragma y para aprender a dosificar el aire. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Dedicar 5 minutos a realizar ejercicios de respiración antes de comenzar a ensayar es muy bueno porque estaremos preparando al diafragma 
            para el trabajo que le tocará hacer durante el tiempo de estudio. Es como el atleta que siempre hace un proceso de calentamiento y estiramiento antes de comenzar a correr.
          </p>
          <p className={styles.dashboard__text_txt}>
            La postura debe ser imprescindiblemente relajada. Si bien existe un modelo de postura cabe aclarar que no es exacta a seguir ya que cada cuerpo es diferente.
            Todo depende de la comodidad y la libertad que el instrumentista logre sentir con ella.
          </p>
          <p className={styles.dashboard__text_txt}>
            Según algunos maestros 10, la postura correcta podría tener entre otros aspectos:
          </p>
          <p className={styles.dashboard__text_txt}>
            - Pies abiertos a la altura de la cadera, con el pie izquierdo un poco más adelante que el derecho.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Espalda recta, sin inclinaciones ni hacia adelante ni hacia atrás.
          </p>
          <p className={styles.dashboard__text_txt}>
            - El torso gira ligeramente hacia la izquierda para que el brazo izquierdo no tenga que extenderse tanto para sostener la flauta.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Hombros relajados y cabeza en alto, llevando la flauta hacia la boca, no la boca hacia la flauta.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Los brazos igualmente deben estar relajados pero no caídos ni apoyados en el cuerpo.
          </p>
          <p className={styles.dashboard__text_txt}>
            - La mano derecha no debe colgarse de la flauta, este error es muy común. El pulgar derecho sostiene a la flauta 
            mientras que el resto de dedos forman un pequeño arco que los deja libres para la ejecución.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Si bien la flauta se sostiene en la primera falange del dedo izquierdo, los dedos deben encontrarse cómodos para llegar al centro 
            de las llaves.
          </p>
          <p className={styles.dashboard__text_txt}>
            Otro error cuando se tiene una flauta de llaves cerradas suele ser que los dedos de la mano izquierda por una mala 
            posición no alcanzan el centro de las llaves e incluso para el meñique es muy difícil alcanzar la llave del sol#.
          </p>
          <p className={styles.dashboard__text_txt}>
            Para que esto no suceda la mano izquierda deberá tomar mayor cercanía a la flauta para que los dedos tengan mejor alcance a las llaves.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Debe haber una inclinación de entre 10 y 15 grados hacia la derecha, esto permitirá que la saliva caiga y no se queden gotas adentro.
          </p>
          <p className={styles.dashboard__text_txt}>
            - La flauta se sostendrá también en el mentón con la presión que ejerce el indice de la mano izquierda.
          </p>
          <p className={styles.dashboard__text_txt}>
            - Labios y mentón deben encontrarse relajados sin ningún tipo de tensión. La cavidad bucal y la garganta deben simular un bostezo 
            para que el aire que sale de los pulmones tenga un mejor camino hacia la embocadura.
          </p>
          <span className={styles.dashboard__text_bold}>3.- Ejercicios Tecnicos.</span>
          <p className={styles.dashboard__text_txt}>
           En general, los ejercicios principales de técnica que el flautista debe practicar a diario son: las notas largas y los ejercicios de 
           digitación. Dentro de cada uno de estos dos grupos de ejercicios tenemos muchas variantes que hacen más entretenido el estudio y que sirven para desarrollar varias capacidades.
          </p>
          <p className={styles.dashboard__text_txt}>
            Las notas largas permiten fundamentalmente para obtener un buen sonido, con Con los ejercicios de digitación se trabaja el ataque, la agilidad de lengua, dedos y la coordinación entre ambos.
          </p>
          <span className={styles.dashboard__text_bold}>4.- Tiempo de Estudio y Tiempo de Descanso.</span>
          <p className={styles.dashboard__text_txt}>
            Al igual que en los puntos anteriores llegamos a la conclusión de que todo depende de los objetivos y las capacidades del estudiante. 
            El estudio debe ser hecho a conciencia y con buena concentración. En el caso de que el estudiante descuide si concentración en actividades externas a la práctica del instrumento el resultado será contraproducente. 
          </p>
          <p className={styles.dashboard__text_txt}>
            En muchos casos este estudio implica tan solo una práctica mecánica con la cual no se obtienen destrezas siendo lo más probable que adquiramos una mala postura.
          </p>
          <p className={styles.dashboard__text_txt}>
            En relación al tiempo mínimo de estudio dos horas comprende un tiempo razonable que puede ser aumentado gradualmente. 
            Los periodos de descanso pueden ser establecidos de acuerdo a la capacidad de concentración pero según los expertos en cualquier materia que se estudie se debe establecer periodos de descanso de 5 minutos cada media hora.
          </p>
          <p className={styles.dashboard__text_subTitle}>Pautas para el Estudio Diario de la Flauta Traversa.</p>
          <p className={styles.dashboard__text_txt}>
            Las pautas sugeridas a continuación comprenden varios tópicos sobre el estudio de la flauta traversa y hemos dividido este contenido de la siguiente manera:
          </p>
          <span className={styles.dashboard__text_bold}>1.- Ejercicios de Relajacion.</span>
          <p className={styles.dashboard__text_txt}>
            Este paso tendría que durar tan solo unos cinco minutos siendo su finalidad evitar la rigidez del cuerpo en general y despejar nuestra 
            mente de situaciones ajenas a la práctica que vamos a realizar. Recordemos que mientras más relajados estemos, mayor tiempo de estudio le podremos brindar al instrumento.
          </p>
          <p className={styles.dashboard__text_txt}>
            A continuación detallaremos 2 ejercicios de relajación que pueden ser alternados.
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Acuéstese boca arriba en un lugar cómodo con el cuerpo completamente recto y sin almohadas. No piense absolutamente en nada, deje los problemas y 
            las preocupaciones fuera de su lugar de estudio. Realice respiraciones las parte del cuerpo que más activas son profundas y exhálelas lentamente hasta 
            que vaya sintiendo como su cuerpo, que debe permanecer inmóvil todo el tiempo, se va soltando. Cuando sienta que ha llegado a un buen estado de relajación y 
            no sienta ninguna tensión muscular, abra lentamente los ojos y levántese suavemente.
          </p>
          <p className={styles.dashboard__text_txt}>
            2.- El siguiente ejercicio es de atención focalizada. Recuéstese en un lugar plano, boca arriba y sin almohada. Inhale profundamente 3 veces por la nariz y exhale lentamente por la boca.
          </p>
          <p className={styles.dashboard__text_txt}>
            Ahora vuelva a la respiración normal, centre la atención en las distintas partes del cuerpo, comenzando por los pies hasta llegar a la cabeza. 
            Deténgase en cada parte y sienta como se relaja. Si desea puede usar una imagen que ayude a realizar este proceso, una muy usada es la esfera dorada. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Se debe visualizar a esta esfera recorriendo lentamente todo el cuerpo haciendo las estaciones necesarias  y enviando una luz dorada. Cuando la estera haya llegado a la cabeza Usted estará totalmente relajado y listo para trabajar. Respire profundamente veces por la nariz y exhale por la boca.
          </p>
          <p className={styles.dashboard__text_txt}>
            Después de haber realizado alguno de estos ejercicios es recomendable mover e cuerpo suavemente a manera de estiramiento, centrándonos en la parte superior del cuerpo.
          </p>
          <p className={styles.dashboard__text_txt}>
            Hombros. Realice movimientos circulares lentos hacia atrás y hacia adelante. Alce los hombros y déjelos caer con todo su peso, repita esto unas cinco veces.
          </p>
          <p className={styles.dashboard__text_txt}>
            Cuello y cabeza.- Realice movimientos circulares lentos, cinco veces hacia la izquierda y cinco veces hacia la derecha. Ahora bote hacia atrás la cabeza, espere Cinco segundos y dejela caer con todo su peso hacia adelante. Repita también este procedimiento cinco veces.
          </p>
          <p className={styles.dashboard__text_txt}>
            Brazos.- Levantelos como queriendo tocar el techo, espere cinco segundos y dejelos caer con todo su peso. Repítalo cinco veces.
          </p>
          <p className={styles.dashboard__text_txt}>
            Muñecas. Haga movimientos circulares lentos, cinco hacia la izquierda y cinco hacia la derecha. Ahora presione suavemente su muñeca hacia atrás y luego hacia adelante, sosteniéndola un instante en cada posición.
          </p>
          <p className={styles.dashboard__text_txt}>
            Manos.- Ábralas, estírelas y ciérrelas en forma de puño. Repita este procedimiento cinco veces.
          </p>
          <p className={styles.dashboard__text_txt}>
            Dedos.- Empújelos suavemente hacia atrás hasta donde lleguen sin producir ningún ruido. Sostenga esta posición un momento y suelte. Repita este procedimiento 3 veces con cada mano.
          </p>
          <p className={styles.dashboard__text_txt}>
            Mejillas, labios y mandíbula.- Abra la boca al máximo como si fuera a gritar, luego suelte y relaje todos los músculos de la cara. Repita esto al menos unas tres veces.
          </p>
          <p className={styles.dashboard__text_txt}>
            Imite el proceso de masticación exagerándolo de tal forma que se muevan las mejillas para que se relajen. Realice este proceso unos diez segundos.
          </p>
          <p className={styles.dashboard__text_txt}>
            Ahora respire profundamente y soltando el aire imite al &quot;relincho de un caballo&quot; mientras canta una nota. Puede realizar esto unas cinco veces.
          </p>
          <span className={styles.dashboard__text_bold}>2.- Ejercicios de Respiracion.</span>
          <p className={styles.dashboard__text_txt}>
            Este punto del estudio diario debe llevarnos entre cinco y diez minutos y debe ser complementado con ejercicio diario que nos brindará mayor capacidad pulmonar.
            Estos ejercicios se los puede realizar previo al estudio y diariamente al menos unas 3 veces, una en la mañana, una en la tarde y una en la noche.
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Recuéstese sobre algo plano, sin almohada y boca arriba. Ponga sus manos sobre su abdomen bajo. Al realizar este ejercicio de respiración va sentir que al contrario de cuando está de pie, el aire llena la parte baja del abdomen.
          </p>
          <p className={styles.dashboard__text_txt}>
            Esta es la respiración correcta para el instrumentista de viento, NUNCA se debe levantar los hombros al respirar. Inhale por la nariz y por la boca, lenta y profundamente, llenando al máximo sus pulmones y sintiendo como se eleva el abdomen para sostener el aire, espere tres segundos y suelte el aire lentamente sintiendo como trabaja el diafragma en controlar y dosificar el aire.
          </p>
          <p className={styles.dashboard__text_txt}>
            2.- Recorte un cuadrado de papel de 4 x 4 cm. Ahora póngase frente a una pared a una distancia de unos veinte centímetros entre ella y sus labios. Inhale profundamente tal como se explica en el punto anterior y sostenga el papel contra la pared tan solo con su emisión de aire. Realice este ejercicio varias veces. Con el tiempo puede ir aumentando el tamaño del cuadrado de papel y la distancia entre usted y la pared.
          </p>
          <p className={styles.dashboard__text_txt}>
            3.- Control de la Permeabilidad Nasal.- Inhale profundamente en cuatro tiempos por la fosa nasal derecha tapando con el pulgar la izquierda. Retenga el aire tapando ambas fosas nasales con el índice y el pulgar, cuente cuatro tiempos más. Destape la fosa nasal izquierda y espire por ella en cuatro tiempos. Realice este mismo proceso ahora inspirando por la fosa nasal izquierda y espirando por la derecha. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Prosiga de este modo varias veces centrando su mente en el proceso de respiración. Este ejercicio es uno de los más antiguos realizados por los Yoghi de la India y sirve también como ejercicio de relajación.
          </p>
          <p className={styles.dashboard__text_txt}>
            El siguiente ejercicio es muy importante porque nos ayuda a fortalecer el diafragma y a poner a trabajar los músculos abdominales a nuestro favor para impulsar el aire y dirigirlo bien hacia la embocadura así que debe ser practicado a diario.
          </p>
          <p className={styles.dashboard__text_txt}>
            Párese relajadamente y abra los pies a la altura de la cadera. Ponga sus manos sobre su abdomen e inhale lenta y profundamente por la nariz sintiendo como se eleva su abdomen. Ahora exhale por la boca de tal manera que el aire sea expulsado en un instante. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Los músculos del abdomen son los que deben impulsar el aire así que deben ser contraídos rápidamente al momento de la expulsión. La sensación es como si se recibiera un pequeño golpe en el abdomen que nos haga expulsar el aire al momento.
          </p>
          <span className={styles.dashboard__text_bold}>2.1.- La respiracion Llevada a la Ejecucion.</span>
          <p className={styles.dashboard__text_txt}>
            Todos los ejercicios que hemos mencionado anteriormente deben ser puestos en práctica al momento de tocar la flauta. Antes de comenzar a ejecutar una escala, 
            estudio u obra; la primera respiración debe ser amplia de tal manera que llene bien los pulmones y que el diafragma descienda para dar un soporte a la columna de aire.
          </p>
          <p className={styles.dashboard__text_txt}>
            En medio de la obra las respiraciones deben ser cortas, insonoras y ser realizadas por nariz y boca para aspirar la mayor cantidad de aire posible en un corto tiempo.
          </p>
          <p className={styles.dashboard__text_txt}>
            No se debe respirar en medio de una frase sino al principio y al final de ella para no cortar la idea. En caso de frases largas en donde el aire no alcanza 
            se puede hacer una ligera respiración en la mitad pero tratando de que no sea notoria para que la idea se mantenga.
          </p>
          <p className={styles.dashboard__text_txt}>
            Respiracion respetando las frases:
          </p>
          <span className={styles.dashboard__text_bold}>Moderato e Tranquillo</span>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <span className={styles.dashboard__text_bold}>Grave</span>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
        </div>
      </details>
      <details className={styles.dashboard__text}>
        <summary className={styles.dashboard__text_title}>Afinacion del Instrumento.</summary>
        <div className={styles.dashboard__text_body}>
          <p className={styles.dashboard__text_txt}>
            La flauta traversa es uno de los instrumentos de más sensible afinación. Al tener la embocadura por fuera de la boca (a diferencia del resto de 
            vientos madera donde la embocadura va dentro de la boca y lo que vibra es una caña o la lengüeta) lo que vibra son los labios.
          </p>
          <p className={styles.dashboard__text_txt}>
            La postura del flautista debe ser estable y segura ya que un ligero movimiento en la embocadura hará que la afinación cambie. 
            Cabe aclarar que estable no hace referencia a estático. Es bastante aburrido ver a un instrumentista tocando sin ninguna expresión corporal. 
          </p>
          <p className={styles.dashboard__text_txt}>
            Esta explicación quedará más clara si Usted observa un video del flautista del grupo Jethro Tull, él se mueve por todos lados en el escenario y su embocadura sigue siendo estable.
          </p>
          <p className={styles.dashboard__text_txt}>
            La afinación de la flauta traversa se controla metiendo o sacando la cabeza del instrumento y metiendo o sacando la embocadura. 
            Mientras más se saque la cabeza más baja será la afinación y viceversa. Mientras más se meta la embocadura más baja será la afinación y mientras más se la exponga hacia afuera más alta será.
          </p>
          <p className={styles.dashboard__text_subTitle}>Ejercicios Tecnicos.</p>
          <p className={styles.dashboard__text_txt}>
            Los ejercicios técnicos son las herramientas que nos ayudarán a construir la obra.
            Un bello sonido y la agilidad en los dedos son los requerimientos que todo instrumentista debe tener.
          </p>
          <span className={styles.dashboard__text_bold}>Ejercicios de Sonoridad.</span>
          <p className={styles.dashboard__text_txt}>
            Todo instrumentista de viento debe trabajar el sonido diariamente. En un instrumento como la flauta traversa el sonido tiende a ser delgado por 
            el tipo de cuerpo que posee, entonces debemos trabajar constantemente para embellecer el sonido. Un hermoso sonido tiene como características la afinación, el dominio de matices, un vibrato controlado y un cuerpo ancho.
          </p>
          <p className={styles.dashboard__text_txt}>
            Si queremos resumir el trabajo de sonoridad en dos palabras estas serían: NOTAS LARGAS.
          </p>
          <p className={styles.dashboard__text_txt}>
            1.- Ejecute notas largas sueltas en orden cromático y comenzando por el B4.
            Hágalo con todo el registro.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
            Excelente trabajo ahora vamos a comenzar de lleno el estudio de la flauta, antes que nada vamos a comenzar trabajando la velocidad 
            así como también las escalas musicales sin más comencemos.
          </p>
          <p className={styles.dashboard__text_subTitle}>Escalas. </p>
          <p className={styles.dashboard__text_txt}>
            Las escalas nos ayudaran va a reforzar de manera concreta la memorización de las notas en la flauta transversal, 
            así como también afianzaremos la técnica para pisar en el mismo y reproducir los distintos sonidos.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
            Practica todos los días estas calas con la mayor velocidad posible para que puedas ir mejorando tu técnica en la flauta, 
            recuera la práctica hace al maestro. A continuación vamos a ver los arpegios esta técnica nos ayudara a mejorar la velocidad a la hora de tocar tu instrumento.
          </p>
          <p className={styles.dashboard__text_subTitle}>Arpegios. </p>
          <p className={styles.dashboard__text_txt}>
            Los arpegios son la técnica que nos ayudara a la velocidad y a la soltura de los dedos pues que en este ejercicio vamos a 
            trabajar más aun la velocidad combinando las notas junto con los diversos números de dedos.
          </p>
          <p className={styles.dashboard__text_txt}>
            Enfócate en hacer este ejercicio de una manera muy consciente ya que este te ayudara a mejorar la técnica y la velocidad aunque continuemos avanzando 
            te recomiendo seguirlo estudiando, también puede ser un excelente ejercicio de calentamiento antes de comenzar a tocar. Sin más comencemos.
          </p>
          <div className={styles.dashboard__text_imgs}>
            {/* img comentada para que no de error
            <Image unoptimized loader={({ src }) => src} src="" alt="play" width={450} height={350} /> */}
          </div>
          <p className={styles.dashboard__text_txt}>
            Excelente vamos muy bien. Una vez terminados estos ejercicios estamos listos para continuar con nuestro proceso, ahora ya nos enfocaremos 
            en perfeccionar la técnica que estamos utilizando, pero ahora, lo haremos estudiando solo con partituras, es importante tomar en cuenta que 
            leer una partitura no es nada sencillo por lo tanto recuerda estar consultando tu manual de teoría musical para que puedas desarrollarte de una manera más eficaz.
          </p>
          <p className={styles.dashboard__text_txt}>
            Recuerda que la música necesita tiempo y constancia entonces nos adentraremos a este mundo fascinante de notas y sonidos. Comencemos pues.
          </p>
        </div>
      </details>
    </div>
  );
}

