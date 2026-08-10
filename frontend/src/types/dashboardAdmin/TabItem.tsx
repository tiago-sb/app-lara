type Tab = "users" | "experiments";

export interface TabItem {
  key: Tab;
  label: string;
  icon: React.ReactNode;
}