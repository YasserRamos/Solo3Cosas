import { useEffect, useState } from "react";
import Papa from "papaparse";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

interface StudentData {
  CGPA: number;
  coding_test_score: number;
  selected: number;
}

function Estadisticas() {

  const [data, setData] = useState<StudentData[]>([]);

  useEffect(() => {

    fetch("/data/Internship_Selection_Dataset.csv")
      .then((response) => response.text())
      .then((csvText) => {

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,

          complete: (results: any) => {

            const formattedData = results.data.map((item: any) => ({
              CGPA: Number(item.CGPA),
              coding_test_score: Number(item.coding_test_score),
              selected: Number(item.selected),
            }));

            setData(formattedData);
          },
        });
      });

  }, []);

  const selectedCount =
    data.filter((s) => s.selected === 1).length;

  const rejectedCount =
    data.filter((s) => s.selected === 0).length;

  const pieData = [
    {
      name: "Seleccionados",
      value: selectedCount,
    },
    {
      name: "Rechazados",
      value: rejectedCount,
    },
  ];

  return (
    <div>

      <h3 className="text-xl mb-8">
        Conjunto de datos de predicción
        de la selección de prácticas
      </h3>

      {/* PIE CHART */}
      <div className="w-[450px] h-[300px] bg-white rounded-xl p-4 shadow">
       <h4> Distribucion de estudiantes aceptados y Rechazados</h4>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              <Cell fill="green" />
              <Cell fill="#b10b0b" />
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* BAR CHART */}
      <div className="w-full h-[400px] mt-8 bg-white rounded-xl p-4 shadow">

        <ResponsiveContainer>

          <BarChart data={data.slice(0, 20)}>

            <XAxis dataKey="CGPA" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="coding_test_score"
              fill="black"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Estadisticas;