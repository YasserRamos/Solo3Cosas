interface PerfilUsuarioProps {
  darkMode: boolean;
}

function PerfilUsuario({
  darkMode,
}: PerfilUsuarioProps) {

  return (

    <div
      className={`
        flex
        items-center
        space-x-3
        pl-4
        border-l

        ${
          darkMode
            ? "border-slate-700"
            : "border-slate-200"
        }
      `}
    >

      <img
        src="https://png.pngtree.com/png-vector/20190811/ourmid/pngtree-schedule-manager-icon-on-gray-background-flat-style-vector-eps-png-image_1690177.jpg"
        alt="Usuario"
        className="
          w-9
          h-9
          rounded-full
          object-cover
          ring-2
          ring-blue-500
        "
      />

      <div className="hidden md:block">

        <p
          className={`
            text-sm
            font-medium

            ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }
          `}
        >
          Administrador
        </p>

        <p
          className={`
            text-xs

            ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          `}
        >
          Panel principal
        </p>

      </div>

    </div>

  );
}

export default PerfilUsuario;