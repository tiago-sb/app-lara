import { useEffect, useState } from "react";
import type { Experiment } from "../types/experiment/Experiment";

export function useAdminExperiments() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState(true);

  const token = () => localStorage.getItem("access_token");

  const fetchExperiments = () => {
    fetch("/sistema-api/experiment/", {
      method: "GET",
      headers: { Authorization: `Bearer ${token()}` }
    })
      .then(res => res.json())
      .then(data => setExperiments(Array.isArray(data) ? data : data.results ?? []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchExperiments(); }, []);

  async function createExperiment(payload: Omit<Experiment, "id">): Promise<boolean> {
    try {
      const res = await fetch("/sistema-api/experiment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      fetchExperiments();
      return true;
    } catch {
      return false;
    }
  }

  return { experiments, loading, createExperiment };
}