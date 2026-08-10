export async function connectWebRTC(pc: RTCPeerConnection): Promise<void> {
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  const res = await fetch("/camera/cam/whep", {
    method: "POST",
    headers: { "Content-Type": "application/sdp" },
    body: pc.localDescription!.sdp,
  });

  if (!res.ok) throw new Error("Stream indisponível");

  const sdp = await res.text();
  await pc.setRemoteDescription({ type: "answer", sdp });
}