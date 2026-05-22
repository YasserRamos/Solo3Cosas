interface CheckboxFiltroProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

function CheckboxFiltro({
  checked,
  onChange,
  label,
}: CheckboxFiltroProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-300 whitespace-nowrap cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(evento) => onChange(evento.target.checked)}
        className="w-4 h-4 accent-orange-500"
      />

      {label}
    </label>
  );
}

export default CheckboxFiltro;