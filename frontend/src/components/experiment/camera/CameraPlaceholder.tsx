import type { CameraStatus } from "../../../types/experiment/CameraStatus";

export const CameraPlaceholder = ({ status }: { status: CameraStatus }) => {
  if (status === "error") {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 w-100">
        <div className="text-center">
          <p className="mb-1 small opacity-75" style={{ fontSize: "0.9rem" }}>
            Câmera indisponível
          </p>
          <p className="small opacity-50" style={{ fontSize: "0.75rem" }}>
            Verifique a conexão com o MediaMTX
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center h-100 w-100">
      <div className="text-center">
        <div className="spinner-border spinner-border-sm mb-2 opacity-50" role="status" />
        <p className="mb-1 small" style={{ fontSize: "1rem" }}>
          Câmera do Robô
        </p>
        <p className="small opacity-75" style={{ fontSize: "0.8rem" }}>
          Aguardando conexão...
        </p>
      </div>
    </div>
  );
};