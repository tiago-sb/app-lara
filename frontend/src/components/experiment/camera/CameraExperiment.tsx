import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button, Card } from "react-bootstrap";
import { useCamera } from "../../../hooks/useCamera";
import { CameraPlaceholder } from "./CameraPlaceholder";

export const CameraExperiment = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const { status, streamUrl } = useCamera();

  const connected = status === "connected";
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Não é mais necessário associar um MediaStream ao vídeo.
  const handleMaximize = () => {
    setIsFullscreen(true);
  };

  return (
    <>
      <Card
        className="m-2 mb-3 position-relative text-light overflow-hidden"
        style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "#0d1117" }}
      >
        <Card.Body className="p-0">
          <div className="ratio ratio-16x9">

            {/* Não é mais necessário usar <video> com WebRTC */}
            {/* 
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-100 h-100"
              style={{ objectFit: "cover", display: connected ? "block" : "none" }}
            />
            */}

            <img
              src={streamUrl}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                display: connected ? "block" : "none",
              }}
              alt="Câmera"
            />

            {!connected && <CameraPlaceholder status={status} />}
          </div>
        </Card.Body>

        <Button
          variant="dark"
          size="sm"
          className="position-absolute top-0 end-0 m-2 opacity-75"
          onClick={handleMaximize}
        >
          <Maximize2 size={16} />
        </Button>

        {connected && (
          <div
            className="position-absolute px-3 py-2 bg-danger text-white small rounded d-flex align-items-center gap-2"
            style={{ bottom: "10px", left: "10px", fontSize: "0.8rem" }}
          >
            <span
              className="d-inline-block rounded-circle bg-white"
              style={{ width: 8, height: 8 }}
            />
            AO VIVO
          </div>
        )}
      </Card>

      {isFullscreen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setIsFullscreen(false)}
        >
          <div
            style={{ position: "relative", width: "90vw", maxWidth: "1200px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={streamUrl}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                display: connected ? "block" : "none",
              }}
              alt="Câmera"
            />

            {connected && (
              <div
                className="position-absolute px-3 py-2 bg-danger text-white small rounded d-flex align-items-center gap-2"
                style={{ bottom: "16px", left: "16px", fontSize: "0.8rem" }}
              >
                <span
                  className="d-inline-block rounded-circle bg-white"
                  style={{ width: 8, height: 8 }}
                />
                AO VIVO
              </div>
            )}

            <Button
              variant="dark"
              size="sm"
              className="position-absolute top-0 end-0 m-2 opacity-75"
              onClick={() => setIsFullscreen(false)}
            >
              <Minimize2 size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};