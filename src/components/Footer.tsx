export default function Footer() {
  return (
    <footer className="bg-slate-900 text-zinc-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div>
          <span className="text-lg font-black text-white tracking-tight">
            🌱 <span className="text-emerald-500">calculos</span>-agricolas
          </span>
          <p className="text-xs text-zinc-500 mt-2">
            Optimización digital para la gestión agropecuaria moderna.
          </p>
        </div>

        <div className="flex justify-center gap-6 text-sm font-medium">
          <a href="#que-es" className="hover:text-white transition-colors">
            Características
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors">
            Soluciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Soporte
          </a>
        </div>

        <div className="text-xs md:text-right text-zinc-500">
          &copy; {new Date().getFullYear()} calculos-agricolas. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
