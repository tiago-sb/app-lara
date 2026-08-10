import type { LoginResponse } from "../types/autentication/LoginResponse";
import { formatDate } from "../utils/formateUtils";

const BASE_URL = "/sistema-api";

export async function login(username: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${BASE_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail ?? "Credenciais inválidas.");
  }

  return res.json();
}

export async function register(
  username: string,
  email: string,
  password: string,
  name: string,
  location: string,
  birth_date: string
) {
  // passa as credenciais
  const authRes = await fetch(`${BASE_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!authRes.ok) {
    const err = await authRes.json().catch(() => ({}));
    throw new Error(err.username?.[0] ?? err.email?.[0] ?? "Erro ao criar conta.");
  }

  // autentica para obter o token
  const loginData: LoginResponse = await login(username, password);
  const token = loginData.data.access_token;
  const userId = loginData.data.user_id;
  localStorage.setItem("access_token", token);
  localStorage.setItem("user_id", String(userId));
  
  // completa o perfil
  const profileRes = await fetch(`${BASE_URL}/user/${userId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      name,
      email,
      is_active: true,
      is_staff: false,
      location: location || null,
      birth_date: formatDate(birth_date) || null,
    }),
  });

  if (!profileRes.ok) {
    const err = await profileRes.json().catch(() => ({}));
    console.log("user error:", err);
    throw new Error(err.detail ?? "Erro ao salvar perfil.");
  }

  return profileRes.json();
}

export async function loginAndGetUser(username: string, password: string) {
  const loginData = await login(username, password);

  localStorage.setItem("access_token", loginData.data.access_token);
  localStorage.setItem("refresh_token", loginData.data.refresh_token);
  localStorage.setItem("user_id", String(loginData.data.user_id));
  localStorage.setItem("username", loginData.data.username);

  const res = await fetch(`${BASE_URL}/user/${loginData.data.user_id}/`, {
    headers: {
      Authorization: `Bearer ${loginData.data.access_token}`,
    }
  });

  if (!res.ok) {
    throw new Error("Erro ao obter perfil.");
  }

  const user = await res.json();

  return {
    login: loginData,
    user
  };
}