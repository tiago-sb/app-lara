import { ArrowLeft } from "lucide-react"
import { Button, Stack, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import logoLara from "/public/logo_lara.png"
import { useState } from "react"
import type { SettingsConfig } from "./types"
import { TrainingHeaderModal } from "./TrainingHeaderModal"
import { useExperimentSettings } from "../../../hooks/useExperimentSettings"

export const TrainingHeader = () => {
  const { saveSettings } = useExperimentSettings()
  const [language, setLanguage] = useState<string>("cpp")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [leaving] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSave = (config: SettingsConfig) => {
    saveSettings(config)
  }

  const handleLeave = async () => navigate("/dashboard")

  return (
    <>
      <header className="bg-white border-bottom py-3 px-3 sticky-top" style={{ zIndex: 1030 }}>
        <Stack direction="horizontal" gap={3} className="align-items-center justify-content-between">

          <Stack direction="horizontal" gap={3} className="align-items-center">
            <Button
              variant="outline-secondary"
              size="sm"
              className="d-inline-flex align-items-center justify-content-center"
              onClick={handleLeave}
              disabled={leaving}
            >
              <ArrowLeft size={20} />
            </Button>

            <img src={logoLara} alt="LARA" style={{ width: 80 }} />

            <div className="h-6 w-px bg-border" />

            <span style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', color: '#2B2B2B' }}>
              Sessão: Experimento de Robótica
            </span>
          </Stack>

          <Stack direction="horizontal" gap={2} className="align-items-center">
            <Form.Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              size="sm"
              style={{ width: 160, fontSize: '0.8rem' }}
            >
              <option value="cpp">C++</option>
            </Form.Select>
          </Stack>
        </Stack>
      </header>

      <TrainingHeaderModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </>
  )
}