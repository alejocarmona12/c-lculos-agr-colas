/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  Tractor,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("todos");

  const lotes = [
    {
      id: "Lote Norte A1",
      cultivo: "Soja",
      superficie: 120,
      costoHa: 320,
      rinde: 3.2,
      estado: "Excelente",
    },
    {
      id: "Lote Norte A2",
      cultivo: "Maíz",
      superficie: 85,
      costoHa: 450,
      rinde: 8.5,
      estado: "Bueno",
    },
    {
      id: "Lote Sur B1",
      cultivo: "Girasol",
      superficie: 200,
      costoHa: 280,
      rinde: 2.1,
      estado: "Regular",
    },
  ];

  const filtered = useMemo(() => {
    return lotes.filter((l) => {
      const matchSearch = l.id
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchTab =
        tab === "todos" ||
        l.cultivo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === tab;

      return matchSearch && matchTab;
    });
  }, [search, tab]);

  const metrics = useMemo(() => {
    const ha = filtered.reduce(
      (acc, item) => acc + item.superficie,
      0
    );

    const inv = filtered.reduce(
      (acc, item) => acc + item.superficie * item.costoHa,
      0
    );

    return {
      ha,
      inv,
      avg: ha ? inv / ha : 0,
    };
  }, [filtered]);

  const statusColor = {
    Excelente:
      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20",
    Bueno:
      "bg-blue-500/20 text-blue-300 border border-blue-500/20",
    Regular:
      "bg-yellow-500/20 text-yellow-300 border border-yellow-500/20",
  };

  function clsx(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex">
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 border-r border-white/10 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <Tractor size={20} className="text-black" />
          </div>

          <div>
            <h1 className="font-bold text-lg">
              Agro<span className="text-emerald-400">Control</span>
            </h1>

            <p className="text-xs text-white/40">
              Gestión Agrícola
            </p>
          </div>
        </div>

        <nav className="mt-10 space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white/10">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button
            onClick={() => navigate("/calculator")}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 transition"
          >
            <Calculator size={18} />
            Calculadora
          </button>
        </nav>

        <div className="mt-auto">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs text-white/40">
              Sistema activo
            </p>

            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400">
                Online
              </span>
            </div>
          </div>

          <p className="text-xs text-white/30 mt-4">
            v2.0 • AgroControl
          </p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 lg:p-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Campo Activo
            </p>

            <div className="flex items-center gap-3 mt-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

              <h2 className="text-4xl font-bold">
                Establecimiento Don Pedro
              </h2>
            </div>

            <p className="text-white/50 mt-3">
              Analítica financiera agrícola en tiempo real
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/calculator")}
            className="h-fit px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold"
          >
            + Nuevo análisis
          </motion.button>
        </motion.div>

        {/* KPIs */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              label: "Superficie Total",
              value: `${metrics.ha} Ha`,
              change: "+12%",
            },
            {
              label: "Inversión",
              value: `U$S ${metrics.inv.toLocaleString()}`,
              change: "+8%",
            },
            {
              label: "Costo Promedio",
              value: `U$S ${metrics.avg.toFixed(0)}`,
              change: "+5%",
            },
          ].map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-white/40">
                {card.label}
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {card.value}
              </h3>

              <p className="text-emerald-400 text-sm mt-2">
                ↑ {card.change}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-4 gap-6 mt-10">
          {/* TABLE SECTION */}
          <div className="lg:col-span-3 space-y-6">
            {/* FILTERS */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar lote..."
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <div className="flex gap-2 flex-wrap">
                {["todos", "soja", "maiz", "girasol"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={clsx(
                      "px-4 py-2 rounded-xl text-sm capitalize transition",
                      tab === t
                        ? "bg-emerald-500 text-black"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* TABLE */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr className="text-xs uppercase text-white/40">
                    <th className="text-left p-5">Lote</th>
                    <th>Cultivo</th>
                    <th>Ha</th>
                    <th>Costo/Ha</th>
                    <th>Rinde</th>
                    <th>Estado</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((lote) => (
                    <tr
                      key={lote.id}
                      className="border-t border-white/10 hover:bg-white/5 transition"
                    >
                      <td className="p-5 font-medium">
                        {lote.id}
                      </td>

                      <td>{lote.cultivo}</td>

                      <td>{lote.superficie}</td>

                      <td>U$S {lote.costoHa}</td>

                      <td>{lote.rinde}</td>

                      <td>
                        <span
                          className={clsx(
                            "px-3 py-1 rounded-full text-xs",
                            statusColor[
                              lote.estado as keyof typeof statusColor
                            ]
                          )}
                        >
                          {lote.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SIDEPANEL */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold mb-4">
                Resumen Financiero
              </h3>

              <p className="text-white/50 text-sm">
                Inversión total:
              </p>

              <p className="text-2xl font-bold mt-1">
                U$S {metrics.inv.toLocaleString()}
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-semibold mb-3">
                Cultivo Principal
              </h3>

              <p className="text-emerald-400 font-medium">
                Soja
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={16} />
                <h3 className="font-semibold">
                  Actividad
                </h3>
              </div>

              <p className="text-sm text-white/50">
                Última actualización:
              </p>

              <p className="mt-1">
                Hoy • 14:35 hs
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}