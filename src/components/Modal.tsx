interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    // Fondo oscuro translúcido con entrada suave (v4 nativo)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity duration-300">
      {/* Caja del Modal con escala y opacidad progresiva */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200 text-left transition-all transform scale-100 opacity-100 duration-200 ease-out">
        {/* Cabecera */}
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-slate-800 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Contenido Dinámico (Acá cae el formulario de la Landing) */}
        <div className="text-slate-600 text-sm">{children}</div>
      </div>
    </div>
  );
}
