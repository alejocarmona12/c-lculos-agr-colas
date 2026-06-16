import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Modal from "../../components/ui/Modal";
import { useNavigate } from "react-router-dom";

type ModalType = "demo" | "login" | "register" | null;

export default function PresentationContent() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const navigate = useNavigate();

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col font-sans antialiased">
      {/* NAVBAR DINÁMICO */}
      <Navbar
        onOpenLogin={() => openModal("login")}
        onOpenRegister={() => openModal("register")}
      />

      {/* CUERPO DE LA LANDING */}
      <main className="grow">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/50">
              📊 Gestión Agropecuaria Inteligente
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Controlá costos y rentabilidad agrícola <br />
              <span className="text-emerald-600">desde una sola plataforma</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              La plataforma definitiva para gestionar tus costos, calcular
              márgenes de rendimiento y optimizar tus decisiones agrícolas desde
              cualquier lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => openModal("demo")}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full shadow-xl transition-all cursor-pointer transform active:scale-95 text-base"
              >
                Solicitar DEMO
              </button>
              <a
                href="#que-es"
                className="px-8 py-4 bg-transparent hover:bg-zinc-100 text-slate-800 font-bold rounded-full border-2 border-slate-300 transition-all text-center text-base"
              >
                Conocer más
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-md w-full lg:max-w-xl">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-3xl -z-10"></div>
              <img
                src="monitoreo.jpg"
                alt="Monitoreo de cultivos"
                className="rounded-2xl object-cover w-full h-87.5 sm:h-100 border border-zinc-200 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ¿DE QUÉ SE TRATA? */}
        <section
          id="que-es"
          className="bg-white border-y border-zinc-200/60 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-1 order-2">
              <img
                src="tecnologia.C.jpg"
                alt="tecnologia.C.jpg"
                className="rounded-2xl object-cover w-full h-75 sm:h-95 shadow-lg border border-zinc-100"
              />
            </div>
            <div className="space-y-5 lg:order-2 order-1">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              ¿Qué es calculos-agricolas?
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed text-base">
                Es un ecosistema digital diseñado específicamente para
                productores que necesitan abandonar las planillas desordenadas.
                Centralizamos la información de tus lotes, insumos y labores en
                un solo panel interactivo.
              </p>
            </div>
          </div>
        </section>

        {/* ¿EN QUÉ TE VA A AYUDAR? */}
        <section
          id="beneficios"
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-12"
        >
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              ¿Cómo transforma tu día a día?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl h-80 shadow-lg group">
              <img
                src="/costo.png"
                alt="Control de costos"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Control de Costos Fijos
                </h3>

                <p className="text-white/90">
                  Calculá márgenes brutos por cultivo controlando semillas,
                  fertilizantes y labores.
                </p>
              </div>
            </div>

            {/* proyeccion */}
            <div className="relative overflow-hidden rounded-2xl h-80 shadow-lg group">
              <img
                src="proyeccion.webp"
                alt="Proyeccion.webp"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Proyección de Rendimiento
                </h3>

                <p className="text-white/90">
                  Simulá el impacto de variaciones de precios de los mercados
                  agrícolas en tu rentabilidad final.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-80 shadow-lg group">
              <img
                src="datos.jpg"
                alt="datos.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Control de Datos
                </h3>

                <p className="text-white/90">
                  Centralizá toda la información de tus lotes, cultivos e
                  insumos en un único panel para tomar decisiones más rápidas y
                  precisas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* 4. MODAL DINÁMICO MULTIPROPÓSITO */}

       <Modal
       isOpen={modalType !== null}
       onClose={closeModal}
       title={
         modalType === "demo"
           ? "Solicitar DEMO"
           : modalType === "login"
           ? "Iniciar Sesión"
           : "Crear Cuenta"
       }
       description={
         modalType === "demo"
           ? "Dejanos tus datos y te contactaremos."
           : modalType === "login"
           ? "Accedé a tu panel de control agrícola."
           : "Creá tu cuenta gratuita."
       }
     >
        {/* FORMULARIO DE DEMO */}
        {modalType === "demo" && (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo solicitada");
              closeModal();
            }}
          >
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Juan Pérez"
                className="w-full rounded-xl bg-zinc-50 p-3 text-slate-900 border border-zinc-200 focus:outline-emerald-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="juan@campo.com"
                className="w-full rounded-xl bg-zinc-50 p-3 text-slate-900 border border-zinc-200 focus:outline-emerald-500 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-500 transition-all cursor-pointer"
            >
              Enviar Solicitud
            </button>
          </form>
        )}


        {/* FORMULARIO DE LOGIN INICIO DE SESIÓN */}
        {modalType === "login" && (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              // Simula una sesión iniciada
              localStorage.setItem("token", "sesion_simulada_agro");

              closeModal();

              // Redirige al dashboard
              navigate("/dashboard");
            }}
          >
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="nombre@correo.com"
                className="w-full rounded-xl bg-zinc-50 p-3 text-slate-900 border border-zinc-200 focus:outline-emerald-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl bg-zinc-50 p-3 text-slate-900 border border-zinc-200 focus:outline-emerald-500 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 font-bold text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              Entrar al Sistema
            </button>

            <p className="text-center text-xs text-slate-500 mt-2">
              ¿No tenés cuenta?{" "}
              <button
                type="button"
                onClick={() => openModal("register")}
                className="text-emerald-600 font-bold hover:underline cursor-pointer"
              >
                Registrate acá
              </button>
            </p>
          </form>
        )}
      </Modal>
    </div>
  );
}
