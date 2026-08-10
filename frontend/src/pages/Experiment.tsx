import { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { ExperimentHeader } from '../components/experiment/header/ExperimentHeader'
import { DevelopmentPanel } from '../components/experiment/development/DevelopmentPanel'
import { AnalysisPanel } from '../components/experiment/analysis/AnalysisPanel'
import { ChatExperiment } from '../components/experiment/chat/ChatExperiment'
import { ParticipantsExperiment } from '../components/experiment/partipants/ParticipantsExperiment'
import { CameraExperiment } from '../components/experiment/camera/CameraExperiment'
import { ExperimentSettingsProvider } from '../hooks/useExperimentSettings'
import { CopyButton } from '../components/experiment/CopyButton'
import { useUser } from '../services/useUser'

const Experiment = () => {
  // const [activeSection, setActiveSection] = useState<'desenvolvimento' | 'analise'>('desenvolvimento');
  // const experimentoId = "teste_lara";

  const [activeSection, setActiveSection] = useState<'desenvolvimento' | 'analise'>('desenvolvimento');
  const { user } = useUser();
  const userName = user?.name ?? user?.username ?? "Anônimo"
  
  // lê o padId salvo pelo Dashboard
  const experimentoId = localStorage.getItem("active_pad_id") ?? "lara-fallback";

  return (
    <ExperimentSettingsProvider>
      <Container fluid className="min-vh-100 bg-foreground d-flex flex-column px-0">
        {/* Main IDE Layout */}
        <Row className="flex-grow-1 g-0 overflow-hidden">
          <ExperimentHeader />

          {/* Left Panel - Code Editor */}
          <Col className="flex-grow-1 d-flex flex-column min-vw-0">
            <Card.Body className="flex-grow-1 p-0 overflow-hidden">
              <div className="h-100 d-flex flex-column">
                {/* SELETOR DE SEÇÃO */}
                <div className="border-bottom border-border px-3 py-2 bg-card d-flex align-items-center justify-content-between">
                  <div
                    className="d-inline-flex p-1 rounded-pill border"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderColor: "#d1d5db",
                    }}
                  >
                    <Button
                      size="sm"
                      variant={activeSection === 'desenvolvimento' ? 'dark' : 'light'}
                      className="rounded-pill border-0 px-3 fw-medium"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.8rem',
                        color: activeSection === 'desenvolvimento' ? '#fff' : '#2B2B2B',
                        backgroundColor: activeSection === 'desenvolvimento' ? '#198754' : 'transparent',
                        boxShadow: activeSection === 'desenvolvimento' ? '0 2px 6px rgba(25, 135, 84, 0.25)' : 'none'
                      }}
                      onClick={() => setActiveSection('desenvolvimento')}
                    >
                      Desenvolvimento
                    </Button>

                    <Button
                      size="sm"
                      variant={activeSection === 'analise' ? 'dark' : 'light'}
                      className="rounded-pill border-0 px-3 fw-medium"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.8rem',
                        color: activeSection === 'analise' ? '#fff' : '#2B2B2B',
                        backgroundColor: activeSection === 'analise' ? '#198754' : 'transparent',
                        boxShadow: activeSection === 'analise' ? '0 2px 6px rgba(25, 135, 84, 0.25)' : 'none',
                      }}
                      onClick={() => setActiveSection('analise')}
                    >
                      Análise
                    </Button>
                  </div>

                  {/* ID da sessão */}
                  <span className="d-flex align-items-center gap-2">
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.8rem',
                        color: '#adb5bd',
                      }}
                    >
                      Código da Sessão
                    </span>
                    <code
                      style={{
                        backgroundColor: '#f1f3f5',
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        fontSize: '0.85rem',
                        color: '#495057',
                        letterSpacing: '0.05em',
                        fontFamily: 'monospace',
                      }}
                    >
                      {experimentoId}
                    </code>
                    <CopyButton text={experimentoId} />
                  </span>
                </div>
                {
                  activeSection === 'analise'
                    ? <AnalysisPanel experimentoId={experimentoId} userName={userName} />
                    : <DevelopmentPanel experimentoId={experimentoId} editorHeight="100%" userName={userName} />
                }
              </div>
            </Card.Body>
          </Col>

          {/* Right Panel - Camera, Video & Chat */}
          <Col xs={12} lg={4} className="border-start border-border d-flex flex-column bg-card">
            <CameraExperiment />
            <ParticipantsExperiment experimentoId={experimentoId} />
            <ChatExperiment experimentoId={experimentoId} authorId={userName} />
          </Col>
        </Row>
      </Container>
    </ExperimentSettingsProvider>
  );
};

export default Experiment;
