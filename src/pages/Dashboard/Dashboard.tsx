/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      const matchSearch = l.id.toLowerCase().includes(search.toLowerCase());
      const matchTab = tab === "todos" || l.cultivo.toLowerCase() === tab;
      return matchSearch && matchTab;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tab]);

  const metrics = useMemo(() => {
    const ha = filtered.reduce((a, b) => a + b.superficie, 0);
    const inv = filtered.reduce((a, b) => a + b.superficie * b.costoHa, 0);
    return {
      ha,
      inv,
      avg: ha ? inv / ha : 0,
    };
  }, [filtered]);

  function clsx(_arg0: string, _arg1: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-white">
      {/* SIDEBAR (Stripe style) */}
      <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col">
        <h1 className="text-lg font-semibold tracking-tight">
          Agro<span className="text-emerald-400">Control</span>
        </h1>

        <nav className="mt-8 space-y-2 text-sm text-white/70">
          <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-white">
            Dashboard
          </button>

          <button
            onClick={() => navigate("/calculator")}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition"
          >
            Calculadora
          </button>
        </nav>

        <div className="mt-auto text-xs text-white/40">v1.0 • SaaS Demo</div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 space-y-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Dashboard
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Establecimiento Don Pedro
            </h2>
            <p className="text-sm text-white/50 mt-1">
              Analítica financiera agrícola en tiempo real
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/calculator")}
            className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold"
          >
            + Nuevo análisis
          </motion.button>
        </motion.div>

        {/* KPI CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Superficie", value: `${metrics.ha} Ha` },
            {
              label: "Inversión",
              value: `U$S ${metrics.inv.toLocaleString()}`,
            },
            { label: "Promedio/Ha", value: `U$S ${metrics.avg.toFixed(0)}` },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-xs text-white/40 uppercase tracking-widest">
                {m.label}
              </p>
              <p className="text-3xl font-semibold mt-2">{m.value}</p>
            </motion.div>
          ))}
        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar lote..."
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <div className="flex gap-2">
            {["todos", "soja", "maiz", "girasol"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={clsx(
                  "px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition",
                  tab === t
                    ? "bg-emerald-500 text-black"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-xl"
        >
          <table className="w-full text-sm">
            <thead className="text-white/40 text-xs uppercase">
              <tr>
                <th className="p-4 text-left">Lote</th>
                <th>Cultivo</th>
                <th>Ha</th>
                <th>Costo</th>
                <th>Rinde</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((l, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="border-t border-white/10"
                >
                  <td className="p-4">{l.id}</td>
                  <td>{l.cultivo}</td>
                  <td>{l.superficie}</td>
                  <td>U$S {l.costoHa}</td>
                  <td>{l.rinde}</td>
                  <td>
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300">
                      {l.estado}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  );
}
