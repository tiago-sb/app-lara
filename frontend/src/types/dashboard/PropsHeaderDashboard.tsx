import type { UserProfile } from "../autentication/UserProfile";

export interface PropsHeaderDashboard {
  user: UserProfile | null;
  onLogout: () => void;
}