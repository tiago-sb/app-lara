import { useEffect, useState } from "react";
import type { UserProfile } from "../types/autentication/UserProfile";

export function useAdminUsers() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const token = () => localStorage.getItem("access_token");

  const fetchUsers = () => {
    fetch("/sistema-api/user/", {
      headers: { Authorization: `Bearer ${token()}` },
    })
      .then(res => res.json())
      .then(data => setUsers(Array.isArray(data) ? data : data.results ?? []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchUsers(); }, []);

  async function promoteToStaff(userId: number, isStaff: boolean): Promise<boolean> {
    try {
      const res = await fetch(`/sistema-api/user/${userId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify({ is_staff: isStaff }),
      });
      if (!res.ok) throw new Error();
      fetchUsers();
      return true;
    } catch {
      return false;
    }
  }

  return { users, loading, promoteToStaff };
}