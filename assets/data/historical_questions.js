/**
 * BANCO HISTÓRICO DE PRÁCTICA
 * Preguntas seleccionadas de cuadernillos proporcionados por el estudiante.
 * Se conservan como material académico con atribución de fuente.
 * No representan la estructura actual del examen.
 */
const HISTORICAL_QUESTIONS = [
  {
    id:"hist-mat-2018-02", subject:"matematicas", subtopic:"Porcentajes y variación",
    competency:"Formulación y Ejecución", difficulty:"Media",
    context:"Una persona que vive en Colombia tiene inversiones en dólares en Estados Unidos, y sabe que la tasa de cambio del dólar respecto al peso colombiano se mantendrá constante este mes, siendo 1 dólar equivalente a 2.000 pesos colombianos y que su inversión, en dólares, le dará ganancias del 3 % en el mismo periodo. Un amigo le asegura que en pesos sus ganancias también serán del 3 %.",
    question:"La afirmación de su amigo es",
    options:[
      {key:"A",text:"correcta, pues, sin importar las variaciones en la tasa de cambio, la proporción en que aumenta la inversión en dólares es la misma que en pesos."},
      {key:"B",text:"incorrecta, pues debería conocerse el valor exacto de la inversión para poder calcular la cantidad de dinero que ganará."},
      {key:"C",text:"correcta, pues el 3 % representa una proporción fija en cualquiera de las dos monedas, puesto que la tasa de cambio permanecerá constante."},
      {key:"D",text:"incorrecta, pues el 3 % representa un incremento, que será mayor en pesos colombianos, pues en esta moneda cada dólar representa un valor 2.000 veces mayor."}
    ],
    correct:"C",
    explanation:"Con una tasa de cambio constante, un incremento porcentual del 3 % en dólares se conserva como incremento porcentual al expresar la inversión en pesos.",
    tip:"Distingue una cantidad absoluta de una proporción porcentual.",
    source:"cuadernillo_icfes_2018",
    source_basis:"ICFES, Cuadernillo de preguntas Saber 11°, Prueba de matemáticas, noviembre de 2018, pregunta 2. Uso académico."
  },
  {
    id:"hist-mat-2018-05", subject:"matematicas", subtopic:"Razones y costos",
    competency:"Formulación y Ejecución", difficulty:"Media",
    context:"Para capacitar en informática básica a los trabajadores de algunas dependencias de una empresa, se contrata una institución. El módulo II, Procesador de texto, tiene una intensidad de 30 horas y un valor de $30.000 por hora. Cada curso debe tener mínimo 20 y máximo 30 personas.",
    question:"Si se les cobrara a los 50 trabajadores de la dependencia “Recursos Humanos” la capacitación del módulo II, y todos pagaran el mismo valor, ¿cuánto debería pagar cada uno por esa capacitación?",
    options:[
      {key:"A",text:"$18.000"},
      {key:"B",text:"$36.000"},
      {key:"C",text:"$450.000"},
      {key:"D",text:"$900.000"}
    ],
    correct:"B",
    explanation:"Con 50 trabajadores deben organizarse 2 cursos, porque cada curso admite entre 20 y 30 personas. Cada curso cuesta 30 × $30.000 = $900.000; los dos cuestan $1.800.000. Al distribuirlo entre 50 trabajadores, cada uno paga $36.000.",
    tip:"Verifica siempre que la explicación coincida con la clave antes de marcar una pregunta histórica.",
    source:"cuadernillo_icfes_2018",
    source_basis:"ICFES, Cuadernillo de preguntas Saber 11°, Prueba de matemáticas, noviembre de 2018, pregunta 5. Uso académico."
  },
  {
    id:"hist-lec-2010-07", subject:"lectura", subtopic:"Sentido global del texto",
    competency:"Interpretación", difficulty:"Media",
    context:"Un texto sobre la novela policial discute su popularidad y la crítica que la considera un producto de la cultura de masas. El autor reconoce también que el género ha producido obras maestras.",
    question:"En el texto, con la expresión “...no es preciso demostrar que la novela policial es popular...” se quiere decir que",
    options:[
      {key:"A",text:"es inútil prestarle atención a un género menor."},
      {key:"B",text:"por ser un producto de la “cultura de masas” es muy difundida."},
      {key:"C",text:"su popularidad es tan evidente que no requiere demostración."},
      {key:"D",text:"su popularidad se debe a la “manipulación del gusto”."}
    ],
    correct:"C",
    explanation:"La expresión indica que la popularidad del género es tan evidente que, para el autor, no necesita demostración.",
    tip:"Identifica qué significa la expresión dentro del argumento completo.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 7. Uso académico."
  },
  {
    id:"hist-lec-2010-08", subject:"lectura", subtopic:"Relaciones entre partes del texto",
    competency:"Interpretación", difficulty:"Media",
    context:"En un texto sobre la novela policial, el autor sostiene que algunas manifestaciones del género han sufrido una manipulación de sus recursos y temas, aunque también reconoce obras maestras.",
    question:"En el texto, la referencia a “...una manipulación de la propia novela policial...” está relacionada con",
    options:[
      {key:"A",text:"la reiteración de esquemas seudoartísticos, característica de la cultura de masas."},
      {key:"B",text:"el manejo indiscriminado de temas y mecanismos expresivos propios de dicho género."},
      {key:"C",text:"el desconocimiento de la gran cantidad de obras maestras de este género producidas."},
      {key:"D",text:"la popularización de esta por la ausencia de significación gnoseológica y estética."}
    ],
    correct:"B",
    explanation:"La referencia apunta al uso indiscriminado o degradado de los mecanismos expresivos y temas propios de la novela policial.",
    tip:"Relaciona una expresión con el párrafo donde el autor explica su significado.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 8. Uso académico."
  },
  {
    id:"hist-nat-2010-21", subject:"naturales", subtopic:"Química - Mezclas",
    competency:"Explicación de fenómenos", difficulty:"Baja",
    context:"Un vaso de precipitados contiene agua a una temperatura de 70 °C. Si se le agrega una gota de tinta negra, el agua al poco tiempo adquiere una coloración oscura.",
    question:"Esto probablemente se debe a que las",
    options:[
      {key:"A",text:"moléculas de tinta colorean a cada una de las moléculas de agua."},
      {key:"B",text:"partículas de tinta se distribuyen entre las de agua."},
      {key:"C",text:"moléculas de agua se transforman en tinta."},
      {key:"D",text:"partículas de tinta se introducen dentro de las moléculas de agua."}
    ],
    correct:"B",
    explanation:"La tinta se dispersa en el agua: sus partículas se distribuyen entre las partículas del líquido.",
    tip:"Distingue una mezcla de una transformación química de las sustancias.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 21. Uso académico."
  },
  {
    id:"hist-nat-2010-22", subject:"naturales", subtopic:"Química - Cambios químicos",
    competency:"Explicación de fenómenos", difficulty:"Media",
    context:"Se colocan 0,5 g de almidón puro en un tubo de ensayo y se calienta directamente a la llama. Se obtiene un residuo negro que se determina que es carbono.",
    question:"Por lo anterior, es válido afirmar que en el almidón ocurre un cambio",
    options:[
      {key:"A",text:"químico, porque hay un cambio de estado."},
      {key:"B",text:"físico, porque no se altera su composición."},
      {key:"C",text:"químico, porque cambia su composición."},
      {key:"D",text:"físico, porque hay un cambio de color."}
    ],
    correct:"C",
    explanation:"La formación de carbono y otros productos muestra que la composición de la sustancia original cambió; por eso se trata de un cambio químico.",
    tip:"Un cambio químico implica formación de sustancias con composición diferente.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 22. Uso académico."
  },
  {
    id:"hist-soc-2010-31", subject:"sociales", subtopic:"Espacio, ambiente y territorio",
    competency:"Interpretación", difficulty:"Media",
    context:"Algunos mapas históricos permiten identificar las geoformas costeras en un momento específico. El río Atrato transporta sedimentos hacia la zona costera.",
    question:"La geoforma generada por los sedimentos que arrastra el río Atrato al llegar a la zona costera se denomina",
    options:[
      {key:"A",text:"bahía."},
      {key:"B",text:"delta."},
      {key:"C",text:"ensenada."},
      {key:"D",text:"golfo."}
    ],
    correct:"B",
    explanation:"Un delta se forma cuando un río deposita sedimentos al llegar a una zona costera o a un cuerpo de agua.",
    tip:"Relaciona procesos de sedimentación fluvial con las formas del relieve.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 31. Uso académico."
  },
  {
    id:"hist-soc-2010-32", subject:"sociales", subtopic:"Territorio y sociedad",
    competency:"Interpretación", difficulty:"Media",
    context:"Desde algunas corrientes teóricas, el territorio es concebido como una construcción social.",
    question:"Esto se debe a que",
    options:[
      {key:"A",text:"el hombre define y configura los paisajes."},
      {key:"B",text:"los fenómenos naturales pueden ser controlados."},
      {key:"C",text:"la sociedad modifica y apropia el entorno."},
      {key:"D",text:"las condiciones ambientales determinan la cultura."}
    ],
    correct:"C",
    explanation:"La idea de territorio como construcción social destaca que las sociedades transforman, usan y apropian los espacios.",
    tip:"Busca la opción que explique directamente la relación entre sociedad y territorio.",
    source:"cuadernillo_historico_icfes",
    source_basis:"ICFES, Nucleo común Saber 11 2010, pregunta 32. Uso académico."
  },
  {
    id:"hist-ing-2018-07", subject:"ingles", subtopic:"Part 3 - Conversations", competency:"Comprensión comunicativa", difficulty:"Baja",
    context:"Complete la conversación: “Grandma, shall I hold those bags for you?”",
    question:"Choose the best response.",
    options:[
      {key:"A",text:"I'm not afraid!"},
      {key:"B",text:"What's the matter?"},
      {key:"C",text:"That's fine."}
    ],
    correct:"C",
    explanation:"“That's fine” is a natural response accepting the offer to help carry the bags.",
    tip:"En conversaciones, busca la respuesta que tenga sentido como reacción inmediata.",
    source:"cuadernillo_icfes_2018_ingles",
    source_basis:"ICFES, Cuadernillo de preguntas Saber 11°, Prueba de Inglés, noviembre de 2018, Examen 1, pregunta 7. Uso académico."
  },
  {
    id:"hist-ing-2018-08", subject:"ingles", subtopic:"Part 3 - Conversations", competency:"Comprensión comunicativa", difficulty:"Baja",
    context:"Complete la conversación: “How much is that umbrella?”",
    question:"Choose the best response.",
    options:[
      {key:"A",text:"Anything else?"},
      {key:"B",text:"50 dollars."},
      {key:"C",text:"Cash only!"}
    ],
    correct:"B",
    explanation:"The question asks for a price, so “50 dollars” directly provides the requested information.",
    tip:"Identifica primero qué información solicita la pregunta.",
    source:"cuadernillo_icfes_2018_ingles",
    source_basis:"ICFES, Cuadernillo de preguntas Saber 11°, Prueba de Inglés, noviembre de 2018, Examen 1, pregunta 8. Uso académico."
  }
];