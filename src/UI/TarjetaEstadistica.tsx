interface TarjetaEstadisticaProps {
  nombre: string;
  cantidad: number;
  porcentaje: string;
  color: string;
}

function TarjetaEstadistica({
  nombre,
  cantidad,
  porcentaje,
  color,
}: TarjetaEstadisticaProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-3 border border-slate-700">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />

        <p className="text-sm text-slate-300 truncate">
          {nombre}
        </p>
      </div>

      <p className="text-2xl font-bold text-white">
        {cantidad}
      </p>

      <p className="text-xs text-slate-400">
        {porcentaje}% del total
      </p>
    </div>
  );
}

export default TarjetaEstadistica;