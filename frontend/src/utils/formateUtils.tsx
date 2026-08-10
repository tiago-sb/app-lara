export const formatDate = (date: string) => {
  if (!date) return null;
  if (date.includes("/")) return date;
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export const formateDateReservationList = (iso: string) => {
  return new Date(iso).toLocaleDateString("pt-BR", 
    { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    });
}

export const formateTimeReservationList = (iso: string) => { 
  return new Date(iso).toLocaleTimeString("pt-BR", 
    { 
      hour: "2-digit", 
      minute: "2-digit" 
    });
}