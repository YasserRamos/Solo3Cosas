import { Moon, Sun } from "lucide-react";

interface BotonTemaProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

function BotonTema({
  darkMode,
  setDarkMode,
}: BotonTemaProps) {
  return (
    <button
      onClick={() =>
        setDarkMode((prev) => !prev)
      }
      className={`
        p-2 rounded-xl transition-all duration-300

        ${
          darkMode
            ? `
              bg-slate-800
              text-yellow-400
              hover:bg-slate-700
            `
            : `
              bg-slate-200
              text-slate-900
              hover:bg-slate-300
            `
        }
      `}
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}

export default BotonTema;