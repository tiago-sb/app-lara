import type { ChangeEvent, ReactNode } from "react";

export interface FormPropsContactMessage {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  children?: ReactNode;
}