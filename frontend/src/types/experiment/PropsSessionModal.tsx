export type PropsSessionModal = {
  action: "start" | "schedule";
  form: { 
    start_datetime: string; 
    end_datetime: string;
    description: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onDatetimeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
};