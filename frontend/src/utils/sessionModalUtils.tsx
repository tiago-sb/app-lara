export const toDateParts = (datetimeLocal: string) => {
  // converte de exemplo: (2026-05-28T14:30) -> {date: "2026-05-28", hour: "14", minute: "30"}
  
  if (!datetimeLocal) return { date: "", hour: "", minute: "" };
  const [datePart, timePart] = datetimeLocal.split("T");
  const [hour, minute] = (timePart ?? "").split(":");
  return { date: datePart ?? "", hour: hour ?? "", minute: minute ?? "" };
};

export const toDatetimeLocal = (date: string, hour: string, minute: string) => {
  // converte de exemplo: {date: "2026-05-28", hour: "14", minute: "30"} para (2026-05-28T14:30)
  if (!date || !hour || !minute) return "";

  // padStart garante que as horas e minutos tenham apenas dois dígitos
  return `${date}T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
};

export const formatEndDatetime = (startDatetime: string) =>
  // tendo (2026-05-28T14:30) como argumento o foco aqui é calcular a data final exemplo (2026-05-28T15:00)
  new Date(new Date(startDatetime).getTime() + 30 * 60 * 1000).toLocaleString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

// cria um array [0, 2, ..., 23] e converte para ["00", "01", "23"]
// gera todas as horas do dia no formato
export const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));