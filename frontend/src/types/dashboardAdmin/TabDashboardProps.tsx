type Tab = "users" | "experiments";

export interface TabDashboardProps {
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}