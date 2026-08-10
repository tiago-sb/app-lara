import { MessageSquare, Send } from "lucide-react"
import { Button, Card, Form, ListGroup } from "react-bootstrap"
import { useEtherpadChat } from "../../../hooks/useEtherpadChat"
import { useState, useEffect, useRef } from "react";

export const ChatExperiment = ({ experimentoId, authorId }: { experimentoId: string, authorId: string }) => {
  const padId = `${experimentoId}-codigo`;

  const { messages, send } = useEtherpadChat(padId, authorId);
  
  const [chatMessage, setChatMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      send(chatMessage);
      setChatMessage("");
    }
  };

  return (
    <Card className="flex-grow-1 border-0 bg-transparent rounded-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="bg-transparent border-border px-4 py-3 border-top">
        <h3 
          className="text-sm font-semibold text-foreground d-flex align-items-center gap-2 mb-0"
          style={{ fontSize: '1rem', color: "#2B2B2B" }}
        >
          Chat da Equipe
          <MessageSquare size={16} />
        </h3>
      </div>

      <Card.Body className="flex-grow-1 d-flex flex-column p-0 overflow-hidden">
        <div ref={containerRef} className="overflow-auto px-4" style={{ height: '200px' }}>
          <ListGroup variant="flush" style={{ fontSize: '0.8rem', color: "#2B2B2B" }}>
            {messages.map((msg, index) => (
              <ListGroup.Item key={index} className="border-0 px-0 py-1">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="fw-semibold" style={{ color: '#198754' }}>
                    {msg.userName ?? msg.userId}
                  </span>
                  <span className="text-muted small">
                    {new Date(msg.time * 1000).toLocaleTimeString()}
                  </span>
                </div>
                <p className="mb-0 text-foreground">{msg.text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <Form onSubmit={handleSendMessage}>
          <Form.Group
            className="d-flex gap-2 px-4" controlId="chatMessage"
            style={{ marginBottom: '0.8rem' }}
          >
            <Form.Control
              type="text"
              placeholder="Digite uma mensagem..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              style={{ fontSize: '0.8rem' }}
            />
            <Button type="submit" size="sm" variant="success">
              <Send size={16} />
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}