/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (e: unknown) {
      setError("Login fallido. Revisa tus credenciales.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-500 to-indigo-600 px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Iniciar sesión
        </h2>
        {error && (
          <p className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <AtSymbolIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="email"
                type="email"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contraseña
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="password"
                type="password"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
