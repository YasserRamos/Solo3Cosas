import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`
        min-h-screen flex transition-all duration-300
        ${darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"}
      `}
    >
      <Sidebar sidebarOpen={sidebarOpen} darkMode={darkMode} />

      <div className="flex-1 min-w-0">
        <Header
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;