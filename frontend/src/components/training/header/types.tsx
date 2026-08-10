export interface SettingsConfig {
  fontSize: number;
  useMonospaceFont: boolean;
  showLineNumbers: boolean;
  readOnly: boolean;
}

export interface SettingsModalProps {
  show: boolean;
  handleClose: () => void;
  onSave?: (config: SettingsConfig) => void;
}