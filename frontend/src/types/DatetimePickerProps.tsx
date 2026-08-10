export interface DatetimePickerProps {
  date: string;
  hour: string;
  minute: string;
  onPartChange: (field: "date" | "hour" | "minute", value: string) => void;
}