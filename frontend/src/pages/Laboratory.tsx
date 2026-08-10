import { Init } from "../components/laboratory/Init"
import { GridLaboratory } from "../components/laboratory/GridLaboratory"
import { MainLayout } from "../components/mainLayout/MainLayout"
import { TitleLaboratory } from "../components/laboratory/TitleLaboratory"

export const Laboratory = () => {
  return (
    <MainLayout>
      <Init />
      
      <TitleLaboratory title="Remoto" />
      <GridLaboratory type="physical" />
      
      <TitleLaboratory title="Virtual" />
      <GridLaboratory type="virtual" />
    </MainLayout>
  )
}