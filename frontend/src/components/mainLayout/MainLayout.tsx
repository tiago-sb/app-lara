import type { ReactNode } from "react";
import { HeaderPage } from "../header/HeaderPage";
import { FooterPage } from "../footer/FooterPage";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPage />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <FooterPage />
    </div>
  );
};