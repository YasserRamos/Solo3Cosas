import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  GraduationCap,
  Settings,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  darkMode: boolean;
}

const enlaces = [
  {
    texto: "Inicio",
    ruta: "/",
    icono: LayoutDashboard,
  },
  {
    texto: "Estadísticas",
    ruta: "/estadisticas",
    icono: BarChart3,
  },
  {
    texto: "Estudiantes",
    ruta: "/estudiantes",
    icono: GraduationCap,
  },
  {
    texto: "Configuración",
    ruta: "/configuracion",
    icono: Settings,
  },
];

function Sidebar({ sidebarOpen, darkMode }: SidebarProps) {
  return (
    <aside
      className={`
        border-r transition-all duration-300 ease-in-out
        overflow-hidden shadow-sm shrink-0
        ${sidebarOpen ? "w-64" : "w-0"}
        ${
          darkMode
            ? "bg-slate-900 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-800"
        }
      `}
    >
      <div className="w-64 h-screen flex flex-col">
        <div
          className={`
            p-6 border-b
            ${darkMode ? "border-slate-700" : "border-slate-200"}
          `}
        >
          <div className="flex items-center space-x-3">
            <div
              className="
                w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600
                rounded-xl flex items-center justify-center shadow-lg
              "
            >
              <span className="text-white font-bold">UT</span>
            </div>

            <h2
              className={`
                font-bold text-lg transition-all duration-300
                ${darkMode ? "text-white" : "text-slate-800"}
              `}
            >
              Administrador
            </h2>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {enlaces.map((enlace) => {
              const Icono = enlace.icono;

              return (
                <li key={enlace.ruta}>
                  <NavLink
                    to={enlace.ruta}
                    className={({ isActive }) => `
                      flex items-center gap-3 p-3 rounded-xl
                      cursor-pointer font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : darkMode
                          ? "hover:bg-slate-800 text-slate-200"
                          : "hover:bg-slate-100 text-slate-800"
                      }
                    `}
                  >
                    <Icono size={20} />

                    <span>{enlace.texto}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;