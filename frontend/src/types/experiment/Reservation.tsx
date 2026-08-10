export interface Reservation {
  id: number;
  start_datetime: string;
  end_datetime: string;
  showed_up: boolean | null;
  finished: boolean | null;
  description: string;
  user: number;
  experiment: number;
}