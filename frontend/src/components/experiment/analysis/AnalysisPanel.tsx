import { EtherpadEditor } from "../../etherpad/EtherpadEditor";

type AnalysisPanelProps = {
  experimentoId: string;
  editorHeight?: number | string;
  userName?: string;
};

export const AnalysisPanel = ({ experimentoId, editorHeight = "100%", userName }: AnalysisPanelProps) => {
  const padId = `${experimentoId}-analise`;

  return (
    <div className="d-flex flex-column" style={{ height: "100%", minHeight: 0 }}>
      <div
        className="px-3 py-2 border-bottom"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          color: '#2B2B2B',
          borderColor: '#d1d5db',
          fontSize: '0.8rem',
          flexShrink: 0,
        }}
      >
        Análise
      </div>
      <div className="flex-grow-1 p-3 d-flex flex-column" style={{ minHeight: 0 }}>
        <div
          className="flex-grow-1 rounded-3 border overflow-hidden"
          style={{ backgroundColor: "#0d1117", borderColor: "#1f2937", minHeight: 0 }}
        >
          <EtherpadEditor padId={padId} height={editorHeight} userName={userName} />
        </div>
      </div>
    </div>
  );
};