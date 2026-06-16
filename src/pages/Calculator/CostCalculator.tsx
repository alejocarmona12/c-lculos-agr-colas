import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function CostCalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nombreLote: "",
    cultivo: "Soja",
    superficie: 0,
    semillas: 0,
    fertilizantes: 0,
    agroquimicos: 0,
    siembra: 0,
    pulverizacion: 0,
    cosecha: 0,
  });

  // FIX: tipado correcto y seguro para inputs/select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    const isNumberInput = (e.target as HTMLInputElement).type === "number";

    setFormData((prev) => ({
      ...prev,
      [name]: isNumberInput ? Number(value) || 0 : value,
    }));
  };

  const calculos = useMemo(() => {
    const totalInsumosHa =
      formData.semillas + formData.fertilizantes + formData.agroquimicos;

    const totalLaboresHa =
      formData.siembra + formData.pulverizacion + formData.cosecha;

    const costoTotalHa = totalInsumosHa + totalLaboresHa;
    const inversionTotalLote = costoTotalHa * formData.superficie;

    return { totalInsumosHa, totalLaboresHa, costoTotalHa, inversionTotalLote };
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `📊 "${formData.nombreLote}" guardado. Inversión total: U$S ${calculos.inversionTotalLote.toLocaleString()}`,
    );
    navigate("/dashboard");
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      <main className="grow p-6 max-w-5xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold">Paso {step} de 3</h1>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-3">
              <input
                name="nombreLote"
                value={formData.nombreLote}
                onChange={handleChange}
                placeholder="Nombre del lote"
                className="p-2 border rounded w-full"
                required
              />

              <select
                name="cultivo"
                value={formData.cultivo}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              >
                <option value="Soja">Soja</option>
                <option value="Maíz">Maíz</option>
                <option value="Girasol">Girasol</option>
              </select>

              <input
                type="number"
                name="superficie"
                value={formData.superficie || ""}
                onChange={handleChange}
                placeholder="Superficie (ha)"
                className="p-2 border rounded w-full"
                required
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-3">
              <input
                type="number"
                name="semillas"
                value={formData.semillas || ""}
                onChange={handleChange}
                placeholder="Semillas"
                className="p-2 border rounded w-full"
              />

              <input
                type="number"
                name="fertilizantes"
                value={formData.fertilizantes || ""}
                onChange={handleChange}
                placeholder="Fertilizantes"
                className="p-2 border rounded w-full"
              />

              <input
                type="number"
                name="agroquimicos"
                value={formData.agroquimicos || ""}
                onChange={handleChange}
                placeholder="Agroquímicos"
                className="p-2 border rounded w-full"
              />
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-3">
              <input
                type="number"
                name="siembra"
                value={formData.siembra || ""}
                onChange={handleChange}
                placeholder="Siembra"
                className="p-2 border rounded w-full"
              />

              <input
                type="number"
                name="pulverizacion"
                value={formData.pulverizacion || ""}
                onChange={handleChange}
                placeholder="Pulverización"
                className="p-2 border rounded w-full"
              />

              <input
                type="number"
                name="cosecha"
                value={formData.cosecha || ""}
                onChange={handleChange}
                placeholder="Cosecha"
                className="p-2 border rounded w-full"
              />

              <div className="font-bold">
                Total inversión: U$S{" "}
                {calculos.inversionTotalLote.toLocaleString()}
              </div>
            </div>
          )}

          {/* BOTONES */}
          <div className="flex gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 border rounded"
              >
                Atrás
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Siguiente
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
