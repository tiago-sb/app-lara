import { useEffect, useState } from "react";
// import { useEffect, useRef, useState } from "react";
// import { connectWebRTC } from "../services/cameraService";
import type { CameraStatus } from "../types/experiment/CameraStatus";

// export function useCamera(videoRef: React.RefObject<HTMLVideoElement | null>) {
export function useCamera() {
  // const pcRef = useRef<RTCPeerConnection | null>(null);
  // const streamRef = useRef<MediaStream | null>(null);
  // const [status, setStatus] = useState<CameraStatus>("connecting");

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   const pc = new RTCPeerConnection();
  //   pcRef.current = pc;

  //   pc.ontrack = (evt) => {
  //     video.srcObject = evt.streams[0];
  //     streamRef.current = evt.streams[0];
  //     setStatus("connected");
  //   };

  //   pc.oniceconnectionstatechange = () => {
  //     if (pc.iceConnectionState === "failed" || pc.iceConnectionState === "disconnected") {
  //       setStatus("error");
  //     }
  //   };

  //   pc.addTransceiver("video", { direction: "recvonly" });
  //   pc.addTransceiver("audio", { direction: "recvonly" });

  //   connectWebRTC(pc).catch(() => setStatus("error"));

  //   return () => {
  //     pc.close();
  //     pcRef.current = null;
  //     streamRef.current = null;
  //   };
  // }, []);

  // return { status, stream: streamRef.current };

  const [status, setStatus] = useState<CameraStatus>("connecting");

  const streamUrl = "/camera/live";

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setStatus("connected");
    };

    img.onerror = () => {
      setStatus("error");
    };

    img.src = streamUrl;
  }, []);

  return {
    status,
    streamUrl,
  };
}