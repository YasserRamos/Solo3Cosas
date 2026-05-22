import {
  PanelLeft,
} from "lucide-react";

import BotonTema from "../ui/BotonTema";
import PerfilUsuario from "./PerfilUsuario";

interface HeaderProps {
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  darkMode: boolean;

  setDarkMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

function Header({
  setSidebarOpen,
  darkMode,
  setDarkMode,
}: HeaderProps) {

  return (

    <header
      className={`
        h-16
        border-b
        flex
        items-center
        px-6
        transition-all
        duration-300

        ${
          darkMode
            ? `
              bg-slate-900
              border-slate-700
            `
            : `
              bg-white
              border-slate-200
            `
        }
      `}
    >

      {/* BOTON SIDEBAR */}
      <button
        onClick={() =>
          setSidebarOpen((prev) => !prev)
        }
        className={`
          p-2
          rounded-xl
          transition-all
          duration-300
          hover:scale-105
          mr-4

          ${
            darkMode
              ? `
                text-white
                hover:bg-slate-800
              `
              : `
                text-slate-900
                hover:bg-slate-100
              `
          }
        `}
      >

        <PanelLeft size={24} />

      </button>

      {/* TITULO */}
      <div>

        <h1
          className={`
            text-xl
            font-bold
            transition-all
            duration-300

            ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }
          `}
        >
          Dashboard
        </h1>

        <p
          className={`
            text-xs
            transition-all
            duration-300

            ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          `}
        >
          Sistema de análisis estudiantil
        </p>

      </div>

      {/* DERECHA */}
      <div
        className="
          ml-auto
          flex
          items-center
          gap-4
        "
      >

        {/* BOTON TEMA */}
        <BotonTema
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* PERFIL */}
        <PerfilUsuario
          darkMode={darkMode}
        />

      </div>

    </header>

  );
}

export default Header;