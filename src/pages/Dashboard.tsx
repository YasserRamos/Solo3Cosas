import { useEffect, useState } from "react";
import Papa from "papaparse";

import MainLayout from "../layout/MainLayout";

import GraficaPromedios from "../components/GraficaPromedios";
import GraficaUniversidades from "../components/GraficaPerfilTecnico";
import GraficaEntrenamiento from "../components/GraficaEntrenamiento";

function Dashboard() {
  const [estudiantes, setEstudiantes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/Internship_Selection_Dataset.csv")
      .then((respuesta) => respuesta.text())
      .then((textoCSV) => {
        Papa.parse(textoCSV, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: function (resultado: any) {
            setEstudiantes(resultado.data);
          },
        });
      });
  }, []);

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Análisis de selección estudiantil
          </h1>

          <p className="text-slate-400 mt-2">
            Promedios calculados desde el archivo CSV completo.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <GraficaPromedios estudiantes={estudiantes} />
          <GraficaUniversidades estudiantes={estudiantes} />
          <GraficaEntrenamiento estudiantes={estudiantes} />
        </div>
      </section>
    </MainLayout>
  );
}

export default Dashboard;