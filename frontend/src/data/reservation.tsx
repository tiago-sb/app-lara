import type { ReservationStatus } from "../types/dashboard/reservationList/ReservationStatus";
import type { StatusConfig } from "../types/dashboard/reservationList/StatusConfig";

export const status: Record<ReservationStatus, StatusConfig> = {
  finished: { 
    label: "Concluída",       
    bg: "#EAF3DE", 
    color: "#3B6D11" 
  },
  missed: {
    label: "Não compareceu",  
    bg: "#FAECE7", 
    color: "#993C1D"
  },
  scheduled: { 
    label: "Agendada",        
    bg: "#E1F5EE", 
    color: "#0F6E56" 
  }
};