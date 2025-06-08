import { useState } from "react";
import preguntas from "@/data/preguntas_eu24_con_respuestas.json";

export default function Quiz() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [seleccionada, setSeleccionada] = useState<number | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<number | null>(null);

  const pregunta = preguntas[preguntaActual];

  const manejarRespuesta = (i: number) => {
    setSeleccionada(i);
    setRespuestaCorrecta(pregunta.respuesta_correcta);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{pregunta.numero}) {pregunta.pregunta}</h2>
      <div className="flex flex-col gap-2">
        {pregunta.opciones.map((opcion, i) => {
          let color = "bg-white";
          if (seleccionada !== null) {
            if (i === respuestaCorrecta) color = "bg-green-200";
            else if (i === seleccionada) color = "bg-red-200";
          }
          return (
            <button
              key={i}
              className={\`border p-2 rounded \${color}\`}
              onClick={() => manejarRespuesta(i)}
              disabled={seleccionada !== null}
            >
              {String.fromCharCode(97 + i)}) {opcion}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        {preguntaActual < preguntas.length - 1 && (
          <button
            className="mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={() => {
              setPreguntaActual(p => p + 1);
              setSeleccionada(null);
              setRespuestaCorrecta(null);
            }}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}