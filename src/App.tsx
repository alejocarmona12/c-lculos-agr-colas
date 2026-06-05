import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CostCalculator from "./pages/Calculator/CostCalculator";
import PresentationContent from "./pages/Landing/PresentationContent";

// Componente para proteger las rutas privadas del sistema de cálculos
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* PANTALLA PRINCIPALpública: Tu Landing Page a pantalla completa */}
        <Route path="/" element={<PresentationContent />} />

        {/* El login ahora puede redirigir o renderizarse directo si lo preferís */}
        <Route path="/login" element={<PresentationContent />} />

        {/* RUTAS PRIVADAS DEL SISTEMA AGRÍCOLA */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/calculator"
          element={
            <PrivateRoute>
              <CostCalculator />
            </PrivateRoute>
          }
        />

        {/* Redirección por defecto si meten cualquier ruta inexistente */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
