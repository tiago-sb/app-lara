import { MainLayout } from "../components/mainLayout/MainLayout";
import { Init } from "../components/contact/Init";
import { FormContact } from "../components/contact/FormContact";

export const Contact = () => {
  return (
    <MainLayout>
      <Init />
      {/* ── Conteúdo ── */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5 justify-content-center">
            <FormContact /> 
            
          </div>
        </div>
      </section>
    </MainLayout>
  );
};