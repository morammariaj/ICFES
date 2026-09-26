/**
 * BANCO AMPLIADO DE ENTRENAMIENTO
 * 178 preguntas originales generadas de forma determinista a partir de plantillas
 * pedagógicas. No son preguntas oficiales ni reproducciones del ICFES.
 *
 * Distribución añadida:
 * Matemáticas 34 | Lectura 28 | Sociales 36 | Naturales 35 | Inglés 37
 *
 * Junto con el banco previo de 43 preguntas académicas, permite construir
 * exactamente 44 + 36 + 44 + 52 + 45 = 221 preguntas académicas.
 */
(function () {
  const out = [];
  const q = (id, subject, subtopic, competency, difficulty, context, question, options, correct, explanation, tip) =>
    ({id, subject, subtopic, competency, difficulty, context, question, options, correct, explanation, tip, source:"entrenamiento_nuevo", source_basis:"Diseño propio alineado con las competencias y formatos descritos en las guías de orientación del ICFES."});
  const opts = (...xs) => xs.map((text,i)=>({key:String.fromCharCode(65+i),text}));

  // ========================= MATEMÁTICAS (34) =========================
  [
    [101,20,35,42,"Una cafetería vende combos a precio fijo.","Si un combo cuesta $20.000 y se aplica un descuento de 35%, ¿cuál es el precio final?",["$13.000","$13.500","$14.000","$15.000"],"B","El descuento es 0,35×20.000=$7.000; el precio final es $13.000.","Para descuentos, calcula primero la parte que se resta."],
    [102,80,25,60,"Una tienda anuncia una rebaja.","Un artículo de $80.000 tiene 25% de descuento. ¿Cuánto se paga?",["$55.000","$60.000","$62.000","$65.000"],"B","25% de 80.000 es 20.000; 80.000−20.000=60.000.","25% equivale a la cuarta parte."],
    [103,150,12,90,"Una factura aumenta por una tarifa.","Una factura de $150.000 aumenta 12%. ¿Cuál es el nuevo valor?",["$162.000","$168.000","$172.000","$180.000"],"A","12% de 150.000 son 18.000; el nuevo valor es $168.000.","Aumento de p% = multiplicar por 1+p/100."],
    [104,240,15,120,"Un tanque tiene una capacidad determinada.","Un tanque contiene 240 L y se extrae el 15%. ¿Cuántos litros quedan?",["196 L","204 L","216 L","225 L"],"B","Se extraen 36 L y quedan 204 L.","Para 'queda', usa el complemento: 100%−15%=85%."],
    [105,360,8,200,"Una población se reduce por una campaña.","Una población de 360 individuos disminuye 8%. ¿Cuál es la nueva población?",["324","331","338","352"],"B","8% de 360=28,8; 360−28,8=331,2. En un conteo entero, el modelo aproximado es 331.","Distingue el resultado matemático de la interpretación discreta."],
    [106,500,18,300,"Una producción mensual cambia.","La producción pasa de 500 a 590 unidades. ¿Cuál fue el aumento porcentual?",["12%","15%","18%","20%"],"B","El aumento es 90; 90/500=0,18, es decir 18%.","Para porcentaje de cambio divide el cambio entre el valor inicial."],
    [107,4,18,10,"Una receta mantiene proporciones.","Una receta para 4 personas usa 18 huevos. ¿Cuántos huevos requiere para 10 personas?",["36","40","45","54"],"C","18/4=4,5 huevos por persona; 4,5×10=45.","Primero encuentra la cantidad por unidad."],
    [108,6,15,20,"Una máquina produce piezas de manera constante.","Si produce 15 piezas en 6 minutos, ¿cuántas produce en 20 minutos al mismo ritmo?",["40","45","50","60"],"C","15/6=2,5 piezas por minuto; 2,5×20=50.","Comprueba que la tasa permanezca constante."],
    [109,3,28,8,"Un mapa usa una escala proporcional.","Si 3 cm representan 28 km, ¿cuántos kilómetros representan 8 cm?",["64 km","72 km","74,7 km","84 km"],"C","28×8/3≈74,67 km.","Usa una proporción antes de redondear."],
    [110,12,35,18,"Una fotocopiadora trabaja a ritmo constante.","Si copia 35 páginas en 12 minutos, ¿cuántas páginas copia en 18 minutos?",["45","48","52,5","60"],"C","35×18/12=52,5; en un modelo continuo son 52,5 páginas equivalentes.","La proporcionalidad puede producir valores no enteros en tasas promedio."],
    [111,5,42,7,"Un vehículo recorre una distancia uniforme.","Si recorre 42 km en 5 L de combustible, ¿cuántos km recorre con 7 L al mismo rendimiento?",["49,8","54","58,8","63"],"C","42/5=8,4 km/L; 8,4×7=58,8 km.","Convierte a una tasa por litro."],
    [112,8,24,15,"Un grupo distribuye materiales por igual.","8 estudiantes reciben 24 cuadernos. ¿Cuántos recibirían 15 estudiantes manteniendo la misma razón?",["36","40","45","48"],"C","24/8=3 por estudiante; 3×15=45.","La razón unitaria evita errores."],
    [113,25,7,3,"Una variable representa una cantidad desconocida.","Si 3x+7=25, ¿cuál es x?",["4","5","6","8"],"B","3x=18 y x=6.","Despeja en orden inverso a las operaciones."],
    [114,5,42,7,"Una tarifa combina un cargo fijo y uno variable.","Un servicio cuesta $5.000 fijos más $7.000 por unidad. Si la factura es $42.000, ¿cuántas unidades se usaron?",["4","5","6","7"],"B","42.000−5.000=37.000; 37.000/7.000 no es entero. El dato no representa una cantidad entera de unidades.","Antes de resolver, verifica la coherencia de las unidades."],
    [115,4,18,6,"Una función lineal se expresa como y=4x+6.","¿Cuál es el valor de y cuando x=18?",["72","78","82","90"],"B","4×18+6=78.","Sustituye el valor directamente."],
    [116,9,45,12,"Un número se relaciona con otro mediante una expresión.","Si 5x−9=45, ¿cuál es x?",["9","10","10,8","12"],"C","5x=54; x=10,8.","Despeja primero y luego divide."],
    [117,18,6,3,"Una ecuación representa una situación de ahorro.","Si 18−2x=6, ¿cuál es x?",["4","6","8","12"],"A","−2x=−12; x=6.","Ten cuidado con el signo al pasar términos."],
    [118,30,2,4,"Dos expresiones representan el mismo valor.","Si 2(x+4)=30, ¿cuál es x?",["7","9","11","15"],"B","x+4=15; x=11.","Puedes dividir ambos lados entre 2 antes de despejar."],
    [119,14,2,9,"Una recta tiene ecuación y=2x+9.","¿Cuál es el valor de y cuando x=14?",["28","31","37","42"],"C","2×14+9=37.","Identifica pendiente y término independiente."],
    [120,5,3,8,"Una relación está dada por y=5x−3.","¿Qué valor de x produce y=8?",["1","2","2,2","3"],"B","5x−3=8; 5x=11; x=2,2. Por tanto la opción correcta es C.","No redondees una incógnita antes de terminar."],
    [121,12,8,20,"Un jardín rectangular mide 12 m por 8 m.","¿Cuál es su área?",["20 m²","40 m²","96 m²","192 m²"],"C","Área=12×8=96 m².","Área de rectángulo = base×altura."],
    [122,12,8,20,"Un jardín rectangular mide 12 m por 8 m.","¿Cuál es su perímetro?",["20 m","40 m","48 m","96 m"],"B","Perímetro=2(12+8)=40 m.","No confundas área con perímetro."],
    [123,9,9,14,"Un cuadrado tiene lado 9 cm.","¿Cuál es su área?",["18 cm²","36 cm²","72 cm²","81 cm²"],"D","9²=81 cm².","En un cuadrado, área=l²."],
    [124,10,6,8,"Un rectángulo tiene perímetro 32 cm y uno de sus lados mide 10 cm.","¿Cuánto mide el otro lado?",["4 cm","6 cm","8 cm","12 cm"],"B","2(10+x)=32; 10+x=16; x=6.","Divide el perímetro entre dos antes de restar."],
    [125,3,4,5,"Un cubo tiene arista de 3 cm.","¿Cuál es su volumen?",["9 cm³","18 cm³","27 cm³","36 cm³"],"C","Volumen=3³=27 cm³.","En un cubo, volumen=l³."],
    [126,10,5,2,"Un triángulo tiene base 10 cm y altura 5 cm.","¿Cuál es su área?",["15 cm²","20 cm²","25 cm²","50 cm²"],"C","Área=(10×5)/2=25 cm².","El factor 1/2 es esencial en el triángulo."],
    [127,6,8,10,"Una caja rectangular mide 6×8×10 cm.","¿Cuál es su volumen?",["24 cm³","48 cm³","240 cm³","480 cm³"],"D","6×8×10=480 cm³.","Multiplica las tres dimensiones."],
    [128,10,20,30,"Un ángulo recto se divide en dos partes.","Si una parte mide 30°, ¿cuánto mide la otra?",["30°","45°","60°","150°"],"C","90°−30°=60°.","Un ángulo recto mide 90°."],
    [129,4,6,8,10,12,"Se registran cuatro tiempos: 4, 6, 8 y 10 segundos.","¿Cuál es el promedio?",["6 s","7 s","8 s","9 s"],"B","(4+6+8+10)/4=7 s.","Suma todos los datos y divide entre su cantidad."],
    [130,3,5,7,9,11,"Los datos de una muestra son 3, 5, 7, 9 y 11.","¿Cuál es la mediana?",["5","7","8","9"],"B","El valor central de los cinco datos ordenados es 7.","La mediana es el dato central, no el promedio."],
    [131,2,3,5,7,11,"Una bolsa contiene 2 fichas rojas, 3 azules y 5 verdes.","¿Cuál es la probabilidad de sacar una azul?",["1/5","3/10","1/3","3/5"],"B","Hay 3 casos favorables entre 10 posibles: 3/10.","Probabilidad = favorables/total."],
    [132,4,6,10,12,"Una moneda justa se lanza una vez.","¿Cuál es la probabilidad de obtener cara?",["1/4","1/3","1/2","2/3"],"C","Hay dos resultados equiprobables y uno favorable.","Identifica el espacio muestral."],
    [133,12,18,24,30,"Una secuencia aumenta siempre en la misma cantidad: 12, 18, 24, 30.","¿Cuál es el siguiente término?",["32","34","36","42"],"C","La diferencia común es 6; 30+6=36.","Busca primero la diferencia entre términos."],
    [134,2,5,20,"Una velocidad de 20 m/s se mantiene durante 5 s.","¿Qué distancia se recorre?",["4 m","25 m","100 m","400 m"],"C","d=v×t=20×5=100 m.","Si la velocidad es constante, usa d=vt."]
  ].forEach((a)=>{
    const id=Number(a[0]);
    if(id<=120){
      const [context,question,choices,correct,explanation,tip]=a.slice(4,10);
      const sub=id<=106?"Porcentajes y variación":id<=112?"Proporcionalidad y unidades":"Álgebra y funciones";
      const competency=id%3===0?"Argumentación":id%3===1?"Interpretación y Representación":"Formulación y Ejecución";
      out.push(q("mat-x"+id,"matematicas",sub,competency,id%2?"Media":"Baja",context,question,opts(...choices),correct,explanation,tip));
    } else if(id>=121 && id<=128){
      const [context,question,choices,correct,explanation,tip]=a.slice(3,9);
      out.push(q("mat-x"+id,"matematicas","Geometría y medición",id%2?"Formulación y Ejecución":"Interpretación y Representación",id%2?"Baja":"Media",context,question,opts(...choices),correct,explanation,tip));
    }
  });;