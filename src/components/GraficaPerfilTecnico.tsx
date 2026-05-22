import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Estudiante {
  skills_score: number;
  projects_count: number;
  certifications_count: number;
  github_score: number;
  selected: number;
}

interface GraficaPerfilTecnicoProps {
  estudiantes: Estudiante[];
}

function GraficaPerfilTecnico({ estudiantes }: GraficaPerfilTecnicoProps) {
  function promedio(datos: Estudiante[], clave: keyof Estudiante) {
    if (!datos.length) return 0;

    const total = datos.reduce((suma, estudiante) => {
      return suma + Number(estudiante[clave] || 0);
    }, 0);

    return Number((total / datos.length).toFixed(2));
  }

  const seleccionados = estudiantes.filter((e) => e.selected === 1);
  const noSeleccionados = estudiantes.filter((e) => e.selected === 0);

  const datos = [
    {
      metrica: "Skills",
      Seleccionados: promedio(seleccionados, "skills_score"),
      "No seleccionados": promedio(noSeleccionados, "skills_score"),
    },
    {
      metrica: "Proyectos",
      Seleccionados: promedio(seleccionados, "projects_count"),
      "No seleccionados": promedio(noSeleccionados, "projects_count"),
    },
    {
      metrica: "Certificados",
      Seleccionados: promedio(seleccionados, "certifications_count"),
      "No seleccionados": promedio(noSeleccionados, "certifications_count"),
    },
    {
      metrica: "GitHub",
      Seleccionados: promedio(seleccionados, "github_score"),
      "No seleccionados": promedio(noSeleccionados, "github_score"),
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Perfil técnico promedio
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Comparación del perfil técnico entre seleccionados y no seleccionados.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datos}>
            <PolarGrid stroke="#334155" />

            <PolarAngleAxis
              dataKey="metrica"
              tick={{ fill: "#cbd5e1", fontSize: 12 }}
            />

            <PolarRadiusAxis
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1", fontSize: 11 }}
            />

            <Radar
              name="Seleccionados"
              dataKey="Seleccionados"
              stroke="#38bdf8"
              fill="#38bdf8"
              fillOpacity={0.35}
            />

            <Radar
              name="No seleccionados"
              dataKey="No seleccionados"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.25}
            />

            <Tooltip />

            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GraficaPerfilTecnico;