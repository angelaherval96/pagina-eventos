function reservar(agendaId, mensaje) {
    document.getElementById(agendaId).textContent = mensaje;
  }
  

  // funcion para mostrar la informacion del evento, con un mensaje diferente segun el id del boton
    function info(eventoId) {
        // borrar mensajes anteriores
        for (let i = 1; i <= 6; i++) {
            document.getElementById("mensaje" + i).textContent = "";
        }

        if (eventoId == "1") {
            document.getElementById("mensaje1").textContent = "El pianista de Cincinnati Fred Hersch abrirá el sábado 2 de noviembre la nueva edición de este encuentro musical organizado por el Ayuntamiento de Málaga a través de Málaga Procultura, que continuará con una breve pero significativa exposición de lo mejor del género facturado en nuestras latitudes, primero con Carles Benavent, Tino di Geraldo y Jorge Pardo en El concierto de Málaga y después con el espectáculo La edad de oro del jazz español, una reunión en escena de diez de nuestros mejores solistas.";
        } else if (eventoId == "2") {
            document.getElementById("mensaje2").textContent = "Hamlet es una tragedia de venganza. El espíritu de su padre le pide al joven príncipe de Dinamarca que vengue el asesinato que su propio hermano perpetró contra él. Sin embargo, en la obra de Shakespeare, no destaca la realización de la venganza, sino que el conflicto interno del héroe tiene prioridad.";
        } else if (eventoId == "3") {
            document.getElementById("mensaje3").textContent = "Shakespeare dice que la muerte es el fin de todo y que Romeo y Julieta murieron abrazados en el mausoleo de Verona. Ahora, 400 años después, os vamos a demostrar que Shakespeare se equivocó: Ana Belén y José Luis nos van a contar la verdadera historia de este amor prohibido.";
        } else if (eventoId == "4") {
            document.getElementById("mensaje4").textContent = " Es una obra humana que refleja el peregrinaje del ser humano en busca de “la Luz”, es el descubrimiento del hombre hacia Dios, con la ayuda de la razón (Virgilio) y de la fe (Beatriz). El poema es una epopeya religiosa que narra con realismo un viaje, es un canto a la humanidad";
        } else if (eventoId == "5") {
            document.getElementById("mensaje5").textContent = "La Odisea narra la historia del héroe griego Odiseo, Ulises, el viaje de regreso a su reino de Ítaca donde le esperan su esposa Penélope, rodeada de pretendiente, y su hijo Telémaco. Un trayecto de aproximadamente un mes de navegación que se alarga aproximadamente diez años, los mismos que duró la guerra de Troya.";
        } else if (eventoId == "6") {
            document.getElementById("mensaje6").textContent = "La Ilíada es un poema de género épico que trata el asedio de la ciudad de Troya por los griegos para rescatar a Helena, esposa del rey Menelao, la cual fue raptada por Paris, príncipe troyano. Después de este hecho, se origina una guerra entre griegos y troyanos.";
        }
    }