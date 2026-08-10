import { Crown, Users } from "lucide-react"
import { Card, ListGroup } from "react-bootstrap"
import { useEtherpadUsers } from "../../../hooks/useEtherpadUsers"

export const ParticipantsExperiment = ({ experimentoId }: { experimentoId: string }) => {
  const padId = `${experimentoId}-codigo`;
  const users = useEtherpadUsers(padId);

  return (
    <Card className="border-0 border-top border-bottom border-border rounded-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="d-flex align-items-center justify-content-between px-4 pt-2 pb-1 border-border">
        <h3
          className="h6 mb-0 d-flex align-items-center gap-2"
          style={{ fontSize: '1rem', color: "#2B2B2B" }}
        >
          Participantes ({users.length}/5)
          <Users size={16} color="#2B2B2B" />
        </h3>
      </div>

      <Card.Body className="px-4 pt-1 pb-3" style={{ color: "#2B2B2B" }}>
        <ListGroup variant="flush">
          {users.map((user, index) => (
            <ListGroup.Item
              key={user.id}
              className="d-flex align-items-center gap-2"
              style={{ fontSize: '0.8rem' }}
            >
              <span
                className="d-inline-block rounded-circle"
                style={{ width: 8, height: 8, backgroundColor: user.colorId }}
              />
              <span>{user.name || user.id}</span>
              {index === 0 && <Crown size={14} className="text-warning" />}
            </ListGroup.Item>
          ))}
          {users.length === 0 && (
            <ListGroup.Item className="text-muted border-0 px-0" style={{ fontSize: '0.8rem' }}>
              Nenhum participante ativo
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}