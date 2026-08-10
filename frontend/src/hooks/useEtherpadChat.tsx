import { useEffect, useState } from "react";
import { getChatHistory, sendMessage } from "../services/etherpadService";
import type { EtherpadMessage } from "../types/experiment/EtherpadMessage";

export function useEtherpadChat(padId: string, authorId: string) {
  const [messages, setMessages] = useState<EtherpadMessage[]>([]);

  async function loadMessages() {
    const data = await getChatHistory(padId);
    setMessages(data);
  }

  async function send(text: string) {
    await sendMessage(padId, text, authorId);
    console.log(authorId)
    loadMessages();
  }

  useEffect(() => {
    loadMessages();

    const interval = setInterval(loadMessages, 2000);
    return () => clearInterval(interval);
  }, [padId]);

  return { messages, send };
}