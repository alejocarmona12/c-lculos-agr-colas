const API_URL = 'http://localhost:4000/api/auth'; // Cambia a la URL real de tu backend

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login fallido');
  }

  const data = await response.json();
  // data debería contener el token JWT y/o info del usuario
  return data;
}
