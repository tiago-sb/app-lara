import { useEffect, useState } from "react";
import { getPadUsers } from "../services/etherpadService";

export type PadUser = {
  id: string;
  name: string;
  colorId: string;
  timestamp: number;
};

export function useEtherpadUsers(padId: string) {
  const [users, setUsers] = useState<PadUser[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getPadUsers(padId);
      setUsers(data);
    }

    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, [padId]);

  return users;
}