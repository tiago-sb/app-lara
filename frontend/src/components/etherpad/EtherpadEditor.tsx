import { useExperimentSettings } from "../../hooks/useExperimentSettings";

type EtherpadEditorProps = {
  padId: string;
  height?: number | string;
  userName?: string;
};

export const EtherpadEditor = ({ padId, height, userName }: EtherpadEditorProps) => {
  const { settings } = useExperimentSettings();

  const url = [
    `http://localhost:9001/p/${padId}`,
    `?showChat=false`,
    `&showControls=false`,
    `&useMonospaceFont=${settings.useMonospaceFont}`,
    `&showLineNumbers=${settings.showLineNumbers}`,
    settings.readOnly ? `&noColors=true` : "",
    userName ? `&userName=${encodeURIComponent(userName)}` : "",
  ].join("");

  return (
    <div style={{
        position: "relative",
        width: "100%",
        height,
        fontSize: settings.fontSize,
      }}
    >
      <iframe
        key={url}
        src={url}
        style={{ width: "100%", height: "100%", border: "none" }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 45,
          backgroundColor: "#0d1117",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};