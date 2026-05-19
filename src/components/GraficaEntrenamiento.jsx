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

function GraficaEntrenamiento({ estudiantes }) {
    const [mostrarNoSeleccionados, setMostrarNoSeleccionados] = useState(true);

    const entrenadosSeleccionados = estudiantes.filter(
        (e) => e.placement_training === "Yes" && e.selected === 1
    ).length;

    const entrenadosNoSeleccionados = estudiantes.filter(
        (e) => e.placement_training === "Yes" && e.selected === 0
    ).length;

    const noEntrenadosSeleccionados = estudiantes.filter(
        (e) => e.placement_training === "No" && e.selected === 1
    ).length;

    const noEntrenadosNoSeleccionados = estudiantes.filter(
        (e) => e.placement_training === "No" && e.selected === 0
    ).length;

    const datos = [
        {
            categoria: "Entrenados",
            "Entr. + Sel.": entrenadosSeleccionados,
            "Entr. + No Sel.": mostrarNoSeleccionados ? entrenadosNoSeleccionados : 0,
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

    const tarjetas = [
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
        : tarjetas.filter((tarjeta) => tarjeta.nombre.includes("+ Sel."));

    const totalVisible = tarjetasFiltradas.reduce(
        (suma, tarjeta) => suma + tarjeta.cantidad,
        0
    );

    function obtenerPorcentaje(cantidad) {
        if (!totalVisible) return 0;
        return ((cantidad / totalVisible) * 100).toFixed(1);
    }

    function tooltipPersonalizado({ active, payload, label }) {
        if (active && payload && payload.length) {
            const seleccionados =
                payload.find((item) => item.dataKey === "Seleccionados")?.value || 0;

            const noSeleccionados =
                payload.find((item) => item.dataKey === "No seleccionados")?.value || 0;

            const total = seleccionados + noSeleccionados;

            return (
                <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 shadow-xl text-sm">
                    <p className="text-white font-semibold mb-3">{label}</p>

                    <p className="text-green-400">
                        Seleccionados: <span className="text-white">{seleccionados}</span>
                    </p>

                    {mostrarNoSeleccionados && (
                        <p className="text-orange-400">
                            No seleccionados:{" "}
                            <span className="text-white">{noSeleccionados}</span>
                        </p>
                    )}

                    <p className="text-slate-300 mt-2 pt-2 border-t border-slate-700">
                        Total: <span className="text-white font-semibold">{total}</span>
                    </p>
                </div>
            );
        }

        return null;
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

                <label className="flex items-center gap-2 text-sm text-slate-300 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={mostrarNoSeleccionados}
                        onChange={(evento) =>
                            setMostrarNoSeleccionados(evento.target.checked)
                        }
                        className="w-4 h-4 accent-orange-500"
                    />
                    Mostrar no seleccionados
                </label>
            </div>

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={datos} margin={{ top: 20, right: 20, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                        <XAxis dataKey="categoria" stroke="#94a3b8" />

                        <YAxis stroke="#94a3b8" />

                        <Tooltip content={tooltipPersonalizado} />

                        <Legend />

                        <Bar
                            dataKey="Entr. + Sel."
                            stackId="grupo"
                            fill="#22c55e"
                            radius={[8, 0, 0, 8]}
                        >
                            <LabelList dataKey="Entr. + Sel." position="inside" fill="#fff" />
                        </Bar>

                        {mostrarNoSeleccionados && (
                            <Bar
                                dataKey="Entr. + No Sel."
                                stackId="grupo"
                                fill="#f97316"
                                radius={[0, 8, 8, 0]}
                            >
                                <LabelList dataKey="Entr. + No Sel." position="inside" fill="#fff" />
                            </Bar>
                        )}

                        <Bar
                            dataKey="No Entr. + Sel."
                            stackId="grupo"
                            fill="#3b82f6"
                            radius={[8, 0, 0, 8]}
                        >
                            <LabelList dataKey="No Entr. + Sel." position="inside" fill="#fff" />
                        </Bar>

                        {mostrarNoSeleccionados && (
                            <Bar
                                dataKey="No Entr. + No Sel."
                                stackId="grupo"
                                fill="#ef4444"
                                radius={[0, 8, 8, 0]}
                            >
                                <LabelList dataKey="No Entr. + No Sel." position="inside" fill="#fff" />
                            </Bar>
                        )}
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
                {tarjetasFiltradas.map((tarjeta) => (
                    <div
                        key={tarjeta.nombre}
                        className="bg-slate-800 rounded-2xl p-3 border border-slate-700"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: tarjeta.color }}
                            />

                            <p className="text-sm text-slate-300 truncate">
                                {tarjeta.nombre}
                            </p>
                        </div>

                        <p className="text-2xl font-bold text-white">
                            {tarjeta.cantidad}
                        </p>

                        <p className="text-xs text-slate-400">
                            {obtenerPorcentaje(tarjeta.cantidad)}% del total
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GraficaEntrenamiento;