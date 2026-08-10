// components/experiment/CopyButton.tsx
import { useState } from "react";
import { Copy, Check } from "lucide-react";

type CopyButtonProps = {
  text: string;
};

export const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copiar ID da sessão"
      style={{
        background: "none",
        border: "none",
        padding: "2px 4px",
        cursor: "pointer",
        color: copied ? "#198754" : "#adb5bd",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.7rem",
        transition: "color 0.2s",
      }}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied && <span>Copiado!</span>}
    </button>
  );
};