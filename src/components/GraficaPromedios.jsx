import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

function GraficaPromedios({ estudiantes }) {
  function promedio(datos, clave) {
    if (!datos.length) return 0;

    const total = datos.reduce((suma, estudiante) => {
      return suma + Number(estudiante[clave] || 0);
    }, 0);

    return Number((total / datos.length).toFixed(2));
  }

  const seleccionados = estudiantes.filter(
    (estudiante) => estudiante.selected === 1
  );

  const noSeleccionados = estudiantes.filter(
    (estudiante) => estudiante.selected === 0
  );

  const datos = [
    {
      nombre: "CGPA",
      Seleccionados: promedio(seleccionados, "CGPA"),
      "No seleccionados": promedio(noSeleccionados, "CGPA"),
    },

    {
      nombre: "Coding",
      Seleccionados: promedio(seleccionados, "coding_test_score"),
      "No seleccionados": promedio(noSeleccionados, "coding_test_score"),
    },

    {
      nombre: "Entrevista",
      Seleccionados: promedio(seleccionados, "interview_score"),
      "No seleccionados": promedio(noSeleccionados, "interview_score"),
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Comparación de habilidades
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Diferencia promedio entre estudiantes seleccionados y no seleccionados.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="nombre"
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
              }}
            />

            <Legend />

            <Bar
              dataKey="Seleccionados"
              fill="#38bdf8"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="No seleccionados"
              fill="#f97316"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GraficaPromedios;