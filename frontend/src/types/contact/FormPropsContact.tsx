import type { ReactNode } from "react";

export interface FormPropsContact {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}