import { createContext, useContext, useState } from "react";
import type { SettingsConfig } from "../components/experiment/header/types";

const defaults: SettingsConfig = {
  useMonospaceFont: true,
  showLineNumbers: true,
  readOnly: false,
  fontSize: 14,
};

interface ContextValue {
  settings: SettingsConfig;
  saveSettings: (config: SettingsConfig) => void;
}

const ExperimentSettingsContext = createContext<ContextValue>({
  settings: defaults,
  saveSettings: () => {},
});

export const ExperimentSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<SettingsConfig>(defaults);

  const saveSettings = (config: SettingsConfig) => setSettings(config);

  return (
    <ExperimentSettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </ExperimentSettingsContext.Provider>
  );
};

export const useExperimentSettings = () => useContext(ExperimentSettingsContext);