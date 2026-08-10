export interface Course {
  id: number;
  title: string;
  instructor?: string;
  participants?: number | null;
  maxParticipants?: number | null;
  description?: string;
  status: string;
  image?: string;
}