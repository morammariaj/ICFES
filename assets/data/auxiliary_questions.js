/**
 * CUESTIONARIOS AUXILIARES DE ENTRENAMIENTO
 * Basados en los dominios descritos en la guía Saber 11 2026.
 * No son formularios oficiales ni reproducen preguntas oficiales.
 * Las respuestas son personales y no se califican.
 */
const AUXILIARY_QUESTIONS = {
  socioeconomico: [
    ["¿Cuántas personas viven habitualmente en tu hogar?","Composición del hogar",["1","2","3","4","5 o más"]],
    ["¿Cuál es la situación principal de la persona que aporta la mayor parte del ingreso del hogar?","Situación laboral",["Empleado/a","Independiente","Desempleado/a","Pensionado/a","Otra"]],
    ["¿Cuál es el nivel educativo más alto alcanzado por la persona que aporta la mayor parte del ingreso del hogar?","Educación del hogar",["Primaria","Secundaria","Técnica o tecnológica","Universitaria","Posgrado","No sabe"]],
    ["¿Tienes un lugar adecuado y estable para estudiar en casa?","Condiciones de estudio",["Sí","No","A veces"]],
    ["¿Tu hogar cuenta con conexión a internet?","Conectividad",["Sí, fija","Sí, móvil","Sí, ambas","No"]],
    ["¿Con qué frecuencia tienes acceso a un computador para estudiar?","Recursos tecnológicos",["Siempre","Frecuentemente","A veces","Nunca"]],
    ["¿El hogar cuenta con servicio de televisión por cable o satelital?","Dotación del hogar",["Sí","No"]],
    ["¿Cuál describe mejor la disponibilidad de agua potable en tu vivienda?","Servicios del hogar",["Permanente","Intermitente","No disponible"]],
    ["¿Cuántos teléfonos celulares con acceso a internet hay en el hogar?","Dotación tecnológica",["Ninguno","1","2","3","4 o más"]],
    ["¿Con qué frecuencia la familia realiza actividades de entretenimiento fuera del hogar?","Tiempo familiar",["Nunca o casi nunca","Mensualmente","Semanalmente","Varias veces por semana"]],
    ["¿Cuántas habitaciones del hogar se usan principalmente como dormitorios?","Características del hogar",["1","2","3","4 o más"]],
    ["¿El hogar tiene un espacio destinado principalmente para cocinar?","Características del hogar",["Sí","No"]],
    ["¿Cuál es el medio principal que utilizas para llegar al lugar donde estudias?","Movilidad",["A pie","Bicicleta","Transporte público","Vehículo particular","Otro"]],
    ["¿Cuánto tiempo tardas normalmente en desplazarte al lugar de estudio?","Movilidad",["Menos de 15 min","15–30 min","31–60 min","Más de 60 min"]],
    ["¿Con qué frecuencia utilizas internet para actividades académicas?","Uso educativo de internet",["Nunca","Rara vez","Algunas veces","Frecuentemente","Siempre"]],
    ["¿Tienes acceso a libros o materiales impresos para estudiar en casa?","Recursos educativos",["Sí, suficientes","Sí, algunos","Muy pocos","No"]],
    ["¿En tu hogar se puede disponer de un lugar tranquilo para estudiar?","Ambiente de estudio",["Siempre","Frecuentemente","A veces","Nunca"]],
    ["¿Cuál es la principal dificultad para estudiar fuera del horario escolar?","Condiciones de estudio",["Tiempo","Espacio","Conectividad","Recursos económicos","Otra","Ninguna"]],
    ["¿Con qué frecuencia recibes apoyo de alguien del hogar para resolver dudas académicas?","Apoyo familiar",["Nunca","Rara vez","A veces","Frecuentemente","Siempre"]],
    ["¿Tu hogar dispone de una nevera?","Dotación del hogar",["Sí","No"]],
    ["¿Tu hogar dispone de lavadora?","Dotación del hogar",["Sí","No"]],
    ["¿Tu hogar dispone de servicio de internet para uso educativo?","Conectividad",["Sí","No","No sabe"]],
    ["¿Con qué frecuencia participas en actividades culturales o recreativas?","Tiempo de ocio",["Nunca","Rara vez","Mensualmente","Semanalmente","Varias veces por semana"]],
    ["¿Qué recurso consideras más importante para mejorar tu preparación académica?","Percepción de necesidades",["Más tiempo","Materiales de estudio","Conectividad","Acompañamiento","Otro"]]
  ].map((x,i)=>({id:"socio-"+(i+1),category:x[1],question:x[0],options:x[2].map((t,j)=>({key:String.fromCharCode(65+j),text:t}))})),

  clima: [
    ["En mi institución puedo expresar mis opiniones con respeto.","Participación y voz",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los estudiantes conocen las normas de convivencia de la institución.","Normas",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Las normas se aplican de manera clara y coherente.","Normas",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Cuando ocurre un conflicto, existen espacios para buscar soluciones.","Manejo de conflictos",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Me siento seguro/a dentro de la institución educativa.","Seguridad",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los docentes tratan a los estudiantes con respeto.","Relaciones con docentes",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los estudiantes suelen respetarse entre sí.","Relaciones entre estudiantes",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["La institución actúa frente a situaciones de acoso o intimidación.","Convivencia",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Puedo pedir ayuda a un adulto de la institución cuando tengo un problema.","Apoyo",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los estudiantes reciben información clara sobre sus responsabilidades.","Normas",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Siento que pertenezco a mi comunidad educativa.","Pertenencia",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Las actividades escolares favorecen la colaboración entre estudiantes.","Colaboración",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los docentes escuchan las preguntas de los estudiantes.","Relaciones con docentes",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Cuando cometo un error académico, puedo recibir orientación para mejorar.","Apoyo al aprendizaje",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["La institución reconoce la diversidad de sus estudiantes.","Inclusión",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Me siento respetado/a independientemente de mis características personales.","Inclusión",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Existe confianza para hablar de dificultades académicas.","Apoyo al aprendizaje",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Las clases favorecen un ambiente que permite concentrarse.","Ambiente de aprendizaje",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los estudiantes pueden participar en actividades de representación escolar.","Participación",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Las decisiones importantes de la institución se comunican de manera clara.","Comunicación",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Cuando hay desacuerdos, se promueve el diálogo.","Manejo de conflictos",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["La institución ofrece orientación cuando un estudiante la necesita.","Apoyo",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["Los espacios físicos de la institución favorecen el aprendizaje.","Ambiente físico",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]],
    ["En general, considero positivo el ambiente de mi institución.","Percepción general",["Nunca","Pocas veces","Algunas veces","Muchas veces","Siempre"]]
  ].map((x,i)=>({id:"clima-"+(i+1),category:x[1],question:x[0],options:x[2].map((t,j)=>({key:String.fromCharCode(65+j),text:t}))}))
};