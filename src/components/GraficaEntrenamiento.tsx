import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  LabelList,
} from "recharts";

import type { Estudiante } from "../types/estudiante";
import TarjetaEstadistica from "../UI/TarjetaEstadistica";
import CheckboxFiltro from "../UI/CheckboxPersonalizado";

interface GraficaEntrenamientoProps {
  estudiantes: Estudiante[];
}

interface TarjetaDato {
  nombre: string;
  cantidad: number;
  color: string;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function GraficaEntrenamiento({
  estudiantes,
}: GraficaEntrenamientoProps) {
  const [mostrarNoSeleccionados, setMostrarNoSeleccionados] =
    useState(true);

  const entrenadosSeleccionados = estudiantes.filter(
    (estudiante) =>
      estudiante.placement_training === "Yes" &&
      estudiante.selected === 1
  ).length;

  const entrenadosNoSeleccionados = estudiantes.filter(
    (estudiante) =>
      estudiante.placement_training === "Yes" &&
      estudiante.selected === 0
  ).length;

  const noEntrenadosSeleccionados = estudiantes.filter(
    (estudiante) =>
      estudiante.placement_training === "No" &&
      estudiante.selected === 1
  ).length;

  const noEntrenadosNoSeleccionados = estudiantes.filter(
    (estudiante) =>
      estudiante.placement_training === "No" &&
      estudiante.selected === 0
  ).length;

  const datos = [
    {
      categoria: "Entrenados",
      "Entr. + Sel.": entrenadosSeleccionados,
      "Entr. + No Sel.": mostrarNoSeleccionados
        ? entrenadosNoSeleccionados
        : 0,
      "No Entr. + Sel.": 0,
      "No Entr. + No Sel.": 0,
    },
    {
      categoria: "No entrenados",
      "Entr. + Sel.": 0,
      "Entr. + No Sel.": 0,
      "No Entr. + Sel.": noEntrenadosSeleccionados,
      "No Entr. + No Sel.": mostrarNoSeleccionados
        ? noEntrenadosNoSeleccionados
        : 0,
    },
  ];

  const tarjetas: TarjetaDato[] = [
    {
      nombre: "Entr. + Sel.",
      cantidad: entrenadosSeleccionados,
      color: "#22c55e",
    },
    {
      nombre: "Entr. + No Sel.",
      cantidad: entrenadosNoSeleccionados,
      color: "#f97316",
    },
    {
      nombre: "No Entr. + Sel.",
      cantidad: noEntrenadosSeleccionados,
      color: "#3b82f6",
    },
    {
      nombre: "No Entr. + No Sel.",
      cantidad: noEntrenadosNoSeleccionados,
      color: "#ef4444",
    },
  ];

  const tarjetasFiltradas = mostrarNoSeleccionados
    ? tarjetas
    : tarjetas.filter((tarjeta) =>
        tarjeta.nombre.includes("+ Sel.")
      );

  const totalVisible = tarjetasFiltradas.reduce(
    (suma, tarjeta) => suma + tarjeta.cantidad,
    0
  );

  function obtenerPorcentaje(cantidad: number) {
    if (!totalVisible) return "0.0";

    return ((cantidad / totalVisible) * 100).toFixed(1);
  }

  function tooltipPersonalizado({
    active,
    payload,
    label,
  }: TooltipProps) {
    if (!active || !payload || !payload.length) return null;

    const datosVisibles = payload.filter((item) => item.value > 0);

    const total = datosVisibles.reduce(
      (suma, item) => suma + item.value,
      0
    );

    return (
      <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 shadow-xl text-sm">
        <p className="text-white font-semibold mb-3">
          {label}
        </p>

        <div className="space-y-1">
          {datosVisibles.map((item) => (
            <p key={item.dataKey} style={{ color: item.color }}>
              {item.dataKey}:{" "}
              <span className="text-white">
                {item.value}
              </span>
            </p>
          ))}
        </div>

        <p className="text-slate-300 mt-2 pt-2 border-t border-slate-700">
          Total:{" "}
          <span className="text-white font-semibold">
            {total}
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Entrenamiento y selección
          </h2>

          <p className="text-sm text-slate-400 mt-1 max-w-xs">
            Relación entre entrenamiento y resultado de selección.
          </p>
        </div>

        <CheckboxFiltro
          checked={mostrarNoSeleccionados}
          onChange={setMostrarNoSeleccionados}
          label="Mostrar no seleccionados"
        />
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={datos}
            margin={{ top: 20, right: 20, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
            />

            <XAxis
              dataKey="categoria"
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#cbd5e1" }}
            />

            <Tooltip content={tooltipPersonalizado} />

            <Legend />

            <Bar
              dataKey="Entr. + Sel."
              stackId="grupo"
              fill="#22c55e"
              radius={[8, 0, 0, 8]}
            >
              <LabelList
                dataKey="Entr. + Sel."
                position="inside"
                fill="#fff"
              />
            </Bar>

            {mostrarNoSeleccionados && (
              <Bar
                dataKey="Entr. + No Sel."
                stackId="grupo"
                fill="#f97316"
                radius={[0, 8, 8, 0]}
              >
                <LabelList
                  dataKey="Entr. + No Sel."
                  position="inside"
                  fill="#fff"
                />
              </Bar>
            )}

            <Bar
              dataKey="No Entr. + Sel."
              stackId="grupo"
              fill="#3b82f6"
              radius={[8, 0, 0, 8]}
            >
              <LabelList
                dataKey="No Entr. + Sel."
                position="inside"
                fill="#fff"
              />
            </Bar>

            {mostrarNoSeleccionados && (
              <Bar
                dataKey="No Entr. + No Sel."
                stackId="grupo"
                fill="#ef4444"
                radius={[0, 8, 8, 0]}
              >
                <LabelList
                  dataKey="No Entr. + No Sel."
                  position="inside"
                  fill="#fff"
                />
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {tarjetasFiltradas.map((tarjeta) => (
          <TarjetaEstadistica
            key={tarjeta.nombre}
            nombre={tarjeta.nombre}
            cantidad={tarjeta.cantidad}
            porcentaje={obtenerPorcentaje(tarjeta.cantidad)}
            color={tarjeta.color}
          />
        ))}
      </div>
    </div>
  );
}

export default GraficaEntrenamiento;