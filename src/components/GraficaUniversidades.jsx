import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function GraficaUniversidades({ estudiantes }) {
  const niveles = ["Tier 1", "Tier 2", "Tier 3"];

  const datos = niveles.map((nivel) => {
    const filtrados = estudiantes.filter(
      (estudiante) => estudiante.college_tier === nivel
    );

    const seleccionados = filtrados.filter(
      (estudiante) => estudiante.selected === 1
    ).length;

    const porcentaje = filtrados.length
      ? Number(((seleccionados / filtrados.length) * 100).toFixed(2))
      : 0;

    return {
      nivel,
      porcentaje,
    };
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Selección por universidad
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Porcentaje de estudiantes seleccionados según el tier universitario.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="nivel"
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
              unit="%"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
              }}
            />

            <Bar
              dataKey="porcentaje"
              fill="#22c55e"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GraficaUniversidades;