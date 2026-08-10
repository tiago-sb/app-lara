export interface UserProfile {
  id: number;
  username: string;
  name: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  location: string;
  birth_date: string | null;
}