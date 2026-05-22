import { Menu } from "lucide-react";

interface BotonMenuProps {
  darkMode: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BotonMenu({
  darkMode,
  setSidebarOpen,
}: BotonMenuProps) {
  return (
    <button
      onClick={() => setSidebarOpen((prev) => !prev)}
      className={`
        p-2 rounded-xl transition-all duration-300
        hover:scale-105

        ${
          darkMode
            ? "text-white hover:bg-slate-800"
            : "text-slate-900 hover:bg-slate-200"
        }
      `}
    >
      <Menu size={26} />
    </button>
  );
}

export default BotonMenu;