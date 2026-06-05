interface NavbarProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenLogin, onOpenRegister }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/60 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black text-slate-900 tracking-tight"
        >
          🌱 <span className="text-emerald-600">calculos</span>-agricolas
        </a>

        {/* ENLACES CENTRALES (Ocultos en móviles) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#que-es"
            className="hover:text-emerald-600 transition-colors"
          >
            ¿Qué es?
          </a>
          <a
            href="#beneficios"
            className="hover:text-emerald-600 transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#contacto"
            className="hover:text-emerald-600 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* BOTONES DE ACCESO */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-900 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={onOpenRegister}
            className="px-5 py-2 text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-md shadow-emerald-600/10 transition-all cursor-pointer transform active:scale-95"
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </nav>
  );
}
