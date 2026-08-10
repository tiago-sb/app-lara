import type { Laboratory } from "../types/laboratory/TypeLaboratory";
import L1R2 from "../../public/lara_robo.png"
import LMR2 from "../../public/lara_robo_02.png"
import Desenvolvimento from "../../public/desenvolvimento.png"

export const laboratories: Laboratory[] = [
  {
    id: 1,
    title: "L1R2",
    description:
      "O L1R2 foi o primeiro experimento remoto do LARA. É um robô móvel baseado nas competições de robótica da OBR - Olimpíada Brasileira de Robótica, e na RoboCup Junior Rescue A. Criado para seguir linha e desviar de obstáculos, também agrega outras funções, aumentando a escalabilidade de aplicações do experimento.",
    type: "physical",
    image: L1R2,
  },
  {
    id: 2,
    title: "LMR2",
    description:
      "O LMR2 é um robô remoto multilinguagem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "physical",
    image: LMR2,
  },
  {
    id: 3,
    title: "Casinha",
    description:
      "A casinha é um experimento de domótica no qual diversos objetos do ambiente são automatizados para que os alunos possam controlá-los remotamente, como portas, portões, luzes, eletrodomésticos e cerca elétrica.",
    type: "physical",
    image: Desenvolvimento,
  },
  {
    id: 4,
    title: "L1R2 Virtual",
    description:
      "Versão virtual do L1R2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "virtual",
    image: Desenvolvimento,
  },
];