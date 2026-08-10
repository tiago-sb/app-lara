import type { EtherpadMessage } from "../types/experiment/EtherpadMessage";

const API_KEY = "lara";
const BASE_URL = "/etherpad-api/1.2.15";

export async function getPadUsers(padId: string) {
  const res = await fetch(`${BASE_URL}/padUsers?apikey=${API_KEY}&padID=${padId}`);
  const data = await res.json();
  
  return data.data?.padUsers ?? [];
}

export async function getChatHistory(padId: string): Promise<EtherpadMessage[]>  {
  const res = await fetch(
    `${BASE_URL}/getChatHistory?apikey=${API_KEY}&padID=${padId}`
  );

  const data = await res.json();
  
  return data.data.messages ?? []; 
}

export async function sendMessage(padId: string, text: string, authorId: string) {
  const res = await fetch(
    `${BASE_URL}/appendChatMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        apikey: API_KEY,
        padID: padId,
        text,
        authorID: authorId,
        time: Math.floor(Date.now() / 1000).toString()
      })
    }
  );

  return res.json();
}

export async function getPadText(padId: string): Promise<string> {
  const res = await fetch(
    `${BASE_URL}/getText?apikey=${API_KEY}&padID=${padId}`
  );
  const data = await res.json();
  
  return data.data?.text ?? "";
}