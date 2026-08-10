import { ReactNode } from "react";

export interface FormPropsProfile {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}