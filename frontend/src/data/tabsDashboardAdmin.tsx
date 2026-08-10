import { Users, FlaskConical } from "lucide-react";
import type { TabItem } from "../types/dashboardAdmin/TabItem";

export const tabsDashboardAdmin: TabItem[] = [
  { key: "users", label: "Usuários", icon: <Users size={16} /> },
  { key: "experiments", label: "Experimentos", icon: <FlaskConical size={16} /> }
];