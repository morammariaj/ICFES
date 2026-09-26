/**
 * BANCO DE PREGUNTAS OFICIALES Y ENTRENAMIENTO SABER 11 - ICFES
 */
const QUESTIONS_DATA = [
  {
    "id": "mat-01",
    "subject": "matematicas",
    "subtopic": "Aritmética y Razonamiento Lógico",
    "competency": "Formulación y Ejecución",
    "difficulty": "Media",
    "context": "Un sistema de transporte masivo tiene varias estaciones (E1, E2, ... E10) sobre una avenida en línea recta. En condiciones normales, entre una estación y la siguiente consecutiva, el bus tarda 4 minutos en viajar, y en cada parada donde se detiene permanece exactamente 30 segundos (0,5 minutos). En la ruta R2, el bus únicamente para en E1 (salida), E6 y E10 (llegada).",
    "diagram": "<div class=\"p-3 bg-light rounded text-center my-2 font-monospace\"><span class=\"badge bg-primary me-2\">E1 [Salida]</span> ──(4 min)── E2 ── E3 ── E4 ── E5 ── <span class=\"badge bg-primary mx-2\">E6 [Parada 0.5m]</span> ── E7 ── E8 ── E9 ── <span class=\"badge bg-primary ms-2\">E10 [Llegada]</span></div>",
    "question": "Un usuario que viaja desde E1 hasta E10 en la ruta R2 calcula el tiempo estimado así:\nPaso I: Contó la cantidad de tramos entre estaciones consecutivas que hay en el recorrido total: 10 tramos.\nPaso II: Multiplicó el número obtenido en I (10) por 4 minutos: 40 minutos.\nPaso III: Al resultado anterior le sumó 30 segundos por la parada intermedia en E6: 40,5 minutos.\n¿En qué paso(s) cometió un error el usuario?",
    "options": [
      {
        "key": "A",
        "text": "En el paso I solamente."
      },
      {
        "key": "B",
        "text": "En los pasos I y II solamente."
      },
      {
        "key": "C",
        "text": "En el paso II solamente."
      },
      {
        "key": "D",
        "text": "En los pasos II y III solamente."
      }
    ],
    "correct": "B",
    "explanation": "<b>Análisis paso a paso:</b><br>1. Entre 10 estaciones consecutivas (de E1 a E10) hay <b>9 tramos</b> (E1-E2, E2-E3, ..., E9-E10). El paso I es incorrecto al contar 10.<br>2. Al usar 10 tramos en lugar de 9 en el Paso II, el cálculo del tiempo de viaje fue 10 × 4 = 40 min, en lugar de 9 × 4 = 36 min. Por tanto, el Paso II también es incorrecto por arrastrar y ejecutar el valor errado.<br>3. El Paso III estuvo bien formulado en su lógica sumando 0,5 min por la parada intermedia E6.<br><b>Conclusión:</b> El error está en I y II solamente (Opción B).",
    "tip": "¡Truco ICFES clásico! Para N puntos en fila recta, siempre hay N - 1 intervalos (postes y cercas)."
  },
  {
    "id": "mat-02",
    "subject": "matematicas",
    "subtopic": "Estadística y Probabilidad",
    "competency": "Interpretación y Representación",
    "difficulty": "Baja",
    "context": "En una urna hay 12 bolas de igual tamaño y peso: 5 rojas, 4 azules y 3 verdes. Se extrae una bola al azar.",
    "diagram": "<div class=\"d-flex justify-content-center gap-2 my-2\"><span class=\"badge rounded-pill bg-danger px-3 py-2\">5 Rojas</span><span class=\"badge rounded-pill bg-primary px-3 py-2\">4 Azules</span><span class=\"badge rounded-pill bg-success px-3 py-2\">3 Verdes</span></div>",
    "question": "¿Cuál es la probabilidad de que la bola extraída NO sea de color rojo?",
    "options": [
      {
        "key": "A",
        "text": "5/12"
      },
      {
        "key": "B",
        "text": "7/12"
      },
      {
        "key": "C",
        "text": "4/12"
      },
      {
        "key": "D",
        "text": "3/12"
      }
    ],
    "correct": "B",
    "explanation": "<b>Concepto:</b> Probabilidad del evento complementario P(No Roja) = 1 - P(Roja).<br>Total de bolas = 5 + 4 + 3 = 12 bolas.<br>Bolas que NO son rojas = 4 azules + 3 verdes = 7 bolas.<br>P(No Roja) = Casos favorables / Casos posibles = <b>7/12</b>.<br><b>Trampa común:</b> La opción A (5/12) es la probabilidad de que SÍ sea roja.",
    "tip": "Cuando el ICFES pida 'NO sea', subraya mentalmente la palabra NO para no marcar el evento directo."
  },
  {
    "id": "mat-03",
    "subject": "matematicas",
    "subtopic": "Geometría y Medición",
    "competency": "Formulación y Ejecución",
    "difficulty": "Media",
    "context": "Un parque de forma rectangular mide 40 metros de largo por 30 metros de ancho. El municipio planea construir un sendero peatonal en línea recta que cruce diagonalmente el parque de una esquina a la esquina opuesta.",
    "diagram": "<svg viewBox=\"0 0 200 120\" class=\"mx-auto d-block my-2\" style=\"max-width:240px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;\"><rect x=\"20\" y=\"20\" width=\"160\" height=\"80\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"20\" stroke=\"#e11d48\" stroke-width=\"3\" stroke-dasharray=\"4\"/><text x=\"100\" y=\"115\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e293b\">40 m</text><text x=\"10\" y=\"65\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e293b\" transform=\"rotate(-90 10,65)\">30 m</text><text x=\"105\" y=\"55\" font-size=\"12\" fill=\"#e11d48\" font-weight=\"bold\">Diagonal d</text></svg>",
    "question": "¿Cuál será la longitud exacta del sendero peatonal diagonal?",
    "options": [
      {
        "key": "A",
        "text": "70 metros."
      },
      {
        "key": "B",
        "text": "50 metros."
      },
      {
        "key": "C",
        "text": "60 metros."
      },
      {
        "key": "D",
        "text": "35 metros."
      }
    ],
    "correct": "B",
    "explanation": "<b>Aplicación del Teorema de Pitágoras:</b><br>d² = largo² + ancho² = 40² + 30²<br>d² = 1600 + 900 = 2500<br>d = √2500 = <b>50 metros</b>.<br><b>Atajo mental:</b> Es la terna pitagórica 3 - 4 - 5 multiplicada por 10 (30, 40, 50).",
    "tip": "Aprende las ternas pitagóricas: (3, 4, 5) y (5, 12, 13) con sus múltiplos. Aparecen frecuentemente en el ICFES."
  },
  {
    "id": "mat-04",
    "subject": "matematicas",
    "subtopic": "Álgebra y Funciones",
    "competency": "Argumentación",
    "difficulty": "Media",
    "context": "Una empresa de telefonía ofrece dos planes mensuales:<br>• <b>Plan A:</b> Cargo fijo de $15.000 más $100 por cada minuto consumido.<br>• <b>Plan B:</b> Sin cargo fijo, pero $250 por cada minuto consumido.",
    "question": "Un usuario desea saber a partir de cuántos minutos de consumo mensual le resulta más económico contratar el Plan A que el Plan B. La inecuación correcta y el número de minutos es:",
    "options": [
      {
        "key": "A",
        "text": "15.000 + 100x < 250x, es decir, para más de 100 minutos."
      },
      {
        "key": "B",
        "text": "15.000 + 100x > 250x, es decir, para menos de 100 minutos."
      },
      {
        "key": "C",
        "text": "15.000 + 250x < 100x, es decir, para más de 150 minutos."
      },
      {
        "key": "D",
        "text": "15.000 - 100x < 250x, es decir, para más de 50 minutos."
      }
    ],
    "correct": "A",
    "explanation": "<b>Planteamiento:</b><br>Costo Plan A: 15.000 + 100x<br>Costo Plan B: 250x<br>Para que el Plan A sea más económico (menor costo):<br>15.000 + 100x < 250x<br>15.000 < 250x - 100x<br>15.000 < 150x<br>x > 15.000 / 150 = 100 minutos.<br>Por ende, para más de 100 minutos conviene el Plan A.",
    "tip": "Cuando un plan tiene costo fijo alto pero tarifa por minuto baja, siempre resulta más ventajoso a mayor consumo."
  },
  {
    "id": "mat-05",
    "subject": "matematicas",
    "subtopic": "Estadística Descriptiva",
    "competency": "Interpretación y Representación",
    "difficulty": "Media",
    "context": "Las calificaciones de 5 estudiantes en un examen sobre 100 puntos fueron: 60, 70, 70, 80, 100. El profesor informa que la mediana de las notas es 70 y la media aritmética (promedio) es 76.",
    "question": "Si un sexto estudiante presenta el examen de recuperación y obtiene una calificación de 76 puntos (exactamente igual al promedio inicial), ¿qué ocurre con el nuevo promedio y la nueva mediana del grupo de 6 estudiantes?",
    "options": [
      {
        "key": "A",
        "text": "El promedio aumenta y la mediana disminuye."
      },
      {
        "key": "B",
        "text": "El promedio se mantiene igual (76) y la mediana aumenta a 73."
      },
      {
        "key": "C",
        "text": "El promedio se mantiene igual (76) y la mediana sigue siendo exactamente 70."
      },
      {
        "key": "D",
        "text": "Tanto el promedio como la mediana aumentan 6 puntos."
      }
    ],
    "correct": "B",
    "explanation": "<b>1. Nuevo promedio:</b> Al agregar un valor idéntico a la media (76), el promedio general <b>NO cambia</b> (permanece en 76).<br><b>2. Nueva mediana:</b> Ordenamos los 6 datos: 60, 70, 70, 76, 80, 100.<br>Al ser 6 datos (número par), la mediana es el promedio de las dos posiciones centrales (posición 3 y 4): (70 + 76) / 2 = 146 / 2 = <b>73</b>.<br>Por consiguiente, el promedio se mantiene y la mediana pasa a 73 (Opción B).",
    "tip": "Propiedad clave: Si agregas un dato exactamente igual al promedio, la media se conserva inalterada."
  },
  {
    "id": "mat-06",
    "subject": "matematicas",
    "subtopic": "Porcentajes y Descuentos Sucesivos",
    "competency": "Formulación y Ejecución",
    "difficulty": "Media",
    "context": "Una tienda de ropa deportiva anuncia una liquidación especial con la siguiente promoción: '20% de descuento en toda la tienda y un 10% de descuento adicional sobre el valor ya rebajado al pagar con tarjeta de la tienda'.",
    "question": "Un cliente adquiere una chaqueta cuyo precio original de lista es de $200.000 y paga con la tarjeta de la tienda. ¿Cuál es el precio final que paga y el descuento porcentual único equivalente?",
    "options": [
      {
        "key": "A",
        "text": "Paga $140.000, equivalente a un 30% de descuento total."
      },
      {
        "key": "B",
        "text": "Paga $144.000, equivalente a un 28% de descuento total."
      },
      {
        "key": "C",
        "text": "Paga $150.000, equivalente a un 25% de descuento total."
      },
      {
        "key": "D",
        "text": "Paga $160.000, equivalente a un 20% de descuento total."
      }
    ],
    "correct": "B",
    "explanation": "<b>Descuentos sucesivos (NO se suman directamente):</b><br>1. Primer descuento (20% de 200.000): Queda en el 80% = $200.000 × 0,80 = $160.000.<br>2. Segundo descuento (10% sobre los $160.000): Queda en el 90% = $160.000 × 0,90 = <b>$144.000</b>.<br>3. Descuento total en pesos: $200.000 - $144.000 = $56.000.<br>4. Porcentaje efectivo: (56.000 / 200.000) × 100 = <b>28%</b>.<br><b>Trampa común:</b> La opción A suma 20% + 10% = 30%, lo cual es falso en descuentos encadenados.",
    "tip": "Fórmula de descuentos sucesivos D1 y D2: D_total = D1 + D2 - (D1 × D2)/100 = 20 + 10 - 2 = 28%."
  },
  {
    "id": "lec-01",
    "subject": "lectura",
    "subtopic": "Comprensión Textual y Filosofía",
    "competency": "Identificar y entender contenidos locales",
    "difficulty": "Media",
    "context": "«El primer gran filósofo del siglo diecisiete (si exceptuamos a Bacon y Galileo) fue Descartes, y si alguna vez se dijo de alguien que estuvo a punto de ser asesinado habrá que decirlo de él. En 1621, Descartes, que tenía unos veintiséis años, se hallaba viajando y al llegar al Elba tomó una embarcación para Friezland oriental. Nadie se ha enterado nunca de lo que podía buscar allí y tal vez él se hiciera la misma pregunta ya que, al llegar a Embden, decidió dirigirse al instante a Friezland occidental; y siendo demasiado impaciente para tolerar cualquier demora, alquiló una barca y contrató a unos cuantos marineros. Tan pronto habían salido al mar cuando hizo el descubrimiento de que se había encerrado en una guarida de asesinos. Se dio cuenta de que su tripulación estaba formada por criminales cuya máxima ambición, por el momento, era degollarlo para robarle su dinero, creyendo que era un mercader extranjero que no entendía su idioma dialectal...» (Baillet, Vie de M. Descartes).",
    "question": "En el texto, la expresión «si alguna vez se dijo de alguien que estuvo a punto de ser asesinado habrá que decirlo de él» tiene como propósito retórico principal:",
    "options": [
      {
        "key": "A",
        "text": "Cuestionar la veracidad histórica de las anécdotas biográficas sobre los viajes de Descartes."
      },
      {
        "key": "B",
        "text": "Captar la atención del lector introduciendo con dramatismo y suspenso el peligro inminente que vivió el filósofo."
      },
      {
        "key": "C",
        "text": "Demostrar que los filósofos del siglo XVII carecían de habilidades prácticas de supervivencia."
      },
      {
        "key": "D",
        "text": "Comparar el método filosófico cartesiano con las tácticas de navegación marítima de la época."
      }
    ],
    "correct": "B",
    "explanation": "<b>Análisis crítico:</b> El autor inicia la narración con un recurso de expectativa o suspenso narrativo (gancho retórico) para enganchar al lector antes de relatar la anécdota biográfica de Descartes frente a los marineros amotinados. La opción B captura con exactitud este propósito comunicativo.",
    "tip": "En Lectura Crítica, pregúntate siempre: '¿Para qué escribió esto el autor? ¿Qué efecto genera en la audiencia?'."
  },
  {
    "id": "lec-02",
    "subject": "lectura",
    "subtopic": "Análisis de Tesis y Argumentación",
    "competency": "Reflexionar y evaluar la forma y contenido",
    "difficulty": "Alta",
    "context": "<b>Texto 1:</b> «Consumir carne animal es nocivo para los seres humanos porque el animal sufre intensamente durante su sacrificio; dicho estrés genera toxinas y energías que se transmiten biológicamente al consumidor, menoscabando su salud física y mental.»\n\n<b>Texto 2:</b> «El consumo de productos de origen animal es un acto éticamente injustificable en la medida en que proviene de la subordinación cruel, explotación e insensibilidad del ser humano hacia seres sintientes que poseen derecho inherente a la vida.»",
    "question": "¿Cuál de las siguientes afirmaciones sobre la relación argumentativa entre ambas posturas es la más acertada?",
    "options": [
      {
        "key": "A",
        "text": "Ambas posturas defienden el vegetarianismo desde premisas morales centradas en los derechos animales."
      },
      {
        "key": "B",
        "text": "Ambas coinciden en la conclusión (promover el vegetarianismo), pero parten de justificaciones distintas: la primera es antropocéntrica (la salud humana) y la segunda es biocéntrica/ética (el bienestar animal en sí)."
      },
      {
        "key": "C",
        "text": "La postura 2 invalida científicamente a la postura 1 porque los animales carecen de sensaciones fisiológicas."
      },
      {
        "key": "D",
        "text": "Ambas posturas se contradicen radicalmente y proponen hábitos nutricionales mutuamente excluyentes."
      }
    ],
    "correct": "B",
    "explanation": "<b>Evaluación de perspectivas:</b> Ambos autores llegan a la misma postura práctica (reducir o eliminar el consumo de carne), pero el Texto 1 lo argumenta desde el beneficio egoísta/antropocéntrico del ser humano (la carne le hace daño al cuerpo humano), mientras que el Texto 2 argumenta desde una perspectiva ética del deber hacia el animal (el sufrimiento del animal en sí mismo). Por ende, coinciden en la conclusión pero difieren en su marco ético.",
    "tip": "Distingue siempre entre CONCLUSIÓN (qué defienden) y PREMISAS (por qué razones lo defienden)."
  },
  {
    "id": "lec-03",
    "subject": "lectura",
    "subtopic": "Infografías y Textos Discontinuos",
    "competency": "Comprender cómo se articulan las partes de un texto",
    "difficulty": "Media",
    "context": "En una campaña de salud pública aparece un cartel con la silueta de un pulmón dividido en dos mitades: la mitad izquierda es de color verde brillante, llena de flores y aves con la leyenda 'Espacios 100% libres de humo'; la mitad derecha es de color gris ceniza, marchita y con colillas humeantes con la leyenda 'Tu decisión diaria'.",
    "diagram": "<div class=\"row g-2 text-center my-3\"><div class=\"col-6\"><div class=\"p-3 bg-success-subtle border border-success rounded\"><b>Lado Izquierdo</b><br>🌿 Verde, flores, vitalidad<br><i>\"Espacios libres de humo\"</i></div></div><div class=\"col-6\"><div class=\"p-3 bg-secondary-subtle border border-secondary rounded\"><b>Lado Derecho</b><br>🌫️ Gris, cenizas, deterioro<br><i>\"Tu decisión diaria\"</i></div></div></div>",
    "question": "El uso de esta antítesis visual (contraste cromático y simbólico entre ambas mitades del pulmón) cumple la función primordial de:",
    "options": [
      {
        "key": "A",
        "text": "Explicar la fisiología y anatomía respiratoria de los alvéolos pulmonares en pacientes con EPOC."
      },
      {
        "key": "B",
        "text": "Confrontar visualmente al espectador con las consecuencias opuestas de sus hábitos sobre la calidad de vida."
      },
      {
        "key": "C",
        "text": "Promocionar la compra de marcas ecológicas de cigarrillos con filtro orgánico."
      },
      {
        "key": "D",
        "text": "Criticar a los ciudadanos que no practican jardinería ni cuidan las zonas verdes urbanas."
      }
    ],
    "correct": "B",
    "explanation": "<b>Análisis de recursos visuales:</b> La antítesis visual (vida/color vs. deterioro/ceniza) busca persuadir e impactar reflexivamente al receptor, mostrando las consecuencias inmediatas de una elección consciente frente al tabaquismo.",
    "tip": "En textos discontinuos (caricaturas, infografías y afiches), los colores, contrastes y metáforas visuales son el argumento central."
  },
  {
    "id": "lec-04",
    "subject": "lectura",
    "subtopic": "Detección de Supuestos e Implícitos",
    "competency": "Comprender el sentido global del texto",
    "difficulty": "Alta",
    "context": "«No hay nada más destructivo para la investigación científica genuina que el afán desmedido de aplicaciones prácticas inmediatas. Quien solo investiga aquello que producirá patentes o dividendos económicos el próximo trimestre, destruye la ciencia fundamental que hace posibles las revoluciones técnicas del próximo siglo.»",
    "question": "¿Cuál de los siguientes supuestos subyace a la afirmación del autor?",
    "options": [
      {
        "key": "A",
        "text": "La ciencia aplicada es superior en rigor metodológico a la ciencia teórica pura."
      },
      {
        "key": "B",
        "text": "Los grandes avances tecnológicos del futuro dependen del conocimiento básico generado sin una presión utilitarista inmediata."
      },
      {
        "key": "C",
        "text": "Los científicos teóricos no deberían recibir financiamiento de instituciones públicas."
      },
      {
        "key": "D",
        "text": "Toda aplicación práctica comercial contradice los principios éticos de la investigación."
      }
    ],
    "correct": "B",
    "explanation": "<b>Supuestos e inferencias:</b> El autor sostiene que buscar aplicaciones inmediatas destruye la ciencia básica que fertiliza el futuro. Por lo tanto, asume necesariamente que los grandes saltos tecnológicos a largo plazo se sustentan en descubrimientos básicos desinteresados (Opción B).",
    "tip": "Un 'supuesto' es una idea no dicha expresamente, pero necesaria para que la tesis del autor tenga sentido lógico."
  },
  {
    "id": "nat-01",
    "subject": "naturales",
    "subtopic": "Química - Estados de la Materia",
    "competency": "Uso comprensivo del conocimiento científico",
    "difficulty": "Baja",
    "context": "Un recipiente cerrado y rígido contiene agua en estado líquido hasta la mitad de su capacidad. Cuando el recipiente se calienta por encima de los 100 °C a presión constante, el agua líquida experimenta un cambio de fase hacia vapor de agua (estado gaseoso).",
    "question": "A nivel microscópico, ¿cuál de las siguientes opciones describe correctamente la diferencia entre las moléculas de agua líquida y las moléculas de vapor de agua?",
    "options": [
      {
        "key": "A",
        "text": "Las moléculas de gas se transforman químicamente en átomos aislados de hidrógeno y oxígeno gaseoso."
      },
      {
        "key": "B",
        "text": "Las moléculas en estado gaseoso conservan la misma composición química (H2O), pero aumenta drásticamente la distancia media y la energía cinética entre ellas."
      },
      {
        "key": "C",
        "text": "Las moléculas en estado gaseoso aumentan su masa molecular y duplican el tamaño de sus enlaces covalentes."
      },
      {
        "key": "D",
        "text": "Las moléculas de gas pierden toda su movilidad y se agrupan en redes cristalinas estáticas."
      }
    ],
    "correct": "B",
    "explanation": "<b>Fundamento:</b> La evaporación o ebullición es un cambio FÍSICO, no químico. Las moléculas siguen siendo H2O (no se rompen sus enlaces covalentes intramoleculares). Lo que ocurre es que al suministrar calor, ganan energía cinética, vencen las atracciones intermoleculares (puentes de hidrógeno) y se dispersan ocupando todo el volumen disponible.",
    "tip": "Diferencia de oro: Cambio físico = las moléculas se separan o juntan. Cambio químico = los enlaces entre átomos se rompen para crear sustancias nuevas."
  },
  {
    "id": "nat-02",
    "subject": "naturales",
    "subtopic": "Física - Mecánica y Leyes de Newton",
    "competency": "Explicación de fenómenos",
    "difficulty": "Media",
    "context": "Un automóvil de masa m = 1.000 kg viaja en línea recta a una velocidad constante v = 20 m/s sobre una carretera horizontal sin inclinación.",
    "diagram": "<div class=\"p-2 bg-light border rounded text-center my-2\"><span class=\"badge bg-dark\">Auto m = 1.000 kg</span> ─── Velocidad constante v = 20 m/s ───►</div>",
    "question": "De acuerdo con la Primera Ley de Newton (Ley de Inercia), la fuerza neta resultante que actúa sobre el vehículo mientras mantiene dicha velocidad constante es:",
    "options": [
      {
        "key": "A",
        "text": "F_neta = 20.000 Newtons en el sentido del movimiento."
      },
      {
        "key": "B",
        "text": "F_neta = 0 Newtons."
      },
      {
        "key": "C",
        "text": "F_neta = 9.800 Newtons hacia abajo debido a la gravedad."
      },
      {
        "key": "D",
        "text": "F_neta = 50 Newtons en sentido opuesto al rozamiento."
      }
    ],
    "correct": "B",
    "explanation": "<b>Primera Ley de Newton:</b> Si un cuerpo se mueve con <b>velocidad constante</b> en línea recta, su aceleración es cero (a = 0). Según la Segunda Ley (F = m · a), si a = 0, entonces la <b>fuerza neta resultante es exactamente 0 N</b>.<br>Las fuerzas que actúan sobre el auto (fuerza impulsora del motor vs fuerza de fricción del suelo/aire, y peso gravitacional vs fuerza normal de la vía) están en perfecto equilibrio.",
    "tip": "¡Clásica trampa del ICFES! La gente suele multiplicar masa por velocidad (1000 × 20 = 20000). Pero eso es momento lineal (p = m·v), no fuerza. Si la velocidad es constante, la FUERZA NETA es CERO."
  },
  {
    "id": "nat-03",
    "subject": "naturales",
    "subtopic": "Biología - Genética Mendeliana",
    "competency": "Uso comprensivo del conocimiento científico",
    "difficulty": "Media",
    "context": "En una especie vegetal, el alelo que determina el color rojo de las flores (R) es dominante sobre el alelo que produce flores blancas (r). Se realiza el cruce entre una planta heterocigota (Rr) y una planta homocigota recesiva (rr).",
    "diagram": "<table class=\"table table-bordered table-sm text-center mx-auto my-2\" style=\"max-width:220px;\"><thead class=\"table-light\"><tr><th>Gameto</th><th>r</th><th>r</th></tr></thead><tbody><tr><th>R</th><td class=\"bg-danger-subtle\">Rr (Roja)</td><td class=\"bg-danger-subtle\">Rr (Roja)</td></tr><tr><th>r</th><td class=\"bg-light\">rr (Blanca)</td><td class=\"bg-light\">rr (Blanca)</td></tr></tbody></table>",
    "question": "¿Qué porcentaje fenotípico de la descendencia se espera que presente flores de color blanco?",
    "options": [
      {
        "key": "A",
        "text": "0%"
      },
      {
        "key": "B",
        "text": "25%"
      },
      {
        "key": "C",
        "text": "50%"
      },
      {
        "key": "D",
        "text": "75%"
      }
    ],
    "correct": "C",
    "explanation": "<b>Cuadro de Punnett:</b><br>Cruza: Rr × rr.<br>Gametos parentales: Planta 1 aporta 50% R y 50% r. Planta 2 aporta 100% r.<br>Combinaciones: 2/4 Rr (flores rojas) y 2/4 rr (flores blancas).<br>Por lo tanto, se espera un <b>50% de flores blancas</b>.",
    "tip": "Para el fenotipo, recuerda: solo los individuos homocigotos recesivos (rr) manifiestan el color blanco cuando existe dominancia completa."
  },
  {
    "id": "nat-04",
    "subject": "naturales",
    "subtopic": "Física - Ondas y Sonido",
    "competency": "Indagación",
    "difficulty": "Alta",
    "context": "Una ambulancia se desplaza a gran velocidad con su sirena encendida emitiendo un sonido a frecuencia constante f₀. Un observador quieto en la acera escucha el sonido a medida que la ambulancia se acerca y luego se aleja.",
    "question": "¿Cuál es el fenómeno físico que explica por qué el observador percibe un tono más agudo (mayor frecuencia) cuando la ambulancia se acerca y un tono más grave (menor frecuencia) cuando se aleja?",
    "options": [
      {
        "key": "A",
        "text": "Efecto Fotoeléctrico."
      },
      {
        "key": "B",
        "text": "Efecto Doppler acústico."
      },
      {
        "key": "C",
        "text": "Refracción de ondas sonoras."
      },
      {
        "key": "D",
        "text": "Difracción en el borde de la calzada."
      }
    ],
    "correct": "B",
    "explanation": "<b>Efecto Doppler:</b> Es la variación aparente en la frecuencia percibida de una onda cuando existe movimiento relativo entre el emisor de la onda y el receptor.<br>• Al aproximarse: los frentes de onda se comprimen hacia la dirección de avance -> menor longitud de onda -> mayor frecuencia detectada (tono agudo).<br>• Al alejarse: los frentes se distancian -> menor frecuencia detectada (tono grave).",
    "tip": "Siempre que veas un emisor de ondas en movimiento (ambulancia, tren, bocina), asócialo inmediatamente al Efecto Doppler."
  },
  {
    "id": "nat-05",
    "subject": "naturales",
    "subtopic": "Química - Concentración y pH",
    "competency": "Uso comprensivo del conocimiento científico",
    "difficulty": "Media",
    "context": "En el laboratorio se tienen dos disoluciones acuosas: la solución X tiene un pH = 2 y la solución Y tiene un pH = 5.",
    "question": "¿Cuál de las siguientes afirmaciones sobre estas soluciones es científicamente correcta?",
    "options": [
      {
        "key": "A",
        "text": "La solución X es básica y la solución Y es ácida."
      },
      {
        "key": "B",
        "text": "La solución X es ácida y tiene una concentración de iones hidrógeno [H+] 1.000 veces mayor que la solución Y."
      },
      {
        "key": "C",
        "text": "La solución Y es neutra porque su pH es superior a 3."
      },
      {
        "key": "D",
        "text": "Ambas soluciones son químicamente neutras a 25 °C."
      }
    ],
    "correct": "B",
    "explanation": "<b>Escala de pH:</b><br>1. pH < 7 indica solución ácida. Tanto pH 2 como pH 5 son ácidas.<br>2. La escala de pH es <b>logarítmica en base 10</b>: pH = -log[H+].<br>• Para pH = 2: [H+] = 10⁻² M.<br>• Para pH = 5: [H+] = 10⁻⁵ M.<br>3. Relación de concentración: 10⁻² / 10⁻⁵ = 10³ = <b>1.000 veces más concentrada</b> en iones H+.<br>Por ende, la opción B es la respuesta correcta.",
    "tip": "Cada unidad de cambio en el pH representa una variación de 10 veces en la acidez. 3 unidades de diferencia = 10 × 10 × 10 = 1.000 veces."
  },
  {
    "id": "soc-01",
    "subject": "sociales",
    "subtopic": "Historia de Colombia - Siglo XX",
    "competency": "Pensamiento Social",
    "difficulty": "Media",
    "context": "Los siguientes magnicidios tuvieron una profunda incidencia en la historia política de Colombia durante el siglo XX:\n1. Asesinato de Luis Carlos Galán Sarmiento (Candidato presidencial liberal)\n2. Asesinato de Jorge Eliécer Gaitán (Líder popular liberal, detonante del Bogotazo)\n3. Asesinato del General Rafael Uribe Uribe (Líder liberal de la Guerra de los Mil Días)\n4. Asesinato de Álvaro Gómez Hurtado (Líder conservador y excandidato presidencial)",
    "question": "El orden cronológico exacto de ocurrencia de estos acontecimientos históricos es:",
    "options": [
      {
        "key": "A",
        "text": "2, 3, 1 y 4."
      },
      {
        "key": "B",
        "text": "3, 2, 1 y 4."
      },
      {
        "key": "C",
        "text": "3, 1, 2 y 4."
      },
      {
        "key": "D",
        "text": "4, 3, 2 y 1."
      }
    ],
    "correct": "B",
    "explanation": "<b>Hitos cronológicos de Colombia:</b><br>• <b>3. Rafael Uribe Uribe:</b> Asesinado en <b>1914</b> a golpes de hacha frente al Capitolio.<br>• <b>2. Jorge Eliécer Gaitán:</b> Asesinado el 9 de abril de <b>1948</b> en Bogotá, detonando 'El Bogotazo'.<br>• <b>1. Luis Carlos Galán:</b> Asesinado en agosto de <b>1989</b> en Soacha en plena campaña presidencial.<br>• <b>4. Álvaro Gómez Hurtado:</b> Asesinado en noviembre de <b>1995</b> en Bogotá.<br><b>Orden cronológico:</b> 3 (1914) → 2 (1948) → 1 (1989) → 4 (1995). Opción B.",
    "tip": "Secuencia mnemotécnica: Uribe Uribe (comienzo siglo XX) → Gaitán (mediados de siglo, 48) → Galán (finales de los 80) → Gómez Hurtado (años 90)."
  },
  {
    "id": "soc-02",
    "subject": "sociales",
    "subtopic": "Constitución Política y Derechos Fundamentales",
    "competency": "Pensamiento Social y Multiperspectivismo",
    "difficulty": "Baja",
    "context": "A un ciudadano colombiano que padece una enfermedad degenerativa de alto costo, su entidad prestadora de salud (EPS) le niega repetidamente el suministro de un medicamento vital formulado por su médico tratante, argumentando que no se encuentra incluido en el plan básico de beneficios con cargo a la UPC.",
    "question": "¿Cuál es el mecanismo de protección constitucional idóneo, expedito e inmediato que consagra la Constitución de 1991 para tutelar este derecho fundamental a la salud y a la vida?",
    "options": [
      {
        "key": "A",
        "text": "Acción Popular."
      },
      {
        "key": "B",
        "text": "Acción de Tutela (Artículo 86 de la Constitución)."
      },
      {
        "key": "C",
        "text": "Acción de Cumplimiento."
      },
      {
        "key": "D",
        "text": "Recurso de Hábeas Corpus."
      }
    ],
    "correct": "B",
    "explanation": "<b>Mecanismos constitucionales:</b><br>• <b>Acción de Tutela (Art. 86):</b> Mecanismo preferente y sumario para proteger derechos fundamentales individuales cuando resulten vulnerados o amenazados por autoridades o particulares. El juez debe resolver en máximo 10 días.<br>• Acción Popular: Protege derechos colectivos (espacio público, medio ambiente sano).<br>• Acción de Cumplimiento: Busca que se haga efectiva una ley o acto administrativo.<br>• Hábeas Corpus: Protege exclusivamente la libertad individual ante detenciones ilegales.",
    "tip": "Regla infalible para el ICFES: ¿Afecta la vida, salud, educación o dignidad de una persona? -> ¡Acción de Tutela!"
  },
  {
    "id": "soc-03",
    "subject": "sociales",
    "subtopic": "Mecanismos de Participación Ciudadana",
    "competency": "Interpretación y análisis de perspectivas",
    "difficulty": "Media",
    "context": "En un municipio con vocación agrícola y fuentes hídricas protegidas, una multinacional minera obtiene una concesión del gobierno nacional para exploración a cielo abierto. El alcalde y el concejo municipal deciden convocar formalmente a la ciudadanía para que apruebe o rechace mediante votación en urnas la realización de actividades mineras en su jurisdicción.",
    "question": "¿A través de cuál mecanismo de participación ciudadana directo contemplado en la Constitución colombiana se lleva a cabo esta consulta electoral en el municipio?",
    "options": [
      {
        "key": "A",
        "text": "El Plebiscito."
      },
      {
        "key": "B",
        "text": "La Consulta Popular municipal."
      },
      {
        "key": "C",
        "text": "El Referendo derogatorio."
      },
      {
        "key": "D",
        "text": "El Cabildo Abierto."
      }
    ],
    "correct": "B",
    "explanation": "<b>Diferenciación de mecanismos:</b><br>• <b>Consulta Popular:</b> Es la institución mediante la cual una pregunta general sobre un asunto de trascendencia municipal, departamental o nacional es sometida al voto del pueblo por el mandatario respectivo.<br>• Plebiscito: Es convocado EXCLUSIVAMENTE por el Presidente de la República sobre políticas del Ejecutivo.<br>• Cabildo Abierto: Es una asamblea o reunión pública de concejos/juntas con los habitantes, no una votación electoral con tarjetón.",
    "tip": "Plebiscito = Solo Presidente. Consulta Popular = Puede ser local/municipal para decidir sobre proyectos de alto impacto territorial."
  },
  {
    "id": "soc-04",
    "subject": "sociales",
    "subtopic": "Estructura del Estado Colombiano",
    "competency": "Pensamiento Social",
    "difficulty": "Media",
    "context": "El principio de separación de poderes en Colombia distribuye el poder público en tres ramas independientes y autónomas, complementadas por órganos de control fiscal y disciplinario.",
    "question": "¿Cuál de las siguientes entidades forma parte de los Órganos de Control Autónomos del Estado y NO pertenece a la Rama Judicial?",
    "options": [
      {
        "key": "A",
        "text": "La Corte Constitucional."
      },
      {
        "key": "B",
        "text": "El Consejo de Estado."
      },
      {
        "key": "C",
        "text": "La Procuraduría General de la Nación."
      },
      {
        "key": "D",
        "text": "La Corte Suprema de Justicia."
      }
    ],
    "correct": "C",
    "explanation": "<b>Estructura estatal en Colombia:</b><br>• Rama Judicial: Corte Constitucional, Corte Suprema de Justicia, Consejo de Estado, Consejo Superior de la Judicatura y Fiscalía General de la Nación.<br>• <b>Órganos de Control:</b> Ministerio Público (integrado por la <b>Procuraduría General de la Nación</b> y la Defensoría del Pueblo) y la Contraloría General de la República (control fiscal). No forman parte de ninguna de las 3 ramas.",
    "tip": "El ICFES evalúa mucho la diferencia entre la Rama Judicial (administra justicia) y el Ministerio Público/Procuraduría (vigilancia disciplinaria)."
  },
  {
    "id": "gra-01",
    "subject": "graficos",
    "subtopic": "Interpretación de Gráficos - Curvas de Solubilidad",
    "competency": "Interpretación y Representación",
    "difficulty": "Media",
    "context": "Un grupo de estudiantes realiza un experimento para medir la cantidad máxima de una sal (en gramos) que se puede disolver en 100 gramos de agua a diferentes temperaturas (°C), obteniendo la siguiente gráfica de solubilidad:",
    "diagram": "<svg viewBox=\"0 0 280 160\" class=\"mx-auto d-block my-2\" style=\"max-width:320px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;\"><line x1=\"40\" y1=\"130\" x2=\"260\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"150\" y=\"152\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1e293b\">Temperatura (°C)</text><text x=\"15\" y=\"75\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1e293b\" transform=\"rotate(-90 15,75)\">Solubilidad (g/100g H₂O)</text><text x=\"40\" y=\"142\" font-size=\"9\" text-anchor=\"middle\">0</text><text x=\"95\" y=\"142\" font-size=\"9\" text-anchor=\"middle\">20</text><text x=\"150\" y=\"142\" font-size=\"9\" text-anchor=\"middle\">40</text><text x=\"205\" y=\"142\" font-size=\"9\" text-anchor=\"middle\">60</text><text x=\"255\" y=\"142\" font-size=\"9\" text-anchor=\"middle\">80</text><text x=\"32\" y=\"132\" font-size=\"9\" text-anchor=\"end\">0</text><text x=\"32\" y=\"100\" font-size=\"9\" text-anchor=\"end\">20</text><text x=\"32\" y=\"65\" font-size=\"9\" text-anchor=\"end\">40</text><text x=\"32\" y=\"30\" font-size=\"9\" text-anchor=\"end\">60</text><path d=\"M 40 115 Q 120 100 205 60 T 260 25\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"95\" cy=\"105\" r=\"4\" fill=\"#ef4444\"/><text x=\"102\" y=\"100\" font-size=\"9\" fill=\"#ef4444\">Punto A (20°C, 15g)</text><circle cx=\"205\" cy=\"60\" r=\"4\" fill=\"#10b981\"/><text x=\"210\" y=\"55\" font-size=\"9\" fill=\"#10b981\">Saturación a 60°C (42g)</text></svg>",
    "question": "Con base en la gráfica, si a 20 °C se agregan 15 gramos de sal en 100 gramos de agua (representado por el Punto A), ¿en qué estado se encuentra la mezcla resultante?",
    "options": [
      {
        "key": "A",
        "text": "Sobresaturada, con precipitado visible en el fondo del matraz."
      },
      {
        "key": "B",
        "text": "Insaturada, ya que la curva de saturación máxima a 20 °C permite disolver hasta aproximadamente 22 g de sal."
      },
      {
        "key": "C",
        "text": "En equilibrio bifásico sólido-gas espontáneo."
      },
      {
        "key": "D",
        "text": "Completamente congelada por disminución crioscópica instantánea."
      }
    ],
    "correct": "B",
    "explanation": "<b>Lectura de curvas de solubilidad:</b><br>1. La curva azul representa el límite de saturación (la capacidad máxima de soluto disuelto).<br>2. Todo punto <b>por debajo de la curva</b> es una solución <b>INSATURADA</b> (admite más sal sin precipitar).<br>3. Todo punto <b>sobre la curva</b> es una solución SATURADA.<br>4. Todo punto <b>por encima</b> es SOBRESATURADA.<br>Como el Punto A (15 g a 20 °C) se encuentra visiblemente por debajo de la curva de saturación (que está en aprox. 22 g), la mezcla es insaturada.",
    "tip": "Regla visual directa: Debajo de la curva = Insaturada. En la curva = Saturada. Encima = Sobresaturada."
  },
  {
    "id": "gra-02",
    "subject": "graficos",
    "subtopic": "Interpretación de Gráficos - Diagramas de Dispersión y Correlación",
    "competency": "Argumentación y Validación",
    "difficulty": "Media",
    "context": "Un investigador analiza la relación entre las horas semanales dedicadas a la lectura extracurricular y el puntaje obtenido en la prueba de Lectura Crítica por 100 estudiantes. El diagrama de dispersión muestra una nube de puntos alineada con pendiente positiva y un coeficiente de correlación de Pearson r = +0.84.",
    "diagram": "<svg viewBox=\"0 0 240 140\" class=\"mx-auto d-block my-2\" style=\"max-width:280px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;\"><line x1=\"35\" y1=\"115\" x2=\"220\" y2=\"115\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"35\" y1=\"115\" x2=\"35\" y2=\"15\" stroke=\"#334155\" stroke-width=\"1.5\"/><text x=\"130\" y=\"132\" font-size=\"10\" text-anchor=\"middle\">Horas de lectura/semana</text><text x=\"12\" y=\"65\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-90 12,65)\">Puntaje</text><circle cx=\"50\" cy=\"105\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"65\" cy=\"95\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"80\" cy=\"90\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"100\" cy=\"75\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"120\" cy=\"65\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"145\" cy=\"50\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"170\" cy=\"40\" r=\"2.5\" fill=\"#64748b\"/><circle cx=\"195\" cy=\"30\" r=\"2.5\" fill=\"#64748b\"/><line x1=\"45\" y1=\"110\" x2=\"205\" y2=\"25\" stroke=\"#059669\" stroke-width=\"2\" stroke-dasharray=\"3\"/></svg>",
    "question": "A partir de este diagrama, ¿cuál de las siguientes conclusiones es metodológicamente válida según los principios del análisis estadístico?",
    "options": [
      {
        "key": "A",
        "text": "Existe una correlación lineal positiva fuerte entre ambas variables: a mayor tiempo de lectura tiende a registrarse un mayor puntaje."
      },
      {
        "key": "B",
        "text": "Leer 5 horas semanales garantiza con certeza absoluta e infalible un puntaje de 100 puntos en todos los estudiantes."
      },
      {
        "key": "C",
        "text": "Las variables son totalmente independientes porque el valor de correlación r no es igual a 1.0."
      },
      {
        "key": "D",
        "text": "Existe una correlación lineal negativa inversa entre la lectura y el rendimiento cognitivo."
      }
    ],
    "correct": "A",
    "explanation": "<b>Principio epistemológico evaluado por el ICFES:</b> 'Correlación estadística no equivale a causalidad mecánica absoluta'. Un coeficiente r = +0.84 evidencia una <b>fuerte correlación positiva</b> (tendencia ascendente conjunta), pero no permite formular leyes deterministas absolutas como la opción B. La afirmación A es la única correcta y científicamente prudente.",
    "tip": "Desconfía de opciones con términos absolutos como 'garantiza al 100%' o 'es la causa única'."
  },
  {
    "id": "gra-03",
    "subject": "graficos",
    "subtopic": "Interpretación de Gráficos - Gráficos de Posición vs Tiempo",
    "competency": "Interpretación y Representación",
    "difficulty": "Media",
    "context": "La gráfica describe la posición x (en metros) de un móvil sobre una pista rectilínea durante un intervalo de 20 segundos.",
    "diagram": "<svg viewBox=\"0 0 260 140\" class=\"mx-auto d-block my-2\" style=\"max-width:300px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;\"><line x1=\"35\" y1=\"115\" x2=\"240\" y2=\"115\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"35\" y1=\"115\" x2=\"35\" y2=\"15\" stroke=\"#334155\" stroke-width=\"1.5\"/><text x=\"135\" y=\"132\" font-size=\"10\" text-anchor=\"middle\">Tiempo t (s)</text><text x=\"12\" y=\"65\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-90 12,65)\">Posición x (m)</text><polyline points=\"35,115 90,50 160,50 230,20\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"90\" cy=\"50\" r=\"3\" fill=\"#7c3aed\"/><circle cx=\"160\" cy=\"50\" r=\"3\" fill=\"#7c3aed\"/><text x=\"80\" y=\"40\" font-size=\"9\">t=5s (50m)</text><text x=\"145\" y=\"40\" font-size=\"9\">t=12s (50m)</text><text x=\"125\" y=\"70\" font-size=\"9\" fill=\"#d97706\" font-weight=\"bold\">Tramo plano</text></svg>",
    "question": "En el tramo comprendido entre t = 5 s y t = 12 s, ¿cuál es el estado de movimiento del móvil?",
    "options": [
      {
        "key": "A",
        "text": "Se mueve hacia adelante con rapidez uniforme y aceleración nula de 50 m/s."
      },
      {
        "key": "B",
        "text": "Permanece en reposo (velocidad v = 0 m/s), ya que su posición se mantiene fija en x = 50 metros."
      },
      {
        "key": "C",
        "text": "Se desplaza en reversa hacia el punto de origen inicial."
      },
      {
        "key": "D",
        "text": "Experimenta un movimiento circular uniformemente acelerado."
      }
    ],
    "correct": "B",
    "explanation": "<b>Interpretación de gráficas cinemáticas:</b><br>• En una gráfica de <b>Posición vs. Tiempo (x vs t)</b>, la pendiente representa la velocidad (v = Δx / Δt).<br>• Entre t = 5 s y t = 12 s, la línea es horizontal (pendiente cero, Δx = 0).<br>• Si la posición no cambia al avanzar el tiempo, el objeto está <b>detenido en reposo (v = 0 m/s)</b>.",
    "tip": "¡Atención al eje Y! Si el gráfico fuera Velocidad vs Tiempo, una línea horizontal significaría velocidad constante. Al ser Posición vs Tiempo, línea horizontal significa QUIETO."
  },
  {
    "id": "gra-04",
    "subject": "graficos",
    "subtopic": "Interpretación de Gráficos - Gráficos Circulares y Proporciones",
    "competency": "Formulación y Ejecución",
    "difficulty": "Baja",
    "context": "El presupuesto anual de educación de una ciudad ($120.000 millones de pesos) se distribuye según el siguiente diagrama de sectores circulares: Infraestructura escolar (40%), Alimentación y transporte escolar (30%), Capacitación docente (20%) y Dotación tecnológica (10%).",
    "diagram": "<svg viewBox=\"0 0 200 120\" class=\"mx-auto d-block my-2\" style=\"max-width:220px;\"><circle cx=\"70\" cy=\"60\" r=\"45\" fill=\"#3b82f6\"/><path d=\"M 70 60 L 70 15 A 45 45 0 0 1 115 60 Z\" fill=\"#10b981\"/><path d=\"M 70 60 L 115 60 A 45 45 0 0 1 84 103 Z\" fill=\"#f59e0b\"/><path d=\"M 70 60 L 84 103 A 45 45 0 0 1 70 105 Z\" fill=\"#ec4899\"/><text x=\"130\" y=\"35\" font-size=\"9\" fill=\"#1e293b\">Infra: 40%</text><text x=\"130\" y=\"55\" font-size=\"9\" fill=\"#1e293b\">Alim: 30%</text><text x=\"130\" y=\"75\" font-size=\"9\" fill=\"#1e293b\">Doc: 20%</text><text x=\"130\" y=\"95\" font-size=\"9\" fill=\"#1e293b\">Tec: 10%</text></svg>",
    "question": "¿Cuánto dinero en pesos se destina en conjunto a Infraestructura escolar y Dotación tecnológica?",
    "options": [
      {
        "key": "A",
        "text": "$48.000 millones de pesos."
      },
      {
        "key": "B",
        "text": "$60.000 millones de pesos."
      },
      {
        "key": "C",
        "text": "$50.000 millones de pesos."
      },
      {
        "key": "D",
        "text": "$72.000 millones de pesos."
      }
    ],
    "correct": "B",
    "explanation": "<b>Cálculo proporcional directo:</b><br>1. Porcentaje conjunto: 40% (Infraestructura) + 10% (Dotación tecnológica) = 50% del total.<br>2. 50% de $120.000 millones es exactamente la mitad = <b>$60.000 millones</b> (Opción B).",
    "tip": "En gráficos circulares, agrupa primero los porcentajes antes de calcular los montos para ahorrar tiempo valioso."
  },
  {
    "id": "ing-01",
    "subject": "ingles",
    "subtopic": "Part 1 - Public Signs / Avisos Públicos",
    "competency": "Comunicativa y Pragmática",
    "difficulty": "Baja",
    "context": "Notice found on a sign:",
    "diagram": "<div class=\"p-3 bg-warning-subtle border border-warning rounded text-center my-2 font-monospace fw-bold\">⚠️ PLEASE DO NOT FEED THE ANIMALS.<br>USE THE DESIGNATED TRASH CANS.</div>",
    "question": "Where can you see this notice?",
    "options": [
      {
        "key": "A",
        "text": "At a zoo or safari wildlife park."
      },
      {
        "key": "B",
        "text": "In a shoe and clothes store."
      },
      {
        "key": "C",
        "text": "Inside an airport passenger lounge."
      }
    ],
    "correct": "A",
    "explanation": "<b>Vocabulario contextual:</b> 'Feed the animals' (alimentar a los animales) y 'trash cans' (papeleras). El único lugar concordante es un zoológico o parque de vida salvaje (Option A).",
    "tip": "La Parte 1 de Inglés tiene 3 opciones de respuesta (A, B, C). Detecta el vocabulario clave del entorno."
  },
  {
    "id": "ing-02",
    "subject": "ingles",
    "subtopic": "Part 3 - Conversations / Diálogos Cotidianos",
    "competency": "Comunicativa y Sociolingüística",
    "difficulty": "Baja",
    "context": "Complete the short daily conversation:",
    "question": "Person A: 'Would you like some milk with your black coffee?'\nPerson B: ____________________",
    "options": [
      {
        "key": "A",
        "text": "Yes, please, just a little."
      },
      {
        "key": "B",
        "text": "Tomorrow morning at eight sharp."
      },
      {
        "key": "C",
        "text": "I am twenty-one years old."
      }
    ],
    "correct": "A",
    "explanation": "<b>Fórmulas de cortesía en inglés:</b> La pregunta 'Would you like...?' ofrece educadamente algo. La respuesta estándar y natural es 'Yes, please' o 'No, thank you'. Las otras alternativas responden a horarios o edad.",
    "tip": "'Would you like...?' siempre espera una aceptación ('Yes, please') o rechazo cordial ('No, thanks')."
  },
  {
    "id": "ing-03",
    "subject": "ingles",
    "subtopic": "Part 4 - Grammar & Prepositions / Gramática",
    "competency": "Lingüística y Gramatical",
    "difficulty": "Media",
    "context": "Read the short sentence and choose the right preposition to fill in the blank:\n'Carlos has worked as an electrical engineer at that company ________ five years.'",
    "question": "Which word correctly completes the sentence?",
    "options": [
      {
        "key": "A",
        "text": "since"
      },
      {
        "key": "B",
        "text": "for"
      },
      {
        "key": "C",
        "text": "during"
      },
      {
        "key": "D",
        "text": "from"
      }
    ],
    "correct": "B",
    "explanation": "<b>Regla de Presente Perfecto (has worked):</b><br>• <b>FOR:</b> Se utiliza para períodos o duraciones de tiempo (ej. for five years, for two hours).<br>• <b>SINCE:</b> Se utiliza para puntos de partida específicos en el tiempo (ej. since 2019, since last Monday).<br>Como 'five years' indica una duración, la opción correcta es <b>FOR</b>.",
    "tip": "Regla infalible: Duración = FOR. Fecha o año de inicio = SINCE."
  },
  {
    "id": "ing-04",
    "subject": "ingles",
    "subtopic": "Part 6 - Reading Comprehension / Comprensión Lectora",
    "competency": "Comprensión Lectora e Inferencial",
    "difficulty": "Media",
    "context": "«Colombia is recognized globally as one of the world's 'megadiverse' countries. Hosting nearly 10% of the planet's biodiversity despite covering less than 1% of the Earth's landmass, the nation is home to the highest number of bird and orchid species anywhere on Earth. However, rapid urban growth and illegal deforestation present serious challenges to these fragile ecosystems.»",
    "question": "According to the passage, why is Colombia considered a 'megadiverse' country?",
    "options": [
      {
        "key": "A",
        "text": "Because it has the largest landmass and geographic area of all South American countries."
      },
      {
        "key": "B",
        "text": "Because it houses approximately 10% of global biodiversity within less than 1% of the world's land area."
      },
      {
        "key": "C",
        "text": "Because its urban areas are expanding faster than those in any European nation."
      },
      {
        "key": "D",
        "text": "Because it only contains bird species and no other types of fauna or flora."
      }
    ],
    "correct": "B",
    "explanation": "<b>Lectura literal y paráfrasis:</b> El texto afirma textualmente: 'Hosting nearly 10% of the planet's biodiversity despite covering less than 1% of the Earth's landmass'. La opción B parafrasea exactamente este argumento central.",
    "tip": "En la comprensión de lectura de inglés, busca la opción que coincida con los hechos sin añadir afirmaciones exageradas ('only', 'largest')."
  }
];
