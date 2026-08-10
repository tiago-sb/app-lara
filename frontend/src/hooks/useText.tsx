import { useState } from "react";
import { getPadText } from "../services/etherpadService";

export const useText = (padId: string) => {
  const [loading, setLoading] = useState(false);

  async function getText(): Promise<string> {
    setLoading(true);
    try {
      return await getPadText(padId);
    } finally {
      setLoading(false);
    }
  }

  return { getText, loading };
}