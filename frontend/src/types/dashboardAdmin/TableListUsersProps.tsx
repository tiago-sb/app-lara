import type { UserProfile } from "../autentication/UserProfile";
export interface TableListUsersProps {
  users: UserProfile[];
  promoting: number | null;
  onPromote: (userId: number, current: boolean) => void;
} 