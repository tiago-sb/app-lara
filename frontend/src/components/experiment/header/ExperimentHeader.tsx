import { ArrowLeft, Settings } from "lucide-react"
import { Button, Stack, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import logoLara from "/public/logo_lara.png"
import { useState } from "react"
import type { SettingsConfig } from "./types"
import { ExperimentHeaderModal } from "./ExperimentHeaderModal"
import { useExperimentSettings } from "../../../hooks/useExperimentSettings"

export const ExperimentHeader = () => {
  const { saveSettings } = useExperimentSettings()
  const [language, setLanguage] = useState<string>("cpp")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [leaving, setLeaving] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSave = (config: SettingsConfig) => {
    saveSettings(config)
  }

  const handleLeave = async () => {
    const reservationId = localStorage.getItem("active_reservation_id")

    if (!reservationId) {
      navigate("/dashboard")
      return
    }

    setLeaving(true)

    try {
      const token = localStorage.getItem("access_token")

      const res = await fetch(`/sistema-api/reservation/${reservationId}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ finished: true }),
      })

      if (!res.ok) throw new Error("Erro ao encerrar sessão.")

      localStorage.removeItem("active_reservation_id")
    } catch (err) {
      console.error(err)
      // Mesmo com erro, redireciona — não prende o usuário na tela
    } finally {
      setLeaving(false)
      navigate("/dashboard")
    }
  }

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

            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setShowModal(true)}
            >
              <Settings size={18} />
            </Button>
          </Stack>
        </Stack>
      </header>

      <ExperimentHeaderModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </>
  )
}