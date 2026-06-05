import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Función para cerrar sesión y volver a la landing
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Datos simulados de los lotes del campo
  const lotes = [
    {
      id: "Lote A1",
      cultivo: "Soja",
      superficie: "120 Ha",
      costoHa: "U$S 320",
      rindeEstimado: "3.2 Tn/Ha",
      estado: "Excelente",
    },
    {
      id: "Lote A2",
      cultivo: "Maíz",
      superficie: "85 Ha",
      costoHa: "U$S 450",
      rindeEstimado: "8.5 Tn/Ha",
      estado: "Bueno",
    },
    {
      id: "Lote B1",
      cultivo: "Girasol",
      superficie: "200 Ha",
      costoHa: "U$S 280",
      rindeEstimado: "2.1 Tn/Ha",
      estado: "Regular",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 flex text-slate-800 font-sans antialiased">
      {/* 1. BARRA LATERAL (Sidebar) */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6 hidden md:flex">
        <div className="text-xl font-black tracking-tight mb-8">
          🌱 <span className="text-emerald-400">calculos</span>-agri
        </div>

        <nav className="space-y-2 flex-grow">
          <button className="w-full text-left bg-emerald-600 font-bold text-white p-3 rounded-xl flex items-center gap-3">
            📊 Panel General
          </button>
          <button
            onClick={() => navigate("/calculator")}
            className="w-full text-left text-zinc-400 hover:text-white hover:bg-slate-800 font-semibold p-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer"
          >
            🧮 Calculadora Costos
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="w-full text-left text-rose-400 hover:text-rose-300 font-bold p-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer border border-rose-900/30 bg-rose-950/20"
        >
          🚪 Cerrar Sesión
        </button>
      </aside>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-grow p-6 md:p-10 space-y-8 overflow-y-auto">
        {/* Cabecera del Dashboard */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-200 pb-5">
          <div>
            <p className="text-emerald-600 font-semibold">
              Campaña Agrícola 2026/2027
            </p>

            <h1 className="text-4xl font-black text-slate-900">
              Bienvenido, Alejo 👋
            </h1>

            <p className="text-zinc-500 font-medium">
              Controlá costos, rendimientos y rentabilidad desde un único panel.
            </p>
          </div>
          <button
            onClick={() => navigate("/calculator")}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer text-sm"
          >
            + Nuevo Cálculo de Costo
          </button>
        </header>

        {/* 3. TARJETAS DE MÉTRICAS (KPIs) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <p className="text-zinc-400 text-sm">Superficie Total</p>

            <h2 className="text-4xl font-black mt-2">405 Ha</h2>

            <span className="text-emerald-600 text-sm font-semibold">
              +12 Ha este mes
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <p className="text-zinc-400 text-sm">Inversión Total</p>

            <h2 className="text-4xl font-black mt-2">U$S 143.250</h2>

            <span className="text-blue-600 text-sm font-semibold">
              353 U$S/Ha
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <p className="text-zinc-400 text-sm">Producción Estimada</p>

            <h2 className="text-4xl font-black mt-2">1.526 Tn</h2>

            <span className="text-emerald-600 text-sm font-semibold">
              Objetivo cumplido
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <p className="text-zinc-400 text-sm">Margen Estimado</p>

            <h2 className="text-4xl font-black mt-2 text-emerald-600">+18%</h2>

            <span className="text-emerald-600 text-sm font-semibold">
              Rentabilidad positiva
            </span>
          </div>
        </section>
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-lg mb-5">Costos por Categoría</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>🌱 Semillas</span>
                <span className="font-bold">U$S 42.000</span>
              </div>

              <div className="flex justify-between">
                <span>🧪 Fertilizantes</span>
                <span className="font-bold">U$S 55.000</span>
              </div>

              <div className="flex justify-between">
                <span>⛽ Combustible</span>
                <span className="font-bold">U$S 21.500</span>
              </div>

              <div className="flex justify-between">
                <span>🚜 Maquinaria</span>
                <span className="font-bold">U$S 24.750</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-lg mb-5">Actividad Reciente</h3>

            <div className="space-y-4 text-sm">
              <div>✅ Siembra completada en Lote A1</div>
              <div>🚜 Nuevo costo registrado</div>
              <div>📈 Proyección actualizada</div>
              <div>🌦 Alerta climática recibida</div>
            </div>
          </div>
        </section>

        {/* 4. TABLA DE CONTROL DE LOTES */}
        <section className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-200">
            <h2 className="text-lg font-bold text-slate-900">
              Monitoreo de Lotes Activos
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-400 font-bold uppercase text-[11px] tracking-wider">
                  <th className="p-4">Identificación</th>
                  <th className="p-4">Cultivo</th>
                  <th className="p-4">Superficie</th>
                  <th className="p-4">Costo Directo</th>
                  <th className="p-4">Rinde Esperado</th>
                  <th className="p-4">Estado de Cultivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-medium text-slate-700">
                {lotes.map((lote) => (
                  <tr
                    key={lote.id}
                    className="hover:bg-zinc-50/80 transition-colors"
                  >
                    <td className="p-4 font-bold text-slate-950">{lote.id}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                        {lote.cultivo}
                      </span>
                    </td>
                    <td className="p-4">{lote.superficie}</td>
                    <td className="p-4">{lote.costoHa}</td>
                    <td className="p-4">{lote.rindeEstimado}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          lote.estado === "Excelente"
                            ? "bg-emerald-100 text-emerald-800"
                            : lote.estado === "Bueno"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {lote.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
