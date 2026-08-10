import { Play, AlertCircle, Plus, Calendar, Dumbbell, LogIn, ArrowRight } from "lucide-react";
import type { GetQuickActionCardsParams } from "../types/dashboard/quickAction/GetQuickActionCardsParams";

export const getQuickActionCards = ({ status, activeReservation, onStartSession, onJoinSession, onScheduleSession, onStartTraining }: GetQuickActionCardsParams) => {
  const isActive = status === "active";

  const sessionCard = {
    bg: isActive ? "linear-gradient(135deg, #dc3545 0%, #a71d2a 100%)" : "linear-gradient(135deg, #198754 0%, #0d6e42 100%)",
    badge: isActive ? "Robô em uso" : "Robô disponível",
    badgeBg: "rgba(255,255,255,0.2)",
    title: isActive ? "Sessão em Andamento" : "Nova Sessão",
    desc: isActive ? activeReservation?.description || "Uma sessão está acontecendo agora" : "Inicie ou agende um experimento com seu grupo",
    icon: isActive ? AlertCircle : Play,
  };

  return [
    {
      ...sessionCard,
      actions: [
        {
          label: "Iniciar Sessão",
          icon: Plus,
          onClick: onStartSession,
          disabled: isActive,
        },
        {
          label: "Agendar Sessão",
          icon: Calendar,
          onClick: onScheduleSession,
          disabled: isActive,
          variant: "light" as const,
        },
      ],
    },
    {
      bg: "linear-gradient(135deg, #0d6efd 0%, #084298 100%)",
      badge: "Modo livre",
      badgeBg: "rgba(255,255,255,0.2)",
      title: "Treino",
      desc: "Acesse o ambiente de desenvolvimento sem iniciar uma sessão",
      icon: Dumbbell,
      actions: [
        {
          label: "Iniciar Treino",
          icon: Plus,
          onClick: onStartTraining,
          variant: "light" as const,
          textColor: "#0d6efd",
        },
      ],
    },
    {
      bg: "linear-gradient(135deg, #fd7e14 0%, #FBBB04 100%)",
      badge: "Acesso rápido",
      badgeBg: "rgba(255,255,255,0.2)",
      title: "Entrar em Sessão",
      desc: "Entre em uma sessão já criada usando um código de acesso",
      icon: LogIn,
      actions: [
        {
          label: "Entrar em Sessão",
          icon: ArrowRight,
          onClick: onJoinSession,
          variant: "light" as const,
          textColor: "#fd7e14",
        },
      ],
    }
  ];
};