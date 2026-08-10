export interface FormProfileProps {
  form: {
    username: string;
    name: string;
    email: string;
    location: string;
    birth_date: string;
    is_active: boolean;
    is_staff: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  saving: boolean;
}