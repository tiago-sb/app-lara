import Esp32 from "../../public/components/esp32.jpg"
import Oled from "../../public/components/oled.jpg"
import PonteH from "../../public/components/ponte h.jpg"
import Bateria from "../../public/components/bateria.jpg"
import Giroscópio from "../../public/components/giroscópio.jpg"
import N20 from "../../public/components/motor.jpg"
import BMS from "../../public/components/bms.jpg"
import FonteDC from "../../public/components/fonte dc.jpg"
import StepDown from "../../public/components/step down.jpg"
import EmissorReceptor from "../../public/components/receptor transmissor.png"
import TCRT5000 from "../../public/components/senso linha.jpg"
import RodaBoba from "../../public/components/roda boba.jpg"
import Pneu from "../../public/components/roda borracha.jpg"

export const componentsList = [
  { 
    name: "Microcontrolador ESP32", 
    quantity: "1 un.", 
    image: Esp32 
  },
  { 
    name: "Display OLED 128x64", 
    quantity: "1 un.", 
    image: Oled
  },
  { name: 
    "Ponte H L298N Drive Motor", 
    quantity: "1 un.", 
    image: PonteH
  },
  { 
    name: "Bateria 3,7v 18650", 
    quantity: "2 un.", 
    image: Bateria
  },
  { 
    name: "Acelerômetro e Giroscópio MPU-6050", 
    quantity: "1 un.", 
    image: Giroscópio
  },
  { 
    name: "Micro Motores DC N20", 
    quantity: "2 un.", 
    image: N20
  },
  { 
    name: "Carregador 2S Lipo 7A BMS", 
    quantity: "1 un.", 
    image: BMS 
  },
  { 
    name: "Fonte DC Chaveada 12v 3A P4", 
    quantity: "1 un.", 
    image: FonteDC
  },
  { 
    name: "Regulador Step Down Buck 3A", 
    quantity: "1 un.", 
    image: StepDown
  },
  { 
    name: "Transmissor/Receptor Energia 12v", 
    quantity: "1 kit", 
    image: EmissorReceptor 
  },
  { 
    name: "Sensor de Linha TCRT5000", 
    quantity: "2 un.", 
    image: TCRT5000
  },
  { 
    name: "Roda Boba Robot Caster Esfera", 
    quantity: "1 un.", 
    image: RodaBoba
  },
  { 
    name: "Roda com Pneu de Borracha 43mm", 
    quantity: "2 un.", 
    image: Pneu
  },
];