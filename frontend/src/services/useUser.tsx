import { useEffect, useState } from "react";
import { formatDate } from "../utils/formateUtils";
import type { UserProfile } from "../types/autentication/UserProfile";

export function useUser() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token");

    if (!userId || !token) {
      setLoading(false);
      return;
    }

    fetch(`/sistema-api/user/${userId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {setUser(data)})
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  async function updateUser(data: Partial<UserProfile>): Promise<boolean> {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token");
    if (!userId || !token) return false;

    setSaving(true);

    const payload = {
      ...data,
      birth_date: data.birth_date ? formatDate(data.birth_date) : null,
    };

    try {
      const res = await fetch(`/sistema-api/user/${userId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erro ao salvar.");
      const updated = await res.json();
      setUser(updated);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      setSaving(false);
    }
  }

  return { user, loading, saving, updateUser, isStaff: user?.is_staff ?? false };
}