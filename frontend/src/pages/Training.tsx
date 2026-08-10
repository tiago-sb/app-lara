import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useState } from "react";
import { AnalysisPanel } from "../components/experiment/analysis/AnalysisPanel";
import { DevelopmentPanel } from "../components/experiment/development/DevelopmentPanel";
import { TrainingSettingsProvider } from "../hooks/useTrainingSettings";
import { TrainingHeader } from "../components/training/header/TrainingHeader";

export const Training = () => {
  const [activeSection, setActiveSection] = useState<'desenvolvimento' | 'analise'>('desenvolvimento');
  const experimentoId = "teste_lara_training";

  return (
    <TrainingSettingsProvider>
      <Container fluid className="min-vh-100 bg-foreground d-flex flex-column px-0">
        <TrainingHeader />
        
        {/* Main IDE Layout */}
        <Row className="flex-grow-1 g-0 overflow-hidden">
          {/* Left Panel - Code Editor */}
          <Col className="flex-grow-1 d-flex flex-column min-vw-0">
            <Card.Body className="flex-grow-1 p-0 overflow-hidden">
              <div className="h-100 d-flex flex-column">
                {/* SELETOR DE SEÇÃO */}
                <div className="border-bottom border-border px-3 py-2 bg-card">
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
                </div>
                {
                  activeSection === 'analise'
                    ? <AnalysisPanel experimentoId={experimentoId} editorHeight="80vh" />
                    : <DevelopmentPanel experimentoId={experimentoId} showSubmitButton={false} editorHeight="80vh" />
                }
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </TrainingSettingsProvider>
  )
}